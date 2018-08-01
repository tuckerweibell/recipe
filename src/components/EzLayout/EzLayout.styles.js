import {css} from 'react-emotion';
import {variants} from '../../styles/';

export const base = ({layout}) => css`
  ${layout !== 'stack' && 'align-items: center'};
  display: flex;
`;

export const basic = () => css`
  justify-content: flex-start;
`;

export const right = css`
  justify-content: flex-end;
`;

export const equal = () => css`
  justify-content: space-between;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

export const split = () => css`
  justify-content: space-between;
`;

export const stack = ({theme}) => css`
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: ${theme.spacing.sm};
  }
`;

export const layout = variants('layout', {
  basic,
  right,
  equal,
  split,
  stack,
});

const spacingStyle = ({theme}) => css`
  > *:not(:first-child) {
    margin-left: ${theme.spacing.sm};
  }
`;

export const spacing = variants('layout', {
  basic: spacingStyle,
  right: spacingStyle,
  equal: spacingStyle,
});
