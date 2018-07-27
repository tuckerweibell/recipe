import {css} from 'react-emotion';
import {variants} from '../../styles/';

export const base = () => css`
  align-items: center;
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

export const layout = variants('layout', {
  basic,
  right,
  equal,
  split,
});

export const spacing = ({layout, theme}) =>
  layout !== 'split' &&
  css`
    > *:not(:first-child) {
      margin-left: ${theme.spacing[2]};
    }
  `;
