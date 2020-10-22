import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import './vars.css';

const sharedDirectionalStyles = () => css`
  border-width: 6px;
  border-style: solid;
  color: transparent;
  content: '';
  left: 13px;
  position: absolute;
`;

const bottomStyles = () => css`
  &::after {
    ${sharedDirectionalStyles()};
    bottom: -12px;
  }
`;

const topStyles = () => css`
  &::before {
    ${sharedDirectionalStyles()};
    top: -12px;
  }
`;

const colorStyles = () => css`
  background-color: var(--recipe-alert-background-color);
  color: var(--recipe-alert-text-color);

  &::after {
    border-top-color: var(--recipe-alert-background-color);
  }

  &::before {
    border-bottom-color: var(--recipe-alert-background-color);
  }
`;

const successStyles = () => css`
  --recipe-alert-background-color: var(--recipe-semantic-positive-color-background);
  --recipe-alert-text-color: var(--recipe-semantic-positive-color-text-small);
`;

const errorStyles = () => css`
  --recipe-alert-background-color: var(--recipe-semantic-negative-color-background);
  --recipe-alert-text-color: var(--recipe-semantic-negative-color-text-small);
`;

const warningStyles = () => css`
  --recipe-alert-background-color: var(--recipe-semantic-caution-color-background);
  --recipe-alert-text-color: var(--recipe-semantic-caution-color-text-small);
`;

const infoStyles = () => css`
  --recipe-alert-background-color: var(--recipe-semantic-informative-color-background);
  --recipe-alert-text-color: var(--recipe-semantic-informative-color-text-small);
`;

const marketingStyles = () => css`
  --recipe-alert-background-color: var(--recipe-global-color-static-teal-200);
  --recipe-alert-text-color: var(--recipe-global-color-static-teal-700);
`;

const tipStyles = () => css`
  --recipe-alert-background-color: var(--recipe-global-color-static-purple-200);
  --recipe-alert-text-color: var(--recipe-global-color-static-purple-700);
`;

const arrowStyles = variant('arrow', {
  bottom: bottomStyles,
  top: topStyles,
});

const useStyles = variant('use', {
  error: errorStyles,
  tip: tipStyles,
  info: infoStyles,
  marketing: marketingStyles,
  success: successStyles,
  warning: warningStyles,
});

type AlertContainerProps = {
  arrow: string;
  use: string;
};

export const AlertContainer = styled.div<AlertContainerProps>`
  border-radius: var(--recipe-alert-border-radius);
  border-width: 0;
  display: inline-flex;
  padding-top: var(--recipe-alert-padding-top);
  padding-right: var(--recipe-alert-padding-right);
  padding-bottom: var(--recipe-alert-padding-bottom);
  padding-left: var(--recipe-alert-padding-left);
  position: relative;

  ${useStyles};
  ${colorStyles};
  ${arrowStyles};
`;

export const AlertContent = styled.div`
  margin-left: var(--recipe-global-static-size-100);
`;
