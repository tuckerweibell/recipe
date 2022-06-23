---
path: '/support/migrating-to-recipe-15'
title: 'Migrating to Recipe 15'
---

Version 15 of Recipe changes some under-the-hood logic in an effort to make it easier to maintain Recipe and downstream apps. This includes removing `snitches`, a wrapper of `stitches`, added as a way to extract configuration by aggregating styles to the head of the application during runtime or inline for server-render.

With the decision in [Version 14](/support/migrating-to-recipe-14) to move away from `stitches`, `snitches` would have eventually been removed with it, however it turns out `snitches` is incompatible with React 18 which adds [stricter hydration errors](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#other-breaking-changes), preventing both Recipe and downstream apps from upgrading.

Removing `snitches` makes upgrading to React 18 possible, however it does require some additional configuration for apps using server-side rendering (see below).

This release is a **major version release** and as such, **will require migration steps** for applications that currently use Recipe Version 14.x or below.

## Breaking changes

The following changes are considered breaking changes:

1. With the removal of `snitches`, if your app uses server-side rendering (SSR), extracted styles from `stitches` will need to be inserted directly into the html of your app.<br /> <br />For example, if you're using Next.js, you might add the styles as follows:<br /> <br />

    ```js
    import React from 'react';
    import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
    import {stitches} from '@ezcater/recipe';

    export default class Document extends NextDocument {
      render() {
        return (
          <Html lang="en">
            <Head>
              <style id="stitches" dangerouslySetInnerHTML={{__html: stitches.getCssText()}} />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }
    }
    ```
2. The following deprecations have been removed:
    - `EzIcon` `size` properties `xsmall` and `xlarge` have been removed. Please use `small`, `medium`, `large`, or `inherit`.
    - `EzIcon` `color` properties `green` and `white` have been removed. Please use `common.green` or `common.white`.

3. [EzCarousel](/components/ez-carousel) has a new design that now includes page buttons on desktop viewports (`>= 768px`) and horizontal scrolling on mobile viewports (`< 768px`). The following breaking changes have occurred as a result:
    - EzCarousel's heading is now built in and `title` is now a required prop.
    - EzCarousel now requires a `description` prop that is used for the `aria-description` of the carousel for accessibility.
    - EzCarousel no longer uses the `slidesPerPage` prop. Instead, the number of slides or cards per page for desktop viewports depends on the size of the container as follows:
      - container width `> 1024px` will show 4 cards per page
      - container width `650px` to `1023px` will show 3 cards per page
      - container width `< 650px` will show 2 cards per page
    - The `onPageChange` handler now only apply to desktop viewports that have previous and next buttons.
    - The `peek` and `gap` props are no longer used.


## Migration steps

### Installation

You can update your Recipe installation using a package manager like [npm](https://docs.npmjs.com/cli/v6/commands/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).

```term
npm install @ezcater/recipe@latest
```
or
```term
yarn upgrade @ezcater/recipe@latest
```
