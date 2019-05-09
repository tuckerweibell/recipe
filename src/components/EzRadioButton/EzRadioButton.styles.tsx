import {css} from 'react-emotion';
import styled from '../../themes/styled';

const base = ({theme}) => css`
  input {
    opacity: 0;
    position: absolute;
  }

  input + svg {
    position: relative;

    path:nth-of-type(1) {
      fill: white;
    }

    path:nth-of-type(2) {
      fill: ${theme.colors.blues[600]};
    }
  }

  input:not(:checked) + svg path:nth-of-type(2) {
    fill: transparent;
  }

  input:focus + svg,
  input:active + svg {
    box-shadow: 0px 0px 2px 2px ${theme.colors.blues[600]};
    border-radius: 50%;

    path:nth-of-type(1) {
      fill: ${theme.colors.grays[200]};
    }
  }

  input:disabled + svg {
    path:nth-of-type(1) {
      fill: ${theme.colors.grays[200]};
    }
  }

  input:checked:disabled + svg {
    path:nth-of-type(2) {
      fill: ${theme.colors.grays[500]};
    }
  }
`;

export default styled.span<any>(base);
