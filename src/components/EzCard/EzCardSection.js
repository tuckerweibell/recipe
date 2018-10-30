import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base} from './EzCardSection.styles';

/**
 * Card Sections represent chunks of content within a Card.
 */
const EzCardSection = styled.div(base);

EzCardSection.propTypes = {
  /**
   * The content to render in the card section.
   */
  children: PropTypes.node,
};

EzCardSection.displayName = 'EzCardSection';

/**
 * @component
 */
export default EzCardSection;
