import {css} from '@emotion/core';
import styled from '../../themes/styled';

const base = () => css`
  position: relative;
  padding: 0.5rem;
  max-width: 300px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  white-space: pre-line;

  > svg {
    position: absolute;
    pointer-events: none;
  }

  .popover-horizontal.popover-flip-x & {
    margin-left: -5px;
    > svg {
      top: calc(50% - 5px);
      right: -5px;
      transform: rotate(90deg);
      transform-origin: bottom center;
    }
  }
  .popover-horizontal:not(.popover-flip-x) & {
    margin-left: 5px;
    > svg {
      top: calc(50% - 5px);
      left: -5px;
      transform: rotate(-90deg);
      transform-origin: bottom center;
    }
  }
  .popover-vertical.popover-flip-y & {
    margin-top: -5px;
    > svg {
      bottom: -5px;
      left: calc(50% - 5px);
      transform: rotate(180deg);
      transform-origin: center;
    }
  }
  .popover-vertical:not(.popover-flip-y) & {
    margin-top: 5px;
    > svg {
      top: -5px;
      left: calc(50% - 5px);
    }
  }
`;

const color = ({theme}) => {
  const backgroundColor = theme.colors.grays['800'];
  const textColor = theme.colors.white;

  return css`
    svg path {
      fill: ${backgroundColor};
    }
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
