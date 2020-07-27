import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useAllCallbacks} from '../../utils/hooks';
import {useMenuTriggerState, useMenuTrigger, useOverlayPosition, useListState} from './EzCombobox';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';

const EzSelect = props => {
  const {options, onChange} = props;
  const ariaLabelledBy = props['aria-labelledby'];
  const listState = useListState(props);
  const {activeOption, setActiveOption} = listState.selectionManager;

  const timeout = useRef(null);
  const [, rerender] = useState(null);
  const activeOptionRef = useRef<HTMLElement>();

  const setActiveOptionRef = option => {
    activeOptionRef.current = option;
    rerender(option);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  const state = useMenuTriggerState();
  const {close, isOpen} = state;

  const containerRef = useRef<HTMLDivElement>();
  const listboxRef = useRef<HTMLElement>();

  const combobox = {
    'aria-haspopup': 'listbox' as 'listbox',
    className: props.className,
    disabled: props.disabled,
    error: props.error,
    touched: props.touched,
    opened: isOpen,
  };

  const handleKeyDown = e => {
    const key = e.key;
    const {
      getKeyAbove,
      getKeyBelow,
      getFirstKey,
      getLastKey,
      setFocusedKey,
      focusedKey,
      clearFocus,
    } = listState.selectionManager;

    const select = () => selectItem(activeOption ? activeOption.value : null);
    const arrowDown = () =>
      setFocusedKey(focusedKey === null ? getFirstKey() : getKeyBelow(focusedKey) ?? getFirstKey());
    const arrowUp = () =>
      setFocusedKey(focusedKey === null ? getLastKey() : getKeyAbove(focusedKey) ?? getLastKey());

    const keyMap = {
      Escape: clearFocus,
      ArrowUp: !e.defaultPrevented && arrowUp,
      ArrowDown: !e.defaultPrevented && arrowDown,
      ' ': isOpen && select,
      Enter: isOpen && select,
    };

    const action = keyMap[key];
    if (action) {
      e.preventDefault();
      action(e);
    }
  };

  useScrollIntoView({containerRef: listboxRef, targetRef: activeOptionRef}, [activeOption, isOpen]);

  const {menuTriggerProps, menuProps} = useMenuTrigger(state);

  const {selected} = listState.selectionManager;

  const inputProps = {
    ...menuTriggerProps,
    'aria-labelledby': ariaLabelledBy,
    value: selected ? selected.label : '',
    'aria-activedescendant': !activeOptionRef.current ? '' : activeOptionRef.current.id,
    onKeyDown: useAllCallbacks(handleKeyDown, menuTriggerProps.onKeyDown),
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    id: props.id,
    name: props.name,
    disabled: props.disabled,
    placeholder: props.placeholder,
    error: props.error,
    touched: props.touched,
    readOnly: true,
    ref: useRef<HTMLInputElement>(),
  };

  const changeEvent = useCallback(
    optionValue => {
      const event = new Event('change');
      // this is a hack to allow event.target.value to exist for the select onchange event
      // depsite being published from a div element
      // TODO: replace onChange with something like onSelectionChange
      (containerRef.current as any).value = optionValue;
      containerRef.current.dispatchEvent(event);
      return event;
    },
    [containerRef]
  );

  function selectItem(optionValue) {
    onChange(changeEvent(optionValue));
    timeout.current = setTimeout(close, 100);
  }

  const move = useCallback(
    option => {
      setActiveOption(option);

      if (isOpen) return;

      onChange(changeEvent(option.value));
    },
    [isOpen, onChange, changeEvent]
  );

  useJumpToOption(inputProps.ref, {options, move});

  const overlayPosition = useOverlayPosition({
    targetRef: inputProps.ref,
    placement: 'bottom-start',
  });

  const listbox = (
    <EzListBox
      {...menuProps}
      aria-labelledby={[ariaLabelledBy, props.id].join(' ')}
      ref={listboxRef as any}
      onClick={() => inputProps.ref.current.focus()}
      items={listState.collection}
      onSelectionChange={selectItem}
      focusProps={listState.selectionManager}
      activeOptionRef={setActiveOptionRef}
    />
  );

  return (
    <Container ref={containerRef} hasError={props.touched && props.error} opened={isOpen}>
      <Combobox {...combobox}>
        <EzTextInput {...inputProps} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={isOpen} />
        </InsetIcon>
      </Combobox>
      {isOpen && (
        <EzPopover shouldCloseOnBlur onClose={close} {...overlayPosition}>
          {listbox}
        </EzPopover>
      )}
    </Container>
  );
};

export default EzSelect;
