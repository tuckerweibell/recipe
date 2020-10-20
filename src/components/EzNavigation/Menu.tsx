import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Counter, Marketing} from './Notifications';

export const menuStyles = () => css`
  color: var(--recipe-navigation-text-color);
  font-weight: normal;
  display: flex;
  align-items: center;
  padding-top: var(--recipe-global-static-size-200);
  padding-right: var(--recipe-global-static-size-750);
  padding-bottom: var(--recipe-global-static-size-200);
  padding-left: var(--recipe-global-static-size-300);
  width: 100%;
  position: relative;
  text-decoration: none;

  :hover {
    color: var(--recipe-navigation-text-color-hover);
  }

  :active {
    box-shadow: inset 0px 0px 10px #000000;
  }

  :focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #3e90d6;
  }
`;

const Link = React.forwardRef<HTMLElement, any>(({as: component = 'a', ...props}, ref) => {
  return React.createElement(component, {...props, ref});
});

const MenuLink = styled(Link)`
  ${menuStyles};

  &.active {
    color: var(--recipe-navigation-text-color-selected);
    background-color: var(--recipe-navigation-background-color-selected);
  }
`;

const Notification = ({value}) => {
  return value === '★' ? <Marketing>★</Marketing> : <Counter>{value}</Counter>;
};

const Menu = ({link: {active, label, notifications, ...link}}: any) => (
  <MenuLink
    {...link}
    className={active ? 'active' : undefined}
    {...(link.to ? {activeClassName: 'active'} : {})}
  >
    <span>{label}</span>
    {Boolean(notifications) && <Notification value={notifications} />}
  </MenuLink>
);

export default Menu;
