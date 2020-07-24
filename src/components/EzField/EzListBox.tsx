/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';
import {useUniqueId} from '../../utils/hooks';
import {useTheme} from '../../themes/styled';
import {listbox as styles} from './EzSelect.styles';

const Option = ({activeOption, activeOptionRef, setActiveOption, option, selected, ...props}) => {
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
      onClick={() => props.onSelectionChange(option.value)}
      onMouseDown={e => e.preventDefault()} // used to prevent a focus event from bubbling up to the body in ie11
      id={id}
    >
      {option.label}
    </li>
  );
};

const OptGroup = props => {
  const id = useUniqueId();
  return (
    <li>
      <ul role="group" aria-describedby={id}>
        <li id={id} role="presentation">
          {props.group}
        </li>
        {props.children}
      </ul>
    </li>
  );
};

const hasGroupedOptions = options => Array.isArray(options[0]);

const EzListBox = (props, ref) => {
  const theme = useTheme();
  const {items, onSelectionChange, focusProps, activeOptionRef, ...domProps} = props;

  const renderItem = o => (
    <Option
      {...focusProps}
      option={o}
      key={o.label}
      onSelectionChange={onSelectionChange}
      activeOptionRef={activeOptionRef}
    />
  );

  const renderGroup = ([name, options]) => (
    <OptGroup group={name} key={name}>
      {options.map(renderItem)}
    </OptGroup>
  );

  return (
    <ul css={styles({theme})} role="listbox" ref={ref} {...domProps}>
      {hasGroupedOptions(items) ? items.map(renderGroup) : items.map(renderItem)}
    </ul>
  );
};

export default React.forwardRef(EzListBox);
