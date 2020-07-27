import {useState} from 'react';
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

  if (!options.some(o => o.group)) return options;

  options.forEach(item => {
    const {group} = item;
    const values = grouped.get(group) || [];
    values.push(item);
    grouped.set(group, values);
  });

  return [...grouped];
};

/**
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */
export function useListState(props) {
  const {options, value} = props;
  const selected = options.find(o => o.value === value);
  const [activeOption, setActiveOption] = useState(selected);
  const collection = collect(options);
  const setActiveIndex = i => setActiveOption(i === -1 ? null : options[i]);

  const activeIndex = options.indexOf(activeOption);
  const focusedKey = activeIndex === -1 ? null : activeIndex;
  const clearFocus = () => setActiveIndex(-1);
  const setFocusedKey = k => setActiveIndex(k);
  const getKeyAbove = k => (k > 0 ? k - 1 : null);
  const getKeyBelow = k => (k < options.length - 1 ? k + 1 : null);
  const getFirstKey = () => 0;
  const getLastKey = () => options.length - 1;

  return {
    collection,
    selectionManager: {
      focusedKey,
      clearFocus,
      setFocusedKey,
      getKeyAbove,
      getKeyBelow,
      getFirstKey,
      getLastKey,
      // TODO rework these
      selected,
      activeOption,
      setActiveOption,
    },
  };
}
