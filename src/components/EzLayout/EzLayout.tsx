/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import {base, layout, spacing, wrapper, alignX, alignY} from './EzLayout.styles';
import {breakpoints} from '../../themes/standard';

/**
 * Union of properties from T
 */
type Properties<T> = {[K in keyof T]: Pick<T, K>}[keyof T];

/**
 * Require at least one of the properties of T
 */
type RequireAtLeastOne<T> = Required<Properties<T>>;

/**
 * Create a type that disallows values for any of the keys of T
 */
type Without<T> = {[P in keyof T]?: never};

type LayoutTypes = 'basic' | 'right' | 'equal' | 'split' | 'stack' | 'tile' | 'cluster';
type Sizes = keyof typeof breakpoints;
type AlignX = 'left' | 'right' | 'center';
type AlignY = 'top' | 'bottom' | 'center' | 'stretch';

/**
 * A type that describes how the layout will adapt to different breakpoints
  @example
  ```
  const options: Responsive<LayoutTypes>  = {
    base: 'stack';
    medium: 'split';
    large: 'tile';
  };
  ```
 */
type Responsive<T> = Partial<Record<'base' | Sizes, T>> & RequireAtLeastOne<Record<Sizes, T>>;

/**
 * The layout prop of the EzLayout component. Accepts either a simple key (one of the LayoutTypes),
 * or a Responsive<LayoutTypes> object describing how the layout will adapt to different
 * breakpoints.
  @example
  ```
  const options: Responsive<LayoutTypes>  = {
    base: 'stack';
    medium: 'split';
    large: 'tile';
  };
  ```
 */
type Layout<T, Set = T> = {
  layout: T | (Responsive<Set> & RequireAtLeastOne<Responsive<T>>);
  alignX?: AlignX | (Responsive<AlignX> & RequireAtLeastOne<Responsive<AlignX>>);
  alignY?: AlignY | (Responsive<AlignY> & RequireAtLeastOne<Responsive<AlignY>>);
};

/**
 *  The required props for the LayoutTypes["tile"] layout variation.
 */
type TileProps = {columns: number | Responsive<number>};

type Props =
  | (TileProps & Layout<'tile', LayoutTypes>)
  | (Partial<Layout<Exclude<LayoutTypes, 'tile'>>> & Without<TileProps>);

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const InnerLayout = styled.div<Props>(base, layout, spacing, alignX, alignY);
const Wrapper = styled.div<any>(wrapper);

const requiresNegativeMargin = layoutProp =>
  (typeof layoutProp === 'object' && 'tile' in layoutProp) || layoutProp === 'tile';

const EzLayout: React.FC<Props> = props => {
  if (!requiresNegativeMargin(props.layout)) return <InnerLayout {...props} />;

  // Note: The layout component needs to the respect white space that might be applied by a parent layout component.
  // A wrapper element is included here to insulate content from the applied negative margin.
  return (
    <Wrapper>
      <InnerLayout {...props} />
    </Wrapper>
  );
};

/**
 * defaultProps
 * @property {string} layout - uses the basic layout by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzLayout.defaultProps = {
  layout: 'basic',
};

export default EzLayout;
