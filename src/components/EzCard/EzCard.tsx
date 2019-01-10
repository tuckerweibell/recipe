import React from 'react';
import {CardContainer, CardHeadingContainer, SectionContainer, CardLayout} from './EzCard.styles';
import EzCardSection from './EzCardSection';
import {filterValidProps} from '../../utils';
import EzHeading from '../EzHeading';

function isEzCardSection(element) {
  return element.type && element.type.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children[0] || children)) return children;

  return <EzCardSection>{children}</EzCardSection>;
}

type ActionsProps = {
  actions: React.ReactNode;
  title: string;
};

type OptionalTitle = {
  actions?: never;
  title?: string;
};

type CardProps = (ActionsProps | OptionalTitle) & {
  children: React.ReactNode;
  horizontal?: boolean;
  subtitle?: string;
  accent?: 'info';
};

/**
 * Cards are the primary means of grouping sections on a page.
 */
const EzCard: React.SFC<CardProps> = ({title, subtitle, accent, actions, ...props}) => {
  const heading = title && (
    <EzHeading size="3" subheading={subtitle}>
      {title}
    </EzHeading>
  );

  const layout = actions && (
    <CardLayout>
      {heading}
      {actions}
    </CardLayout>
  );

  return (
    <CardContainer {...filterValidProps(props)} accent={accent}>
      {title && <CardHeadingContainer>{actions ? layout : heading}</CardHeadingContainer>}
      <SectionContainer horizontal={props.horizontal}>
        {wrappedChildren(props.children)}
      </SectionContainer>
    </CardContainer>
  );
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
