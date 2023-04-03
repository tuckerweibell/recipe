import React, {forwardRef, useEffect} from 'react';
import warning from 'tiny-warning';
import {EzWellProps, Ref} from './EzWell.types';
import theme from '../theme.config';
import {filterDOMProps} from '../EzField/filterDOMProps';

const well = theme.css({
  backgroundColor: 'rgba(75, 75, 75, 0.02)',
  border: '1px solid rgba(44, 44, 44, 0.05)',
  borderRadius: '4px',
  fontFamily: '$defaultFont',
  minWidth: '160px',
  padding: '20px',
  textAlign: 'start',
});

/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */
const EzWell = forwardRef<Ref, EzWellProps>(({children, role, ...otherProps}, ref) => {
  const hasAriaLabel = Boolean(otherProps['aria-label'] || otherProps['aria-labelledby']);

  useEffect(() => {
    if (!role && hasAriaLabel) {
      warning(false, '*Recipe Warning*. EzWell - A labelled Well must have a role.');
    }
  }, [hasAriaLabel, role]);

  return (
    <div
      className={well()}
      ref={ref}
      role={role}
      {...filterDOMProps(otherProps, {propNames: new Set(['id', 'className'])})}
    >
      {children}
    </div>
  );
});

EzWell.displayName = 'EzWell';

export default EzWell;
