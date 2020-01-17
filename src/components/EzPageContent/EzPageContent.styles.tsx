import {css} from '@emotion/core';

export const base = ({theme}) => css`
  background: ${theme.colors.page.background};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }

  && > * + * {
    margin-top: ${theme.spacing.xl2};
  }
`;
