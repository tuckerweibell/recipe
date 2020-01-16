import React from 'react';
import {render as rtlRender, cleanup} from '@testing-library/react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ThemeProvider} from 'emotion-theming';
import {standard} from './themes';

import '@testing-library/jest-dom/extend-expect';

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={standard}>{component}</ThemeProvider>, rest);

export const renderToHtml = renderWithTheme(renderToStaticMarkup);

export const fullRender = renderWithTheme(rtlRender);

afterEach(cleanup);
