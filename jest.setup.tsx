import React from 'react';
import {Global, css, CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import {createSerializer, matchers} from 'jest-emotion';
import {toHaveNoViolations} from 'jest-axe';
import {configure as configureSosia} from 'sosia';
import {MarkdownSource} from 'sosia-markdown';
import {RemotePuppeteerBrowserTarget} from 'sosia-remote-puppeteer';
import {ThemeProvider} from 'emotion-theming';
import * as themes from './src/themes';
import EzGlobalStyles from './src/components/EzGlobalStyles';

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
      stylisPlugins: [
        // can't trigger :hover and :active pseudo classes with JS, so replace the pseudo classes with custom class,
        // e.g. :hover => .__hover
        // for plugin overview, see: https://github.com/thysultan/stylis.js#plugins
        (context, content) => {
          switch (context) {
            case -2:
              return content.replace(/(\:)(hover|active)/g, (...args) => `.__${args[2]}`);
          }
        },
      ],
    })
  );

  // Remove any injected stylesheets from the page when the component is unmounted
  React.useEffect(() => () => cache.current.sheet.flush());

  return <CacheProvider value={cache.current}>{children}</CacheProvider>;
};

const GlobalStylesWrapper = ({children}) => (
  <EmotionCacheProvider>
    <ThemeProvider theme={themes.standard}>
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
        {children}
      </>
    </ThemeProvider>
  </EmotionCacheProvider>
);

const markdownSource = new MarkdownSource();
const markdownSourceWithThemeWrapper = {
  execute: options => {
    const examples = markdownSource.execute(options);
    return examples.map(({name, component}) => ({
      name,
      component: () => <GlobalStylesWrapper>{component()}</GlobalStylesWrapper>,
    }));
  },
};

configureSosia({
  targets: {
    'chrome-desktop': new RemotePuppeteerBrowserTarget({
      url: new URL('https://remote-screenshot-puppeteer.craigcavalier.now.sh/'),
      width: 1024,
      height: 768,
    }),
  },
  sources: {documentation: markdownSourceWithThemeWrapper},
});

// extend jest timeout for snapshots running on CI
jest.setTimeout(10000);
