import {useState, useMemo, Key} from 'react';
import {useUniqueId} from '../../utils/hooks';
import {createCollection} from './Collection';
import {SelectionState} from './EzField.types';

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

/**
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */
export function useListState(props) {
  const {options, value} = props;
  const collection = createCollection(options);

  const selectedKey: Key = Array.from<any>(collection.index.values()).findIndex(
    item => item.value === value
  );

  const [focusedKey, setFocusedKey] = useState<Key>(selectedKey);

  const manager: SelectionState = {
    focusedKey,
    setFocusedKey,
    selectedKey,
    replaceSelection: props.onSelectionChange,
  };

  return {
    collection,
    selectionManager: manager,
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
