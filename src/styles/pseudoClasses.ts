import {StandardPropertiesHyphen, Color} from 'csstype';
import {darken} from '.';

type CSSPropertyName = keyof StandardPropertiesHyphen;

type Options = {
  color: Color;
  focusColor?: Color;
};

const camel = str => str.replace(/(-[a-z])/g, x => x.toUpperCase()).replace(/-/g, '');

export default (cssPropertyName: CSSPropertyName, {color, focusColor}: Options) => {
  const camelName = camel(cssPropertyName);

  const pseudoStates = {
    ':hover': {[camelName]: darken(color, 0.15)},
    ':focus': focusColor && {[camelName]: focusColor},
    ':active': {[camelName]: darken(color, 0.25)},
  };

  return {
    [camelName]: color,
    ':enabled': pseudoStates,
    'a&': pseudoStates,
  };
};
