import React from 'react';
import styled from '../../themes/styled';

const rows = size => {
  switch (size) {
    case 'small':
      return 2;
    case 'large':
      return 10;
    case 'medium':
    default:
      return 5;
  }
};

export const TextArea = styled.textarea`
  resize: vertical;

  && {
    line-height: 1.5rem;
    padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.sm};
  }
`;

export default ({size, ...rest}) => <TextArea {...rest} rows={rows(size)} />;
