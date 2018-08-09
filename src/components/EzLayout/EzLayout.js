import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base, layout, spacing} from './EzLayout.styles';
import {standard} from '../../themes';

const layoutTypes = PropTypes.oneOf(['basic', 'right', 'equal', 'split', 'stack']);

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const EzLayout = styled('div')(base, layout, spacing);

EzLayout.propTypes = {
  /**
   * Controls the arrangement of items within the layout.
   */
  layout: PropTypes.oneOfType([layoutTypes, PropTypes.shape({base: layoutTypes})]),
  /**
   * The theme controlling the default styles.
   */
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

/**
 * defaultProps
 * @property {string} layout - uses the basic layout by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzLayout.defaultProps = {
  layout: 'basic',
  theme: standard,
};

/**
 * @component
 */
export default EzLayout;
