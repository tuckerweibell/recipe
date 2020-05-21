import variant from 'styled-component-variant';
import {base, align, strong, subdued} from './EzTextStyle.styles';
import styled from '../../themes/styled';

const use = variant('use', {
  strong,
  subdued,
});

type StringOrNumber = string | number;

type Props = {
  use?: 'strong' | 'subdued';
  align?: 'left' | 'right' | 'center';
  children: StringOrNumber | StringOrNumber[];
};
/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = styled.span<Props>(base, use, align);

/**
 * @component
 */
export default EzTextStyle;
