---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Support Component preview in IE11. Note: Component Editor is not yet supported as Docz doesn't support IE11.

#### Design updates

#### Bug fixes

- Include polyfills when running doc-site in dev mode for browsing with IE11. See: gatsbyjs/gatsby#14502.
- Fix logo sizing for IE11.
- Avoid loading docz component playground when running IE11. Docz doesn't support IE11. See: doczjs/docz#249.
- Fix sidebar/main content spanning beyond the width of the page in IE11.
- Fixes for Component Playground for FireFox
  - Suppress error inserting styles into iframe
  - Delay rendering iframe portal until iframe `onLoad` has fired
  - Include iframe `srcDoc` to ensure `onLoad` event is fired

#### Documentation

#### Dependency upgrades

#### Development workflow
