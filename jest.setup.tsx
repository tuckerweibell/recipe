import React from 'react';
import {createSerializer, createMatchers} from 'jest-emotion';
import {toHaveNoViolations} from 'jest-axe';
import * as emotion from 'emotion';
import {configure as configureSosia} from 'sosia';
import {RemotePuppeteerBrowserTarget} from 'sosia-remote-puppeteer';
import markdownSource from './emotionComponentSource';
import {ThemeProvider} from 'emotion-theming';
import * as themes from './src/themes';
import EzGlobalStyles from './src/components/EzGlobalStyles';
import {Global} from './src/styles';

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className, index) {
      return `recipe-${index}`;
    },
  })
);

expect.extend(createMatchers(emotion));

// cheat for syntax highlighting
const css = (...args): string => args[0];

const GlobalStylesWrapper = ({children}) => (
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
);

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
