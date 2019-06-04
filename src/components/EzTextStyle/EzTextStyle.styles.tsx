import {css} from '@emotion/core';

export const strong = ({theme}) => css`
  font-weight: ${theme.fontWeights.bold};
`;

export const subdued = ({theme}) => css`
  color: ${theme.colors.text.deemphasis};
`;
