import React from 'react';
import PropTypes from 'prop-types';
import {headings, Subheading} from './EzHeading.styles';
import styled from '../../themes/styled';

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading = ({as, children, className, size: headingSize, subheading}) => {
  const headingElement = as || `h${headingSize}`;
  const Heading = headings[headingElement];
  const useSubheading = subheading && (headingSize === '3' || headingSize === '5'); //

  return (
    <Heading className={className} size={headingSize}>
      {children}
      {useSubheading && <Subheading>{subheading}</Subheading>}
    </Heading>
  );
};

EzHeading.propTypes = {
  /**
   * An optional property allowing you to override which tag is rendered. Use sparingly for accessiblity or SEM purposes.
   */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * The text for the heading.
   */
  children: PropTypes.string.isRequired,
  /**
   * The size of heading to render.
   */
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  /**
   * An optional subheading. Only supported with size 3 and size 5 headings.
   */
  subheading: PropTypes.string,
};

/**
 * @component
 */
//@ts-ignore
export default styled(EzHeading)();
