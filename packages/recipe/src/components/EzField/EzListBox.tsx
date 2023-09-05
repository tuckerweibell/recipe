import React, {useRef} from 'react';
import Highlighter from 'react-highlight-words';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Stack} from '@mui/material';
import theme from '../theme.config';
import {useUniqueId, useScrollIntoView} from '../../utils/hooks';
import {clsx} from '../../utils';
import EzIcon from '../EzIcon';
import EzTextStyle from '../EzTextStyle';

const popup = theme.css({
  background: 'white',
  borderRadius: '4px',
  width: '$full',
  overflow: 'scroll',
  maxHeight: '20rem',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)',
});

const list = theme.css({
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const listItem = theme.css({
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '8px',
  padding: '$100 $150',
});

const groupLabel = theme.css({
  fontWeight: '$bold',
  fontSize: '$75',
  lineHeight: '1.3em',
  color: '$deemphasisText',
});

const listItemOption = theme.css({
  alignItems: 'center',
  color: '$black100',
  cursor: 'pointer',
  display: 'flex',
  position: 'relative',
  paddingRight: '0.75em',

  variants: {
    selected: {
      true: {
        backgroundColor: '$gray250',
      },
    },
  },
});

const disabledOption = theme.css({
  pointerEvents: 'none',
  opacity: 0.6,
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
  const {collection, selectionManager, searchWords, focusLabel, ...domProps} = props;
  const {items} = collection;

  // keep the focused list item visible within the scrollable listbox
  useScrollIntoView({containerRef: ref, targetRef: activeOptionRef}, [selectionManager.focusedKey]);

  const renderItem = option => {
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/mouse-events-have-key-events */
    /* Note: lint doesn't detect the keyboard handler is on the input element, not the list */
    const current = selectionManager.selectedKey === option.key;
    const selected = selectionManager.focusedKey === option.key;

    // We want the current option to receive focus when the dropdown is opened and the focusLabel matches. This should not occur after you have already selected an option.
    const shouldReceiveFocus = focusLabel === option.label && selectionManager.selectedKey === null;

    return (
      <li
        role="option"
        className={clsx(
          listItem(),
          listItemOption({current, selected}),
          option.disabled && disabledOption()
        )}
        aria-current={current}
        aria-selected={selected}
        ref={selected || shouldReceiveFocus ? (activeOptionRef as any) : undefined}
        onMouseOver={() => selectionManager.setFocusedKey(option.key)}
        onClick={() => selectionManager.replaceSelection(option.key)}
        id={getItemId(props.id, option.key)}
        key={option.label}
      >
        <Stack
          direction="row"
          sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}
        >
          <Stack>
            <Highlighter
              searchWords={searchWords || []}
              textToHighlight={option.label}
              highlightStyle={{
                backgroundColor: 'inherit',
                color: 'currentColor',
                textDecoration: option.disabled ? undefined : 'underline',
              }}
            />
            {option.description && <EzTextStyle use="subdued">{option.description}</EzTextStyle>}
          </Stack>
          {current && (
            <Stack ml={2}>
              <EzIcon icon={faCheck} size="small" />
            </Stack>
          )}
        </Stack>
      </li>
    );
  };

  const renderGroup = ([name, options]) => (
    <OptGroup group={name} key={name}>
      {options.map(renderItem)}
    </OptGroup>
  );

  return (
    <ul className={clsx(popup(), list())} role="listbox" ref={ref} {...domProps}>
      {hasGroupedOptions(items) ? items.map(renderGroup) : items.map(renderItem)}
    </ul>
  );
};

export default React.forwardRef(EzListBox);
