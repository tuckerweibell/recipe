import {useState, useMemo} from 'react';
import {useUniqueId} from '../../utils/hooks';

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

/**
 * Handles positioning overlays like popovers and menus relative to a trigger
 * element, and updating the position when the window resizes.
 */
export const useOverlayPosition = options => ({
  ...options,
  modifiers: [
    {
      name: 'matchWidth',
      enabled: true,
      fn: ({state}) => {
        // eslint-disable-next-line no-param-reassign
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
    {name: 'offset', options: {offset: [0, 5]}},
  ],
});

const collect = options => {
  const grouped = new Map();
  const keyMap = new Map();

  if (!options.some(o => o.group)) {
    const items = options.map((item, index) => {
      keyMap.set(index, {...item, key: index});
      return keyMap.get(index);
    });
    return {items, index: keyMap};
  }

  // sort into groups
  options.forEach(item => {
    const {group} = item;
    const values = grouped.get(group) || [];
    values.push({...item});
    grouped.set(group, values);
  });

  let i = 0;
  // now assign index
  [...grouped].forEach(([, items]) => {
    items.forEach(item => {
      keyMap.set(i, item);
      Object.assign(item, {key: i});
      i++;
    });
  });

  return {items: [...grouped], index: keyMap};
};

const keyboardDelegate = collection => {
  const count = collection.index.size;
  const getKeyAbove = k => (k > 0 ? k - 1 : null);
  const getKeyBelow = k => (k < count - 1 ? k + 1 : null);
  const getFirstKey = () => 0;
  const getLastKey = () => count - 1;
  const getKeyForSearch = search => {
    const i = Array.from<any>(collection.index.values()).findIndex(item => item.label === search);
    return i < 0 ? null : i;
  };

  return {
    getKeyAbove,
    getKeyBelow,
    getFirstKey,
    getLastKey,
    getKeyForSearch,
  };
};

/**
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */
export function useListState(props) {
  const {options, value} = props;
  const collection = collect(options);

  const selectedKey = Array.from<any>(collection.index.values()).findIndex(
    item => item.value === value
  );

  const delegate = useMemo(() => props.keyboardDelegate || keyboardDelegate(collection), [
    props.keyboardDelegate,
    collection,
  ]);

  const [focusedKey, setFocusedKey] = useState(selectedKey);
  const clearFocus = () => setFocusedKey(null);

  return {
    collection,
    keyboardDelegate: delegate,
    selectionManager: {
      focusedKey,
      clearFocus,
      setFocusedKey,
      selectedKey,
      replaceSelection: props.onSelectionChange,
    },
  };
}

export function useSelectableCollection(options) {
  const {selectionManager: manager, keyboardDelegate: delegate} = options;

  const arrowDown = () =>
    manager.setFocusedKey(
      manager.focusedKey === null
        ? delegate.getFirstKey()
        : delegate.getKeyBelow(manager.focusedKey) ?? delegate.getFirstKey()
    );
  const arrowUp = () =>
    manager.setFocusedKey(
      manager.focusedKey === null
        ? delegate.getLastKey()
        : delegate.getKeyAbove(manager.focusedKey) ?? delegate.getLastKey()
    );

  const keyMap = {
    Escape: manager.clearFocus,
    ArrowUp: arrowUp,
    ArrowDown: arrowDown,
  };

  const onKeyDown = e => {
    const action = keyMap[e.key];

    if (e.defaultPrevented || !action) return;

    e.preventDefault();
    action();
  };

  const handlers = {onKeyDown};

  return {collectionProps: handlers};
}
