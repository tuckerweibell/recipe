import {css} from '@emotion/core';

export const base = ({theme}) => css`
  padding: ${theme.spacing.lg};

  > *:not(:first-child) {
    margin-top: ${theme.spacing.md};
  }
`;
