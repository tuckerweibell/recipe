import {css} from '@emotion/core';
import './vars.css';

export const base = () => css`
  padding: var(--recipe-card-padding);

  && > * + * {
    margin-top: var(--recipe-card-body-content-margin-top);
  }
`;
