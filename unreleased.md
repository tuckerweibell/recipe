---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased changes

#### Breaking changes

#### New components

#### Enhancements

- Added [seek-oss playroom](https://github.com/seek-oss/playroom) to the doc-site.
- Added internal utility for extending Recipe's base theme tokens with component-level tokens in support of component-level theming.

#### Design updates

#### Bug fixes

- Fix: hidden content receiving focus in doc-site playground.
- Fix: new EzLink API should retain className and refs
- Fix inconsistent button line-height in EzBanner

#### Documentation

- Add documentation on how to run the doc-site locally with playroom.
- Add documentation on how to run the doc-site locally for IE11.
- Added instructions for using `Object.entries()` polyfill.

#### Dependency upgrades

#### Development workflow

- Add npm script to run the doc-site for IE11 with a workaround for [a known issue](https://github.com/gatsbyjs/gatsby/issues/14502).
- Updated latest babel build tooling (to support TS template literals)
- Added compression and other techniques to reduce the payload size of visual regression test input
