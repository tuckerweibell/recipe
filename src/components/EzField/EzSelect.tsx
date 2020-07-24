import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useAllCallbacks} from '../../utils/hooks';
import {useMenuTriggerState, useMenuTrigger, useOverlayPosition} from './EzCombobox';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';

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

const EzSelect = props => {
  const {options, value, onChange} = props;
  const ariaLabelledBy = props['aria-labelledby'];

  const timeout = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const activeOptionRef = useRef(selectedOption);
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

  const setActiveOptionRef = option => {
    activeOptionRef.current = option;
    setSelectedOption(option);
  };

  const listboxProps = {
    activeOption,
    activeOptionRef: setActiveOptionRef,
    setActiveOption,
    selected,
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
      items={collection}
      onSelectionChange={selectItem}
      focusProps={listboxProps}
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
