import styled, {CreateStyled, StyledOptions} from '@emotion/styled';
import {Interpolation} from '@emotion/core';
import * as standard from './standard';

const bps = {medium: '768px', large: '1061px'};

export function mq(bp: string, i: Interpolation): Interpolation {
  return {[`@media (min-width: ${bp in bps ? bps[bp] : bp})`]: i};
}

const wrapWithStandardTheme = interpolation => {
  if (typeof interpolation !== 'function') return interpolation;
  return ({theme, ...props}) =>
    interpolation({
      ...props,
      theme: Object.keys(theme).length ? theme : standard,
    });
};

const createStyled = (tag: any, options?: StyledOptions) => {
  const createStyledComponent = styled(tag, options);
  return function styledWithStandardTheme() {
    // eslint-disable-next-line prefer-rest-params
    const argsWithStandardTheme = [...arguments].map(wrapWithStandardTheme);
    const Component = createStyledComponent(...argsWithStandardTheme);
    // Tag component for analytics
    Object.assign(Component, {__recipe: process.env.npm_package_version});
    return Component;
  };
};

// avoid importing private @emotion/styled/src/tags by copying tags (so we can write styled.span etc)
const keys = Object.keys(createStyled);
Object.keys(styled)
  .filter(n => keys.indexOf(n) === -1)
  .forEach(tagName => {
    createStyled[tagName] = createStyled(tagName);
  });

export default createStyled as CreateStyled<typeof standard>;
