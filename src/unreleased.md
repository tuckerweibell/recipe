---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Support for `EzField[type="Select"]` to allow users to pick from a dropdown list of options.
- Support for `EzField[type="time"]` to allow users to pick from a list of times.
- Added `fonts` object to standard theme with grouped styles.

#### Design updates

- Updated EzField to use consistent presentation for "drop down" styles across `type="date"`, `type="time"` and `type="select"`.
- Revised interaction behavior EzField[type="date"] to no longer auto-open on focus to behave consistently with `type="time"` and `type="select"`.

#### Bug fixes

- Fix z-index issue with validation message flyout appearing underneath subsequent content
- Fix keyboard selection of dates in EzField[type="date"]
- Fix focus bug with EzField[type="date"] that causes the control to draw focus when clicking other page elements
- Fix up/down icon toggle on EzField[type="date"] for open/closed states
- Fix font color and icon colors on EzField[type="date"] disabled state

#### Documentation

#### Dependency upgrades

#### Development workflow

- Fixed an issue with emotion css-in-js leaking state across visual regression test runs
