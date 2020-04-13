import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Combobox, Container, Listbox} from './EzSelect.styles';
import {useScrollIntoView, useJumpToOption, useUniqueId} from '../../utils/hooks';
import {useComboboxState, useCombobox, useComboboxInput, useComboboxFlyout} from './EzCombobox';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';

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

const ListboxPopover = React.forwardRef<any, any>(({targetRef, ...props}, ref) => (
  <EzPopover
    targetRef={targetRef}
    placement="bottom-start"
    modifiers={[
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
    ]}
  >
    <Listbox role="listbox" ref={ref} {...props} />
  </EzPopover>
));

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
          <Option {...props} option={o} key={o.label} onClick={() => props.selectItem(o.value)} />
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

  const selected = options.find(o => o.value === value);
  const [activeOption, setActiveOption] = useState(selected);

  const setActiveIndex = i => setActiveOption(i === -1 ? null : options[i]);

  const listbox = {activeOption, activeOptionRef, setActiveOption, selected};

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

  return (
    <Container ref={containerRef} hasError={props.touched && props.error} opened={visible}>
      <Combobox {...combobox}>
        <EzTextInput {...comboboxInput} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={visible} />
        </InsetIcon>
      </Combobox>
      {visible && (
        <ListboxPopover
          aria-labelledby={ariaLabelledBy}
          targetRef={comboboxInput.ref}
          {...comboboxFlyout}
          ref={optionsRef as any}
          onClick={() => comboboxInput.ref.current.focus()}
        >
          {hasGroupedOptions(options) ? (
            <>
              {flatten(options).map(group => (
                <OptGroup {...listbox} group={group} key={group[0]} selectItem={selectItem} />
              ))}
            </>
          ) : (
            options.map(o => (
              <Option {...listbox} option={o} key={o.label} onClick={() => selectItem(o.value)} />
            ))
          )}
        </ListboxPopover>
      )}
    </Container>
  );
};

export default EzSelect;
