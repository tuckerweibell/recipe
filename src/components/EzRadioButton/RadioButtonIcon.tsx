import React from 'react';

const RadioButtonIcon = ({className, width = 16, height = 16}: any) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M8 .5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" stroke="#CED4D9" fill="#FFF" />
      <path d="M8 4a4 4 0 1 1 0 8 4 4 0 1 1 0-8z" fill="#3E90D6" />
    </g>
  </svg>
);

export default RadioButtonIcon;
