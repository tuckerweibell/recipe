import styled, {css} from 'react-emotion';
import variant from 'styled-component-variant';

const sharedDirectionalStyles = spacing => css`
  border-width: 6px;
  border-style: solid;
  color: transparent;
  content: '';
  left: 13px;
  position: absolute;
`;

const bottomStyles = ({theme: {spacing}}) => css`
  &::after {
    ${sharedDirectionalStyles(spacing)};
    bottom: -12px;
  }
`;

const topStyles = ({theme: {spacing}}) => css`
  &::before {
    ${sharedDirectionalStyles(spacing)};
    top: -12px;
  }
`;

const coloredStyles = (lightColor, darkColor) => css`
  background-color: ${lightColor};
  color: ${darkColor};

  &::after {
    border-top-color: ${lightColor};
  }

  &::before {
    border-bottom-color: ${lightColor};
  }
`;

const successStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.greens.lighter, colors.greens.dark)};
`;

const errorStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.reds.lighter, colors.reds.dark)};
`;

const warningStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.yellows.lighter, colors.yellows.dark)};
`;

const infoStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.blues[200], colors.blues[700])};
`;

const marketingStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.teals.lighter, colors.teals.dark)};
`;

const tipStyles = ({theme: {colors}}) => css`
  ${coloredStyles(colors.purples.lighter, colors.purples.dark)};
`;

const arrowStyles = variant('arrow', {
  bottom: bottomStyles,
  top: topStyles,
});

const useStyles = variant('use', {
  error: errorStyles,
  tip: tipStyles,
  info: infoStyles,
  marketing: marketingStyles,
  success: successStyles,
  warning: warningStyles,
});

export const AlertContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius[1]};
  border-width: 0;
  display: inline-flex;
  padding: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.lg};
  position: relative;

  ${useStyles};
  ${arrowStyles};
`;

export const AlertContent = styled.div`
  margin-left: ${props => props.theme.spacing.xs};
`;
