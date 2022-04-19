/**
 * Maps responsive props to media queries that apply *between* breakpoints,
 * instead of at a specific breakpoint-and-up.
 *
 * This method can be used to avoid the need to apply a "reset" between breakpoints
 * in order to to remove unwanted styles from the prior layout. The breakpoint
 * requested in the responsive prop (e.g. min-width) is combined with the "next"
 * requested breakpoint to from a range-based media query e.g (min-width and max-width).
 *
 * This process also obviates the need to control the order of insertion of media queries.
 *
 * @param props - The component's props.
 * @param variantNames - The names of each prop that represents a responsive variant.
 * @example
 * ```jsx
 * // input
 * {base: 'cluster', medium: 'basic', large: 'split'}
 *
 * // output
 * {baseToMedium: 'cluster', mediumToLarge: 'basic', large: 'split'}
 * ```
 */
export const responsiveProps = (props: Record<string, unknown>, ...variantNames) => {
  const mapped = variantNames.reduce((res, variantName) => {
    const value = props[variantName];

    // responsive variants accept an object in the form: {base: [value], [breakpoint]: [value]}
    if (typeof value !== 'object') return res;

    const bps = Object.keys(value);

    const {base, medium, ...out} = value as Record<string, unknown>;

    res[variantName] = out;

    if (medium !== undefined) {
      out.baseToMedium = base;
      out[bps.includes('large') ? 'mediumToLarge' : 'medium'] = medium;
    } else out[bps.includes('large') ? 'baseToLarge' : 'base'] = base;

    return res;
  }, {});

  return {...props, ...mapped};
};

export type ResponsiveValue<Values> =
  | Values
  | {
      base: Values;
      medium?: Values;
      large?: Values;
    };

/**
 * Allows boolean props to accept only boolean values (instead of 'true' | 'false').
 */
type MorphVariant<T> = T extends 'true' ? true : T extends 'false' ? false : T;

type VariantValues<IStyleRule extends {variants: any}, Variants = IStyleRule['variants']> = {
  [k in keyof Variants]?: ResponsiveValue<MorphVariant<keyof Variants[k]>>;
};

export type VariantProps<IStyleRule extends {variants: any}> = VariantValues<IStyleRule>;

export default responsiveProps;
