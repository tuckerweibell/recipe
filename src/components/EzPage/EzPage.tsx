import React, {useRef, useContext} from 'react';
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
const SectionContext = React.createContext(null);

export const usePageSection = type => {
  const sectionsCounter = useContext(SectionContext);
  const ref = useRef(null);

  if (type === 'horizontal') return 1;

  function incrementCounterOnInit() {
    if (ref.current !== null) return;
    sectionsCounter.current++;
    ref.current = sectionsCounter.current;
  }

  incrementCounterOnInit();

  return ref.current;
};

const EzPage: React.FC<PageProps> = ({children}) => {
  const sectionsCounter = useRef(0);
  return (
    <SectionContext.Provider value={sectionsCounter}>
      <EzPageContainer>
        <MaxWidth>
          <EzPageWrapper>{children}</EzPageWrapper>
        </MaxWidth>
      </EzPageContainer>
    </SectionContext.Provider>
  );
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
