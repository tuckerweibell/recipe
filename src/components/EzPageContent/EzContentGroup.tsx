import PropTypes from 'prop-types';
import {horizontal, vertical} from './EzContentGroup.styles';
import styled from '../../themes/styled';

type ContentGroupProps = {
  horizontal?: boolean;
};
/**
 * Content groups are used to organize sections of content within EzPageContent.
 */
const EzContentGroup = styled.div<ContentGroupProps>(horizontal, vertical);

//@ts-ignore
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
