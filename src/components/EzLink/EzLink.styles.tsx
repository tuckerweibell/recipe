import {css} from '@emotion/core';
import './vars.css';

const linkBase = () => css`
  &:focus {
    outline: none;
    text-decoration: underline;
    text-decoration-style: double;
  }
`;

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
  ${linkBase()};
`;

export const secondary = () => css`
  font-weight: normal;
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
  outline-offset: 2px;

  :hover {
    color: var(--recipe-link-text-color-hover);
  }
  :active {
    color: var(--recipe-link-text-color-down);
  }
  ${linkBase()};
`;

export const reset = () => css`
  color: inherit;
  text-decoration: none;
`;
