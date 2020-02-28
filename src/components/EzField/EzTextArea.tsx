import React from 'react';
import {css} from '@emotion/core';
import styles from './EzTextInput.styles';
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

const overrides = ({theme}) => css`
  resize: vertical;

  && {
    line-height: 1.5rem;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;

export const TextArea = styled.textarea(styles, overrides);

export default ({size, ...rest}) => <TextArea {...rest} rows={rows(size)} />;
