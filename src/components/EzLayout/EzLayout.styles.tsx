import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import {responsive} from '../../styles';

export const base = () => css`
  display: flex;
`;

const reset = () => css`
  flex-direction: row;
  flex-wrap: nowrap;

  > * {
    flex-basis: auto;
    flex-grow: 0;
  }
`;

const equal = () => css`
  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

const stack = () => css`
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
`;

export const layout = responsive('layout', {
  equal,
  stack,
  tile,
  cluster,
  reset,
});

const cx = (...args) => args.reduce((res, v) => css(res, v), {});
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

const justifyStart = {justifyContent: 'flex-start'};
const justifyCenter = {justifyContent: 'center'};
const justifyEnd = {justifyContent: 'flex-end'};
const justifyNormal = {justifyContent: 'normal'};
const justifyBetween = {justifyContent: 'space-between'};
const itemsStretch = {alignItems: 'stretch'};
const itemsStart = {alignItems: 'flex-start'};
const itemsCenter = {alignItems: 'center'};
const itemsEnd = {alignItems: 'flex-end'};
const itemsNormal = {alignItems: 'normal'};

const nestedResponsive = (propName, options) => defaultValue => (props, breakpoint) => {
  if (!(propName in props)) return defaultValue;
  if (!breakpoint) return responsive(propName, options);

  const config = props[propName];

  // i.e. alignX="left"
  if (typeof config === 'string') return options[config];

  // otherwise alignX={base: 'left', medium: 'center'}
  return options[config[breakpoint]];
};

const horizontal = nestedResponsive('alignX', {
  left: justifyStart,
  center: justifyCenter,
  right: justifyEnd,
});

const vertical = nestedResponsive('alignY', {
  top: itemsStart,
  center: itemsCenter,
  bottom: itemsEnd,
  stretch: itemsStretch,
});

export const alignX = responsive('layout', {
  basic: justifyStart,
  right: justifyEnd,
  equal: justifyNormal,
  split: justifyBetween,
  stack: justifyNormal,
  tile: justifyNormal,
  cluster: horizontal(justifyStart),
});

export const alignY = responsive('layout', {
  basic: vertical(itemsCenter),
  right: vertical(itemsCenter),
  equal: vertical(itemsCenter),
  split: vertical(itemsCenter),
  stack: itemsNormal,
  tile: vertical(itemsStretch),
  cluster: vertical(itemsCenter),
});
