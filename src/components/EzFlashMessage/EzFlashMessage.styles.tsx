import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import {EzCard} from '../EzCard';
import styled from '../../themes/styled';

const coloredStyles = getColors => ({theme: {colors}}) => {
  const {background, foreground, border} = getColors(colors);
  return css`
    background-color: ${background};
    border-color: ${border};
    border-left-width: 5px;
    border-left-color: ${foreground};
    svg path {
      fill: ${foreground};
    }
  `;
};

const accent = variant('use', {
  error: coloredStyles(colors => colors.destructive),
  info: coloredStyles(colors => colors.info),
  success: coloredStyles(colors => colors.success),
  warning: coloredStyles(colors => colors.warning),
});

export type FlashMessageContainerProps = {
  use: 'success' | 'error' | 'warning' | 'info';
};

export type FlashMessageProps = FlashMessageContainerProps & {
  children: React.ReactNode;
  headline?: string;
  onDismiss?: () => void;
};

export const FlashMessageContainer = styled(EzCard)<FlashMessageContainerProps>`
  ${accent};
`;
