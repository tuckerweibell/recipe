import 'jest-enzyme';
import {configure} from 'enzyme';
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer, createMatchers} from 'jest-emotion';
import {toHaveNoViolations} from 'jest-axe';
import * as emotion from 'emotion';
import {configure as configureSosia} from 'sosia';
import {RemotePuppeteerBrowserTarget} from 'sosia-remote-puppeteer';
import {MarkdownSource} from 'sosia-markdown';
import {injectGlobal} from 'emotion';

configure({adapter: new Adapter()});

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

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin');

  html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: inherit;
  }

  /* disable animations in visual snapshots */
  *, ::before, ::after {
    transition-property: none !important;
    transform: none !important;
    animation: none !important;
  }
`;

configureSosia({
  targets: {
    'chrome-desktop': new RemotePuppeteerBrowserTarget({
      url: new URL('https://remote-screenshot-puppeteer-b110pzwq3.now.sh'),
      width: 1024,
      height: 768,
    }),
  },
  sources: {
    documentation: new MarkdownSource(),
  },
});
