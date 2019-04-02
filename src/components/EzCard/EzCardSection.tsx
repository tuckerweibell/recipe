import {ReactNode} from 'react';
import {base} from './EzCardSection.styles';
import styled from '../../themes/styled';

type Props = {
  children: ReactNode;
};

/**
 * Card Sections represent chunks of content within a Card.
 */
const EzCardSection = styled.div<Props>(base);

EzCardSection.displayName = 'EzCardSection';

/**
 * @component
 */
export default EzCardSection;
