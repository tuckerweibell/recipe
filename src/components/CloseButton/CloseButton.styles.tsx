import {css} from '@emotion/core';
import './vars.css';

export const base = () => css`
  align-self: center;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: var(--recipe-dismiss-padding);
  margin: calc(var(--recipe-dismiss-padding) * -1);
  background-color: var(--recipe-dismiss-background-color);

  :hover,
  :focus {
    background-color: rgba(
      var(--recipe-dismiss-color-translucent-rgb-dark),
      var(--recipe-dismiss-color-translucent-opacity-dark)
    );
  }
  :active {
    background-color: rgba(
      var(--recipe-dismiss-color-translucent-rgb-darker),
      var(--recipe-dismiss-color-translucent-opacity-darker)
    );
  }
`;
