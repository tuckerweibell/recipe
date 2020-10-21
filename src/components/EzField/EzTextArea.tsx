import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import styles from './EzTextInput.styles';

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

const overrides = () => css`
  resize: vertical;

  && {
    line-height: 1.5rem;
    padding: var(--recipe-global-static-size-100) var(--recipe-global-static-size-150);
  }
`;

export const TextArea = styled.textarea(styles, overrides);

export default React.forwardRef<HTMLTextAreaElement, {size}>(({size, ...rest}, ref) => (
  <TextArea ref={ref} {...rest} rows={rows(size)} />
));
