---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Relaxed the restriction that an EzOrderSummary must have a title, to more closely match EzCard (a title is only necessary when there are corresponding actions, such that the target of the action is clear).

#### Design updates

#### Bug fixes

- Fix: EzField[type=date] fires `onChange` multiple times on change as well as calling `onChange` erroneously on render.
- Fix: hover style on EzBanner link button renders differently for anchor vs button (Closes [#248](https://github.com/ezcater/recipe/issues/248)).
- Fix: Applied text wrapping in EzOrderSummary columns to avoid overflowing the bounds of the parent container (Closes [#338](https://github.com/ezcater/recipe/issues/338)).

#### Documentation

#### Dependency upgrades

#### Development workflow

- Added support for visual regression testing CSS pseudo class states (i.e. `:hover` and `:active`)
