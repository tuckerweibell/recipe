import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {EzCard} from '../EzCard';
import './vars.css';

const colors = (background, border, accent) =>
  css`
    background-color: ${background};
    border-color: ${border};
    border-left-width: 5px;
    border-left-color: ${accent};
    svg path {
      fill: ${accent};
    }
  `;

const success = () =>
  colors(
    'var(--recipe-semantic-positive-color-background)',
    'var(--recipe-semantic-positive-color-border)',
    'var(--recipe-semantic-positive-color-default)'
  );

const error = () =>
  colors(
    'var(--recipe-semantic-negative-color-background)',
    'var(--recipe-semantic-negative-color-border)',
    'var(--recipe-semantic-negative-color-default)'
  );

const warning = () =>
  colors(
    'var(--recipe-semantic-caution-color-background)',
    'var(--recipe-semantic-caution-color-border)',
    'var(--recipe-semantic-caution-color-default)'
  );

const info = () =>
  colors(
    'var(--recipe-semantic-informative-color-background)',
    'var(--recipe-semantic-informative-color-border)',
    'var(--recipe-semantic-informative-color-default)'
  );

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
  box-shadow: var(--recipe-flash-message-accent-box-shadow);
  border-style: solid;
  border-width: 1px;
  border-left-width: var(--recipe-flash-message-accent-border-size);
`;
