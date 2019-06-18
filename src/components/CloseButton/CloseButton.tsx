import React from 'react';
import {base} from './CloseButton.styles';
import styled from '../../themes/styled';

const CloseButton = styled.button<any>(base);

export default ({label, ...props}) => {
  return (
    <CloseButton {...props} aria-label={label}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" version="1">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8 6l5-5 2 2-5 5 5 5-2 2-5-5-5 5-2-2 5-5-5-5 2-2 5 5z"
        />
      </svg>
    </CloseButton>
  );
};
