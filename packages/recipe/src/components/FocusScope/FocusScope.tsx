import React, {ReactNode, RefObject, useEffect, useRef} from 'react';

// file mostly cribbed from https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/focus/src/FocusScope.tsx
// but adapted to work with iframed documents
const useLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : /* istanbul ignore next */ () => {};

type FocusScopeProps = {
  /** The contents of the focus scope. */
  children: ReactNode;

  /**
   * Whether to contain focus inside the scope, so users cannot
   * move focus outside, for example in a modal dialog.
   */
  contain?: boolean;

  /**
   * Whether to restore focus back to the element that was focused
   * when the focus scope mounted, after the focus scope unmounts.
   */
  restoreFocus?: boolean;

  /** Whether to auto focus the first focusable element in the focus scope on mount. */
  autoFocus?: boolean;
};

let activeScope: RefObject<HTMLElement[]> = null;
const scopes: Set<RefObject<HTMLElement[]>> = new Set();

// This is a hacky DOM-based implementation of a FocusScope until this RFC lands in React:
// https://github.com/reactjs/rfcs/pull/109
// For now, it relies on the DOM tree order rather than the React tree order, and is probably
// less optimized for performance.

/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */
export default React.forwardRef(function FocusScope(props: FocusScopeProps, ref) {
  const {children, contain, restoreFocus, autoFocus} = props;
  const startRef = useRef<HTMLSpanElement>();
  const endRef = useRef<HTMLSpanElement>();
  const scopeRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    // Find all rendered nodes between the sentinels and add them to the scope.
    let node = startRef.current.nextSibling;
    const nodes = [];
    while (node && node !== endRef.current) {
      nodes.push(node);
      node = node.nextSibling;
    }

    scopeRef.current = nodes;
    scopes.add(scopeRef);
    return () => {
      scopes.delete(scopeRef);
    };
  }, [children]);

  useFocusContainment(scopeRef, contain);
  useRestoreFocus(scopeRef, restoreFocus, contain);
  useAutoFocus(scopeRef, autoFocus);

  React.useImperativeHandle(ref, () => ({
    focusFirstInScope: () => focusFirstInScope(scopeRef.current),
  }));

  return (
    <>
      <span hidden ref={startRef} />
      {children}
      <span hidden ref={endRef} />
    </>
  );
});

const focusableElements = [
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'a[href]',
  'area[href]',
  'summary',
  'iframe',
  'object',
  'embed',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]',
];

focusableElements.push('[tabindex]:not([tabindex="-1"])');
const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(':not([tabindex="-1"]),');

function getFocusableElementsInScope(scope: HTMLElement[]): HTMLElement[] {
  const res = [];
  const selector = TABBABLE_ELEMENT_SELECTOR;

  scope.forEach(node => {
    if (node.matches(selector)) res.push(node);
    res.push(...Array.from(node.querySelectorAll(selector)));
  });

  return res;
}

function useFocusContainment(scopeRef: RefObject<HTMLElement[]>, contain: boolean) {
  const focusedNode = useRef<HTMLElement>();

  const raf = useRef(null);
  useEffect(() => {
    /* eslint-disable consistent-return */
    const scope = scopeRef.current;
    if (!contain) return;

    const document = getDocument(scope[0]);

    // Handle the Tab key to contain focus within the scope
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || e.defaultPrevented) return;

      const focusedElement = document.activeElement as HTMLElement;
      if (!isElementInScope(focusedElement, scope)) return;

      const elements = getFocusableElementsInScope(scope);
      const position = elements.indexOf(focusedElement);
      const lastPosition = elements.length - 1;
      let nextElement = null;

      if (e.shiftKey) nextElement = elements[position <= 0 ? lastPosition : position - 1];
      else nextElement = elements[position === lastPosition ? 0 : position + 1];

      e.preventDefault();
      focusElement(nextElement);
    };

    const onFocus = e => {
      const isInAnyScope = isElementInAnyScope(e.target, scopes);
      if (!isInAnyScope) focusedNode.current?.focus();
      else {
        e.stopPropagation();
        activeScope = scopeRef;
        focusedNode.current = e.target;
      }
    };

    const onBlur = e => {
      // bail if the blur event was triggered from outside the current document
      if (!e.relatedTarget) return;

      const isInAnyScope = isElementInAnyScope(e.relatedTarget, scopes);

      if (!isInAnyScope) {
        activeScope = scopeRef;
        focusedNode.current = e.target;
        // Firefox doesn't shift focus back to the Dialog properly without this
        raf.current = requestAnimationFrame(() => {
          focusedNode.current.focus();
        });
      }
    };

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('focusin', onFocus, false);
    scope.forEach(element => element.addEventListener('focusin', onFocus, false));
    scope.forEach(element => element.addEventListener('focusout', onBlur, false));
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
      document.removeEventListener('focusin', onFocus, false);
      scope.forEach(element => element.removeEventListener('focusin', onFocus, false));
      scope.forEach(element => element.removeEventListener('focusout', onBlur, false));
    };
  }, [scopeRef, contain]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => cancelAnimationFrame(raf.current);
  }, []);
}

function isElementInAnyScope(element: Element, _scopes: Set<RefObject<HTMLElement[]>>) {
  return Array.from(_scopes.values()).some(scope => isElementInScope(element, scope.current));
}

function isElementInScope(element: Element, scope: HTMLElement[]) {
  return scope.some(node => node.contains(element));
}

function focusElement(element: HTMLElement | null) {
  try {
    element?.focus();
  } catch (err) {
    // ignore
  }
}

/**
 * Returns `element.ownerDocument || document`.
 */
function getDocument(element?: Element | Document | null): Document {
  return element ? element.ownerDocument : document;
}

function focusFirstInScope(scope: HTMLElement[]) {
  const elements = getFocusableElementsInScope(scope);
  focusElement(elements[0]);
}

function useAutoFocus(scopeRef: RefObject<HTMLElement[]>, autoFocus: boolean) {
  useEffect(() => {
    if (!autoFocus) return;
    activeScope = scopeRef;
    const document = getDocument(activeScope.current[0]);
    if (isElementInScope(document.activeElement, activeScope.current)) return;
    focusFirstInScope(scopeRef.current);
  }, [scopeRef, autoFocus]);
}

function useRestoreFocus(
  scopeRef: RefObject<HTMLElement[]>,
  restoreFocus: boolean,
  contain: boolean
) {
  // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    const document = getDocument(scope[0]);
    const nodeToRestore = document.activeElement as HTMLElement;

    // Handle the Tab key so that tabbing out of the scope goes to the next element
    // after the node that had focus when the scope mounted. This is important when
    // using portals for overlays, so that focus goes to the expected element when
    // tabbing out of the overlay.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;

      const focusedElement = document.activeElement as HTMLElement;
      if (!isElementInScope(focusedElement, scope)) return;

      // Create a DOM tree walker that matches all tabbable elements
      const walker = getFocusableTreeWalker(document.body);

      // Find the next tabbable element after the currently focused element
      walker.currentNode = focusedElement;
      let nextElement = (e.shiftKey ? walker.previousNode() : walker.nextNode()) as HTMLElement;

      // If there is no next element, or it is outside the current scope, move focus to the
      // next element after the node to restore to instead.
      if ((!nextElement || !isElementInScope(nextElement, scope)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;

        // Skip over elements within the scope, in case the scope immediately follows the node to restore.
        do nextElement = (e.shiftKey ? walker.currentNode : walker.nextNode()) as HTMLElement;
        while (isElementInScope(nextElement, scope) && !e.shiftKey);

        e.preventDefault();
        e.stopPropagation();
        if (nextElement) nextElement.focus();
        else {
          // If there is no next element, blur the focused element to move focus to the body.
          focusedElement.blur();
        }
      }
    };

    if (!contain) document.addEventListener('keydown', onKeyDown, true);

    return () => {
      if (!contain) document.removeEventListener('keydown', onKeyDown, true);

      if (restoreFocus && nodeToRestore && isElementInScope(document.activeElement, scope)) {
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore)) focusElement(nodeToRestore);
        });
      }
    };
  }, [scopeRef, restoreFocus, contain]);
}

/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */
function getFocusableTreeWalker(root: HTMLElement) {
  const selector = TABBABLE_ELEMENT_SELECTOR;
  const walker = root.ownerDocument.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        if ((node as HTMLElement).matches(selector)) return NodeFilter.FILTER_ACCEPT;

        return NodeFilter.FILTER_SKIP;
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    false
  );

  return walker;
}
