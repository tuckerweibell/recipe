import {useMemo, useState, useRef, useEffect} from 'react';
import {useMenuTriggerState, useMenuTrigger} from '../Overlays';
import {useSelectableCollection} from './useSelectableCollection';
import {useListState} from './useListState';
import {ListKeyboardDelegate, KeyboardDelegate} from './KeyboardDelegate';
import {getItemId} from './EzListBox';
import {mergeProps} from '../../utils/mergeProps';
import {filterDOMProps} from './filterDOMProps';

export function useComboBoxState(props) {
  const {onFilter, onSelectionChange} = props;
  const triggerState = useMenuTriggerState();

  const {collection, selectionManager} = useListState({
    ...props,
    onSelectionChange: key => {
      const item = collection.index.get(key);
      onSelectionChange?.(item?.value ?? null);
      setInputValue(item?.label ?? '');
      triggerState.close();
    },
  });

  const initialSelectedText = collection.index.get(selectionManager.selectedKey)?.label;
  const [inputValue, setInputValue] = useState(initialSelectedText || '');

  // callback to the user defined filter function to whittle down the results
  const lastValue = useRef('');
  useEffect(() => {
    if (onFilter && lastValue.current !== inputValue) onFilter(inputValue);
    lastValue.current = inputValue;
  }, [inputValue, onFilter]);

  return {
    ...triggerState,
    // prevent opening empty list
    isOpen: triggerState.isOpen && collection.index.size > 0,
    collection,
    selectionManager,
    inputValue,
    setInputValue,
    lastValue: lastValue.current,
  };
}

interface ComboBoxAria {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  listBoxProps: React.HTMLAttributes<HTMLElement>;
}

export function useComboBox(props, state): ComboBoxAria {
  const delegate: KeyboardDelegate = useMemo(
    () => props.keyboardDelegate || new ListKeyboardDelegate(state.collection),
    [props.keyboardDelegate, state.collection]
  );

  const {selectionManager} = state;
  const {menuTriggerProps, menuProps} = useMenuTrigger(state);
  const {collectionProps} = useSelectableCollection({...state, keyboardDelegate: delegate});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // clear the current value to ensure the text input and the value don't fall out of sync
    selectionManager.replaceSelection(null);

    state.setInputValue(e.target.value);

    // keep the listbox open
    state.open();
  };

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    onKeyDown(e) {
      if (!state.isOpen) return;

      collectionProps.onKeyDown(e);

      if (e.key === 'Enter' && selectionManager.focusedKey !== null) {
        e.preventDefault();
        selectionManager.replaceSelection(selectionManager.focusedKey);
      }
    },
    value: state.inputValue,
    onChange,
    autoComplete: 'off',
  };

  const domProps = filterDOMProps(props, {
    propNames: new Set(['id', 'name', 'disabled', 'placeholder', 'onFocus']),
  });

  const onFocusLost = e => {
    // call the user defined onBlur (if provided)
    props.onBlur?.(e);

    // clear the input if no value was selected, and the popover is closing
    if (selectionManager.selectedKey === null && props.popoverRef.current === null)
      state.setInputValue('');
  };

  const focusedKeyId = getItemId(menuProps.id, selectionManager.focusedKey);

  return {
    inputProps: {
      ...mergeProps(inputProps, menuTriggerProps, domProps, {onBlur: onFocusLost}),
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-controls': state.isOpen ? menuProps.id : undefined,
      'aria-autocomplete': 'list',
      'aria-activedescendant': state.isOpen ? focusedKeyId : undefined,
    },
    listBoxProps: menuProps,
  };
}
