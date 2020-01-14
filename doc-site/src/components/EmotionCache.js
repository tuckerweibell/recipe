import React from 'react';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';

const isIE11 =
  typeof window !== `undefined` && !!window.MSInputMethodContext && !!document.documentMode;

// disable emotion speedy on IE11 for compatibility
// NOTE: "speedy" uses CSSOM and CSSStyleSheet.insertRule() to insert styles vs setting the textContent of the `style` tag
// When a rule is inserted that contains either a custom property declaration or `var()` function, that declaration or function
// is dropped from the `CSSRule.cssText` value.
// Rules inserted by speedy cannot be polyfilled, since the rule is dropped by the browser before it can be rewritten.
// By turning "speedy" off, Emotion will insert styles as text content in the style node instead, allowing the polyfill to read
// the unvalidated textContent directly, rather than the `CSSRule.cssText`.
const cache = createCache({speedy: !isIE11});

export default ({children}) => <CacheProvider value={cache}>{children}</CacheProvider>;
