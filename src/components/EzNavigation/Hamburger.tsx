import React, {SFC} from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

type OpenProps = {
  opened: boolean;
};

type HamburgerProps = OpenProps & {
  onClick: (ev: React.SyntheticEvent<any>) => void;
};

const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

const active = ({active: isActive}) =>
  isActive &&
  css`
    &,
    &:after,
    &:before {
      background-color: #fff;
    }

    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s;

    &::before {
      transition-delay: 0s;
      opacity: 0;
    }

    &::after {
      transform: translate3d(0, -20px, 0) rotate(-270deg);
      transition-delay: 0.075s;
    }
  `;

const HamburgerInner = styled.span`
  display: block;
  top: 2px;
  margin-top: -2px;

  &,
  &::before,
  &::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }

  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }

  &::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  ${active}
`;

const normalizeButton = () => css`
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
`;

const ToggleButton = styled.button<OpenProps>`
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  ${normalizeButton};

  &:hover {
    opacity: 0.7;
  }
`;

const Hamburger: SFC<HamburgerProps> = ({opened, onClick}) => (
  <ToggleButton opened={opened} onClick={onClick} aria-label="Menu">
    <HamburgerBox>
      <HamburgerInner active={opened} />
    </HamburgerBox>
  </ToggleButton>
);

export default Hamburger;
