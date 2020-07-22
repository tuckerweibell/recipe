import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption} from '../../utils/hooks';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';
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

  const comboboxState = useComboboxState();
  const {hide, visible} = comboboxState;

  const {ref: containerRef, optionsRef, ...combobox} = useCombobox(comboboxState, {
    'aria-haspopup': 'listbox',
    className: props.className,
    disabled: props.disabled,
    error: props.error,
    touched: props.touched,
    opened: comboboxState.visible,
  });

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
      ' ': visible && select,
      Enter: visible && select,
    };

    const action = keyMap[key];
    if (action) {
      e.preventDefault();
      action(e);
    }
  };

  useScrollIntoView({containerRef: optionsRef, targetRef: activeOptionRef}, [
    activeOption,
    visible,
  ]);

  const comboboxInput = useComboboxInput(comboboxState, {
    'aria-autocomplete': 'list',
    'aria-labelledby': ariaLabelledBy,
    value: selected ? selected.label : '',
    'aria-activedescendant': !activeOptionRef.current ? '' : activeOptionRef.current.id,
    onKeyDown: handleKeyDown,
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    id: props.id,
    name: props.name,
    disabled: props.disabled,
    placeholder: props.placeholder,
    error: props.error,
    touched: props.touched,
    readOnly: true,
  });

  const changeEvent = useCallback(
    optionValue => {
      const event = new Event('change');
      containerRef.current.value = optionValue;
      containerRef.current.dispatchEvent(event);
      return event;
    },
    [containerRef]
  );

  function selectItem(optionValue) {
    onChange(changeEvent(optionValue));
    timeout.current = setTimeout(hide, 100);
  }

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  const move = useCallback(
    option => {
      setActiveOption(option);

      if (visible) return;

      onChange(changeEvent(option.value));
    },
    [visible, onChange, changeEvent]
  );

  useJumpToOption(comboboxInput.ref, {options, move});

  const overlayPosition = useOverlayPosition({
    targetRef: comboboxInput.ref,
    placement: 'bottom-start',
  });

  const listbox = (
    <EzListBox
      ref={optionsRef as any}
      id={comboboxFlyout.id}
      aria-labelledby={ariaLabelledBy}
      onClick={() => comboboxInput.ref.current.focus()}
      items={options}
      onSelectionChange={selectItem}
      focusProps={listboxProps}
    />
  );

  return (
    <Container ref={containerRef} hasError={props.touched && props.error} opened={visible}>
      <Combobox {...combobox}>
        <EzTextInput {...comboboxInput} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={visible} />
        </InsetIcon>
      </Combobox>
      {visible && <EzPopover {...overlayPosition}>{listbox}</EzPopover>}
    </Container>
  );
};

export default EzSelect;
