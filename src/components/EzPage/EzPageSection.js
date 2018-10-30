import PropTypes from 'prop-types';
import {PageSection} from './EzPageSection.styles';

/**
 * Page Sections are used to organize sections of content within EzPage.
 */
const EzPageSection = PageSection;

EzPageSection.propTypes = {
  /**
   * The content to render inside the section
   */
  children: PropTypes.node.isRequired,
  /**
   * The kind of section to render
   */
  use: PropTypes.oneOf(['aside', 'main']).isRequired,
};

EzPageSection.displayName = 'EzPageSection';

/**
 * @component
 */
export default EzPageSection;
