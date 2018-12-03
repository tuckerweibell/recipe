import React from 'react';
import {headings, Subheading} from './EzHeading.styles';
import styled from '../../themes/styled';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
  subheading?: string;
};

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading: React.SFC<HeadingProps> = ({
  as,
  children,
  className,
  size: headingSize,
  subheading,
}) => {
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

/**
 * @component
 */
export default styled(EzHeading)();
