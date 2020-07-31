import {useState, Key} from 'react';
import {createCollection, Collection} from './Collection';
import {SelectionState} from './EzField.types';

export interface ListState {
  /** A collection of items in the list. */
  collection: Collection;
  /** A selection manager to read and update selection state. */
  selectionManager: SelectionState;
}

/**
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */
export function useListState(props): ListState {
  const [focusedKey, setFocusedKey] = useState<Key>(null);
  const collection = createCollection(props.options);
  const selectedIndex: Key = Array.from<any>(collection.index.values()).findIndex(
    item => item.value === props.value
  );

  return {
    collection,
    selectionManager: {
      focusedKey,
      setFocusedKey,
      selectedKey: selectedIndex < 0 ? null : selectedIndex,
      replaceSelection: props.onSelectionChange,
    },
  };
}
