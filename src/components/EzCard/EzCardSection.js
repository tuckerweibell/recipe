import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base} from './EzCardSection.styles';
import {standard} from '../../themes';

/**
 * Card Sections represent chunks of content within a Card.
 */
const EzCardSection = styled.div(base);

EzCardSection.propTypes = {
  /**
   * The content to render in the card section.
   */
  children: PropTypes.node,
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
EzCardSection.defaultProps = {
  theme: standard,
};

EzCardSection.displayName = 'EzCardSection';

/**
 * @component
 */
export default EzCardSection;
