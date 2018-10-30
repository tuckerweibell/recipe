import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base} from './EzPageContent.styles';
/**
 * Page Content is the main content container for a page.
 */
const EzPageContent = styled.div(base);

EzPageContent.propTypes = {
  /**
   * The content to render inside this component.
   */
  children: PropTypes.node.isRequired,
};

EzPageContent.displayName = 'EzPageContent';

/**
 * @component
 */
export default EzPageContent;
