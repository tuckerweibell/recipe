---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added support for grouped (expand/collapse) items in EzNavigation, promoting the discoverability of related pages. Closes [issue #391](https://github.com/ezcater/recipe/issues/391).

#### Design updates

#### Bug fixes

- Fix: Focus detection bug preventing `onClick` being called on EzField[type=select] when used inside EzModal. Closes [issue #412](https://github.com/ezcater/recipe/issues/412).
- Fix: Initial focus behavior of EzModal; the first focusable element (where present) will gain focus when the modal is opened to more closely follow [aria-practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html). Closes [issue #408](https://github.com/ezcater/recipe/issues/408).

#### Documentation

#### Dependency upgrades

- update internal dependency on reakit to 1.2.0.
  - reakit dialog now uses MutationObserver internally, requiring IE11 and above or the use of a polyfill.
- update dev dependency on jsdom, as well as corresponding versions of @testing-library.
  - bumped to provide access to MutationObserver APIs within Jest.

#### Development workflow
