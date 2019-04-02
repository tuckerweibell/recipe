import React from 'react';
import {base} from './EzPageContent.styles';
import styled from '../../themes/styled';

type PageContentProps = {
  children: React.ReactNode;
};
/**
 * Page Content is the main content container for a page.
 */
const EzPageContent = styled.div<PageContentProps>(base);

EzPageContent.displayName = 'EzPageContent';

/**
 * @component
 */
export default EzPageContent;
