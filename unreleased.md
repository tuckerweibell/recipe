---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes.

#### New components

#### Enhancements

#### Design updates

- Increased spacing of grouped links within EzNavigation to increase hit-target size.

#### Bug fixes

- Fix: Change build target for @recipe-ui/theme-marketplace to support ES5 syntax. This allows downstream applications to include Recipe without running build steps within `node_modules`.
- Fix: EzNavigation utility links were clipped when logo size was taller than 70px.
- Fix: EzNavigation links with `onClick` and no `href` now render as buttons, rather than links.
- Fix: EzCarousel sometimes skips pages when using next/prev buttons.
- Fix: EzCarousel next/prev button not aligning correctly when using responsive layout.
- Fix: EzCarousel next/prev button not aligning correctly when there are only 2 pages in the carousel.
- Fix: EzCarousel items have unevenly widths when the intrinsic width of carousel items is uneven.
- Fix: Prevent margin collapse on EzCarousel.
- Fix: EzCarousel clipping EzCard box-shadow over the EzCarousel.
- Fix: EzCarousel showing next button when there are fewer items than the page size.

#### Documentation

- Significant restructuring of the doc-site to account for the v11 release changes:
  - Removed documentation references to Recipe's former theming object, including Colors, Spacing and Typography documentation pages.
  - Renamed "What's new?" page to "Releases" to better reflect that the content is a formal change-log and not more informal prose content.
  - Renamed "Advanced" page to "Support". This page contains migration guides between Recipe versions, rather than "advanced" usage instructions.
  - Removed stale "timeline" page. This page had not been available from the docs to for sometime, but was still in the deployed site.
- Updated "team" page to reflect recent contributions
- Remove theme-switcher button, and replaced with new entry on the side navigation for toggling the theme.
- Added migration docs for the v11 release.
- Fixed documentation for EzProvider to show the correct named import from `@recipe-ui/theme-marketplace`.

#### Dependency upgrades

#### Development workflow
