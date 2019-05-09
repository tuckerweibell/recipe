import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const coloredStyles = getColors => ({theme: {colors}}) => {
  const [backgroundColor, color, borderColor] = getColors(colors);
  return css`
    background-color: ${backgroundColor};
    border-left: 5px solid ${color};
    box-shadow: inset -1px 0 0 ${borderColor}, inset 0 1px 0 ${borderColor},
      inset 0 -1px 0 ${borderColor};
    svg path {
      fill: ${color};
    }
  `;
};

const useStyles = variant('use', {
  error: coloredStyles(colors => [colors.reds.lighter, colors.reds.base, colors.reds.light]),
  info: coloredStyles(colors => [colors.blues[200], colors.blues[700], colors.blues[700]]),
  success: coloredStyles(colors => [
    colors.greens.lighter,
    colors.greens.base,
    colors.greens.light,
  ]),
  warning: coloredStyles(colors => [
    colors.yellows.lighter,
    colors.yellows.base,
    colors.yellows.light,
  ]),
});

export type FlashMessageContainerProps = {
  use: string;
};

export type FlashMessageProps = FlashMessageContainerProps & {
  children: React.ReactNode;
  headline?: string;
  onDismiss?: () => void;
};

export const FlashMessageContainer = styled.div<FlashMessageContainerProps>`
  border-radius: ${props => props.theme.borderRadius[1]};
  border-width: 1px;
  display: flex;
  padding: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.lg};
  ${useStyles};
  p:last-of-type {
    margin-bottom: 0;
  }
`;

export const FlashMessageContents = styled.div`
  margin: 0 ${props => props.theme.spacing.sm};
  flex: 1;
`;

export const FlashMessageHeadline = styled.p`
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: bold;
`;

export const CloseButton = styled.button`
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
`;
