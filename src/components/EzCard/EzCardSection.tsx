import PropTypes from 'prop-types';
import {base} from './EzCardSection.styles';
import styled from '../../themes/styled';

type Props = {
  theme?: object;
};

/**
 * Card Sections represent chunks of content within a Card.
 */
const EzCardSection = styled.div<Props>(base);

//@ts-ignore
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
