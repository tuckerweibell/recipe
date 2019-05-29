import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const coloredStyles = getColors => ({theme: {colors}}) => {
  const {background, foreground, border} = getColors(colors);
  return css`
    background-color: ${background};
    border-left: 5px solid ${foreground};
    box-shadow: inset -1px 0 0 ${border}, inset 0 1px 0 ${border}, inset 0 -1px 0 ${border};
    svg path {
      fill: ${foreground};
    }
  `;
};

const useStyles = variant('use', {
  error: coloredStyles(colors => colors.destructive),
  info: coloredStyles(colors => colors.info),
  success: coloredStyles(colors => colors.success),
  warning: coloredStyles(colors => colors.warning),
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
