import React from 'react';

const Placeholder = ({width = 'auto', height = 120, minWidth, minHeight, style, children}) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'hsla(0, 0%, 20%, 0.08)',
      border: `2px solid hsla(0, 0%, 20%, 0.3)`,
      width,
      height,
      minWidth,
      minHeight,
      ...(style || {}),
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{width: '100%', height: '100%', position: 'absolute'}}
    >
      <line
        style={{strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.1)'}}
        x1={0}
        y1={0}
        x2="100%"
        y2="100%"
      />
      <line
        style={{strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.1)'}}
        x1="100%"
        y1={0}
        x2={0}
        y2="100%"
      />
    </svg>
    <span>{children}</span>
  </div>
);

export default Placeholder;
