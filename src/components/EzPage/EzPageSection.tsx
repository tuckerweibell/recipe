import React from 'react';
import {PageSection} from './EzPageSection.styles';
import {usePageSection} from './EzPage';

type UseProps = {use: 'aside' | 'main'};

type Props = UseProps & React.HTMLProps<HTMLDivElement>;

/**
 * Page Sections are used to organize sections of content within EzPage.
 */
const EzPageSection: React.SFC<Props> = props => {
  const id = usePageSection(props.use);

  return <PageSection {...props} sibling={!(id % 2)} />;
};

EzPageSection.displayName = 'EzPageSection';

export default EzPageSection;
