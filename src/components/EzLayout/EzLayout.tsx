import {base, layout, spacing} from './EzLayout.styles';
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

type LayoutTypes = 'basic' | 'right' | 'equal' | 'split' | 'stack';
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

/**
 * defaultProps
 * @property {string} layout - uses the basic layout by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzLayout.defaultProps = {
  layout: 'basic',
};

/**
 * @component
 */
export default EzLayout;
