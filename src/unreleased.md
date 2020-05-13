---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added regression test coverage for disabled EzField[type=checkbox] options and EzField[type=radio] options.
- Added new `bordered` style variation for EzField[type=checkbox] options and EzField[type=radio].
- added new "acknowledgement" variation for [EzCheckbox](/components/ez-checkbox/#acknowledgement-checkbox) to support disclaimer/terms of service style checkboxes.
- Support title/subtitle/actions within [EzCardSections](/components/ez-card/#card-with-sections).
- New ["cluster" variation of EzLayout](/components/ez-layout/#cluster-layout) for arranging content a grid with equal spacing between. Cluster layouts are a good choice when the number of items in the layout may vary and the content varies in shape and length; The layout will automatically wrap items into rows based on the available screen space.

#### Design updates

- Adjusted styling of disabled EzField[type=checkbox] options and EzField[type=radio] options to more clearly emphasize the disable state.

#### Bug fixes

- Fixed wrapping of long EzField[type=checkbox] options and EzField[type=radio] options.

#### Documentation

- Added prop usage information to EzField[type=checkbox] and EzField[type=radio] to describe the multiple choice `options` prop and how options may be marked as `disabled`.

#### Dependency upgrades

#### Development workflow
