import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const styles = status => ({
  '--recipe-status-background-color': `var(--recipe-status-background-color-${status})`,
  '--recipe-status-text-color': `var(--recipe-status-text-color-${status})`,
});

const base: any = ({size, use}) => css`
  padding: var(--recipe-global-static-size-50) var(--recipe-global-static-size-150);
  line-height: 1;
  font-size: ${size === 'small'
    ? 'var(--recipe-global-font-size-75)'
    : 'var(--recipe-global-font-size-200)'};
  font-weight: bold;
  border-radius: 1em;
  white-space: nowrap;
  background-color: var(--recipe-status-background-color);
  color: var(--recipe-status-text-color);
  ${styles(use)};
`;

export const EzStatusContainer = styled.span(base);
