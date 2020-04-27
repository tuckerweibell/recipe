/** @jsx jsx */
import {jsx} from '@emotion/core';
import {base, layout, spacing, wrapper} from './EzLayout.styles';
import styled from '../../themes/styled';
import {breakpoints} from '../../themes/standard';

/**
 * Union of properties from T
 */
type Properties<T> = {[K in keyof T]: Pick<T, K>}[keyof T];

/**
 * Require at least one of the properties of T
 */
type RequireAtLeastOne<T> = Required<Properties<T>>;

type LayoutTypes = 'basic' | 'right' | 'equal' | 'split' | 'stack' | 'tile';
type Sizes = keyof typeof breakpoints;
type Breakpoints = {[P in Sizes]?: LayoutTypes};
type Responsive = {base: LayoutTypes} & Breakpoints & RequireAtLeastOne<Breakpoints>;

type LayoutProps = {
  layout?: LayoutTypes | Responsive;
};

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const EzLayout = styled.div<LayoutProps>(base, layout, spacing);
const Wrapper = styled.div<any>(wrapper);

/**
 * defaultProps
 * @property {string} layout - uses the basic layout by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzLayout.defaultProps = {
  layout: 'basic',
};

const requiresNegativeMargin = layoutProp =>
  (typeof layoutProp === 'object' && 'tile' in layoutProp) || layoutProp === 'tile';

/**
 * @component
 */
export default props => {
  if (!requiresNegativeMargin(props.layout)) return <EzLayout {...props} />;

  // Note: The layout component needs to the respect white space that might be applied by a parent layout component.
  // A wrapper element is included here to insulate content from the applied negative margin.
  return (
    <Wrapper>
      <EzLayout {...props} />
    </Wrapper>
  );
};
