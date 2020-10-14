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
  --recipe-dismiss-background-color-translucent: rgba(
    var(--recipe-dismiss-color-translucent-rgb),
    var(--recipe-dismiss-color-translucent-opacity)
  );

  :hover,
  :focus {
    --recipe-dismiss-color-translucent-rgb: var(--recipe-dismiss-color-translucent-rgb-dark);
    --recipe-dismiss-color-translucent-opacity: var(
      --recipe-dismiss-color-translucent-opacity-dark
    );
    --recipe-dismiss-background-color: var(--recipe-dismiss-background-color-translucent);
  }
  :active {
    --recipe-dismiss-color-translucent-rgb: var(--recipe-dismiss-color-translucent-rgb-darker);
    --recipe-dismiss-color-translucent-opacity: var(
      --recipe-dismiss-color-translucent-opacity-darker
    );
    --recipe-dismiss-background-color: var(--recipe-dismiss-background-color-translucent);
  }
`;
