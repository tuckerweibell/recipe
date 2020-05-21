import variant from 'styled-component-variant';
import {base, align, strong, subdued} from './EzTextStyle.styles';
import styled from '../../themes/styled';

const use = variant('use', {
  strong,
  subdued,
});

type Props = {
  use?: 'strong' | 'subdued';
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
};
/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle = styled.span<Props>(base, use, align);

/**
 * @component
 */
export default EzTextStyle;
