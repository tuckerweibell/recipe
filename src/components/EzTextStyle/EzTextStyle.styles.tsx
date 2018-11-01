import {css} from 'react-emotion';

export const strong = ({theme}) => css`
  font-weight: ${theme.fontWeights.bold};
`;

export const subdued = ({theme}) => css`
  color: ${theme.colors.grays[600]};
`;
