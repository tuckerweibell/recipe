---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added missing type definitions for EzField[type=time]

#### Design updates

#### Bug fixes

- Make EzField[type=time] start/end props case insensitive
- Make EzField[type=time] step prop optional (fixes [issue 257](https://github.com/ezcater/recipe/issues/257))
- Fix issue causing potential infinite loop when using EzField[type=select|date|time]
- Fix EzField[type=select|date|time] "current" icon positioning
- Fix `event.target` element on the `onChange` event of EzField[type=select|date|time] (fixes [issue 257](https://github.com/ezcater/recipe/issues/282))

#### Documentation

#### Dependency upgrades

#### Development workflow

- split up tests for EzField by type (i.e. checkbox, radio, select, date, time etc)
- updated EzField[type=time] tests to use public API, rather than internal/private methods
