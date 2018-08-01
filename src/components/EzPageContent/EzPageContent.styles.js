import {css} from 'react-emotion';

export const base = ({theme}) => css`
  background: ${theme.colors.grays[100]};
  padding: ${theme.spacing.lg};

  > *:not(:first-child) {
    margin-top: ${theme.spacing.xl2};
  }
`;
