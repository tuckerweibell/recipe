---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Significant reworking of Recipe's theming support, implementing the [Recipe Theming RFC](https://github.com/ezcater/recipe/issues/430). Recipe theming is no longer provided by [`emotion-theming`](https://emotion.sh/docs/theming) and instead is powered by CSS custom properties. For applications that need to support IE11, a polyfill will be required to enable support for CSS custom properties. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).
- Responsive breakpoints can no longer be modified by providing custom breakpoints via `emotion-theming`. Instead the Recipe v10 "standard theme" breakpoint values will be used. The medium breakpoint is to `768px` and the large breakpoint is `1061px`.

#### New components

- Added new [EzProvider](/components/ez-provider) component. Provider is the container for customizing Recipe applications. It defines the application theme that is applied to descendant content.

#### Enhancements

- Added `size="small"` variant to EzCard. Small cards are best for browsing content as part of a list or grid of cards.
- Added `imageMaxHeight` and `imageMaxWidth` options to EzCard to provide more granular control over the size of card images.
- updated internal Media component for visual snapshot testing components at specific breakpoints in order to reduce the payload size of visual regression tests.

#### Design updates

- Added new `@recipe/theme-marketplace` package for customizing Recipe for marketplace applications.
- Updated doc-site styles for code-snippets to more closely match live code (playground) examples.

#### Bug fixes

- fix: EzTable responsive logic incorrectly detecting horizontal overflow.
- fix: border-radius of card images now matches the radius of the cards remaining corners.
- fix: Inverted the DOM order of the card body and the card image within EzCard. Since headings introduce sections, having the image after the heading lets users know that the image belongs to the section.
- fix: Added empty alt text to card images to indicate that the card's image is decorative.

#### Documentation

- updated typography docs to list options within an EzTable.
- added basic theming switch to enable users of the doc-site to toggle between marketplace and fulfillment application styles.

#### Dependency upgrades

- upgrade gatsby dev dependency (for doc-site).
- remove `emotion-theming` devDependency from Recipe.
- added dependency on `@react-types/provider` (provides type definition only).
- added `parcel` and `postcss` devDependencies for building standalone theme packages.

#### Development workflow

- added MinifiedBrowserTarget decorator for RemoteBrowserTarget in order to shrink the payload size of visual regression tests.
- Disabled [emotion's vendor prefixing](https://emotion.sh/docs/@emotion/cache#prefix) during visual regression test runs (in order to shrink the payload size of visual regression tests). Given our only browser target in use today is Chrome, we shouldn't need vendor prefixes during tests.
- Switched [emotion's default style prefix](https://emotion.sh/docs/@emotion/cache#key) for emotions generated class names from `css` to `r` (for recipe). This change is only applied to styles generated during test runs and does not impact production. This change reduces the payload size of visual regression tests.
- removed `jest.globals` in favor of using `@testing-library/react` directly (we no longer need to wrap components in a theme provider).
- created private css-module-types package to allow provide TypeScript definitions for CSS imports.
- added top-level `repository` and `types` fields to Recipe's package.json.
