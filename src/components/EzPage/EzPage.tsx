import React, {useRef, useContext} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzPage.theme.config';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import EzHeading from '../EzHeading';

const pageContainer = theme.css({
  backgroundColor: '$page-bg',
  padding: '$page-py $page-px',
  flexGrow: 1,
  p: {
    margin: 0,
  },
  when: {
    medium: {
      padding: '$page-md-py $page-md-px',
    },
  },
});

// eslint-disable-next-line dot-notation
const ezHeadingSelector = `.${EzHeading['__internalComponentSelector']}`;

const pageWrapper = theme.css({
  '& > *:not(:last-child)': {
    marginBottom: '$page-content-gap',
  },
  when: {
    medium: {
      '& > *:not(:last-child)': {
        marginBottom: '$page-md-content-gap',
      },
    },
  },
  [`&& > ${ezHeadingSelector}`]: {
    marginBottom: '$page-heading-mb',
    marginLeft: '$page-heading-ml',
    when: {
      medium: {
        marginLeft: 0,
      },
    },
  },
});

type Props = {
  children: React.ReactNode;
};

/**
 * Page is the main content container for a page.
 */
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

const EzPage: React.FC<Props> = ({children}) => {
  const sectionsCounter = useRef(0);
  return (
    <Style ruleset={theme}>
      <SectionContext.Provider value={sectionsCounter}>
        <div className={pageContainer()}>
          <MaxWidth>
            <div className={pageWrapper()}>{children}</div>
          </MaxWidth>
        </div>
      </SectionContext.Provider>
    </Style>
  );
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
