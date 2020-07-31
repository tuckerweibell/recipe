/** @jsx jsx */
import React, {useRef} from 'react';
import {jsx} from '@emotion/core';
import Highlighter from 'react-highlight-words';
import {useUniqueId, useScrollIntoView} from '../../utils/hooks';
import {useTheme} from '../../themes/styled';
import {listbox as styles} from './EzSelect.styles';

const Option = ({focusedKey, activeOptionRef, setFocusedKey, option, selectedKey, ...props}) => {
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/mouse-events-have-key-events */
  /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
  return (
    <li
      role="option"
      aria-current={selectedKey === option.key}
      aria-selected={focusedKey === option.key}
      ref={focusedKey === option.key ? activeOptionRef : undefined}
      onMouseOver={() => setFocusedKey(option.key)}
      onClick={() => props.replaceSelection(option.key)}
      id={props.id}
    >
      <Highlighter
        searchWords={props.searchWords}
        textToHighlight={option.label}
        highlightStyle={{
          backgroundColor: 'inherit',
          color: 'currentColor',
          textDecoration: 'underline',
        }}
      />
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

export const getItemId = (listId, itemKey) => `${listId}-option-${itemKey}`;

const hasGroupedOptions = options => Array.isArray(options[0]);

const EzListBox = (props, ref) => {
  const theme = useTheme();
  const activeOptionRef = useRef<HTMLElement>();
  const {collection, selectionManager, searchWords, ...domProps} = props;
  const {items} = collection;

  // keep the focused list item visible within the scrollable listbox
  useScrollIntoView({containerRef: ref, targetRef: activeOptionRef}, [selectionManager.focusedKey]);

  const renderItem = o => (
    <Option
      {...selectionManager}
      id={getItemId(props.id, o.key)}
      option={o}
      key={o.label}
      activeOptionRef={activeOptionRef}
      searchWords={searchWords || []}
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
