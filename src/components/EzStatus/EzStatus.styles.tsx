import {css} from 'emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';
import {EzStatusSizes, EzStatusProps} from './EzStatus.types';

const coloredStyles = getColors => ({theme: {colors}}) => {
  const [lightColor, darkColor] = getColors(colors);
  return css`
    background-color: ${lightColor};
    color: ${darkColor};
  `;
};

const use = variant('use', {
  neutral: coloredStyles(colors => [colors.grays[200], colors.grays[700]]),
  success: coloredStyles(colors => [colors.greens.lighter, colors.greens.dark]),
  informational: coloredStyles(colors => [colors.blues[200], colors.blues[700]]),
  attention: coloredStyles(colors => [colors.blues[200], colors.blues[700]]),
  warning: coloredStyles(colors => [colors.yellows.lighter, colors.yellows.dark]),
  error: coloredStyles(colors => [colors.reds.lighter, colors.reds.dark]),
});

const base = ({theme, size}) => css`
  padding: ${theme.spacing.xs2} ${theme.spacing.sm};
  line-height: 1;
  font-size: ${size === EzStatusSizes.small ? theme.fontSizes[200] : theme.fontSizes[400]};
  font-weight: bold;
  border-radius: 1em;
`;

export const EzStatusContainer = styled.span<EzStatusProps>(base, use);
