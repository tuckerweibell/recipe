import {css} from 'react-emotion';
import styled from '../../themes/styled';

const sizePx = `16px`;

const base = ({theme}) => css`
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
    fill: ${theme.colors.blues[600]};
  }

  /* Not Checked */
  input:not(:checked) + svg path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + svg {
    box-shadow: 0px 0px 2px 2px ${theme.colors.blues[600]};
    border-radius: 50%;
  }

  /* Active */
  input:active + svg path:nth-of-type(1) {
    fill: ${theme.colors.grays[200]};
  }

  /* Disabled */
  input:disabled + svg path:nth-of-type(1) {
    fill: ${theme.colors.grays[200]};
  }

  input:checked:disabled + svg path:nth-of-type(2) {
    fill: ${theme.colors.grays[400]};
  }
`;

export default styled.span<any>(base);
