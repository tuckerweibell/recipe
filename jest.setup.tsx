import React from 'react';
import {toHaveNoViolations} from 'jest-axe';
import {configure as configureSosia} from 'sosia';
import {MarkdownSource} from 'sosia-markdown';
import {RemotePuppeteerBrowserTarget} from 'sosia-remote-puppeteer';
import Style from '@ezcater/snitches';
import EzGlobalStyles from './src/components/EzGlobalStyles';
import theme from './src/components/theme.config';
import {decorate as minifyDecorator} from './MinifiedBrowserTarget';
import './mocks';
import './src/styles/recipe-global.css';
import '@testing-library/jest-dom/extend-expect';

const globals = theme.global({
  // disable animations in visual snapshots
  '*, *::before, *::after': {
    transitionProperty: 'none !important',
    animation: 'none !important',
  },
  // restore user agent based margin for backward compatibility with existing snapshots
  when: {medium: {body: {margin: '8px'}}},
});

// Add custom matchers
expect.extend(toHaveNoViolations);

const GlobalStylesWrapper = ({children}) => {
  globals();
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
        rel="stylesheet"
      />
      <EzGlobalStyles />
      <Style ruleset={theme}>{children}</Style>
    </>
  );
};

const markdownSource = new MarkdownSource();
const markdownSourceWithThemeWrapper = {
  execute: options => {
    const examples = markdownSource.execute(options).filter(e => Boolean(e.name?.trim()));
    return examples.map(({name, component}) => ({
      name,
      component: () => <GlobalStylesWrapper>{component()}</GlobalStylesWrapper>,
    }));
  },
};

const chromeDesktop = new RemotePuppeteerBrowserTarget({
  url: new URL('https://remote-screenshot-puppeteer.craigcavalier.now.sh/'),
  width: 1024,
  height: 768,
});

const replacePseudoClasses = target => ({
  execute(pages: any) {
    const replace = content => content.replace(/(\:)(hover|active)/g, (...args) => `.__${args[2]}`);
    return target.execute(
      pages.map(({css, body, name}) => ({
        css: replace(css),
        body: replace(body),
        name,
      }))
    );
  },
});

// This works around an issue in Sosia whereby any inline style tags are
// retained, but their content is also copied into the `css` block
// rendered into the head of the page
const removeServerRenderedStyleTags = target => ({
  execute(pages: any) {
    return target.execute(
      pages.map(({css, body, name}) => {
        // parse the body string as HTML, then nuke any inline styles
        const container = document.createElement('body');
        container.innerHTML = body;

        container.querySelectorAll('style').forEach(el => {
          el.parentElement.removeChild(el);
        });

        return {
          css: css,
          body: container.outerHTML,
          name,
        };
      })
    );
  },
});

const target = [
  // decorators effectively run in reverse order as they modify the
  // page content *before* running executing the next target
  minifyDecorator,
  replacePseudoClasses,
  removeServerRenderedStyleTags,
].reduce((res, fn) => fn(res) as any, chromeDesktop);

configureSosia({
  targets: {'chrome-desktop': target},
  sources: {documentation: markdownSourceWithThemeWrapper},
});

// extend jest timeout for snapshots running on CI
jest.setTimeout(20000);
