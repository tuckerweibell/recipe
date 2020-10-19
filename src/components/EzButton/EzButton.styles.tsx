import React, {forwardRef} from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {keyframes} from '../../styles';
import './vars.css';

const base = () => css`
  cursor: pointer;
  display: inline-block;
  outline: 0;
  font-size: var(--recipe-button-font-size);
  font-family: var(--recipe-button-font-family);
  font-weight: var(--recipe-button-font-weight);
  line-height: var(--recipe-button-leading);
  min-height: 1rem;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  color: var(--recipe-button-text-color);
  background-color: var(--recipe-button-background-color);
  border-color: var(--recipe-button-border-color);
`;

const disabled = ({disabled: isDisabled}) =>
  isDisabled &&
  css`
    cursor: default;
    opacity: 0.45;
    pointer-events: none;
  `;

const outlineStyles = () => css`
  border-radius: var(--recipe-button-border-radius);
  border-style: solid;
  border-width: var(--recipe-button-border-size);
  box-shadow: var(--recipe-alias-shadow-small);
  padding: var(--recipe-button-padding-y) var(--recipe-button-padding-x);

  :focus {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
  }
`;

const outline = variant('use', {
  primary: outlineStyles,
  secondary: outlineStyles,
});

const primaryBase = () => css`
  --recipe-button-text-color: var(--recipe-button-primary-text-color);
  --recipe-button-background-color: var(--recipe-button-primary-background-color);
  --recipe-button-border-color: var(--recipe-button-primary-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-primary-text-color);
    --recipe-button-background-color: var(--recipe-button-primary-background-color-focus);
    --recipe-button-border-color: var(--recipe-button-primary-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-primary-text-color-hover);
    --recipe-button-background-color: var(--recipe-button-primary-background-color-hover);
    --recipe-button-border-color: var(--recipe-button-primary-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-primary-text-color-down);
    --recipe-button-background-color: var(--recipe-button-primary-background-color-down);
    --recipe-button-border-color: var(--recipe-button-primary-border-color-down);
  }
`;

const primaryDestructive = () => css`
  --recipe-button-text-color: var(--recipe-button-primary-destructive-text-color);
  --recipe-button-background-color: var(--recipe-button-primary-destructive-background-color);
  --recipe-button-border-color: var(--recipe-button-primary-destructive-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-primary-destructive-text-color);
    --recipe-button-background-color: var(
      --recipe-button-primary-destructive-background-color-focus
    );
    --recipe-button-border-color: var(--recipe-button-primary-destructive-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-primary-destructive-text-color-hover);
    --recipe-button-background-color: var(
      --recipe-button-primary-destructive-background-color-hover
    );
    --recipe-button-border-color: var(--recipe-button-primary-destructive-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-primary-destructive-text-color-down);
    --recipe-button-background-color: var(
      --recipe-button-primary-destructive-background-color-down
    );
    --recipe-button-border-color: var(--recipe-button-primary-destructive-border-color-down);
  }
`;

const primary = ({destructive}) => {
  return destructive ? primaryDestructive() : primaryBase();
};

const secondaryBase = () => css`
  --recipe-button-text-color: var(--recipe-button-secondary-text-color);
  --recipe-button-background-color: var(--recipe-button-secondary-background-color);
  --recipe-button-border-color: var(--recipe-button-secondary-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-secondary-text-color);
    --recipe-button-background-color: var(--recipe-button-secondary-background-color-focus);
    --recipe-button-border-color: var(--recipe-button-secondary-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-secondary-text-color-hover);
    --recipe-button-background-color: var(--recipe-button-secondary-background-color-hover);
    --recipe-button-border-color: var(--recipe-button-secondary-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-secondary-text-color-down);
    --recipe-button-background-color: var(--recipe-button-secondary-background-color-down);
    --recipe-button-border-color: var(--recipe-button-secondary-border-color-down);
  }
`;

const secondaryDestructive = () => css`
  --recipe-button-text-color: var(--recipe-button-secondary-destructive-text-color);
  --recipe-button-background-color: var(--recipe-button-secondary-destructive-background-color);
  --recipe-button-border-color: var(--recipe-button-secondary-destructive-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-secondary-destructive-text-color);
    --recipe-button-background-color: var(
      --recipe-button-secondary-destructive-background-color-focus
    );
    --recipe-button-border-color: var(--recipe-button-secondary-destructive-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-secondary-destructive-text-color-hover);
    --recipe-button-background-color: var(
      --recipe-button-secondary-destructive-background-color-hover
    );
    --recipe-button-border-color: var(--recipe-button-secondary-destructive-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-secondary-destructive-text-color-down);
    --recipe-button-background-color: var(
      --recipe-button-secondary-destructive-background-color-down
    );
    --recipe-button-border-color: var(--recipe-button-secondary-destructive-border-color-down);
  }
`;

const secondary = ({destructive}) => {
  return destructive ? secondaryDestructive() : secondaryBase();
};

const tertiaryBase = () => css`
  --recipe-button-text-color: var(--recipe-button-tertiary-text-color);
  --recipe-button-background-color: var(--recipe-button-tertiary-background-color);
  --recipe-button-border-color: var(--recipe-button-tertiary-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-tertiary-text-color);
    --recipe-button-background-color: var(--recipe-button-tertiary-background-color-focus);
    --recipe-button-border-color: var(--recipe-button-tertiary-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-tertiary-text-color-hover);
    --recipe-button-background-color: var(--recipe-button-tertiary-background-color-hover);
    --recipe-button-border-color: var(--recipe-button-tertiary-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-tertiary-text-color-down);
    --recipe-button-background-color: var(--recipe-button-tertiary-background-color-down);
    --recipe-button-border-color: var(--recipe-button-tertiary-border-color-down);
  }
`;

const tertiaryDestructive = () => css`
  --recipe-button-text-color: var(--recipe-button-tertiary-destructive-text-color);
  --recipe-button-background-color: var(--recipe-button-tertiary-destructive-background-color);
  --recipe-button-border-color: var(--recipe-button-tertiary-destructive-border-color);

  :focus {
    --recipe-button-text-color: var(--recipe-button-tertiary-destructive-text-color);
    --recipe-button-background-color: var(
      --recipe-button-tertiary-destructive-background-color-focus
    );
    --recipe-button-border-color: var(--recipe-button-tertiary-destructive-border-color-focus);
  }
  :hover {
    --recipe-button-text-color: var(--recipe-button-tertiary-destructive-text-color-hover);
    --recipe-button-background-color: var(
      --recipe-button-tertiary-destructive-background-color-hover
    );
    --recipe-button-border-color: var(--recipe-button-tertiary-destructive-border-color-hover);
  }
  :active {
    --recipe-button-text-color: var(--recipe-button-tertiary-destructive-text-color-down);
    --recipe-button-background-color: var(
      --recipe-button-tertiary-destructive-background-color-down
    );
    --recipe-button-border-color: var(--recipe-button-tertiary-destructive-border-color-down);
  }
`;

const tertiary = ({destructive}) => css`
  border: none;
  line-height: 1rem;
  padding: 0;
  ${destructive ? tertiaryDestructive() : tertiaryBase()};

  &:focus {
    outline: auto;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const spinnerSize = 1.28571429;
const spinnerOptions = {
  size: `${spinnerSize}rem`,
  margin: `${spinnerSize / 2}rem`,
  thickness: '0.2rem',
  radius: '10rem',
};

const spinner = ({margin, size, radius, thickness, color}) => css`
  position: relative;
  color: transparent;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -${margin} 0 0 -${margin};
    width: ${size};
    height: ${size};
    border-radius: ${radius};
    border: ${thickness} solid rgba(0, 0, 0, 0.15);
  }

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -${margin} 0 0 -${margin};
    width: ${size};
    height: ${size};
    animation: ${keyframes.spin()} 0.6s linear;
    animation-iteration-count: infinite;
    border-radius: ${radius};
    border-color: ${color} transparent transparent;
    border-style: solid;
    border-width: ${thickness};
    box-shadow: 0 0 0 1px transparent;
  }
`;

const loading = ({isLoading, use}) => {
  const color = variant('use', {
    primary: 'var(--recipe-button-primary-text-color)',
    secondary: 'var(--recipe-button-secondary-text-color)',
  })({use});
  return isLoading && spinner({...spinnerOptions, color});
};

const use = variant('use', {
  primary,
  secondary,
  tertiary,
});

const baseStyles = [base, use, disabled, loading, outline];

const InlineBlockWrapper = styled.div`
  display: inline-block;
`;

export const DisabledButtonWrapper = forwardRef<any, any>((props, ref) => (
  <InlineBlockWrapper ref={ref} {...props}>
    {props.children}
  </InlineBlockWrapper>
));

export const IconContainer = styled.span`
  display: flex;
  /* enough padding to give rectangle outline (instead of jagged outline of icon/text) */
  padding: 2px;
  align-items: center;
  justify-content: center;

  svg {
    width: 1em;
    height: 1em;
    margin-left: 2px;
  }

  > * + * {
    margin-left: 8px;
  }
`;

export default styled('button')(...baseStyles);
