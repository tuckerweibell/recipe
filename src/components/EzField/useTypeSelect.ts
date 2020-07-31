import {Key, HTMLAttributes, useRef, KeyboardEvent} from 'react';
import {KeyboardDelegate} from './KeyboardDelegate';
import {SelectionState} from './EzField.types';

interface TypeSelectOptions {
  /**
   * A delegate that returns collection item keys with respect to visual layout.
   */
  keyboardDelegate: KeyboardDelegate;
  /**
   * An interface for reading and updating multiple selection state.
   */
  selectionManager: SelectionState;
  /**
   * Called when an item is focused by typing.
   */
  onTypeSelect?: (key: Key) => void;
}

interface TypeSelectAria {
  /**
   * Props to be spread on the owner of the options.
   */
  typeSelectProps: HTMLAttributes<HTMLElement>;
}

function getStringForKey(key: string) {
  // If the key is of length 1, it is an ASCII value.
  // Otherwise, if there are no ASCII characters in the key name,
  // it is a Unicode character.
  // See https://www.w3.org/TR/uievents-key/
  return key.length === 1 || !/^[A-Z]/i.test(key) ? key : '';
}

/**
 * Handles typeahead interactions with collections.
 */
export function useTypeSelect(options: TypeSelectOptions): TypeSelectAria {
  const {keyboardDelegate, selectionManager, onTypeSelect} = options;
  const state = useRef({
    search: '',
    timeout: null,
  }).current;

  const onKeyDown = (e: KeyboardEvent) => {
    const character = getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey) return;

    // a space is added while typing
    if (state.search && character === ' ') e.preventDefault();

    state.search += character;

    const key = keyboardDelegate.getKeyForSearch(state.search);

    if (key !== null) {
      selectionManager.setFocusedKey(key);
      onTypeSelect?.(key);
    }

    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = '';
    }, 500);
  };

  return {typeSelectProps: {onKeyDown}};
}
