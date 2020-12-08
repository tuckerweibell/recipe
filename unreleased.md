---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes.

#### New components

#### Enhancements

- Add new ["quiet" card variation](/components/ez-card#quiet-cards). Quiet cards are intended for secondary content or lists of homogeneous content where we intentionally trade prominence for easy-scanning.
- Added standalone `@recipe-ui/legacy-theme` package, to provide access to the `themes/standard` module from prior Recipe releases.
- Deprecated usage of `themes/standard`, recommending direct use of `@recipe-ui/legacy-theme` for backwards compatibility, or favoring locally defined variables where appropriate. The standard theme is no longer used by Recipe and is no longer maintained in this package.

#### Design updates

#### Bug fixes

- Fix: Carousels with more than two responsive layouts both snap and align incorrectly at the largest breakpoint.
- Fix: Next/prev buttons on carousels that are hidden on the last/first page respectively, were masking clicks within the carousel item.

#### Documentation

#### Dependency upgrades

#### Development workflow

- add [Storybook](https://storybook.js.org/) tooling to provide a familiar environment for developing UI components in isolation.
