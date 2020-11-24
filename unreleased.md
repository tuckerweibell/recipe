---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes.

#### New components

#### Enhancements

#### Design updates

#### Bug fixes

- fix: carousel item resizing (to provision space for next/prev buttons) updated to support number of items changing across breakpoints.
- fix: carousel with `peek` buttons enabled will no longer reduce the item size to provision space for buttons if there is only one page.
- fix: accessibility improvements for carousel. Closes [issue #455](https://github.com/ezcater/recipe/issues/455).
  - carousel is keyboard accessible (← and → to nav left and right)
  - carousel is announced as a list
  - navigation buttons (which are a enhancement - users who can already nav with ← and →) removed from tab sequence.
  - hidden navigation buttons are no longer announced to assistive technology.

#### Documentation

#### Dependency upgrades

#### Development workflow
