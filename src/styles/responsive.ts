import {css} from '@emotion/core';
import variant from 'styled-component-variant';

const getValue = (props, val, name) => (typeof val === 'function' ? val(props, name) : val);
const createMediaQuery = (n, styles, reset) => css`
  @media screen and (min-width: ${n}) {
    ${reset};
    ${styles};
  }
`;

export default (prop, values) => props => {
  if (!(prop in props)) return undefined;

  const propValue = props[prop];

  if (typeof propValue === 'string') return variant(prop, values)(props);

  const base = propValue && propValue.base;

  if (!base)
    throw new Error('Argument Error: A base variant must be provided when using responsive props.');

  const {theme: {breakpoints} = {breakpoints: undefined}} = props;

  if (!breakpoints)
    throw new Error('Argument Error: breakpoints must be provided when variant is an Array.');

  const responsive = Object.keys(breakpoints).reduce((styles, breakpointName) => {
    const variantName = propValue[breakpointName];

    if (!variantName) return styles;

    return [
      ...styles,
      createMediaQuery(
        breakpoints[breakpointName],
        getValue(props, values[variantName], breakpointName),
        getValue(props, values.reset, breakpointName)
      ),
    ];
  }, []);

  return css`
    ${getValue(props, values[base], 'base')};
    ${responsive};
  `;
};
