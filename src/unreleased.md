---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

- Added new `EzSearchInput` component to allow users to search for specific content by providing search terms or simple keywords.
- Added new `EzBanner` component to display a prominent, succinct message with a related link or action.

#### Enhancements

- Added `label` attribute to `EzToggle`.
- Added semantic names for Recipe colors to more clearly define a consistent set of rules around color usage and to better support for theming in the future.
- Changed `EzModal`, `EzFlashMessage` and `EzBanner` to use a consistent button for dismissing.

#### Design updates

- Consistency changes to EzSegmentedControl, EzTable and EzFlashMessage to reflect [the new guidance](styles/style/#colors) around semantic variable names.
- Design updates for input fields:
  - Add box-shadow to form input fields
  - Added default font color to form input fields
- Changed `EzModal` and `EzFlashMessage` to have a transparent color for `:active` and `:hover` click-surface styles.

#### Bug fixes

- Suppressed global styles from the doc-site playground impacting how Recipe components render
- Fixed an issue with server-rendering/static rendering playground component (ResizeObserver undefined)
- Deprecated target.selected in favor of target.value in the onChange callback parameters on checkboxes and radio buttons.

#### Documentation

- update timeline/roadmap with recent releases

#### Dependency upgrades

- update devDependency on sosia-remote-puppeteer to improve support for larger visual regression tests

#### Development workflow
