import {css} from '@emotion/core';
import variant from 'styled-component-variant';

const getValue = (props, val, name) => (typeof val === 'function' ? val(props, name) : val);
const createMediaQuery = (n, styles, reset) => css`
  @media screen and (min-width: ${n}) {
    ${reset};
    ${styles};
  }
`;

const createConfig = (options, fn) =>
  Object.keys(options).reduce((res, key) => ({...res, [options[key]]: fn(options[key])}), {});

export default (prop, config) => props => {
  if (!(prop in props) || props[prop] === undefined) return undefined;

  const options = props[prop];
  const values = typeof config === 'function' ? createConfig(options, config) : config;

  if (typeof options === 'string') return variant(prop, values)(props);

  const base = options && options.base;

  if (!base) {
    // eslint-disable-next-line no-console
    console.error(
      `A base variant must be provided when using responsive props. You provided: ${options &&
        JSON.stringify(options)}`
    );
    return undefined;
  }

  const breakpoints = props?.theme?.breakpoints;

  if (!breakpoints) {
    // eslint-disable-next-line no-console
    console.error(
      `Breakpoints must be defined when using responsive props on components. No breakpoints where found on your current theme.`
    );
    return undefined;
  }

  const responsive = Object.keys(breakpoints).reduce((styles, breakpointName) => {
    const variantName = options[breakpointName];

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
