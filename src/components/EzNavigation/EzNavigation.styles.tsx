import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {mq} from '../../themes/styled';
import './vars.css';

interface WrapperProps {
  opened: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;

  ${mq('large', {flexDirection: 'row'})};
`;

export const NavWrapper = styled.div<WrapperProps>`
  position: relative;
  background: var(--recipe-navigation-background);

  [aria-label='Menu'] {
    display: block;
    position: absolute;
    right: 0;
    top: 10px;

    ${mq('large', {display: 'none'})};
  }

  ${mq('large', {position: 'sticky', height: '100vh', top: 0})};
`;

export const MenuContent = styled.div<WrapperProps>`
  visibility: hidden;
  height: 0;
  transition: height 0.24s cubic-bezier(0.64, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({opened}) =>
    opened &&
    css`
      visibility: visible;
      height: calc(100vh - 70px);
      overflow-y: auto;
    `}

  ${mq(
    'large',
    css`
      visibility: visible;
      width: var(--recipe-navigation-sidebar-width);
      transition: none;
      height: calc(100vh - 70px);
      overflow-y: auto;
    `
  )}
`;

export const Menus = styled.nav<{primary?: boolean}>`
  width: 100%;

  ${({primary}) =>
    primary &&
    css`
      flex: 1 1 0%;
    `}
`;

export const ContentContainer = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-width: 0;
  max-width: 100%;

  ${({opened}) =>
    !opened &&
    css`
      height: 0;
      overflow: hidden;
    `}

  ${mq('large', {height: 'auto', overflow: 'visible'})};
`;
