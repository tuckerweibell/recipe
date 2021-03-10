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

const stitches = createCss({
  theme: {
    colors: {
      gray600: '#8b99a6',

      // aliases
      deemphasisText: '$gray600',
    },
    fontWeights: {
      bold: 700,
    },
  },
  utils: {},
  conditions: {
    base: '@media all',
    medium: '@media (min-width: 768px)',
    large: '@media (min-width: 1061px)',
  },
});

type BaseConfig = typeof stitches.config;

export default stitches;
interface IObject {
  [key: string]: any;
}

type TUnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

export const deepMerge = <T extends IObject[]>(...objects: T): TUnionToIntersection<T[number]> => {
  const result: any = {};

  function merge(obj) {
    Object.entries(obj).forEach(([key, value]) => {
      result[key] =
        typeof value === 'object' && typeof result[key] === 'object'
          ? deepMerge(result[key], value)
          : value;
    });
  }

  objects.forEach(merge);

  return result;
};

/**
 * Extends the base stitches configuration with additional theme tokens.
 */
export function mergeCss<
  Conditions extends TConditions,
  Theme extends TTheme = Record<string, unknown>,
  Utils = Record<string, unknown>,
  Prefix = '',
  ThemeMap extends TThemeMap = CSSPropertiesToTokenScale
>(
  extension?: IConfig<Conditions, Theme, Utils, Prefix, ThemeMap>
): TStyledSheet<
  Conditions & BaseConfig['conditions'],
  Theme & BaseConfig['theme'],
  Utils & BaseConfig['utils'],
  Prefix,
  ThemeMap & BaseConfig['themeMap']
> {
  const mergedConfig = deepMerge(stitches.config, extension);
  return createCss(mergedConfig) as any;
}
