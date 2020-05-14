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
  const width = n => ({flexBasis: `calc(${n < 2 ? 100 : 100 / n}% - ${theme.spacing.sm})`});

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

  > * {
    flex-grow: 0;
    ${columnWidth({columns, theme})};
  }
`;

const cluster = () => css`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
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

const getValue = (props, val) => (typeof val === 'function' ? val(props) : val);
const cx = (...args) => props => args.reduce((res, v) => css(res, getValue(props, v)), {});

const ml = v => ({marginLeft: v});
const mr = v => ({marginRight: v});
const mt = v => ({marginTop: v});
const mb = v => ({marginBottom: v});
const mx = v => cx(ml(v), mr(v), mt(v), mb(v));

export const spacing = props => ({
  '&': responsive('layout', {
    /* multiply by -1 to negate the margin, since the container absorbs the additional outer margin of the children) */
    tile: mx(`calc(${props.theme.spacing.sm} / 2 * -1)`),
    cluster: mx(`calc(${props.theme.spacing.sm} / 2 * -1)`),
    reset: mx(0),
  })(props),
  '> *': responsive('layout', {
    /* ↓ half the value, to avoid doubling up the space between columns */
    tile: mx(`calc(${props.theme.spacing.sm} / 2)`),
    cluster: mx(`calc(${props.theme.spacing.sm} / 2)`),
    reset: mx(0),
  })(props),
  '> * + *': responsive('layout', {
    basic: ml(props.theme.spacing.sm),
    right: ml(props.theme.spacing.sm),
    equal: ml(props.theme.spacing.sm),
    stack: mt(props.theme.spacing.sm),
    tile: mx(`calc(${props.theme.spacing.sm} / 2)`),
    cluster: mx(`calc(${props.theme.spacing.sm} / 2)`),
    reset: mx(0),
  })(props),
});

export const wrapper = () => css`
  /* ↓ Suppress horizontal scrolling caused by the negative margin in some circumstances */
  overflow: hidden;
`;
