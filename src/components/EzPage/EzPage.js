import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base, resets} from './EzPage.styles';
import {childStyles} from './styles';

/**
 * Page is the main content container for a page.
 */
const EzPage = styled.div(base, resets, childStyles);

EzPage.propTypes = {
  /**
   * The content to render inside this component.
   */
  children: PropTypes.node.isRequired,
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
