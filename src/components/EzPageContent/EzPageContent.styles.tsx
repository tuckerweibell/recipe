import {css} from 'react-emotion';

export const base = ({theme}) => css`
  background: ${theme.colors.page.background};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }

  > *:not(:first-child) {
    margin-top: ${theme.spacing.xl2};
  }
`;
