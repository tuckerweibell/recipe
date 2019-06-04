import {css} from '@emotion/core';

export const base = ({theme}) => css`
  align-self: center;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: ${theme.spacing.lg};
  margin: calc(${theme.spacing.lg} * -1);

  :hover {
    background-color: hsla(240, 11%, 95%, 0.4);
  }
  :active {
    background-color: hsla(204, 11%, 79%, 0.4);
  }

  > span:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
