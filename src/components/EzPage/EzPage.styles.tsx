import {css} from '@emotion/core';

export const base = ({theme}) => css`
  background: ${theme.colors.page.background};
  padding: ${theme.spacing.md} 0;
  flex-grow: 1;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }
`;

// This allows us to gradually roll out style resets. Eventually they will move to a more typically global location.
export const resets = () => css`
  p {
    margin: 0;
  }
`;
