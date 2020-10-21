import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const base = () => css`
  position: relative;
  padding: 0.5rem;
  max-width: 300px;
  box-shadow: var(--recipe-alias-shadow-small);
  white-space: pre-line;
`;

const color = () => css`
  color: var(--recipe-tooltip-text-color);
  border: 1px solid var(--recipe-tooltip-border-color);
  background-color: var(--recipe-tooltip-background-color);
`;

export const Message = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Tooltip = styled.div<any>(base, color);
export const TooltipArrow = styled.div`
  > svg {
    position: absolute;
    pointer-events: none;
    fill: var(--recipe-tooltip-background-color);
  }

  [data-popper-placement^='top'] > &[data-popper-arrow] {
    bottom: 5px;
    svg {
      transform: rotate(180deg) translate(50%, 0);
    }
  }
  [data-popper-placement^='right'] > &[data-popper-arrow] {
    left: -5px;
    svg {
      transform: rotate(-90deg) translate(50%, 0);
    }
  }
  [data-popper-placement^='bottom'] > &[data-popper-arrow] {
    top: -5px;
    svg {
      transform: translate(-50%, 0);
    }
  }
  [data-popper-placement^='left'] > &[data-popper-arrow] {
    right: 5px;
    svg {
      transform: rotate(90deg) translate(-50%, 0);
    }
  }
`;
