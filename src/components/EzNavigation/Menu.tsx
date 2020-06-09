import React from 'react';
import {css} from '@emotion/core';
import styled from '../../themes/styled';
import {wrapEvent} from '../../utils';
import {Counter, Marketing} from './Notifications';

export const menuStyles = ({theme}) => css`
  color: #b8bdc2;
  font-weight: normal;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl4} ${theme.spacing.md} ${theme.spacing.xl};
  width: 100%;
  position: relative;
  text-decoration: none;

  :hover {
    color: white;
  }

  :active {
    box-shadow: inset 0px 0px 10px #000000;
  }
`;

const Link = React.forwardRef<HTMLElement, any>(({as: component = 'a', ...props}, ref) => {
  return React.createElement(component, {...props, ref});
});

const MenuLink = styled(Link)`
  ${menuStyles};

  &.active {
    color: white;
    background-color: ${({theme}) => theme.colors.grays[900]};
  }
`;

const Notification = ({value}) => {
  return value === '★' ? <Marketing>★</Marketing> : <Counter>{value}</Counter>;
};

const Menu = ({link, sidebarToggle}) => (
  <div>
    <MenuLink
      {...link}
      onClick={wrapEvent(link.onClick, sidebarToggle)}
      className={link.active ? 'active' : undefined}
      {...(link.to ? {activeClassName: 'active'} : {})}
    >
      {link.label}
      {Boolean(link.notifications) && <Notification value={link.notifications} />}
    </MenuLink>
  </div>
);

export default Menu;
