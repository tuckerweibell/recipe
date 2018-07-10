import {css} from 'react-emotion';
import {shade} from 'polished';

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
    ${elementStates('border-color', colors.grays[100], colors.blues[200])};
    ${elementStates('color', main)};
  `;
};
