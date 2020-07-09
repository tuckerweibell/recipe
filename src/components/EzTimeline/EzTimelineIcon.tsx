/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

const PlaceholderIcon = props => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="30" fill="#8b99a6" />
  </svg>
);

const EzTimelineIcon = ({icon = <PlaceholderIcon />, className}: any) => (
  <span
    className={className}
    css={{
      position: 'relative',
      background: 'white',
      border: '1px solid #ced4d9',
      height: 32,
      width: 32,
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
