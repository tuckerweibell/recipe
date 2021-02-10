/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {base} from './EzCardSection.styles';
import EzCardHeading from './EzCardHeading';
import {EzContent, EzHeader} from '../EzContent';

type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

/**
 * Card Sections represent a grouping of content within a Card.
 */
const EzCardSection: React.FC<HeadingProps> = ({title, subtitle, actions, children, ...props}) => {
  const content = (
    <EzContent css={base} {...props}>
      {children}
    </EzContent>
  );

  return !title ? (
    content
  ) : (
    <section>
      <EzHeader>{<EzCardHeading {...{actions, title, subtitle}} />}</EzHeader>
      {content}
    </section>
  );
};

EzCardSection.displayName = 'EzCardSection';

export default EzCardSection;
