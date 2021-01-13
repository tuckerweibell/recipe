import {css} from '@emotion/core';
import './vars.css';

export const primary = () => css`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: var(--recipe-link-text-color);
  outline-offset: 2px;

  :hover {
    color: var(--recipe-link-text-color-hover);
  }
  :active {
    color: var(--recipe-link-text-color-down);
  }

  &:hover {
    text-decoration: underline;
  }
`;
