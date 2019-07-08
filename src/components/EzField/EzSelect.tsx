import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container, Listbox} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption} from '../../utils/hooks';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';

export default ({id, options, value, onChange, ...rest}) => {
  const selectedIndex = options.findIndex(o => o.value === value);
  const selectedOption = options[selectedIndex];
  const ariaLabelledBy = rest['aria-labelledby'];

  const scrollableRef = useRef<HTMLElement>();
  const activeOptionRef = useRef<HTMLLIElement>();

  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  const comboboxState = useComboboxState();
  const {ref: clickOutsideRef, ...combobox} = useCombobox(comboboxState, {
    ...rest,
    'aria-haspopup': 'listbox',
    opened: comboboxState.visible,
  });

  const {hide, visible} = comboboxState;

  const selectItem = useCallback(
    i => e => {
      const activeItem = options[i];

      if (activeItem) {
        onChange({
          ...e,
          target: {...e.target, value: activeItem.value},
        });
      }

      hide();
    },
    [hide, onChange, options]
  );

  const move = useCallback(option => setActiveIndex(options.indexOf(option)), [
    options,
    setActiveIndex,
  ]);

  const handleKeyDown = e => {
    const key = e.key;

    const select = () => selectItem(activeIndex)(e);

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

  useEffect(() => {
    if (!visible) selectItem(activeIndex)({target: {}});
  }, [activeIndex, visible, selectItem]);

  useScrollIntoView({containerRef: scrollableRef, targetRef: activeOptionRef}, [
    activeIndex,
    visible,
  ]);

  const comboboxInput = useComboboxInput(comboboxState, {
    id,
    'aria-autocomplete': 'list',
    'aria-labelledby': ariaLabelledBy,
    value: selectedOption ? selectedOption.label : '',
    'aria-activedescendant': activeIndex === -1 ? '' : `${id}-result-item-${activeIndex}`,
    onKeyDown: handleKeyDown,
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    disabled: rest.disabled,
    placeholder: rest.placeholder,
    readOnly: true,
  });

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  useJumpToOption(comboboxInput.ref, {options, move});

  return (
    <Container innerRef={clickOutsideRef} hasError={rest.touched && rest.error} opened={visible}>
      <Combobox {...combobox}>
        <input {...comboboxInput} />
      </Combobox>
      {visible && (
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable jsx-a11y/mouse-events-have-key-events */
        /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
        <Listbox
          aria-labelledby={ariaLabelledBy}
          role="listbox"
          {...comboboxFlyout}
          innerRef={scrollableRef}
        >
          {options.map((result, i) => (
            <li
              role="option"
              aria-current={result === selectedOption || undefined}
              aria-selected={activeIndex === i}
              key={i}
              onClick={e => {
                selectItem(i)(e);
                comboboxInput.ref.current.focus();
              }}
              ref={activeIndex === i ? activeOptionRef : undefined}
              onMouseOver={() => setActiveIndex(i)}
              id={`${id}-result-item-${i}`}
            >
              {result.label}
            </li>
          ))}
        </Listbox>
      )}
    </Container>
  );
};
