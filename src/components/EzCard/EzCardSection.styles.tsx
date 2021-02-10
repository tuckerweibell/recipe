import {css} from '@emotion/core';
import './vars.css';

export const base = () => css`
  && > * + * {
    margin-top: var(--recipe-card-body-content-margin-top);
  }
`;
