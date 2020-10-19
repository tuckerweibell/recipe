import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const base = () => css`
  display: inline-block;
  height: var(--recipe-checkbox-box-size);
  width: var(--recipe-checkbox-box-size);
  position: relative;
  top: 3px;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Checked */
  input:checked + svg path:nth-of-type(2) {
    fill: var(--recipe-checkbox-checkmark-color);
  }

  /* Not Checked */
  input:not(:checked) + svg path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + svg {
    box-shadow: 0 0 0 2px var(--recipe-alias-focus-ring-color);
    border-radius: 3px;
  }

  /* Hover */
  input:hover + svg path:nth-of-type(1) {
    fill: var(--recipe-checkbox-box-background-color-hover);
    stroke: var(--recipe-checkbox-box-border-color-hover);
  }

  /* Active */
  input:active + svg path:nth-of-type(1) {
    fill: var(--recipe-checkbox-box-background-color-down);
  }

  /* Disabled */
  input:disabled + svg path:nth-of-type(1) {
    fill: var(--recipe-checkbox-box-background-color-disabled);
    stroke: var(--recipe-checkbox-box-border-color);
  }

  input:checked:disabled + svg path:nth-of-type(2) {
    fill: var(--recipe-checkbox-checkmark-color-disabled);
  }
`;

export const AcknowledgmentContainer = styled.div`
  display: flex;
  align-items: baseline;

  > * {
    margin-right: var(--recipe-global-static-size-100);
  }

  p {
    margin: 0;
    font-family: var(--recipe-checkbox-acknowledgement-text-font-family);
    font-size: var(--recipe-checkbox-acknowledgement-text-size);
    font-weight: var(--recipe-checkbox-acknowledgement-text-font-weight);
  }
`;

export const CheckboxWrapper = styled.span<any>(base);
