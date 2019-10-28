import styled, {CreateStyled, StyledOptions} from '@emotion/styled';
import * as standard from './standard';

export type Theme = typeof standard;
export type Themed = {theme: Theme};

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

export default createStyled as CreateStyled<Theme>;
