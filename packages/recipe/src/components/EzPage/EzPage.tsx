import React, {useRef, useContext} from 'react';
import theme from '../theme.config';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import EzHeading from '../EzHeading';

const pageContainer = theme.css({
  variants: {
    backgroundColor: {
      white: {
        backgroundColor: '$page-bg-white',
      },
      gray: {
        backgroundColor: '$page-bg',
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'gray',
  },
  padding: '$page-py $page-px',
  flexGrow: 1,
  p: {
    margin: 0,
  },
  '@medium': {
    padding: '$page-md-py $page-md-px',
  },
});

// eslint-disable-next-line dot-notation
const ezHeadingSelector = `.${EzHeading['__internalComponentSelector']}`;

const pageWrapper = theme.css({
  '& > *:not(:last-child)': {
    marginBottom: '$page-content-gap',
  },
  '@medium': {
    '& > *:not(:last-child)': {
      marginBottom: '$page-md-content-gap',
    },
  },
  [`&& > ${ezHeadingSelector}`]: {
    marginBottom: '$page-heading-mb',
    marginLeft: '$page-heading-ml',
    '@medium': {
      marginLeft: 0,
    },
  },
});

type Props = {
  backgroundColor?: 'white' | 'gray';
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

const EzPage: React.FC<Props> = ({children, backgroundColor}) => {
  const sectionsCounter = useRef(0);
  return (
    <SectionContext.Provider value={sectionsCounter}>
      <div className={pageContainer({backgroundColor})}>
        <MaxWidth>
          <div className={pageWrapper()}>{children}</div>
        </MaxWidth>
      </div>
    </SectionContext.Provider>
  );
};

EzPage.displayName = 'EzPage';

/**
 * @component
 */
export default EzPage;
