import {useEffect, HTMLAttributes} from 'react';
import {SelectionState} from './EzField.types';
import {KeyboardDelegate} from './KeyboardDelegate';

interface SelectableCollectionOptions {
  /**
   * An interface for reading and updating multiple selection state.
   */
  selectionManager: SelectionState;
  /**
   * A delegate object that implements behavior for keyboard focus movement.
   */
  keyboardDelegate: KeyboardDelegate;
}

interface SelectableCollectionAria {
  /** Props for the collection element. */
  collectionProps: HTMLAttributes<HTMLElement>;
}

/**
 * Handles aria interactions with selectable collections.
 */
export function useSelectableCollection(
  options: SelectableCollectionOptions
): SelectableCollectionAria {
  const {selectionManager: manager, keyboardDelegate: delegate} = options;

  // focus the selected item if there is one, otherwise focus on the first item
  useEffect(() => {
    // skip if we already have focus (and the list is not empty)
    if (manager.focusedKey !== null && delegate.getFirstKey() !== null) return;
    const focusedKey = manager.selectedKey || delegate.getFirstKey();
    manager.setFocusedKey(focusedKey);
  }, [manager, delegate]);

  const arrowDown = () =>
    manager.setFocusedKey(delegate.getKeyBelow(manager.focusedKey) ?? delegate.getFirstKey());

  const arrowUp = () =>
    manager.setFocusedKey(delegate.getKeyAbove(manager.focusedKey) ?? delegate.getLastKey());

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
