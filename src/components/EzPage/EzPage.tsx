import React from 'react';
import {base, resets} from './EzPage.styles';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import {childStyles} from './styles';
import styled from '../../themes/styled';

type PageProps = {
  children: React.ReactNode;
};

type PageWrapperProps = {
  children: React.ReactNode;
  width?: string;
};

/**
 * Page is the main content container for a page.
 */
const EzPageContainer = styled.div<PageWrapperProps>(base, resets);
const EzPageWrapper = styled.div<PageWrapperProps>(childStyles);

const EzPage: React.FC<PageProps> = ({children}) => {
  return (
    <EzPageContainer>
      <MaxWidth>
        <EzPageWrapper>{children}</EzPageWrapper>
      </MaxWidth>
    </EzPageContainer>
  );
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
