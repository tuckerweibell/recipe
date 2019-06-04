import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const base = () => css`
  position: relative;
  padding: 0.5rem;
  max-width: 300px;
  *:first-child {
    margin-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
  }
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
`;

const color = ({theme}) => {
  const backgroundColor = theme.colors.grays['800'];
  const textColor = theme.colors.white;

  return css`
    svg:first-of-type {
      path:nth-of-type(1) {
        fill: ${backgroundColor};
      }
      path:nth-of-type(2) {
        fill: ${backgroundColor};
      }
    }
    color: ${textColor};
    border: 1px solid ${backgroundColor};
    background-color: ${backgroundColor};
  `;
};

const left = () =>
  css`
    right: 5px;
  `;
const right = () =>
  css`
    left: 5px;
  `;

const top = () =>
  css`
    left: -50%;
    right: 50%;
    bottom: 5px;
  `;
const bottom = () =>
  css`
    left: -50%;
    right: 50%;
    top: 5px;
  `;

const position = variant('position', {
  left,
  right,
  top,
  bottom,
});

export const Message = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Tooltip = styled.div<any>(base, color, position);
