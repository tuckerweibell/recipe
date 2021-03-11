import React from 'react';
import {Global, css, CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import {createSerializer, matchers} from 'jest-emotion';
import {toHaveNoViolations} from 'jest-axe';
import {configure as configureSosia} from 'sosia';
import {MarkdownSource} from 'sosia-markdown';
import {RemotePuppeteerBrowserTarget} from 'sosia-remote-puppeteer';
import Style from '@ezcater/snitches';
import EzGlobalStyles from './src/components/EzGlobalStyles';
import themeGlobals from './src/components/theme.config';
import {decorate as minifyDecorator} from './MinifiedBrowserTarget';
import './mocks';
import './src/styles/recipe-global.css';
import '@testing-library/jest-dom/extend-expect';

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(_className, index) {
      return `recipe-${index}`;
    },
  })
);

expect.extend(matchers);

const EmotionCacheProvider = ({children}) => {
  const cache = React.useRef(
    createCache({
      prefix: false,
      // default key prefix is 'css'. Changing it to 'r' (for recipe), to trim the size of the generated output by two chars per class.
      key: 'r',
    })
  );

  // Remove any injected stylesheets from the page when the component is unmounted
  React.useEffect(() => () => cache.current.sheet.flush());

  return <CacheProvider value={cache.current}>{children}</CacheProvider>;
};

const GlobalStylesWrapper = ({children}) => (
  <EmotionCacheProvider>
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
        rel="stylesheet"
      />
      <EzGlobalStyles />
      <Global
        styles={css`
          /* disable animations in visual snapshots */
          *,
          ::before,
          ::after {
            transition-property: none !important;
            animation: none !important;
          }
          body {
            /* restore user agent based margin for backward compatibility with existing snapshots */
            margin: 8px;
          }
        `}
      />
      <Style ruleset={themeGlobals}>{children}</Style>
    </>
  </EmotionCacheProvider>
);

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

const target = [
  // decorators effectively run in reverse order as they modify the
  // page content *before* running executing the next target
  minifyDecorator,
  replacePseudoClasses,
].reduce((res, fn) => fn(res) as any, chromeDesktop);

configureSosia({
  targets: {'chrome-desktop': target},
  sources: {documentation: markdownSourceWithThemeWrapper},
});

// extend jest timeout for snapshots running on CI
jest.setTimeout(10000);
