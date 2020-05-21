import {css} from '@emotion/core';
import {responsive} from '../../styles';

export const base = () => css`
  display: inline-block;
`;

export const strong = ({theme}) => css`
  font-weight: ${theme.fontWeights.bold};
`;

export const subdued = ({theme}) => css`
  color: ${theme.colors.text.deemphasis};
`;

export const align = responsive('align', {
  center: {display: 'block', textAlign: 'center'},
  left: {display: 'block', textAlign: 'left'},
  right: {display: 'block', textAlign: 'right'},
});
