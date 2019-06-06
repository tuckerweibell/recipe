import React from 'react';
import {css} from 'react-emotion';
import styled from '../../themes/styled';
import EzLink from '../EzLink';
import {wrapEvent} from '../../utils';
import {Counter, Marketing} from './Notifications';

// TODO: figure out how we can get this from theme, without coupling to emotion-theming
const activeStyles = ({active}) =>
  active &&
  css`
    && {
      color: white;
      background-color: #1b2023;
    }
  `;

export const menuStyles = ({theme}) => css`
  color: #b8bdc2;
  font-weight: normal;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl4} ${theme.spacing.md} ${theme.spacing.xl};
  width: 100%;
  position: relative;

  :hover:enabled {
    color: white;
    text-decoration: none;
  }

  :active:enabled,
  :not([aria-disabled='true'])[aria-expanded='true'] {
    box-shadow: inset 0px 0px 10px #000000;
  }
`;

const MenuLink = styled(EzLink)`
  && {
    ${p => menuStyles(p)};
  }

  ${activeStyles as any}
`;

const Notification = ({value}) => {
  return value === '★' ? <Marketing>★</Marketing> : <Counter>{value}</Counter>;
};

const Menu = ({link, sidebarToggle}) => (
  <div>
    <MenuLink
      {...link}
      onClick={wrapEvent(link.onClick, sidebarToggle)}
      {...(link.to ? {activeClassName: activeStyles({active: true})} : {})}
    >
      {link.label}
      {Boolean(link.notifications) && <Notification value={link.notifications} />}
    </MenuLink>
  </div>
);

export default Menu;
