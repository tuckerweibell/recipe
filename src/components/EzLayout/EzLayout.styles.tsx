import {css} from '@emotion/core';
import {responsive} from '../../styles';

export const base = () => css`
  display: flex;
`;

const reset = () => css`
  align-items: normal;
  flex-direction: row;
  justify-content: normal;
  flex-wrap: nowrap;

  > * {
    flex-basis: auto;
    flex-grow: 0;
    width: auto;
  }
`;

export const basic = () => css`
  align-items: center;
  justify-content: flex-start;
`;

export const right = () => css`
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

export const stack = () => css`
  flex-direction: column;
`;

const columnWidth = ({columns, theme}) => {
  const width = n => ({width: `calc(${n < 2 ? 100 : 100 / n}% - ${theme.spacing.sm})`});

  if (typeof columns !== 'object') return width(columns);

  return responsive(
    'columns',
    Object.keys(columns).reduce((res, key) => {
      res[columns[key]] = width(columns[key]);
      return res;
    }, {})
  )({columns, theme});
};

const tile = ({columns, theme}) => css`
  flex-wrap: wrap;

  /* multiply by -1 to negate the margin, since the container absorbs the additional outer margin of the children) */
  margin: calc(${theme.spacing.sm} / 2 * -1);

  > * {
    flex-basis: auto;
    flex-grow: 0;
    ${columnWidth({columns, theme})};
    /* ↓ half the value, to avoid doubling up the space between columns */
    margin: calc(${theme.spacing.sm} / 2);
  }
`;

const cluster = ({theme}) => css`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  /* multiply by -1 to negate the margin, since the container absorbs the additional outer margin of the children) */
  margin: calc(${theme.spacing.sm} / 2 * -1);

  > * {
    /* ↓ half the value, to avoid doubling up the space between columns */
    margin: calc(${theme.spacing.sm} / 2);
  }
`;

export const layout = responsive('layout', {
  basic,
  right,
  equal,
  split,
  stack,
  tile,
  cluster,
  reset,
});

const setSpacing = (top, left) => css`
  && > * + * {
    margin-top: ${top};
    margin-left: ${left};
  }
`;
const leftSpacing = ({theme}) => setSpacing(null, theme.spacing.sm);
const topSpacing = ({theme}) => setSpacing(theme.spacing.sm, null);

export const spacing = responsive('layout', {
  basic: leftSpacing,
  right: leftSpacing,
  equal: leftSpacing,
  stack: topSpacing,
  reset: () => ({'&& > * + *': {marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0}}),
});

export const wrapper = () => css`
  /* ↓ Suppress horizontal scrolling caused by the negative margin in some circumstances */
  overflow: hidden;
`;
