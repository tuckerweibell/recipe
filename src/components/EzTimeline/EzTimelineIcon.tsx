/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

const PlaceholderIcon = props => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="30" fill={'var(--recipe-alias-deemphasis-text-color)'} />
  </svg>
);

const iconDiameter = '2rem';

const EzTimelineIcon: React.FC<{icon?: React.ReactElement; className?: string}> = ({
  icon = <PlaceholderIcon />,
  className,
}) => (
  <span
    className={className}
    css={{
      position: 'relative',
      background: 'var(--recipe-global-color-static-white)',
      border: `1px solid var(--recipe-alias-border-color)`,
      height: iconDiameter,
      width: iconDiameter,
      borderRadius: '50%',
      flexShrink: 0,
      alignItems: 'center',
      display: 'flex',
      justifyItems: 'center',
      alignSelf: 'flex-start',
      marginTop: 18,
    }}
  >
    {React.cloneElement(icon, {
      'aria-hidden': true,
      focusable: false,
      width: 30,
      height: 16,
    })}
  </span>
);

export default EzTimelineIcon;
