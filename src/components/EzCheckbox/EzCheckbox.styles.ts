import {css} from '@emotion/core';
import styled from '../../themes/styled';

const sizePx = `16px`;

const base = ({theme: {colors}}) => css`
  display: inline-block;
  height: ${sizePx};
  width: ${sizePx};
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
    fill: ${colors.interactive.base};
  }

  /* Not Checked */
  input:not(:checked) + svg path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + svg {
    box-shadow: 0px 0px 2px 2px ${colors.interactive.focus.outline};
    border-radius: 3px;
  }

  /* Hover */
  input:hover + svg path:nth-of-type(1) {
    fill: ${colors.interactive.hover.background};
    stroke: ${colors.interactive.hover.border};
  }

  /* Active */
  input:active + svg path:nth-of-type(1) {
    fill: ${colors.interactive.active.background};
  }

  /* Disabled */
  input:disabled + svg path:nth-of-type(1) {
    fill: ${colors.interactive.disabled.background};
    stroke: ${colors.border.base};
  }

  input:checked:disabled + svg path:nth-of-type(2) {
    fill: ${colors.interactive.disabled.foreground};
  }
`;

export const AcknowledgmentContainer = styled.div`
  display: flex;
  align-items: baseline;

  > * {
    margin-right: ${({theme}) => theme.spacing.xs};
  }

  p {
    margin: 0;
    ${({theme}) => theme.fonts.body};
  }
`;

export const CheckboxWrapper = styled.span<any>(base);
