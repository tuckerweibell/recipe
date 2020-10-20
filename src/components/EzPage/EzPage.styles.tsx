import {css} from '@emotion/core';
import {mq} from '../../themes/styled';
import './vars.css';

export const base = () => css`
  background: var(--recipe-page-background-color);
  padding: var(--recipe-global-static-size-200) 0;
  flex-grow: 1;
  ${mq('medium', {padding: 'var(--recipe-global-static-size-400)'})}
`;

// This allows us to gradually roll out style resets. Eventually they will move to a more typically global location.
export const resets = () => css`
  p {
    margin: 0;
  }
`;
