import {shallow as enzymeShallow, render as enzymeRender, mount as enzymeMount} from 'enzyme';
import React from 'react';
import {create as reactCreate, ReactTestRenderer} from 'react-test-renderer';
import {render as rtlRender} from 'react-testing-library';
import {renderToStaticMarkup} from 'react-dom/server';

import {ThemeProvider} from 'emotion-theming';
import {standard} from './themes';

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={standard}>{component}</ThemeProvider>, rest);

export const shallow = tree => {
  const wrapper = enzymeShallow(<ThemeProvider theme={standard} />);
  const instance = wrapper.instance() as any;
  const context = instance.getChildContext();

  return enzymeShallow(tree, {context});
};

export const mount = tree => {
  const wrapper = enzymeShallow(<ThemeProvider theme={standard} />);
  const instance = wrapper.instance() as any;
  const context = instance.getChildContext();

  return enzymeMount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

export const renderToHtml = renderWithTheme(renderToStaticMarkup);

export const render = renderWithTheme(enzymeRender);

export const fullRender = renderWithTheme(rtlRender);

export const create = renderWithTheme(reactCreate);
