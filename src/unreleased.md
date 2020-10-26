---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Significant reworking of Recipe's theming support, implementing the [Recipe Theming RFC](https://github.com/ezcater/recipe/issues/430). Recipe theming is no longer provided by [`emotion-theming`](https://emotion.sh/docs/theming) and instead is powered by CSS custom properties. For applications that need to support IE11, a polyfill will be required to enable support for CSS custom properties. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).
- Responsive breakpoints can no longer be modified by providing custom breakpoints via `emotion-theming`. Instead the Recipe v10 "standard theme" breakpoint values will be used. The medium breakpoint is to `768px` and the large breakpoint is `1061px`.

#### New components

#### Enhancements

- updated internal Media component for visual snapshot testing components at specific breakpoints in order to reduce the payload size of visual regression tests.

#### Design updates

#### Bug fixes

- fix: EzTable responsive logic incorrectly detecting horizontal overflow.

#### Documentation

- updated typography docs to list options within an EzTable.

#### Dependency upgrades

- upgrade gatsby dev dependency (for doc-site).
- remove `emotion-theming` devDependency from Recipe.

#### Development workflow

- added MinifiedBrowserTarget decorator for RemoteBrowserTarget in order to shrink the payload size of visual regression tests.
- Disabled [emotion's vendor prefixing](https://emotion.sh/docs/@emotion/cache#prefix) during visual regression test runs (in order to shrink the payload size of visual regression tests). Given our only browser target in use today is Chrome, we shouldn't need vendor prefixes during tests.
- Switched [emotion's default style prefix](https://emotion.sh/docs/@emotion/cache#key) for emotions generated class names from `css` to `r` (for recipe). This change is only applied to styles generated during test runs and does not impact production. This change reduces the payload size of visual regression tests.
