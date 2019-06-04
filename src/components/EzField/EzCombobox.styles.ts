import {css} from '@emotion/core';
import {Field} from './EzField.styles';
import styled from '../../themes/styled';

const errorIconPosition = ({hasError}) =>
  hasError &&
  css`
    + * > svg {
      right: 1em;
    }
  `;

const hideErrorMessageWhenOpen = ({hasError, opened}) =>
  hasError &&
  opened &&
  css`
    + * + * {
      display: none;
    }
  `;

export const Container = styled.div<any>`
  position: relative;

  input {
    cursor: default;
  }

  ${errorIconPosition};
  ${hideErrorMessageWhenOpen};
`;

const iconRotate = p => (p.opened ? '-180deg' : '0deg');

const iconColor = p =>
  encodeURIComponent(
    p.disabled ? p.theme.colors.interactive.disabled.foreground : p.theme.colors.interactive.base
  );

export const Combobox = styled(Field)`
  :after {
  content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='${iconColor}'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e");
    position: absolute;
    right: ${({theme}) => theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%) rotate(${iconRotate});
    transform-origin: 50% 50%;
    transition: transform 0.3s;
    pointer-events: none;
  }
`;
