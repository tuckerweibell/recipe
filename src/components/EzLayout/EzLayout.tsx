import {base, layout, spacing} from './EzLayout.styles';
import styled from '../../themes/styled';

type LayoutTypes = 'basic' | 'right' | 'equal' | 'split' | 'stack';
type Large = {base: 'stack'; large: LayoutTypes};
type Medium = {base: 'stack'; medium: LayoutTypes};

type LayoutProps = {
  layout: LayoutTypes | Large | Medium;
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
