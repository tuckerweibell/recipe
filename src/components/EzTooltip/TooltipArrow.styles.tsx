import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const left = () =>
  css`
    right: -5px;
    transform: rotate(90deg);
    transform-origin: bottom center;
  `;
const right = () =>
  css`
    left: -5px;
    transform: rotate(-90deg);
    transform-origin: bottom center;
  `;

const top = () =>
  css`
    bottom: -5px;
    transform: rotate(180deg);
    transform-origin: center;
  `;
const bottom = () =>
  css`
    top: -5px;
  `;

const base = () => css`
  position: absolute;
  pointer-events: none;
`;

const tooltipPosition = variant('position', {
  left,
  right,
  top,
  bottom,
});

const arrowPosition = ({position}) => {
  if (['left', 'right'].includes(position)) return 'top: calc(50% - 5px);';
  return 'left: calc(50% - 5px);';
};

export const TooltipArrowSVG = styled.svg<any>(base, tooltipPosition, arrowPosition);
