import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';
import {keyframes, darken, pseudoClasses} from '../../styles';

const base = ({theme}) => css`
  cursor: pointer;
  display: inline-block;
  outline: 0;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: ${theme.fontWeights.bold};
  line-height: 1em;
  min-height: 1em;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
`;

const disabled = ({disabled: isDisabled}) =>
  isDisabled &&
  css`
    cursor: default;
    opacity: 0.45;
    pointer-events: none;
  `;

const outlineStyles = ({theme}) => css`
  border-radius: ${theme.borderRadius[1]};
  border-style: solid;
  border-width: ${theme.borderWidth[0]};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  padding: ${theme.spacing.xs} ${theme.spacing.md};
`;

const outline = variant('use', {
  primary: outlineStyles,
  secondary: outlineStyles,
});

const primary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    color: ${colors.primary.contrastText};
    border-color: ${main};
    ${pseudoClasses('border-color', {color: main, focusColor: darken(main, 0.25)})};
    ${pseudoClasses('background-color', {color: main})};
  `;
};

const secondary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    background-color: white;
    border: solid 1px;
    ${pseudoClasses('border-color', {color: colors.grays[400], focusColor: colors.blues[600]})};
    ${pseudoClasses('color', {color: main})};
  `;
};

const tertiary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    background: none;
    border: none;
    padding: 0;
    ${pseudoClasses('color', {color: main})};

    &:focus {
      outline: auto;
    }
  `;
};

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

const loading = ({loading: isLoading, use, theme: {colors}}) => {
  const color = variant('use', {
    primary: colors.white,
    secondary: colors.grays[700],
  })({use});
  return isLoading && spinner({...spinnerOptions, color});
};

const use = variant('use', {
  primary,
  secondary,
  tertiary,
});

const baseStyles = [base, use, disabled, loading, outline];

export default styled('button')(...baseStyles);
