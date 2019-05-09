import styled from '../../themes/styled';
import {hideVisually} from '../../styles';

const sizePx = `16px`;

export default styled.label`
  span,
  input {
    ${hideVisually()};
  }

  color: ${({theme}) => theme.colors.blues[600]};
  cursor: pointer;
  display: inline-block;
  height: ${sizePx};
  width: ${sizePx};
  position: relative;
  padding: 2px;
  top: 2px;

  &:before {
    content: '';
    position: absolute;
    border: 1px solid ${({theme}) => theme.colors.grays[400]};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    border-radius: ${({theme}) => theme.borderRadius[1]};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:focus-within:before {
    outline: auto;
  }

  svg {
    display: block;
    stroke: currentColor;
  }

  input:disabled + svg {
    stroke: ${({theme}) => theme.colors.grays[500]};
    background: ${({theme}) => theme.colors.grays[100]};
  }
`;
