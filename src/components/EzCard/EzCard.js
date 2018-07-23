import React from 'react';
import PropTypes from 'prop-types';
import {CardContainer, CardHeading, SectionContainer} from './EzCard.styles';
import {EzCardSection} from './';
import {standard} from '../../themes';

function isEzCardSection(element) {
  return element.type && element.type.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children[0] || children)) {
    return children;
  }

  return <EzCardSection>{children}</EzCardSection>;
}

/**
 * Cards are the primary means of grouping content on a page.
 */
const EzCard = props => (
  <CardContainer>
    {props.title && <CardHeading>{props.title}</CardHeading>}
    <SectionContainer horizontal={props.horizontal}>
      {wrappedChildren(props.children)}
    </SectionContainer>
  </CardContainer>
);

EzCard.propTypes = {
  /**
   * The content to render inside the card.
   */
  children: PropTypes.node.isRequired,
  /**
   * An optional property specifying a horizontal layout of the card's sectionsw.
   */
  horizontal: PropTypes.bool,
  /**
   * An optional heading for the card.
   */
  title: PropTypes.string,
};

EzCard.defaultProps = {
  theme: standard,
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
