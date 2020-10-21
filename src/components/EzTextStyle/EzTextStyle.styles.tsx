import {css} from '@emotion/core';
import {responsive} from '../../styles';
import './vars.css';

export const base = () => css`
  display: inline-block;
`;

export const strong = () => css`
  font-weight: var(--recipe-text-strong-font-weight);
`;

export const subdued = () => css`
  color: var(--recipe-text-subdued-text-color);
`;

export const align = responsive('align', {
  center: {display: 'block', textAlign: 'center'},
  left: {display: 'block', textAlign: 'left'},
  right: {display: 'block', textAlign: 'right'},
});
