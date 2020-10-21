import React from 'react';
import styled from '@emotion/styled';
import {base} from './EzPageContent.styles';

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
