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
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-s.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_Gwfr.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wWA.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPHw.woff) format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }

  body {
    color: #565a5c;
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

// extend jest timeout for snapshots running on CI
jest.setTimeout(10000);
