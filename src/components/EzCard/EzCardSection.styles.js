import {css} from 'react-emotion';

export const base = ({theme}) => css`
  padding: ${theme.spacing.lg};

  > *:not(:first-child) {
    margin-top: ${theme.spacing.md};
  }
`;
