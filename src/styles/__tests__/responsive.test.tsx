import React from 'react';
import {responsive} from '..';
import styled from '../../themes/styled';
import {render} from '../../jest-globals';

describe('responsive()', () => {
  let fn;
  const theme = {
    breakpoints: {
      tablet: '37.5rem',
      desktop: '56.25rem',
      big: '75rem',
    },
  };
  const colors = {
    white: '#fff',
    black: '#000',
  };

  beforeEach(() => {
    fn = responsive('use', {
      light: 'color: #fff',
      dark: props => `color: ${props.colors.black}`,
    });
  });

  it('should return undefined if there is no matching prop', () => {
    expect(fn({})).toBeUndefined();
  });

  it('should render base styles plus media queries for each breakpoint provided', () => {
    const subjectUnderTest = fn({use: {base: 'light', desktop: 'dark'}, colors, theme});
    const Component = styled.div(subjectUnderTest);
    const actual = render(<Component />);
    expect(actual).toMatchSnapshot();
  });

  it('should raise an error if called without a base variant', () => {
    expect(() => fn({use: {desktop: 'dark'}, colors, theme})).toThrow();
  });

  it('should raise an error if called without a theme', () => {
    expect(() => fn({use: {base: 'light', desktop: 'dark'}, colors})).toThrow();
  });

  it('should raise an error if called without breakpoints', () => {
    expect(() => fn({use: {base: 'light', desktop: 'dark'}, colors, theme: {}})).toThrow();
  });
});
