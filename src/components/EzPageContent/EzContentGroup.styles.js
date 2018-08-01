import {css} from 'react-emotion';

export const vertical = ({horizontal, theme}) =>
  !horizontal &&
  css`
    > *:not(:first-child) {
      margin-top: ${theme.spacing.md};
    }
  `;

export const horizontal = ({horizontal, theme}) =>
  horizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;

      &: not(:first-child) {
        margin-left: ${theme.spacing.lg};
      }
    }
  `;
