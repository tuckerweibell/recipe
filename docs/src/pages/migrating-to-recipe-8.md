---
path: '/support/migrating-to-recipe-8'
title: 'Migrating to Recipe 8'
---

To facilitate the usage of Recipe across a broader set of projects including ezCater's marketplace, a new release of Recipe was published. This release is a **major version release** and as such, **will require migration steps** for applications that currently use Recipe version 7.x or below.

## Breaking changes

The breaking changes are detailed in the Recipe [release notes for version 8.0.0](/changelog/#800---2019-12-16), but can be summarized as follows:

1. Recipe's base font size has changed from 14px to 16px.
2. Applications that need to support IE11 will now require a polyfill for CSS custom properties.

## Migration steps

### Base font size

Applications using Recipe today that are not ready to migrate to a base font size of 16px can continue to use their current base font size by adding the new [EzBaseFontSizeCompatibility](/components/ez-base-font-size-compatibility) component to the top-level entry point(s) for their application.

This component should be used as a sibling element to other content as shown below:

```js
<>
  <EzBaseFontSizeCompatibility />
  <EzPage>
    <EzCard title="Card Heading">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPage>
</>
```

### IE 11 support

Applications that need to support IE11 will now require a polyfill for CSS custom properties. It is important that this polyfill is applied **before defining component styles with emotion**.

This typically means that the polyfill can be added at the top-level entry point(s) of your application.

**with script include**:

```html
<script>
  if (!window.CSS || !CSS.supports('color', 'var(--a)')) {
    var js = document.createElement('script');
    js.src = 'https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2';
    js.onload = function() {
      cssVars({watch: true});
    };
    document.head.appendChild(js);
  }
</script>
<script src="/my-application-bundle.js"></script>
```

OR

**with module import**:

```js
// in file src/client.js
// before all other imports
import './cssVars';

// in file src/cssVars.js
import cssVars from 'css-vars-ponyfill';

cssVars({watch: true});
```

Including the `css-vars-ponyfill` and initializing it in watch mode allows the polyfill to intercept dynamically inserted styles in order to re-write them with syntax supported by browsers that would otherwise not support custom properties.

In order for the `css-vars-ponyfill` to work with emotion, you must also disable emotion's speedy mode (Emotion enables speedy by default in production builds):

```js
import {sheet} from 'emotion';

sheet.speedy(false);
```

Emotion's speedy mode uses [CSSOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) to insert dynamic style rules into the page. However, legacy browsers don't understand CSS custom properties and so when a rule is inserted that contains either a custom property declaration or `var()` function, that declaration or function is dropped from the `CSSRule.cssText` value. This behavior prevents any polyfill from rewriting those styles.

Disabling emotion's speedy mode allows emotion to insert styles as text content of a style node. This allows `css-vars-ponyfill` to read the unvalidated text content directly, rather than the `CSSRule.cssText`.
