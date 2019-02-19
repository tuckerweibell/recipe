import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import {hideVisually} from '../../styles';
import styled, {Themed} from '../../themes/styled';

const base = ({theme}: Themed) => css`
  line-height: ${theme.lineHeights.heading};
  font-weight: ${theme.fontWeights.bold};
`;

const typography = ({shade, size}) => ({theme}: Themed) => css`
  color: ${theme.colors.grays[shade]};
  font-size: ${theme.fontSizes[size]};
`;

const size = variant('size', {
  small: typography({shade: 600, size: 200}),
  normal: typography({shade: 700, size: 300}),
});

const top = ({theme}: Themed) => ({'margin-bottom': theme.spacing.xs2});
const bottom = ({theme}: Themed) => ({'margin-top': theme.spacing.xs2});

const left = ({theme}: Themed) => css`
  display: inline;
  margin-right: ${theme.spacing.sm};
`;

const error = ({error, theme}) =>
  error &&
  css`
    color: ${theme.colors.reds.base};
  `;

const position = variant('position', {
  top,
  bottom,
  left,
  hidden: hideVisually(),
});

export default styled.div<any>(base, position, size, error);
