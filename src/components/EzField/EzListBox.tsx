import React, {useRef} from 'react';
import Highlighter from 'react-highlight-words';
import Style from '@ezcater/snitches';
import theme from './EzField.theme.config';
import {useUniqueId, useScrollIntoView} from '../../utils/hooks';
import {clsx} from '../../utils';

const popup = theme.css({
  minWidth: '230px',
  background: 'white',
  border: '1px solid #ccc',
  borderRadius: '6px',
  width: '$full',
  overflow: 'scroll',
  maxHeight: '20rem',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
});

const list = theme.css({
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const listItem = theme.css({
  margin: 0,
  padding: '$100 $150',
});

const groupLabel = theme.css({
  fontWeight: '$bold',
  fontSize: '$75',
  lineHeight: '1.3em',
  color: '$deemphasisText',
});

const listItemOption = theme.css({
  color: '$blue600',
  fontWeight: 'bold',
  position: 'relative',
  paddingRight: '2em',

  variants: {
    selected: {
      true: {
        backgroundColor: '$blue600',
        color: 'white',
      },
    },
    current: {
      true: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right 12px',
        backgroundImage:
          "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%238b99a6' viewBox='0 0 24 24' width='12' height='12'%3e%3cpath d='M20.29 2L9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/%3e%3c/svg%3e\")",
      },
    },
  },
  compoundVariants: [
    {
      selected: 'true',
      current: 'true',
      css: {
        backgroundImage:
          "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24' width='12' height='12'%3e%3cpath d='M20.29 2L9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/%3e%3c/svg%3e\")",
      },
    },
  ],
});

const OptGroup = props => {
  const id = useUniqueId();
  return (
    <li>
      <ul role="group" aria-describedby={id} className={list()}>
        <li id={id} role="presentation" className={clsx(groupLabel(), listItem())}>
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
  const activeOptionRef = useRef<HTMLElement>();
  const {collection, selectionManager, searchWords, ...domProps} = props;
  const {items} = collection;

  // keep the focused list item visible within the scrollable listbox
  useScrollIntoView({containerRef: ref, targetRef: activeOptionRef}, [selectionManager.focusedKey]);

  const renderItem = option => {
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/mouse-events-have-key-events */
    /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
    const current = selectionManager.selectedKey === option.key;
    const selected = selectionManager.focusedKey === option.key;
    return (
      <li
        role="option"
        className={clsx(listItem(), listItemOption({current, selected}))}
        aria-current={current}
        aria-selected={selected}
        ref={selected ? (activeOptionRef as any) : undefined}
        onMouseOver={() => selectionManager.setFocusedKey(option.key)}
        onClick={() => selectionManager.replaceSelection(option.key)}
        id={getItemId(props.id, option.key)}
        key={option.label}
      >
        <Highlighter
          searchWords={searchWords || []}
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

  const renderGroup = ([name, options]) => (
    <Style ruleset={theme} key={name}>
      <OptGroup group={name}>{options.map(renderItem)}</OptGroup>
    </Style>
  );

  return (
    <Style ruleset={theme}>
      <ul className={clsx(popup(), list())} role="listbox" ref={ref} {...domProps}>
        {hasGroupedOptions(items) ? items.map(renderGroup) : items.map(renderItem)}
      </ul>
    </Style>
  );
};

export default React.forwardRef(EzListBox);
