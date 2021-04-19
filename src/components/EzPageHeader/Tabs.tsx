import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import {AnchorProps, LinkProps} from '../EzLink/EzLink.types';
import LinkButton from './LinkButton';
import theme from './Tabs.theme.config';
import {clsx} from '../../utils';

type Clickable = {
  onClick: React.MouseEventHandler;
};
type Link = (AnchorProps | LinkProps) & Partial<Clickable>;

type TabProps = (Link | Clickable) & {
  active: boolean;
  tabIndex: number;
};

type TabListProps = React.HtmlHTMLAttributes<HTMLUListElement>;

const listBase = theme.css({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '&& > * + *': {
    marginLeft: '$tabs-ml',
  },
});

const tabBase = theme.css({
  display: 'flex',
  margin: 0,
  '&& a, && > button': {
    display: 'flex',
    padding: '$tabs-py $tabs-px',
    textDecoration: 'none',
    '&:focus': {
      outline: 'auto',
      outlineColor: '$tabs-outline-color',
    },
  },
});

const activeTab = theme.css({
  boxShadow: '$tabs-active-box-shadow',
  '&& > *, && a': {
    color: '$tabs-active-color',
    ':focus': {
      outlineColor: '$tabs-focus-outline-color',
    },
  },
  '&& a, && > button': {
    '&:hover': {
      boxShadow: '$tabs-hover-box-shadow',
    },
  },
});

export const Tab = forwardRef<HTMLElement, TabProps>((props, ref) => {
  const {active, ...rest} = props;
  const tabProps = {...rest, ref, role: 'tab'} as any;

  return (
    <Style ruleset={theme}>
      <li className={clsx(tabBase(), active && activeTab())} role="presentation">
        <LinkButton {...tabProps} />
      </li>
    </Style>
  );
});

export const TabList: React.FC<TabListProps> = ({onKeyDown, children}) => (
  <Style ruleset={theme}>
    <ul className={listBase()} role="tablist" onKeyDown={onKeyDown}>
      {children}
    </ul>
  </Style>
);
