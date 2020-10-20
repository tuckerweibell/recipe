import {css} from '@emotion/core';
import {responsive} from '../../styles';
import './vars.css';

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

const space = 'var(--recipe-layout-gap)';
const flexBasisForColumnCount = n => `calc(${n < 2 ? 100 : 100 / n}% - ${space})`;

const columnWidth = props => {
  const {columns} = props;
  if (typeof columns !== 'object') return {flexBasis: flexBasisForColumnCount(columns)};
  return cx(
    {flexBasis: 'var(--recipe-layout-tile-col-count)'},
    responsive('columns', value => ({
      '--recipe-layout-tile-col-count': flexBasisForColumnCount(value),
    }))(props)
  );
};

const tile = props => css`
  flex-wrap: wrap;

  > * {
    flex-grow: 0;
    ${columnWidth(props)};
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

// approach for ensuring consistent gap between items
// for tile and cluster layouts:
// https://every-layout.dev/layouts/cluster/
// tl;dr: uses negative margin on container, to absorb
// extra margin outside of items (to give the effect that
// there is only margin between items)
const outerNegativeMargin = props =>
  responsive('layout', {
    /* multiply by -1 to negate the margin, since the container absorbs the additional outer margin of the children) */
    tile: mx(`calc(${space} / 2 * -1)`),
    cluster: mx(`calc(${space} / 2 * -1)`),
    reset: mx(0),
  })(props);

const innerPositiveMargin = props =>
  responsive('layout', {
    /* ↓ half the value, to avoid doubling up the space between columns */
    tile: mx(`calc(${space} / 2)`),
    cluster: mx(`calc(${space} / 2)`),
    reset: mx(0),
  })(props);

// spacing for other layouts (between items)
const spacingBetweenItems = props =>
  responsive('layout', {
    basic: ml(space),
    right: ml(space),
    equal: ml(space),
    stack: mt(space),
    tile: mx(`calc(${space} / 2)`),
    cluster: mx(`calc(${space} / 2)`),
    reset: mx(0),
  })(props);

export const spacing = props =>
  css`
    ${outerNegativeMargin(props)};

    && > * {
      ${innerPositiveMargin(props)};
    }

    && > * + * {
      ${spacingBetweenItems(props)};
    }
  `;

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

const horizontalJustify = nestedResponsive('alignX', {
  left: justifyStart,
  center: justifyCenter,
  right: justifyEnd,
});

const horizontalAlign = nestedResponsive('alignX', {
  left: itemsStart,
  center: itemsCenter,
  right: itemsEnd,
  stretch: itemsStretch,
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
  stack: horizontalAlign(itemsNormal),
  tile: justifyNormal,
  cluster: horizontalJustify(justifyStart),
});

export const alignY = responsive('layout', {
  basic: vertical(itemsCenter),
  right: vertical(itemsCenter),
  equal: vertical(itemsCenter),
  split: vertical(itemsCenter),
  stack: justifyNormal,
  tile: vertical(itemsStretch),
  cluster: vertical(itemsCenter),
});
