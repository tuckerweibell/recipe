import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const sharedDirectionalStyles = css`
  border-width: 6px;
  border-style: solid;
  color: transparent;
  content: '';
  left: 13px;
  position: absolute;
`;

const bottomStyles = css`
  &::after {
    ${sharedDirectionalStyles};
    bottom: -12px;
  }
`;

const topStyles = css`
  &::before {
    ${sharedDirectionalStyles};
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

type AlertContainerProps = {
  arrow: string;
  use: string;
};

export const AlertContainer = styled.div<AlertContainerProps>`
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
