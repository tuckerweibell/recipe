import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {horizontal, vertical} from './EzContentGroup.styles';

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
};

EzContentGroup.displayName = 'EzContentGroup';

/**
 * @component
 */
export default EzContentGroup;
