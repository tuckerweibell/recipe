---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Changed base font size to 16px (from 14px) to be inline with our recommended guidance for readability. For compatibility with applications that are not yet using our recommended base font size, a new `EzBaseFontSizeCompatibility` component is provided to support a base font size of 14px.
- Defer the internal "pixel to rem" calculation within Theme until runtime. This allows us to make the `baseFontSize` changeable in downstream applications, even if `spacing`, `fontSize` or `pageContentWidth` values are read from our theme module immediately on script import (rather than the intended use of reading from the theme within a theme provider). While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, if an application performs math/calculations upon these values.
- Use CSS custom variable (property) for Recipe's base font size. This is also in support of allowing the `baseFontSize` to be changeable in downstream applications. For applications that need to support IE11, to provide support for CSS custom properties a polyfill will be required. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).

#### New components

#### Enhancements

#### Design updates

#### Bug fixes

#### Documentation

- Updated Spacing and Typography documentation to no longer perform "rem to pixel" math on theme values.
- Added guidance on base font size compatibility to support applications that use a 14px base font size instead of Recipe's recommended size of 16px.
- Added CSS Custom Variable Polyfill recommendation for applications that need to support IE.

#### Dependency upgrades

#### Development workflow
