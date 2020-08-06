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
    color: white;
    background-color: ${({theme}) => theme.colors.grays[900]};
  }
`;

const Notification = ({value}) => {
  return value === '★' ? <Marketing>★</Marketing> : <Counter>{value}</Counter>;
};

const Menu = ({link: {active, onClick, label, notifications, ...link}, sidebarToggle}: any) => (
  <div>
    <MenuLink
      {...link}
      onClick={wrapEvent(onClick, sidebarToggle)}
      className={active ? 'active' : undefined}
      {...(link.to ? {activeClassName: 'active'} : {})}
    >
      <span>{label}</span>
      {Boolean(notifications) && <Notification value={notifications} />}
    </MenuLink>
  </div>
);

export default Menu;
