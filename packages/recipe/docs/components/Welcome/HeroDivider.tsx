import React from 'react';
import {ezTheme} from '../../../src/themes';

const HeroDivider = () => (
  <svg
    height="70"
    width="20"
    fill="currentColor"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{
      transform: 'translate(50%)',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      height: '100%',
      width: '12rem',
      color: ezTheme.palette.common.green120,
    }}
  >
    <polygon points="50,0 100,0 50,100 0,100"></polygon>
  </svg>
);

export default HeroDivider;
