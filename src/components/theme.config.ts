/* eslint-disable filenames/match-exported */
import {
  createCss,
  TConditions,
  TTheme,
  TThemeMap,
  CSSPropertiesToTokenScale,
  TStyledSheet,
  IConfig,
} from '@stitches/core';

type Globals = 'inherit' | 'initial' | 'revert' | 'unset';
type FromTheme<T> = `$${Extract<keyof T, string | number>}`;
type Token<T> = FromTheme<T> | Globals | number | (string & {});
type TokenValue<T extends keyof TTheme> = T;

const stitches = createCss({
  theme: {
    colors: {
      blue200: '#ebf7ff',
      blue700: '#1e70bf',
      gray200: '#f4f7f8',
      gray600: '#8b99a6',
      gray700: '##565a5c',
      green200: '#f3f8eb',
      green700: '#609b3b',
      purple200: '#f8f3fa',
      purple700: '#7f379c',
      red200: '#fdefef',
      red700: '#ae4d4d',
      teal200: '#effaf8',
      teal700: '#008066',
      yellow200: '#fcf6e5',
      yellow700: '#926a00',

      transparent: 'transparent',

      // semantic
      positiveBg: '$green200',
      positiveText: '$green700',
      negativeBg: '$red200',
      negativeText: '$red700',
      cautionBg: '$yellow200',
      cautionText: '$yellow700',
      informativeBg: '$blue200',
      informativeText: '$blue700',

      // aliases
      deemphasisText: '$gray600',
    },
    fontSizes: {
      75: '12px',
      200: '16px',
    },
    fontWeights: {
      bold: 700,
    },
    lineHeights: {
      1: 1,
    },
    radii: {
      // sizes
      regular: '4px',

      // shapes
      pill: '9999px',
      round: '50%',
    },
    space: {
      50: '4px',
      100: '8px',
      150: '12px',
      250: '20px',
    },
    shadows: {
      opacity40: 0.4,
    },
  },
  utils: {
    py: () => (value: TokenValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: () => (value: TokenValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
  conditions: {
    base: '@media all',
    medium: '@media (min-width: 768px)',
    large: '@media (min-width: 1061px)',
  },
});

type BaseConfig = typeof stitches.config;

export default stitches;

type ExtractToken<P> = P extends TokenValue<infer T> ? T : never;

type MapUtils<U, T extends TTheme> = {
  [k in keyof U]: U[k] extends (theme: any) => (value: infer V) => any
    ? Token<T[ExtractToken<V>]>
    : never;
};

/**
 * Extends the base stitches configuration with additional theme tokens.
 */
export function mergeCss<
  Conditions extends TConditions,
  Theme extends TTheme = Record<string, unknown>,
  Utils = BaseConfig['utils'],
  Prefix = '',
  ThemeMap extends TThemeMap = CSSPropertiesToTokenScale,
  MergedTheme = Theme & BaseConfig['theme']
>(
  extension?: IConfig<Conditions, Theme, Utils, Prefix, ThemeMap>
): TStyledSheet<
  BaseConfig['conditions'],
  MergedTheme,
  MapUtils<Utils, MergedTheme>,
  Prefix,
  ThemeMap & BaseConfig['themeMap']
> {
  const config = createCss(extension);

  return {
    ...stitches,
    toString() {
      return [stitches.toString(), config.toString()].join(' ');
    },
  } as any;
}
