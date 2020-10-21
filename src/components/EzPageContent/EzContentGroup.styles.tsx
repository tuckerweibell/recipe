import {css} from '@emotion/core';

type Props = {
  horizontal?: boolean;
};

export const vertical = ({horizontal}: Props) =>
  !horizontal &&
  css`
    && > * + * {
      margin-top: var(--recipe-global-static-size-200);
    }
  `;

export const horizontal = ({horizontal: isHorizontal}: Props) =>
  isHorizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }

    && > * + * {
      margin-left: var(--recipe-global-static-size-250);
    }
  `;
