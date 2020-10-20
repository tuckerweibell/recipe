import variant from 'styled-component-variant';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {align} from '../EzTextStyle/EzTextStyle.styles';
import './vars.css';

export const Subheading = styled.div`
  color: var(--recipe-subheading-text-color);
  font-size: var(--recipe-subheading-font-size);
  font-weight: var(--recipe-subheading-font-weight);
  line-height: var(--recipe-subheading-leading);
  margin-top: var(--recipe-global-static-size-100);
`;

const base = () => css`
  color: var(--recipe-heading-text-color);
  font-size: var(--recipe-heading-font-size);
  font-weight: var(--recipe-heading-font-weight);
  line-height: var(--recipe-heading-leading);
  margin: var(--recipe-global-static-size-0);
`;

const heading = (fs, fw) => ({
  '--recipe-heading-font-size': `var(--recipe-global-font-size-${fs})`,
  '--recipe-heading-font-weight': `var(--recipe-global-font-weight-${fw})`,
});

const size = variant('size', {
  1: heading(800, 'regular'),
  2: heading(450, 'regular'),
  3: heading(300, 'bold'),
  4: heading(200, 'regular'),
  5: heading(100, 'bold'),
  6: heading(75, 'regular'),
});

export const headings = ['1', '2', '3', '4', '5', '6'].reduce((res, n) => {
  const tag = `h${n}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return {[tag]: styled(tag)(size, base, align), ...res};
}, {});

export const Header = styled.header(align);
