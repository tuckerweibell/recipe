import {useRef, useState} from 'react';
import {useDisclosureState, useDisclosureContent} from 'reakit/Disclosure';
import {
  useAllCallbacks,
  useOnClickOutside,
  useEventListenerOutside,
  useUniqueId,
} from '../../utils/hooks';

export const useComboboxState = () => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const hidden = useDisclosureState({unstable_isMounted: true});
  return {
    ...hidden,
  };
};

export const useCombobox = (options, htmlProps) => {
  const ref = useRef<HTMLElement>();
  const optionsRef = useRef<HTMLElement>();

  useOnClickOutside(options.hide, [ref, optionsRef]);
  useEventListenerOutside(options.hide, 'focusin', [ref, optionsRef]);

  return {
    role: 'combobox',
    ref,
    optionsRef,
    'aria-expanded': Boolean(options.visible),
    'aria-owns': options.unstable_hiddenId,
    ...htmlProps,
  };
};

export const useComboboxInput = (options, htmlProps) => {
  const ref = useRef<HTMLInputElement>();

  const onKeyDown = e => {
    const keyMap = {
      Escape: options.hide,
      ArrowUp: !options.visible && options.show,
      ArrowDown: !options.visible && options.show,
      ' ': !options.visible && options.show,
    };
    const action = keyMap[e.key];
    if (action) {
      e.preventDefault();
      action(e);
    }
  };

  return {
    type: 'text',
    ref,
    'aria-controls': options.unstable_hiddenId,
    ...htmlProps,
    onMouseDown: useAllCallbacks(options.toggle, htmlProps.onMouseDown),
    onKeyDown: useAllCallbacks(onKeyDown, htmlProps.onKeyDown),
  };
};

export const useComboboxFlyout = (options, htmlProps = {}) => {
  useDisclosureContent(options, htmlProps);
  return {
    id: options.unstable_hiddenId,
  };
};

export const useMenuTrigger = (state: OverlayTriggerState) => {
  const menuTriggerId = useUniqueId();
  const {triggerProps, overlayProps} = useOverlayTrigger(state);

  const keyMap = {
    Escape: state.close,
    ArrowUp: state.open,
    ArrowDown: state.open,
    ' ': state.open,
  };

  return {
    menuTriggerProps: {
      ...triggerProps,
      id: menuTriggerId,
      onMouseDown() {
        state.toggle();
      },
      onKeyDown(e) {
        const action = keyMap[e.key];
        if (e.defaultPrevented || !action) return;
        if (!state.isOpen) e.preventDefault();
        action(e);
      },
    },
    menuProps: {
      ...overlayProps,
      'aria-labelledby': menuTriggerId,
    },
  };
};

const useOverlayTrigger = (state: OverlayTriggerState) => {
  const overlayId = useUniqueId();
  const {isOpen} = state;

  return {
    triggerProps: {
      'aria-expanded': isOpen,
      'aria-owns': isOpen ? overlayId : null,
    },
    overlayProps: {
      id: overlayId,
    },
  };
};

interface OverlayTriggerState {
  /** Whether the overlay is currently open. */
  readonly isOpen: boolean;
  /** Opens the overlay. */
  open(): void;
  /** Closes the overlay. */
  close(): void;
  /** Toggles the overlay's visibility. */
  toggle(): void;
}

/**
 * Manages state for a menu trigger. Tracks whether the menu is currently open,
 * and controls which item will receive focus when it opens.
 */
export const useMenuTriggerState = (): OverlayTriggerState => {
  return useOverlayTriggerState();
};

const useOverlayTriggerState = (): OverlayTriggerState => {
  const [isOpen, setOpen] = useState(false);

  return {
    isOpen,
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
    toggle() {
      setOpen(!isOpen);
    },
  };
};
