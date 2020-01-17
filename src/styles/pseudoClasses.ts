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
  return {
    [camelName]: color,
    '&:hover:enabled': {[camelName]: darken(color, 0.15)},
    '&:focus:enabled': focusColor && {[camelName]: focusColor},
    '&:active:enabled': {[camelName]: darken(color, 0.25)},
  };
};
