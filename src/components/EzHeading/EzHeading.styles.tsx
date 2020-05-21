import variant from 'styled-component-variant';
import {css} from '@emotion/core';
import {align} from '../EzTextStyle/EzTextStyle.styles';
import styled from '../../themes/styled';

export const Subheading = styled.div`
  color: ${props => props.theme.colors.text.deemphasis};
  font-size: ${props => props.theme.fontSizes[300]};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};
  margin-top: ${props => props.theme.spacing.xs};
`;

const heading = (size, weight) => ({theme}) => css`
  color: ${theme.colors.text.base};
  font-size: ${theme.fontSizes[size]};
  font-weight: ${theme.fontWeights[weight]};
  line-height: ${theme.lineHeights.heading};
  margin: 0;
`;

const size = variant('size', {
  1: heading(700, 'normal'),
  2: heading(600, 'normal'),
  3: heading(500, 'bold'),
  4: heading(400, 'normal'),
  5: heading(300, 'bold'),
  6: heading(200, 'normal'),
});

export const headings = ['1', '2', '3', '4', '5', '6'].reduce((res, n) => {
  const tag = `h${n}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return {[tag]: styled(tag)(size, align), ...res};
}, {});

export const Header = styled.header(align);
