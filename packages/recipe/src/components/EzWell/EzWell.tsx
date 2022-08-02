import React, {forwardRef, Ref, ReactNode, HTMLAttributes} from 'react';
import {Stack} from '@mui/material';
import {filterDOMProps} from '../EzField/filterDOMProps';

type ariaKeys = 'aria-label' | 'aria-labelledby';
type domProps = 'className' | 'id';

interface Props extends Pick<HTMLAttributes<HTMLDivElement>, ariaKeys | domProps> {
  /**
   * The contents of the Well.
   */
  children: ReactNode;
  /**
   * An accessibility role for the well.
   */
  role?: string;
}

function Well(props: Props, ref: Ref<HTMLDivElement>) {
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  const {children, role, ...otherProps} = props;

  if (!role && (props['aria-label'] || props['aria-labelledby']))
    console.warn('A labelled Well must have a role.');

  return (
    <Stack
      {...filterDOMProps(otherProps, {
        propNames: new Set(['id', 'className']),
      })}
      role={role}
      ref={ref}
      p="20px"
      sx={{
        bgcolor: 'rgba(75, 75, 75, 0.02)',
        border: '1px solid rgba(44,44,44,0.05)',
        borderRadius: '4px',
        textAlign: 'start',
        minWidth: '160px',
        display: 'block',
      }}
    >
      {children}
    </Stack>
  );
}

/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */
const EzWell = forwardRef(Well);

export default EzWell;
