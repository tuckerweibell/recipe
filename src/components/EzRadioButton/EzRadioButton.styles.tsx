import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const base = () => css`
  display: inline-block;
  height: var(--recipe-radiobutton-box-size);
  width: var(--recipe-radiobutton-box-size);
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
    fill: var(--recipe-radiobutton-checkmark-color);
  }

  /* Not Checked */
  input:not(:checked) + svg path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + svg {
    box-shadow: 0 0 0 2px var(--recipe-alias-focus-ring-color);
    border-radius: 50%;
  }

  /* Hover */
  input:hover + svg path:nth-of-type(1) {
    fill: var(--recipe-radiobutton-box-background-color-hover);
    stroke: var(--recipe-radiobutton-box-border-color-hover);
  }

  /* Active */
  input:active + svg path:nth-of-type(1) {
    fill: var(--recipe-radiobutton-box-background-color-down);
  }

  /* Disabled */
  input:disabled + svg path:nth-of-type(1) {
    fill: var(--recipe-radiobutton-box-background-color-disabled);
  }

  input:checked:disabled + svg path:nth-of-type(2) {
    fill: var(--recipe-radiobutton-checkmark-color-disabled);
  }
`;

export default styled.span<any>(base);
