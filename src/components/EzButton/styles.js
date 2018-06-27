import {css} from 'react-emotion';
import {shade} from 'polished';

export const base = ({theme}) => css`
  border: none;
  border-radius: ${theme.borderRadius[1]};
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

const elementStates = (style, color) => ({
  [style]: color,
  ['&:hover:enabled']: {[style]: shade(0.9, color)},
  ['&:focus:enabled']: {[style]: shade(0.8, color)},
  ['&:active:enabled']: {[style]: shade(0.7, color)},
});

export const primary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    color: ${colors.primary.contrastText};
    ${elementStates('background-color', main)};
  `;
};

export const secondary = ({theme: {colors}, destructive}) => {
  const {main} = destructive ? colors.destructive : colors.primary;
  return css`
    background-color: transparent;
    border: solid 1px;
    ${elementStates('border-color', main)};
    ${elementStates('color', main)};
  `;
};
