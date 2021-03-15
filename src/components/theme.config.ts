/* eslint-disable filenames/match-exported */
import {
  createCss,
  TConditions,
  TTheme,
  TThemeMap,
  CSSPropertiesToTokenScale,
  TStyledSheet,
  IConfig
} from '@stitches/core';

type Globals = 'inherit' | 'initial' | 'revert' | 'unset';
type FromTheme<T> = `$${Extract<keyof T, string | number>}`;
type Token<T> = FromTheme<T> | Globals | number | (string & {});
type TokenValue<T extends keyof TTheme> = T;

const stitches = createCss({
  theme: {
    colors: {
      gray600: '#8b99a6',

      transparent: 'transparent',

      // aliases
      deemphasisText: '$gray600',
    },
    fontWeights: {
      bold: 700,
    },
    space: {
      250: '20px',
    },
    shadows: {
      opacity40: 0.4,
    },
    radii: {
      round: '50%',
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
    })
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
  [k in keyof U]: U[k] extends (theme: any) => 
    (value: infer V) => any 
      ? Token<T[ExtractToken<V>]>
      : never
}

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
      return [
        stitches.toString(),
        config.toString(),
      ].join(' ');
    }
  } as any;
}
