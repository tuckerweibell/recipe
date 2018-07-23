import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base} from './EzPageContent.styles';
import {standard} from '../../themes';

/**
 * Page Content is the main content container for a page.
 */
const EzPageContent = styled.div(base);

EzPageContent.propTypes = {
  /**
   * The content to render inside this component.
   */
  children: PropTypes.node.isRequired,
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
EzPageContent.defaultProps = {
  theme: standard,
};

EzPageContent.displayName = 'EzPageContent';

/**
 * @component
 */
export default EzPageContent;
