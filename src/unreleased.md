---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added accessibility labels to EzModal.
- Extract internal EzPortal and EzPopover components for easier reuse and to simplify EzTooltip internals.

#### Design updates

#### Bug fixes

- Fix EzModal issue on doc-site causing modal to appear unstyled at the bottom of the screen (fixes [issue 288](https://github.com/ezcater/recipe/issues/288)). The modal will now appear inside the component playground/iframe consistent with other components.
- Fix height resizing of EzTooltip documentation playground examples to no longer clip the tooltip flyout.
- Fix EzTooltip flashing up temporarily in the wrong position on screen.
- Fix EzModal issue on IE where content gets hidden if height exceeds container.

#### Documentation

#### Dependency upgrades

- update reach/dialog to 0.8.2.
- update prettier devDependency to 1.19.1 to support optional chaining syntax.

#### Development workflow
