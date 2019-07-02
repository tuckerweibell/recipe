import React, {useState, useEffect, useRef, useCallback} from 'react';
import {useHiddenState, useHidden} from 'reakit/Hidden';
import {Combobox, Container, Listbox} from './EzSelect.styles';
import {useOnClickOutside, useScrollIntoView, useJumpToOption} from '../../utils/hooks';

const useListbox = () => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const hiddenState = useHiddenState({unstable_isMounted: true});
  const {id} = useHidden(hiddenState);
  const {visible, show, hide, toggle} = hiddenState;
  return {id, visible, show, hide, toggle};
};

export default ({id, options, value, onChange, ...rest}) => {
  const selectedIndex = options.findIndex(o => o.value === value);
  const selectedOption = options[selectedIndex];
  const ariaLabelledBy = rest['aria-labelledby'];
  const clickOutsideRef = useRef();
  const scrollableRef = useRef<HTMLElement>();
  const activeOptionRef = useRef<HTMLLIElement>();
  const inputRef = useRef<HTMLInputElement>();

  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  const {id: listboxId, visible, hide, show, toggle} = useListbox();

  useOnClickOutside(hide, [clickOutsideRef]);

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

    if (['ArrowUp', 'ArrowDown'].includes(key)) e.preventDefault();

    if (!visible && ['ArrowUp', 'ArrowDown', ' '].includes(key)) {
      show();
      return;
    }

    const select = () => selectItem(activeIndex)(e);

    const keyMap = {
      Escape: () => {
        setActiveIndex(-1);
        hide();
      },
      ArrowUp: () => setActiveIndex(activeIndex <= 0 ? options.length - 1 : activeIndex - 1),
      ArrowDown: () =>
        setActiveIndex(
          activeIndex === -1 || activeIndex >= options.length - 1 ? 0 : activeIndex + 1
        ),
      ' ': select,
      Enter: select,
    };

    const action = keyMap[key];
    if (action) action(e);
  };

  useEffect(() => {
    if (!visible) selectItem(activeIndex)({target: {}});
  }, [activeIndex, visible, selectItem]);

  useScrollIntoView({containerRef: scrollableRef, targetRef: activeOptionRef}, [
    activeIndex,
    visible,
  ]);

  useJumpToOption(inputRef, {options, move});

  return (
    <Container innerRef={clickOutsideRef} hasError={rest.touched && rest.error} opened={visible}>
      <Combobox
        {...rest}
        role="combobox"
        aria-expanded={visible}
        aria-owns={listboxId}
        aria-haspopup="listbox"
        opened={visible}
        disabled={rest.disabled}
      >
        <input
          id={id}
          type="text"
          ref={inputRef}
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-labelledby={ariaLabelledBy}
          value={selectedOption ? selectedOption.label : ''}
          aria-activedescendant={activeIndex === -1 ? '' : `${id}-result-item-${activeIndex}`}
          onKeyDown={handleKeyDown}
          onMouseDown={toggle}
          onSelect={e => {
            (e.target as HTMLInputElement).setSelectionRange(0, 0);
          }}
          disabled={rest.disabled}
          placeholder={rest.placeholder}
          readOnly
        />
      </Combobox>
      {visible && (
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable jsx-a11y/mouse-events-have-key-events */
        /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
        <Listbox
          aria-labelledby={ariaLabelledBy}
          role="listbox"
          id={listboxId}
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
                inputRef.current.focus();
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
