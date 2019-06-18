import {css} from 'react-emotion';

export const base = ({theme}) => css`
  align-self: center;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: ${theme.spacing.lg};
  margin: -${theme.spacing.lg};

  :hover {
    background-color: ${theme.colors.interactive.hover.background};
  }
  :active {
    background-color: ${theme.colors.interactive.active.background};
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
