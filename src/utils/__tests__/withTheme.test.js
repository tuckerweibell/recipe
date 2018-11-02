import React from 'react';
import styled from 'react-emotion';
import renderer from 'react-test-renderer';
import {createMatchers} from 'jest-emotion';
import * as emotion from 'emotion';
import {ThemeProvider} from 'emotion-theming';
import {withTheme} from '..';

expect.extend(createMatchers(emotion));

describe('withTheme', () => {
  let Component;

  beforeEach(() => {
    Component = withTheme(styled.div`
      background-color: ${({theme}) => theme.colors.destructive.main};
    `);
  });

  it('should render with standard theme by default', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toHaveStyleRule('background-color', '#ec5353');
  });

  it('should render with theme provided as props', () => {
    const theme = {colors: {destructive: {main: 'pink'}}};
    const tree = renderer.create(<Component theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule('background-color', 'pink');
  });

  it('should render with theme provided by ThemeProvider', () => {
    const theme = {colors: {destructive: {main: 'yellow'}}};
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'yellow');
  });

  it('should render with theme provided as props over the theme provided by ThemeProvider', () => {
    const propsTheme = {colors: {destructive: {main: 'pink'}}};
    const providerTheme = {colors: {destructive: {main: 'yellow'}}};
    const tree = renderer
      .create(
        <ThemeProvider theme={providerTheme}>
          <Component theme={propsTheme} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'pink');
  });
});
