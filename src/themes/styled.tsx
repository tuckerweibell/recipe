import styled, {CreateStyled, StyledOptions} from 'react-emotion';
import * as standard from './standard';

export type Theme = typeof standard;

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
  return function() {
    const argsWithStandardTheme = [...arguments].map(wrapWithStandardTheme);
    return createStyledComponent(...argsWithStandardTheme);
  };
};

export default createStyled as CreateStyled<Theme>;
