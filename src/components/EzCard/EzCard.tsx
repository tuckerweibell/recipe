import React from 'react';
import {CardContainer, CardHeadingContainer, SectionContainer, CardLayout} from './EzCard.styles';
import EzLink from '../EzLink';
import EzCardFooter from './EzCardFooter';
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

type ExpandableCardFooter = {
  expandLabel: string;
  collapseLabel: string;
  onClick: React.MouseEventHandler;
};

type CardProps = (ActionsProps | OptionalTitle) & {
  children: React.ReactNode;
  horizontal?: boolean;
  subtitle?: string;
  accent?: 'info';
  expandable?: ExpandableCardFooter;
  isExpanded?: boolean;
};

const isExpandableCardFooter = (expandable: any): expandable is ExpandableCardFooter =>
  expandable && (expandable as ExpandableCardFooter).expandLabel !== undefined;

/**
 * Cards are the primary means of grouping sections on a page.
 */
const EzCard: React.FC<CardProps> = ({
  title,
  subtitle,
  accent,
  actions,
  expandable,
  isExpanded,
  ...props
}) => {
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

  const {horizontal, children} = props;

  return (
    <CardContainer {...filterValidProps(props)} accent={accent}>
      {title && <CardHeadingContainer>{actions ? layout : heading}</CardHeadingContainer>}
      <SectionContainer horizontal={horizontal}>{wrappedChildren(children)}</SectionContainer>
      {isExpandableCardFooter(expandable) && (
        <EzCardFooter>
          <EzLink href="#" onClick={expandable.onClick}>
            {isExpanded && expandable.collapseLabel
              ? expandable.collapseLabel
              : expandable.expandLabel}
          </EzLink>
        </EzCardFooter>
      )}
    </CardContainer>
  );
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
