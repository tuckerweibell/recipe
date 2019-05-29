import {css} from 'emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';
import {EzStatusProps} from './EzStatus.types';

const coloredStyles = getColors => ({theme: {colors}}) => {
  const [lightColor, darkColor] = getColors(colors);
  return css`
    background-color: ${lightColor};
    color: ${darkColor};
  `;
};

const use = variant('use', {
  neutral: coloredStyles(colors => [colors.page.background, colors.text.base]),
  success: coloredStyles(colors => [colors.success.background, colors.success.text]),
  informational: coloredStyles(colors => [colors.info.background, colors.info.text]),
  attention: coloredStyles(colors => [colors.info.background, colors.info.text]),
  warning: coloredStyles(colors => [colors.warning.background, colors.warning.text]),
  error: coloredStyles(colors => [colors.destructive.background, colors.destructive.text]),
});

const base = ({theme, size}) => css`
  padding: ${theme.spacing.xs2} ${theme.spacing.sm};
  line-height: 1;
  font-size: ${size === 'small' ? theme.fontSizes[200] : theme.fontSizes[400]};
  font-weight: bold;
  border-radius: 1em;
`;

export const EzStatusContainer = styled.span<EzStatusProps>(base, use);
