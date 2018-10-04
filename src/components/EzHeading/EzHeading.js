import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {size, Subheading} from './EzHeading.styles';
import {standard} from '../../themes';

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading = ({as, children, className, size: headingSize, subheading, theme}) => {
  const headingElement = as || 'h' + headingSize;
  const Heading = styled(headingElement)(size);
  const useSubheading = subheading && (headingSize === '3' || headingSize === '5');

  return (
    <Heading className={className} size={headingSize} theme={theme}>
      {children}
      {useSubheading && <Subheading theme={theme}>{subheading}</Subheading>}
    </Heading>
  );
};

EzHeading.propTypes = {
  /**
   * An optional property allowing you to override which tag is rendered. Use sparingly for accessiblity or SEM purposes.
   */
  as: PropTypes.string,
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

EzHeading.defaultProps = {
  theme: standard,
};

/**
 * @component
 */
export default styled(EzHeading)();
