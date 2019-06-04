import {css} from '@emotion/core';
import {Theme} from '../../themes/styled';

type Props = {
  horizontal?: boolean;
  theme: Theme;
};

export const vertical = ({horizontal, theme}: Props) =>
  !horizontal &&
  css`
    > *:not(:first-child) {
      margin-top: ${theme.spacing.md};
    }
  `;

export const horizontal = ({horizontal: isHorizontal, theme}: Props) =>
  isHorizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;

      &:not(:first-child) {
        margin-left: ${theme.spacing.lg};
      }
    }
  `;
