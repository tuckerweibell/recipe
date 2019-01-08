import React from 'react';
import {
  CardContainer,
  CardHeading,
  CardHeadingContainer,
  SectionContainer,
  CardSubheading,
} from './EzCard.styles';
import EzCardSection from './EzCardSection';
import EzTextStyle from '../EzTextStyle';
import {filterValidProps} from '../../utils';

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
 * Cards are the primary means of grouping content on a page.
 */
const EzCard: React.SFC<CardProps> = ({title, subtitle, accent, actions, ...props}) => (
  <CardContainer {...filterValidProps(props)} accent={accent}>
    {title && (
      <CardHeadingContainer>
        <header>
          <CardHeading>{title}</CardHeading>
          {subtitle && (
            <CardSubheading>
              <EzTextStyle use="subdued">{subtitle}</EzTextStyle>
            </CardSubheading>
          )}
        </header>
        {actions}
      </CardHeadingContainer>
    )}
    <SectionContainer horizontal={props.horizontal}>
      {wrappedChildren(props.children)}
    </SectionContainer>
  </CardContainer>
);

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
