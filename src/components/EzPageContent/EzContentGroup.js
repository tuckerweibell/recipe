import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {horizontal, vertical} from './EzContentGroup.styles';
import {standard} from '../../themes';

/**
 * Content groups are used to organize sections of content within EzPageContent.
 */
const EzContentGroup = styled.div(horizontal, vertical);

EzContentGroup.propTypes = {
  /**
   * The content to render inside the group.
   */
  children: PropTypes.node.isRequired,
  /**
   * An optional prop specifiying a horizontal layout for the group.
   */
  horizontal: PropTypes.bool,
  /**
   * The theme controlling the default styles.
   */
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

/**
 * defaultProps
 * @property {object} theme - used the standard theme by default.
 */
EzContentGroup.defaultProps = {
  theme: standard,
};

EzContentGroup.displayName = 'EzContentGroup';

/**
 * @component
 */
export default EzContentGroup;
