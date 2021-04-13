import React from 'react';
import Style from '@ezcater/snitches';
import theme from './EzCard.theme.config';
import EzCardHeading from './EzCardHeading';
import {EzContent, EzHeader} from '../EzContent';

type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

const spacing = theme.css({
  '&& > * + *': {
    marginTop: '$card-content-gap',
  },
});

/**
 * Card Sections represent a grouping of content within a Card.
 */
const EzCardSection: React.FC<HeadingProps> = ({title, subtitle, actions, children, ...props}) => {
  const content = <EzContent {...spacing(props as any).props}>{children}</EzContent>;

  return (
    <Style ruleset={theme}>
      {!title ? (
        content
      ) : (
        <section>
          <EzHeader>{<EzCardHeading {...{actions, title, subtitle}} />}</EzHeader>
          {content}
        </section>
      )}
    </Style>
  );
};

EzCardSection.displayName = 'EzCardSection';

export default EzCardSection;
