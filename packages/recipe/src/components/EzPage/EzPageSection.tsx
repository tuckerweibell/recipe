import React from 'react';
import theme from '../theme.config';
import {usePageSection} from './EzPage';
import {clsx} from '../../utils';

const pageSection = theme.css({
  '& > *:not(:last-child)': {
    marginBottom: '$page-section-gap-tight',
  },
  '@medium': {
    verticalAlign: 'top',
  },
  variants: {
    use: {
      main: {
        '@medium': {
          display: 'inline-block',
          width: '$page-section-main-w',
          '& > *:not(:last-child)': {
            marginBottom: '$page-section-gap',
          },
        },
      },
      aside: {
        '@medium': {
          display: 'inline-block',
          width: '$page-section-aside-w',
          '& > *:not(:last-child)': {
            marginBottom: '$page-section-gap',
          },
        },
      },
      horizontal: {
        '@medium': {
          display: 'flex',
          '& > *': {
            flexBasis: 0,
            flexGrow: 1,
            '&:not(:last-child)': {
              marginBottom: 0,
            },
            '& + *': {
              marginLeft: '$page-section-gap-double',
            },
          },
        },
      },
    },
  },
});

const sibling = theme.css({
  '@medium': {marginLeft: '$page-section-gap-horizontal'},
});

type Props = {
  use: 'aside' | 'main' | 'horizontal';
};

/**
 * Page Sections are used to organize sections of content within EzPage.
 */
const EzPageSection: React.FC<Props> = props => {
  const id = usePageSection(props.use);

  return <div {...props} className={clsx(pageSection(props), !(id % 2) && sibling())} />;
};

EzPageSection.displayName = 'EzPageSection';

export default EzPageSection;
