import React from 'react';
import PropTypes from 'prop-types';
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
import {Theme} from '../../themes/styled';

function isEzCardSection(element) {
  return element.type && element.type.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children[0] || children)) return children;

  return <EzCardSection>{children}</EzCardSection>;
}

type CardProps = {
  title?: string;
  subtitle?: string;
  accent?: string;
  horizontal?: boolean;
};

/**
 * Cards are the primary means of grouping content on a page.
 */
const EzCard: React.SFC<CardProps> = ({title, subtitle, accent, ...props}) => (
  <CardContainer {...filterValidProps(props)} accent={accent}>
    {title && (
      <CardHeadingContainer>
        <CardHeading>{title}</CardHeading>
        {subtitle && (
          <CardSubheading>
            <EzTextStyle use="subdued">{subtitle}</EzTextStyle>
          </CardSubheading>
        )}
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
