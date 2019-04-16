import {StandardPropertiesHyphen, Color} from 'csstype';
import {darken} from '.';

type CSSPropertyName = keyof StandardPropertiesHyphen;

type Options = {
  color: Color;
  focusColor?: Color;
};

export default (style: CSSPropertyName, {color, focusColor}: Options) => ({
  [style]: color,
  '&:hover:enabled': {[style]: darken(color, 0.15)},
  '&:focus:enabled': focusColor && {[style]: focusColor},
  '&:active:enabled': {[style]: darken(color, 0.25)},
});
