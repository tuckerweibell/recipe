import {css} from '@emotion/core';
import styled from '../../themes/styled';

const base = () => css`
  position: relative;
  padding: 0.5rem;
  max-width: 300px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  white-space: pre-line;
`;

const color = ({theme}) => {
  const backgroundColor = theme.colors.grays['800'];
  const textColor = theme.colors.white;

  return css`
    color: ${textColor};
    border: 1px solid ${backgroundColor};
    background-color: ${backgroundColor};
  `;
};

export const Message = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Tooltip = styled.div<any>(base, color);
export const TooltipArrow = styled.div`
  > svg {
    position: absolute;
    pointer-events: none;
    fill: ${({theme}) => theme.colors.grays['800']};
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
