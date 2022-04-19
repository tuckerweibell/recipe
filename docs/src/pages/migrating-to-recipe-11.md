---
path: '/support/migrating-to-recipe-11'
title: 'Migrating to Recipe 11'
---

Recipe has supported the concept of color themes from the beginning, leveraging the [emotion-theming](https://emotion.sh/docs/theming) library to inject color, scale and font definitions to Recipe components. With Recipe gaining traction in codebases outside of the fulfillment domain, new use cases for custom themes in addition to the default Recipe theme have arisen (such as varying button colors and sizes in marketplace). Applications with prior use of emotion-theming have found it challenging to subsequently use Recipe within their apps; requiring that Recipe's default theme is merged with their current theming structure. Lastly, as the number of themes and components in Recipe continues to grow, CSS bundle size for applications utilizing Recipe needs to be kept in check, such that introducing additional themes and scales do not negatively impact the bundle size of applications that do not use them.

Recipe 11 addresses these challenges, adding support for advanced theming capabilities leveraging [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

This release is a **major version release** and as such, **will require migration steps** for applications that currently use Recipe version 10.x or below.

- [Breaking changes](#breaking-changes)
- [Migration steps](#migration-steps)
  - [Installation](#installation)
  - [Set up marketplace theme (optional)](#set-up-marketplace-theme-optional)
  - [IE 11 support](#ie-11-support)
  - [Build tooling](#build-tooling)
- [FAQ](#faq)
  - [Do we need to find and remove references to the themes and remove the ThemeProviders?](#do-we-need-to-find-and-remove-references-to-the-themes-and-remove-the-themeproviders)
  - [Can I reference Recipe's CSS Custom Properties in my application?](#can-i-reference-recipes-css-custom-properties-in-my-application)
  - [Why am I seeing errors importing CSS files?](#why-am-i-seeing-errors-importing-css-files)

---

## Breaking changes

Recipe version 11 contains a significant reworking of Recipe's theming support, implementing the [Recipe Theming RFC](https://github.com/ezcater/recipe/issues/430). The breaking changes can be summarized as follows:

1.  Recipe theming is no longer provided by [`emotion-theming`](https://emotion.sh/docs/theming) and instead is powered by CSS custom properties. Recipe will no longer receive any custom theme values provided to `emotion-theming`.
2.  Recipe now makes extensive use of CSS custom properties. Applications that need to support IE11 will require a polyfill for CSS custom properties.
3.  Recipe uses fixed breakpoint values, as breakpoints can no longer be modified by providing custom breakpoints via `emotion-theming`. The medium breakpoint is to `768px` and the large breakpoint is `1061px`. These values match with the Recipe v10 "standard theme" breakpoint values for compatibility.
4.  Applications and libraries that use Recipe now require CSS importing support.

---

## Migration steps

The Recipe team recommends committing to git between each migration step, to make the code-review process easier to follow.

<br>

### Installation

You can update your Recipe installation using a package manager like [npm](https://docs.npmjs.com/cli/v6/commands/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).

```term
npm install @ezcater/recipe@latest
---
or
---
yarn upgrade @ezcater/recipe@latest
```

Out of the box, Recipe will use it's default styling (which is based on the fulfillment domain). If you're building a marketplace application, you can install the marketplace theme as follows:

```term
npm install @recipe-ui/theme-marketplace
---
or
---
yarn add @recipe-ui/theme-marketplace
```

<br>

### Set up marketplace theme (optional)

If you're building a marketplace application, you'll need to tell Recipe to use the marketplace theme. This can be done using an [`EzProvider`](/components/ez-provider). Inside the provider, you should render your application, including all Recipe components.

```tsx
import {EzProvider, EzButton} from '@ezcater/recipe';
import {theme} from '@recipe-ui/theme-marketplace';

function App() {
  return (
    <EzProvider theme={theme}>
      <EzButton use="primary">Click me</EzButton>
    </EzProvider>
  );
}
```

<br>

### IE 11 support

Applications that need to support IE11 will require a polyfill for CSS custom properties. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).

Further instructions on setting up this polyfill can be found [here](/support/migrating-to-recipe-8#ie-11-support).

<br>

### Build tooling

Recipe internally uses [CSS Modules](https://github.com/css-modules/css-modules) to define theme tokens, and requires CSS importing support.

Support for CSS importing is provided out-of-the-box by most popular build tooling like [create-react-app](https://create-react-app.dev/) and [Parcel](https://parceljs.org/), and is supported by lower level tools like [webpack](https://webpack.js.org/) via [css-loader](https://webpack.js.org/loaders/css-loader/). Some additional configuration may be required for applications that use server-side rendering.

<br>

### Razzle

While Razzle works out-of-the-box for importing stylesheets, it's SSR configuration out-of-the-box isn't set up to handle CSS imports found within `node_modules`.

In DEV mode, Razzle's client build uses [style-loader](https://webpack.js.org/loaders/style-loader/) to inject CSS into the DOM, while for production builds, Razzle use webpack's [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) to extract CSS into separate files. Razzle's default configuration allows webpack to detect Recipe's imported style sheets, and include them in production bundles, however when you try to start the server, you'll see errors like this:

```term
/my-app/node_modules/@ezcater/recipe/lib/styles/recipe-global.css:1
:root {
^

SyntaxError: Unexpected token ':'
    at wrapSafe (internal/modules/cjs/loader.js:1116:16)
    at Module._compile (internal/modules/cjs/loader.js:1164:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
```

While Razzle is able to bundle Recipe's styles, its server is still trying to import the stylesheet as if it were JS.

To resolve this, install `ignore-styles` and include the package within Razzle's `server.js` file:

```shell
npm install ignore-styles
---
or
---
yarn add ignore-styles
```

Inside server.js:

```js
import 'ignore-styles';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import {renderToString} from 'react-dom/server';
import App from './App';
```

This allows Razzle to ignore the CSS import, and instead fallback on it's default behavior of bundling the included CSS into a separate file.

<br>

### Next.js

Next.js supports both Global Stylesheets and CSS modules out-of-the-box, however at the time of writing Next.js doesn't not allow CSS imports from within `node_modules`. After adding Recipe to a Next.js application, you'll see errors like this:

```term
Failed to compile

./node_modules/@ezcater/recipe/lib/esm/components/CloseButton/vars.css
Global CSS cannot be imported from within node_modules.
Read more: https://err.sh/next.js/css-npm
Location: node_modules/@ezcater/recipe/lib/esm/components/CloseButton/CloseButton.styles.js

This error occurred during the build process and can only be dismissed by fixing the error.
```

Fortunately, Next.js allows customization of an application's webpack configuration. Instructions for creating a custom webpack configuration can be found [on the Next.js website](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config).

---

## FAQ

### Do we need to find and remove references to the themes and remove the ThemeProviders?

Recipe will no longer receive any custom theme values provided to `emotion-theming`, however it isn't technically necessary to remove `emotion-theming` or Recipe's now deprecated theme object; We still provide the theme object for backwards compatibility.

We don't have a direct replacement for this API in Recipe 11; figuring out a solid API so that downstream apps can build Recipe-style components is on the our roadmap, but will take some time to get right.

In the meantime, continuing to use the Recipe theme object is fine if it makes migration easier for you.

### Can I reference Recipe's CSS Custom Properties in my application?

While Recipe's CSS Custom Properties (theming tokens) are globally available, it is not currently recommended that they are referenced or overridden in applications that use Recipe. It is technically possible to do so, and this is actually how Recipe's theming engine works, however these variables are considered to be an implementation detail of Recipe and are not guaranteed to be stable between Recipe releases.

An API for creating custom Recipe themes is under consideration, including providing TypeScript support for accessing Recipe's theming tokens with your application.

### Why am I seeing errors importing CSS files?

Recipe internally uses [CSS Modules](https://github.com/css-modules/css-modules) to define theme tokens, and requires CSS importing support as part of your application build tooling. See [build tooling](#build-tooling) for more information about how to configure your tooling to support CSS imports from inside of `node_modules`.
