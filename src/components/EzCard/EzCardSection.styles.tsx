import {css} from '@emotion/core';

export const base = ({theme}) => css`
  padding: ${theme.spacing.lg};

  && > * + * {
    margin-top: ${theme.spacing.md};
  }
`;
