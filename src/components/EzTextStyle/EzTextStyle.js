import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {variants} from '../../styles/';
import {standard} from '../../themes';
import {strong, subdued} from './styles';

const use = variants('use', {
  strong,
  subdued,
});

/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = styled('span')(use);

EzTextStyle.propTypes = {
  /**
   * The content that should be styled.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  /**
   * Describes the usage of the text in order to determine visual presentation.
   */
  use: PropTypes.oneOf(['strong', 'subdued']).isRequired,
};

/**
 * defaultProps
 * @property {object} theme - used the standard theme by default.
 */
EzTextStyle.defaultProps = {
  theme: standard,
};

/**
 * @component
 */
export default EzTextStyle;
