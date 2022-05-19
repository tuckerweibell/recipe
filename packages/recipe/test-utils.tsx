/* eslint-disable filenames/match-regex */
import React, {FC, ReactElement} from 'react';
import {configureAxe} from 'jest-axe';
import {render, RenderOptions} from '@testing-library/react';
import EzThemeProvider from './src/components/EzThemeProvider';
import {ezTheme} from './src/themes';

const axe = configureAxe({
  rules: {
    // disable landmark rules when testing isolated components
    region: {enabled: false},
  },
});

const ProviderStack: FC = ({children}) => (
  <EzThemeProvider theme={ezTheme}>{children}</EzThemeProvider>
);

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, {wrapper: ProviderStack, ...options});

export * from '@testing-library/react';
export {default as userEvent} from '@testing-library/user-event';
export {customRender as render};
export {axe};
