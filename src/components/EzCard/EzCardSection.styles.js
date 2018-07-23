import {css} from 'react-emotion';

export const base = ({theme}) => css`
  padding: ${theme.spacing[4]};

  > *:not(:first-child) {
    margin-top: ${theme.spacing[3]};
  }
`;
