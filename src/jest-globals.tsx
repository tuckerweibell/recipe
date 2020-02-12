import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {ThemeProvider} from 'emotion-theming';
import {standard} from './themes';

import '@testing-library/jest-dom/extend-expect';

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={standard}>{component}</ThemeProvider>, rest);

export const renderToHtml = renderWithTheme((ui, options) => {
  const {container} = render(ui, options);
  return container.outerHTML;
});

export const fullRender = renderWithTheme(render);

afterEach(cleanup);
