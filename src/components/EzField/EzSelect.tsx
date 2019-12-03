import React, {useState, useRef, useCallback} from 'react';
import {Combobox, Container, Listbox} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useUniqueId, useUpdateEffect} from '../../utils/hooks';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';

const flatten = options => {
  const grouped = new Map();

  options.forEach(item => {
    const {group} = item;
    const values = grouped.get(group) || [];
    values.push(item);
    grouped.set(group, values);
  });

  return [...grouped];
};

const Option = ({activeOption, activeOptionRef, setActiveOption, option, selected, onClick}) => {
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/mouse-events-have-key-events */
  /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
  const id = useUniqueId();
  const activeValue = activeOption && activeOption.value;
  return (
    <li
      role="option"
      aria-current={(selected && option.value === selected.value) || undefined}
      aria-selected={activeValue === option.value}
      ref={activeValue === option.value ? activeOptionRef : undefined}
      onMouseOver={() => setActiveOption(option)}
      onClick={onClick}
      onMouseDown={e => e.preventDefault()} // used to prevent a focus event from bubbling up to the body in ie11
      id={id}
    >
      {option.label}
    </li>
  );
};

const OptGroup = props => {
  const id = useUniqueId();
  const [name, options] = props.group;

  return (
    <li>
      <ul role="group" aria-describedby={id}>
        <li id={id} role="presentation">
          {name}
        </li>
        {options.map(o => (
          <Option {...props} option={o} key={o.label} />
        ))}
      </ul>
    </li>
  );
};

const hasGroupedOptions = options => options.some(o => o.group);

const useListboxState = ({options, selected}) => {
  const [activeOption, setActiveOption] = useState(selected);
  const activeOptionRef = useRef(null);
  const setActiveIndex = useCallback(i => setActiveOption(options[i]), [options]);

  return {
    selected,
    activeOption,
    activeOptionRef,
    setActiveOption,
    setActiveIndex,
  };
};

const EzSelect = ({id, options, value, onChange, ...rest}) => {
  const selected = options.find(o => o.value === value);
  const ariaLabelledBy = rest['aria-labelledby'];
  const scrollableRef = useRef<HTMLElement>();

  const listbox = useListboxState({options, selected});
  const {activeOption, setActiveOption, activeOptionRef} = listbox;

  const comboboxState = useComboboxState();
  const {hide, visible} = comboboxState;

  const {ref: clickOutsideRef, ...combobox} = useCombobox(comboboxState, {
    ...rest,
    'aria-haspopup': 'listbox',
    opened: comboboxState.visible,
  });

  const selectItem = useCallback(
    e => {
      if (activeOption) {
        onChange({
          ...e,
          target: {...e.target, value: activeOption.value},
        });
      }

      hide();
    },
    [activeOption, hide, onChange]
  );

  const handleKeyDown = e => {
    const key = e.key;
    const activeIndex = options.indexOf(activeOption);
    const {setActiveIndex} = listbox;

    const select = () => selectItem(e);

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

  useUpdateEffect(() => {
    if (!visible) selectItem(new Event('change'));
  }, [activeOption]);

  useScrollIntoView({containerRef: scrollableRef, targetRef: activeOptionRef}, [
    activeOption,
    visible,
  ]);

  const comboboxInput = useComboboxInput(comboboxState, {
    id,
    'aria-autocomplete': 'list',
    'aria-labelledby': ariaLabelledBy,
    value: selected ? selected.label : '',
    'aria-activedescendant': !activeOptionRef.current ? '' : activeOptionRef.current.id,
    onKeyDown: handleKeyDown,
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    disabled: rest.disabled,
    placeholder: rest.placeholder,
    readOnly: true,
  });

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  useJumpToOption(comboboxInput.ref, {options, move: setActiveOption});

  return (
    <Container innerRef={clickOutsideRef} hasError={rest.touched && rest.error} opened={visible}>
      <Combobox {...combobox}>
        <input {...comboboxInput} />
      </Combobox>
      {visible && (
        <Listbox
          aria-labelledby={ariaLabelledBy}
          role="listbox"
          {...comboboxFlyout}
          innerRef={scrollableRef}
          onClick={() => comboboxInput.ref.current.focus()}
        >
          {hasGroupedOptions(options) ? (
            <>
              {flatten(options).map(group => (
                <OptGroup {...listbox} group={group} key={group[0]} onClick={selectItem} />
              ))}
            </>
          ) : (
            options.map(o => <Option {...listbox} option={o} key={o.label} onClick={selectItem} />)
          )}
        </Listbox>
      )}
    </Container>
  );
};

export default EzSelect;
