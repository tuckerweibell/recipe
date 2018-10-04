import PropTypes from 'prop-types';
import {standard} from '../../themes';
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

/**
 * defaultProps
 * @property {object} theme - used the standard theme by default.
 */
EzPageSection.defaultProps = {
  theme: standard,
};

EzPageSection.displayName = 'EzPageSection';

/**
 * @component
 */
export default EzPageSection;
