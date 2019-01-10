import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import {hideVisually} from 'polished';
import styled, {Themed} from '../../themes/styled';

const base = ({theme}: Themed) => css`
  line-height: ${theme.lineHeights.heading};
  font-weight: ${theme.fontWeights.bold};
`;

const small = ({theme}: Themed) => css`
  color: ${theme.colors.grays[600]};
  font-size: ${theme.fontSizes[200]};
`;

const normal = ({theme}: Themed) => css`
  color: ${theme.colors.grays[700]};
  font-size: ${theme.fontSizes[300]};
`;

const size = variant('size', {
  small,
  normal,
});

const top = ({theme}: Themed) => css`
  margin-bottom: ${theme.spacing.xs2};
`;

const bottom = ({theme}: Themed) => css`
  margin-top: ${theme.spacing.xs2};
`;

const left = ({theme}: Themed) => css`
  display: inline;
  margin-right: ${theme.spacing.sm};
`;

const position = variant('position', {
  top,
  bottom,
  left,
  hidden: hideVisually(),
});

export default styled.div<any>(base, position, size);
