import variant from 'styled-component-variant';
import {strong, subdued} from './EzTextStyle.styles';
import styled from '../../themes/styled';

const use = variant('use', {
  strong,
  subdued,
});

type StringOrNumber = string | number;

type Props = {
  use: 'strong' | 'subdued';
  children: StringOrNumber | StringOrNumber[];
};
/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = styled.span<Props>(use);

/**
 * @component
 */
export default EzTextStyle;
