import {css} from 'react-emotion';
import {margin} from 'polished';
import {responsive} from '../../styles';

export const base = css`
  display: flex;
`;

const reset = css`
  align-items: normal;
  flex-direction: row;
  justify-content: normal;

  > * {
    flex-basis: auto;
    flex-grow: 0;
  }
`;

export const basic = () => css`
  align-items: center;
  justify-content: flex-start;
`;

export const right = css`
  align-items: center;
  justify-content: flex-end;
`;

export const equal = () => css`
  align-items: center;
  justify-content: space-between;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

export const split = () => css`
  align-items: center;
  justify-content: space-between;
`;

export const stack = css`
  flex-direction: column;
`;

export const layout = responsive('layout', {
  basic,
  right,
  equal,
  split,
  stack,
  reset,
});

const setSpacing = (top, left) => css`
  > *:not(:first-child) {
    ${margin(top, null, null, left)};
  }
`;
const leftSpacing = ({theme}) => setSpacing(null, theme.spacing.sm);
const topSpacing = ({theme}) => setSpacing(theme.spacing.sm, null);

export const spacing = responsive('layout', {
  basic: leftSpacing,
  right: leftSpacing,
  equal: leftSpacing,
  stack: topSpacing,
  reset: setSpacing(0, 0),
});
