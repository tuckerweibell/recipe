import PropTypes from 'prop-types';
import variant from 'styled-component-variant';
import {strong, subdued} from './EzTextStyle.styles';
import styled from '../../themes/styled';

const use = variant('use', {
  strong,
  subdued,
});

type Props = {
  use: string;
};
/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = styled.span<Props>(use);

//@ts-ignore
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
 * @component
 */
export default EzTextStyle;
