import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useAllCallbacks} from '../../utils/hooks';
import {useMenuTriggerState, useMenuTrigger} from './EzCombobox';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox from './EzListBox';

const useOverlayPosition = options => ({
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

const EzSelect = props => {
  const {options, value, onChange} = props;
  const ariaLabelledBy = props['aria-labelledby'];

  const timeout = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const activeOptionRef = useRef(selectedOption);
  const selected = options.find(o => o.value === value);
  const [activeOption, setActiveOption] = useState(selected);

  const setActiveIndex = i => setActiveOption(i === -1 ? null : options[i]);
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
    const activeIndex = options.indexOf(activeOption);

    const select = () => selectItem(activeOption ? activeOption.value : null);

    const prev = activeIndex <= 0 ? options.length - 1 : activeIndex - 1;
    const next = activeIndex === -1 || activeIndex >= options.length - 1 ? 0 : activeIndex + 1;

    const keyMap = {
      Escape: () => setActiveIndex(-1),
      ArrowUp: !e.defaultPrevented && (() => setActiveIndex(prev)),
      ArrowDown: !e.defaultPrevented && (() => setActiveIndex(next)),
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
      items={options}
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
