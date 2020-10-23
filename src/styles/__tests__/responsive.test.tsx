import React from 'react';
import styled from '@emotion/styled';
import {responsive} from '..';
import {fullRender} from '../../jest-globals';

describe('responsive()', () => {
  let fn;
  let spyOnErrors;
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
    spyOnErrors = jest.spyOn(console, 'error');
  });

  afterEach(() => spyOnErrors.mockReset());

  it('should return undefined if there is no matching prop', () => {
    expect(fn({})).toBeUndefined();
  });

  it('should render base styles plus media queries for each breakpoint provided', () => {
    const subjectUnderTest = fn({use: {base: 'light', desktop: 'dark'}, colors, theme});
    const Component = styled.div(subjectUnderTest);
    const {container} = fullRender(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should raise an error if called without a base variant', () => {
    fn({use: {desktop: 'dark'}, colors, theme});
    expect(spyOnErrors).toHaveBeenCalled();
  });
});
