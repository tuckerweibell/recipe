---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- support date range restrictions in EzField[type=date] via either `minDate` or `maxDate` restrictions or using a `filterDate` function, allowing for more control over excluding restricted dates, such as weekends or holidays. (Closes [#325](https://github.com/ezcater/recipe/issues/325)).

#### Design updates

#### Bug fixes

- Implemented React.forwardRef on EzField[type=textarea]. This was previously preventing text areas from using features such as EzTooltip.
- Fixed regression bug introduced by 10.0.3 that caused inputs to lose focus after their error state changed.

#### Documentation

- Update documentation usages of EzField that incorrectly used EzField[type=input] instead of EzField[type=text].

#### Dependency upgrades

#### Development workflow
