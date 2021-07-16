/* eslint-disable filenames/match-exported */
import {createCss} from '../../packages/@stitches/core';
import type {
  TMedias,
  TTheme,
  TThemeMap,
  CSSPropertiesToTokenScale,
  TStyledSheet,
  IConfig,
} from '../../packages/@stitches/core';
import {createRoot} from '@ezcater/snitches';
import {PlaceItemsProperty} from 'csstype';

type Globals = 'inherit' | 'initial' | 'revert' | 'unset';
type FromTheme<T> = `$${Extract<keyof T, string | number>}`;
type Token<T> = FromTheme<T> | Globals | number | (string & {});
type TokenValue<T extends keyof TTheme> = T;

// disable stitches style insertion, Snitches is used to insert styles instead.
const root = {root: createRoot()};

const stitches = createCss({
  ...root,
  theme: {
    borderWidths: {
      thin: '1px',
    },
    colors: {
      blue200: '#ebf7ff',
      blue300: '#c1def4',
      blue500: '#77b1e2',
      blue600: '#3e90d6',
      blue650: '#3a81be',
      blue700: '#1e70bf',
      blue800: '#316da1',
      blue900: '#2b608e',
      blue950: '#0f4879',
      gray100: '#fafafb',
      gray200: '#f4f7f8',
      gray300: '#e6e9eb',
      gray400: '#ced4d9',
      gray500: '#b2b3b3',
      gray600: '#8b99a6',
      gray700: '#565a5c',
      gray800: '#373d43',
      green200: '#f3f8eb',
      green500: '#c7dfa7',
      green600: '#88bb40',
      green700: '#609b3b',
      purple200: '#f8f3fa',
      purple600: '#9b59b6',
      purple700: '#7f379c',
      red200: '#fdefef',
      red500: '#f7c1c1',
      red600: '#ec5353',
      red700: '#ae4d4d',
      red800: '#c84646',
      red900: '#b03e3e',
      red950: '#972f2f',
      teal200: '#effaf8',
      teal600: '#1bbc9b',
      teal700: '#008066',
      white: '#fff',
      yellow200: '#fcf6e5',
      yellow500: '#f4d689',
      yellow600: '#e9a801',
      yellow700: '#926a00',

      transparent: 'transparent',

      // semantic
      positiveBg: '$green200',
      positiveText: '$green700',
      negativeBg: '$red200',
      negative: '$red600',
      negativeText: '$red700',
      cautionBg: '$yellow200',
      cautionText: '$yellow700',
      informativeBg: '$blue200',
      informativeText: '$blue700',

      // aliases
      text: '$gray700',
      textDisabled: '$gray600',
      deemphasisText: '$gray600',
      focusRing: '$blue600',
      icon: '$gray600',
      border: '$gray400',
    },
    fonts: {
      sans: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
    },
    fontSizes: {
      75: '12px',
      100: '14px',
      200: '16px',
      300: '18px',
      450: '21px',
      800: '32px',
      // aliases
      text: 'var(--recipe-base-font-size, $200)',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    lineHeights: {
      1: 1,
      // aliases
      snug: 1.35,
      tight: 1.25,
    },
    radii: {
      // sizes
      regular: '4px',

      // shapes
      pill: '9999px',
      round: '50%',
    },
    sizes: {
      50: '4px',
      150: '12px',
      200: '16px',
      400: '32px',
      750: '60px',
      full: '100%',
    },
    space: {
      25: '2px',
      50: '4px',
      75: '6px',
      100: '8px',
      150: '12px',
      200: '16px',
      250: '20px',
      300: '24px',
      400: '32px',
      600: '48px',
      750: '60px',
    },
    shadows: {
      sm: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',
      'focus-ring': '$colors$focusRing 0px 0px 2px 2px',
      opacity40: 0.4,
      opacity45: 0.45,
    },
  },
  utils: {
    // util for https://developer.mozilla.org/en-US/docs/Web/CSS/inset
    inset: () => (value: TokenValue<'space'>) => ({
      top: value,
      right: value,
      bottom: value,
      left: value,
    }),
    py: () => (value: TokenValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: () => (value: TokenValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: () => (value: TokenValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: () => (value: TokenValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    // util for IE support for https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
    placeItems: () => (value: PlaceItemsProperty) => ({
      justifyContent: value,
      alignItems: value,
    }),
    srOnly: () => () => ({
      border: 'none',
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    }),
    gap: () => (value: TokenValue<'space'>) => ({
      gap: value,
      '.no-flexgap &': {
        margin: `calc(${value} / 2 * -1)`,
      },
      '.no-flexgap && > *': { margin: `calc(${value} / 2)`},
    }),
    roundedTop: () => (value: TokenValue<'radii'>) => ({borderTopLeftRadius: value, borderTopRightRadius: value}),
    roundedBottom: () => (value: TokenValue<'radii'>) => ({borderBottomLeftRadius: value, borderBottomRightRadius: value}),
    roundedLeft: () => (value: TokenValue<'radii'>) => ({borderTopLeftRadius: value, borderBottomLeftRadius: value}),
    roundedRight: () => (value: TokenValue<'radii'>) => ({borderTopRightRadius: value, borderBottomRightRadius: value}),
  },
  media: {
    base: '(min-width: 0px)',
    baseToMedium: '(max-width: 767.9375px)',
    baseToLarge: '(max-width: 1060.9375px)',
    medium: '(min-width: 768px)',
    mediumToLarge: '(min-width: 768px) and (max-width: 1060.9375px)',
    large: '(min-width: 1061px)',
  },
});

type BaseConfig = typeof stitches.config;

const resets = [stitches.theme as {toString(): string}];

function reset() {
  (stitches as any).sheet.reset();

  // reinitialize each theme/global by calling toString
  resets.forEach(c => c.toString());
}

// override stitches reset fn to allow for resetting of extended themes
(stitches as any).reset = reset;

export default stitches;

type ExtractToken<P> = P extends TokenValue<infer T> ? T : never;

type MapUtils<U, T extends TTheme> = {
  [k in keyof U]: U[k] extends (theme: any) => (value: infer V) => any
    ? Token<T[ExtractToken<V>]>
    : never;
};

const getCustomProperties = theme => {
  /** Object of custom property styles. */
  const styles = {};

  for (const scaleName in theme) {
    for (const tokenName in theme[scaleName]) {
      styles[`$${scaleName}-${tokenName}`] = String(
        theme[scaleName][tokenName]
      ).replace(/\$[$\w-]+/g, $1 => (/[^]\$/.test($1) ? $1 : `$${scaleName}${$1}`));
    }
  }

  return styles;
};

/**
 * Extends the base stitches configuration with additional theme tokens.
 */
export function mergeCss<
  Medias extends TMedias,
  Theme extends TTheme = Record<string, unknown>,
  Utils = BaseConfig['utils'],
  Prefix = '',
  ThemeMap extends TThemeMap = CSSPropertiesToTokenScale,
  MergedTheme = Theme & BaseConfig['theme']
>(
  extension?: IConfig<Medias, Theme, Utils, Prefix, ThemeMap>
): TStyledSheet<
  BaseConfig['media'],
  MergedTheme,
  MapUtils<Utils, MergedTheme>,
  Prefix,
  ThemeMap & BaseConfig['themeMap']
> {
  const vars = getCustomProperties(extension.theme);

  const globals = stitches.global({':root': vars});

  resets.push(globals);
  
  globals();

  const css = config => {
    const definition = stitches.css(config);
    const {variants} = config;

    if (!variants) return definition;

    return (props = {}) => {
      const mappedProps = {...props};

      Object.keys(variants).forEach(name => {
        const value = props[name];

        if (name in props && typeof value === 'object') {
          mappedProps[name] = addAtPrefix(value || {});
        }
      });

      return definition(mappedProps);
    };
  }

  return {
    ...stitches,
    css,
  } as any;
}

const addAtPrefix = (obj: Record<string, unknown>) => {
  return Object.entries(obj).reduce((res, [key, value]) => ({
    ...res,
    [key.includes('@') ? key : `@${key}`]: value,
  }), {});
}
