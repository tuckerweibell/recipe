import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Combobox, Container, Listbox} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useUniqueId} from '../../utils/hooks';
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

const EzSelect = props => {
  const {options, value, onChange} = props;
  const ariaLabelledBy = props['aria-labelledby'];

  const timeout = useRef(null);
  const activeOptionRef = useRef(null);
  const scrollableRef = useRef<HTMLElement>();

  const selected = options.find(o => o.value === value);
  const [activeOption, setActiveOption] = useState(selected);

  const setActiveIndex = i => setActiveOption(i === -1 ? null : options[i]);

  const listbox = {activeOption, activeOptionRef, setActiveOption, selected};

  useEffect(() => () => clearTimeout(timeout.current), []);

  const comboboxState = useComboboxState();
  const {hide, visible} = comboboxState;

  const {ref: clickOutsideRef, ...combobox} = useCombobox(comboboxState, {
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

    const select = () => selectItem();

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

  useScrollIntoView({containerRef: scrollableRef, targetRef: activeOptionRef}, [
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
    readOnly: true,
  });

  const comboboxHiddenSelect = {
    id: props.id,
    name: props.name,
    hidden: true,
    readOnly: true,
    ref: useRef(null),
    style: {display: 'none'},
    value: activeOption ? activeOption.value : value === null ? undefined : value,
  };

  const changeEvent = useCallback(() => {
    const event = new Event('change');
    comboboxHiddenSelect.ref.current.dispatchEvent(event);
    return event;
  }, [comboboxHiddenSelect.ref]);

  function selectItem() {
    onChange(changeEvent());
    timeout.current = setTimeout(hide, 100);
  }

  const comboboxFlyout = useComboboxFlyout(comboboxState);

  const move = useCallback(
    option => {
      setActiveOption(option);

      if (visible) return;

      onChange(changeEvent());
    },
    [visible, onChange, changeEvent]
  );

  useJumpToOption(comboboxInput.ref, {options, move});

  return (
    <Container innerRef={clickOutsideRef} hasError={props.touched && props.error} opened={visible}>
      <Combobox {...combobox}>
        <input {...comboboxInput} />
        {/* see: https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/635 */}
        {/* eslint-disable jsx-a11y/control-has-associated-label */}
        <select {...comboboxHiddenSelect}>
          <option value={comboboxHiddenSelect.value} />
        </select>
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
