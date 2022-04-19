import React from 'react';

type Props = {
  children?: any;
  isExpanded?: boolean;
};

/**
 * Card Expandable represent a section of content within an EzCardSection that can be toggled on and off.
 */

const EzCardExpandable: React.FC<Props> = ({children, isExpanded}) => {
  return <div>{isExpanded ? children : null}</div>;
};

EzCardExpandable.displayName = 'EzCardExpandable';

/**
 * @component
 */
export default EzCardExpandable;
