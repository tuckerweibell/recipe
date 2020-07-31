import {useMemo} from 'react';
import {useMenuTriggerState, useMenuTrigger} from './Overlays';
import {useSelectableCollection} from './useSelectableCollection';
import {useListState} from './useListState';
import {ListKeyboardDelegate, KeyboardDelegate} from './KeyboardDelegate';
import {getItemId} from './EzListBox';
import {mergeProps} from './mergeProps';
import {useTypeSelect} from './useTypeSelect';

export function useSelectState(props) {
  const triggerState = useMenuTriggerState();

  const listState = useListState({
    ...props,
    onSelectionChange: key => {
      const item = listState.collection.index.get(key);
      props.onSelectionChange(item.value);
      triggerState.close();
    },
  });

  return {
    ...triggerState,
    ...listState,
  };
}

interface SelectAria {
  inputProps: React.HTMLAttributes<HTMLInputElement>;
  listBoxProps: React.HTMLAttributes<HTMLElement>;
  keyboardDelegate: KeyboardDelegate;
}

export function useSelect(props, state): SelectAria {
  const delegate: KeyboardDelegate = useMemo(
    () => props.keyboardDelegate || new ListKeyboardDelegate(state.collection),
    [props.keyboardDelegate, state.collection]
  );

  const {selectionManager} = state;
  const {typeSelectProps} = useTypeSelect({
    keyboardDelegate: delegate,
    selectionManager,
    onTypeSelect(key) {
      if (state.isOpen) return;
      selectionManager.replaceSelection(key);
    },
  });

  const {menuTriggerProps, menuProps} = useMenuTrigger(state);
  const {collectionProps} = useSelectableCollection({...state, keyboardDelegate: delegate});

  const inputProps = {
    onKeyDown(e) {
      if (!state.isOpen || e.defaultPrevented) return;

      collectionProps.onKeyDown(e);

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectionManager.replaceSelection(selectionManager.focusedKey);
      }
    },
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    value: state.collection.index.get(selectionManager.selectedKey)?.label || '',
    readOnly: true,
    id: props.id,
    name: props.name,
    disabled: props.disabled,
    placeholder: props.placeholder,
  };

  const focusedKeyId = getItemId(menuProps.id, selectionManager.focusedKey);

  return {
    inputProps: {
      ...mergeProps(typeSelectProps, menuTriggerProps, inputProps),
      role: 'combobox',
      'aria-controls': state.isOpen ? menuProps.id : undefined,
      'aria-autocomplete': 'list',
      'aria-activedescendant': focusedKeyId,
    },
    listBoxProps: menuProps,
    keyboardDelegate: delegate,
  };
}
