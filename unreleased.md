---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased changes

#### Breaking changes

#### New components

#### Enhancements

- Added feature detection as part of `EzGlobalStyles` to facilitate css-based fallbacks for browser features.
- Updated EzLayout to use flexbox gap for layout (where available), or [margin/negative](https://twitter.com/devongovett/status/1244679626162450432?lang=en) on older browsers.

#### Design updates

#### Bug fixes

- fix: EzLayout `columns` styles should only apply to `tile` layouts. Closes [#616](https://github.com/ezcater/recipe/issues/616).
- fix: search input overflows bounds of the EzLayout container. Closes [#618](https://github.com/ezcater/recipe/issues/618).
- fix: Issue causing `EzLayout[layout="stack"]` to horizontally collapse instead of filling the width of the parent element. Closes [#619](https://github.com/ezcater/recipe/issues/619).
- fix: apply range media queries to `EzCard[imagePosition]` (instead of max-width queries), to avoid SSR order-of-insertion issues.
- fix: Quiet cards should respect size prop if provided

#### Documentation

#### Dependency upgrades

#### Development workflow

- Updated visual regression environment for Chrome to use v91 (upgraded from v79).
- Updated @ezcater/snitches to 0.0.11.
- Removes transitive dependency on `sort-css-media-queries` (which isn't built with es5 compatible syntax).
