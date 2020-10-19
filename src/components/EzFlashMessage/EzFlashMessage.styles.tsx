import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {EzCard} from '../EzCard';
import './vars.css';

const success = () => css`
  --recipe-flash-message-background-color: var(--recipe-semantic-positive-color-background);
  --recipe-flash-message-border-color: var(--recipe-semantic-positive-color-border);
  --recipe-flash-message-text-color: var(--recipe-semantic-positive-color-text-small);
  --recipe-flash-message-accent-color: var(--recipe-semantic-positive-color-default);
`;

const error = () => css`
  --recipe-flash-message-background-color: var(--recipe-semantic-negative-color-background);
  --recipe-flash-message-border-color: var(--recipe-semantic-negative-color-border);
  --recipe-flash-message-text-color: var(--recipe-semantic-negative-color-text-small);
  --recipe-flash-message-accent-color: var(--recipe-semantic-negative-color-default);
`;

const warning = () => css`
  --recipe-flash-message-background-color: var(--recipe-semantic-caution-color-background);
  --recipe-flash-message-border-color: var(--recipe-semantic-caution-color-border);
  --recipe-flash-message-text-color: var(--recipe-semantic-caution-color-text-small);
  --recipe-flash-message-accent-color: var(--recipe-semantic-caution-color-default);
`;

const info = () => css`
  --recipe-flash-message-background-color: var(--recipe-semantic-informative-color-background);
  --recipe-flash-message-border-color: var(--recipe-semantic-informative-color-border);
  --recipe-flash-message-text-color: var(--recipe-semantic-informative-color-text-small);
  --recipe-flash-message-accent-color: var(--recipe-semantic-informative-color-default);
`;

const accent = variant('use', {
  error,
  info,
  success,
  warning,
});

export type FlashMessageContainerProps = {
  use: 'success' | 'error' | 'warning' | 'info';
};

export type FlashMessageProps = FlashMessageContainerProps & {
  children: React.ReactNode;
  headline?: string;
  onDismiss?: () => void;
};

export const FlashMessageContainer = styled(EzCard)<FlashMessageContainerProps>`
  ${accent};
  background-color: var(--recipe-flash-message-background-color);
  border-color: var(--recipe-flash-message-border-color);
  border-left-width: var(--recipe-flash-message-accent-border-size);
  border-left-color: var(--recipe-flash-message-accent-color);
  svg path {
    fill: var(--recipe-flash-message-accent-color);
  }
`;
