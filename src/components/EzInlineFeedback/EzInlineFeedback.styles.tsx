import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import './vars.css';

const base = () => css`
  display: inline-block;
  line-height: var(--recipe-inline-feedback-leading);
  vertical-align: top;
  svg {
    margin-right: var(--recipe-global-static-size-100);
  }
`;

const useStyles = variant('use', {
  error: () => css`
    color: var(--recipe-semantic-negative-color-default);
    svg path {
      fill: var(--recipe-semantic-negative-color-default);
    }
  `,
  progress: () => css`
    svg path {
      fill: var(--recipe-alias-deemphasis-text-color);
    }
  `,
  success: () => css`
    svg path {
      fill: var(--recipe-semantic-positive-color-text-small);
    }
  `,
});

export const InlineFeedback = styled.span<any>(base, useStyles);
