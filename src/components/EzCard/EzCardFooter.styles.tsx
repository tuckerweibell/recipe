import {css} from '@emotion/core';
import './vars.css';

export const base = () => css`
  padding: var(--recipe-global-static-size-150) var(--recipe-card-padding);
  text-align: center;
  border-top: 1px solid var(--recipe-card-border-color);
  border-radius: 0 0 var(--recipe-card-border-radius) var(--recipe-card-border-radius);
  background-color: var(--recipe-card-footer-background-color);
  overflow: hidden;
`;
