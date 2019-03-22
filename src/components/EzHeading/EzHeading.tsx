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
const EzHeading: React.FC<HeadingProps> = ({
  as,
  children: title,
  className,
  size: headingSize,
  subheading: subtitle,
}) => {
  const headingElement = as || `h${headingSize}`;
  const Heading = headings[headingElement];

  const heading = (
    <Heading className={className} size={headingSize}>
      {title}
    </Heading>
  );

  const subheading = subtitle && (headingSize === '3' || headingSize === '5') && (
    <Subheading>{subtitle}</Subheading>
  );

  if (!subheading) return heading;

  return (
    <header>
      {heading}
      {subheading}
    </header>
  );
};

/**
 * @component
 */
export default styled(EzHeading)();
