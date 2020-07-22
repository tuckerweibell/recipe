/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';
import {useUniqueId} from '../../utils/hooks';
import {useTheme} from '../../themes/styled';
import {listbox as styles} from './EzSelect.styles';

const collect = options => {
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
          <Option {...props} option={o} key={o.label} onClick={() => props.selectItem(o.value)} />
        ))}
      </ul>
    </li>
  );
};

const hasGroupedOptions = options => options.some(o => o.group);

const EzListBox = (props, ref) => {
  const theme = useTheme();
  const {items, onSelectionChange, focusProps, ...domProps} = props;
  return (
    <ul css={styles({theme})} role="listbox" ref={ref} {...domProps}>
      {hasGroupedOptions(items) ? (
        <React.Fragment>
          {collect(items).map(group => (
            <OptGroup {...focusProps} group={group} key={group[0]} selectItem={onSelectionChange} />
          ))}
        </React.Fragment>
      ) : (
        items.map(o => (
          <Option
            {...focusProps}
            option={o}
            key={o.label}
            onClick={() => onSelectionChange(o.value)}
          />
        ))
      )}
    </ul>
  );
};

export default React.forwardRef(EzListBox);
