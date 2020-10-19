import styled from '@emotion/styled';
import {base} from './EzCardFooter.styles';

type Props = {
  children?: any;
};

/**
 * Card Footer represent an optional footer at the bottom of a Card.
 */
const EzCardFooter = styled.div<Props>(base);

EzCardFooter.displayName = 'EzCardFooter';

/**
 * @component
 */
export default EzCardFooter;
