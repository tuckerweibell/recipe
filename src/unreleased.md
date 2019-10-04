---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Removed previously deprecated `e.target.selected` property from the `onChange` callback of both EzField[type="radio"] and EzField[type="checkbox"] in favor `e.target.value` for consistency with the `onChange` event handlers for other EzField types.

#### New components

#### Enhancements

#### Design updates

#### Bug fixes

- Change EzBlankState message to use a `div` instead of a `p` to prevent the style from being overriden by EzPage

#### Documentation

#### Dependency upgrades

- updated ez-scripts (linting) version
- Dependency bumps for security vulnerability warning from npm audit.

#### Development workflow
