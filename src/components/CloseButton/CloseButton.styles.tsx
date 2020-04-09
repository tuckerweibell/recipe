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
  :focus {
    background-color: hsla(204, 11%, 79%, 0.4);
    box-shadow: 0px 0px 2px 2px ${theme.colors.interactive.focus.outline},
      0 1px 1px 0 rgba(0, 0, 0, 0.12);
  }
`;
