import PropTypes from 'prop-types';
import {base, layout, spacing} from './EzLayout.styles';
import styled from '../../themes/styled';

const layoutTypes = PropTypes.oneOf(['basic', 'right', 'equal', 'split', 'stack']);

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const EzLayout = styled.div(base, layout, spacing);

EzLayout.propTypes = {
  /**
   * Controls the arrangement of items within the layout.
   */
  layout: PropTypes.oneOfType([layoutTypes, PropTypes.shape({base: layoutTypes})]),
};

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
