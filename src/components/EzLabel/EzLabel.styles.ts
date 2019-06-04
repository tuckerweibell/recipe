import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import {hideVisually} from '../../styles';
import styled, {Themed} from '../../themes/styled';

const base = ({theme}: Themed) => css`
  line-height: ${theme.lineHeights.heading};
  font-weight: ${theme.fontWeights.bold};
`;

const typography = ({shade, size}) => ({theme}: Themed) => css`
  color: ${theme.colors.text[shade]};
  font-size: ${theme.fontSizes[size]};
`;

const size = variant('size', {
  small: typography({shade: 'deemphasis', size: 200}),
  normal: typography({shade: 'base', size: 300}),
});

const top = ({theme}: Themed) => ({marginBottom: theme.spacing.xs2});
const bottom = ({theme}: Themed) => ({marginTop: theme.spacing.xs2});

const left = ({theme}: Themed) => css`
  display: inline-block;
  margin-right: ${theme.spacing.sm};
`;

const right = ({theme}: Themed) => css`
  display: inline-block;
  margin-left: ${theme.spacing.sm};
`;

const error = ({error: hasError, theme}) =>
  hasError &&
  css`
    color: ${theme.colors.destructive.foreground};
  `;

const position = variant('position', {
  top,
  bottom,
  left,
  right,
  hidden: hideVisually,
});

export default styled.div<any>(base, position, size, error);
