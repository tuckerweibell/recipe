---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

- Added new `EzSearchInput` component to allow users to search for specific content by providing search terms or simple keywords.
- Added new `EzBanner` component to display a prominent, succinct message with a related link or action.
- Added new `EzNavigation` component. The navigation component provides the primary means for users to move between sections of the application. On small screens, the Navigation menu is presented as a top-bar, while on larger screens the Navigation menu is presented as a left side-bar.

#### Enhancements

- Added new `date` type to `EzField` component.
- Added `label` attribute to `EzToggle`.
- Added semantic names for Recipe colors to more clearly define a consistent set of rules around color usage and to better support for theming in the future.
- Changed `EzModal`, `EzFlashMessage` and `EzBanner` to use a consistent button for dismissing.

#### Design updates

- Consistency changes to EzSegmentedControl, EzTable and EzFlashMessage to reflect [the new guidance](styles/style/#colors) around semantic variable names.
- Design updates for input fields:
  - Add box-shadow to form input fields
  - Added default font color to form input fields
- Changed `EzModal` and `EzFlashMessage` to have a transparent color for `:active` and `:hover` click-surface styles.
- Added `flex-grow` to `EzPage` to ensure pages expand to fill the available space when placed inside a flex container.

#### Bug fixes

- Suppressed global styles from the doc-site playground impacting how Recipe components render
- Fixed an issue with server-rendering/static rendering playground component (ResizeObserver undefined)
- Deprecated target.selected in favor of target.value in the onChange callback parameters on checkboxes and radio buttons.
- Add workaround for doc-site playground to ensure the navigation component docs render at a minimum height when the content of the playground determines it's height from the container (e.g. height: 100%).
- Restore overflow:visible in EzCard to allow for "flyout" content to overflow the card container. Closes [#144](https://github.com/ezcater/recipe/issues/144).

#### Documentation

- Complete reskin of the doc-site, using Recipe components as the building blocks
- update timeline/roadmap with recent releases

#### Dependency upgrades

- update devDependency on sosia-remote-puppeteer to improve support for larger visual regression tests
- update to latest js-dom to facilitate testing of component that internally uses [`Element.prototype.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).
- Introduce dependency on `Reakit` to simplify building accessible components.

#### Development workflow
