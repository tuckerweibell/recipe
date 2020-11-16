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

- Fix: Ensure global style tokens are imported when including a top-level export from Recipe.
- Fix: Mark top-level import with [sideEffects](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects) to ensure global tokens do not get tree-shaken out of client builds.
- Fix: Remove private deep-path imports from tree-shaking test. The test now uses a baseline size of 10KB to determine if a component import has been successfully tree-shaken.

#### Documentation

#### Dependency upgrades

#### Development workflow
