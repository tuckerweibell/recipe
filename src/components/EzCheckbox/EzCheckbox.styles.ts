import {css} from 'react-emotion';
import styled from '../../themes/styled';

const sizePx = `16px`;

const base = ({theme}) => css`
  display: inline-block;
  height: ${sizePx};
  width: ${sizePx};
  position: relative;
  padding: 2px;
  top: 2px;

  input {
    opacity: 0;
    position: absolute;
  }

  input + svg {
    display: block;
    stroke: ${theme.colors.blues[600]};
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.grays[400]};
    border-radius: 2px;
  }

  input:not(:checked) + svg {
    stroke: transparent;
  }

  input:disabled + svg {
    stroke: ${theme.colors.grays[500]};
    background: ${theme.colors.grays[100]};
  }

  input:focus + svg,
  input:active + svg {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.grays[400]},
      0px 0px 2px 3px ${theme.colors.blues[600]};
    border-radius: 2px;
  }

  input:active + svg {
    background-color: ${theme.colors.grays[200]};
  }
`;

export default styled.span<any>(base);
