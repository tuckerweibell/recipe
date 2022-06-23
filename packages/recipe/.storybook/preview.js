import React from 'react';
import {addDecorator} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {ezTheme} from '../src/themes';
import EzGlobalStyles from '../src/components/EzGlobalStyles';
import EzThemeProvider from '../src/components/EzThemeProvider';

addDecorator(story => (
  <EzThemeProvider theme={ezTheme}>
    <EzGlobalStyles />
    {story()}
  </EzThemeProvider>
));

const customViewports = {
  breakpointXs: {
    name: `Breakpoint Extra Small (${ezTheme.breakpoints.values.xs || 320}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.xs || 320}px`,
      height: '1000px',
    },
  },
  breakpointSm: {
    name: `Breakpoint Small (${ezTheme.breakpoints.values.sm}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.sm}px`,
      height: '1000px',
    },
  },
  breakpointMd: {
    name: `Breakpoint Medium (${ezTheme.breakpoints.values.md}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.md}px`,
      height: '1000px',
    },
  },
  breakpointLg: {
    name: `Breakpoint Large (${ezTheme.breakpoints.values.lg}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.lg}px`,
      height: '1000px',
    },
  },
  breakpointXl: {
    name: `Breakpoint Extra Large (${ezTheme.breakpoints.values.xl}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.xl}px`,
      height: '1000px',
    },
  },
};

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: {...customViewports, ...INITIAL_VIEWPORTS},
  },
};
