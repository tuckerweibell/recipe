import {css} from 'react-emotion';
import {shade} from 'polished';
import {keyframes, variants} from '../../styles';

export const base = ({theme}) => css`
  border: ${theme.borderWidth[0]} solid;
  border-radius: ${theme.borderRadius[1]};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: inline-block;
  outline: 0;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  line-height: 1em;
  min-height: 1em;
  margin-right: ${theme.spacing[0]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const disabled = ({disabled}) =>
  disabled &&
  css`
    cursor: default;
    opacity: 0.45;
    pointer-events: none;
  `;

const elementStates = (style, color, focusColor) => ({
  [style]: color,
  ['&:hover:enabled']: {[style]: shade(0.85, color)},
  ['&:focus:enabled']: focusColor && {[style]: focusColor},
  ['&:active:enabled']: {[style]: shade(0.75, color)},
});

export const primary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    color: ${colors.primary.contrastText};
    border-color: ${main};
    ${elementStates('border-color', main, shade(0.75, main))};
    ${elementStates('background-color', main)};
  `;
};

export const secondary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    background-color: white;
    border: solid 1px;
    ${elementStates('border-color', colors.grays[100], colors.blues[300])};
    ${elementStates('color', main)};
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

export const loading = ({loading, use, theme: {colors}}) => {
  const color = variants('use', {
    primary: colors.white,
    secondary: colors.grays[700],
  })({use});
  return loading && spinner({...spinnerOptions, color});
};
