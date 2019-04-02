import React from 'react';
import {base, resets} from './EzPage.styles';
import {childStyles} from './styles';
import styled from '../../themes/styled';

type PageProps = {
  children: React.ReactNode;
};

/**
 * Page is the main content container for a page.
 */
const EzPage = styled.div<PageProps>(base, resets, childStyles);

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
