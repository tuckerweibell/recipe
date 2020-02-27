---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Use svgomg to optimize file sizes of a some commonly used icons.

#### Design updates

- Reduced label spacing for EzField[type=radio] and EzField[type=checkbox] to match other types of input.
- Reduced spacing between radio/checkbox items to keep item spacing equal with label spacing.
- Switched EzField[type=select] to display error icon and messaging against the field label, rather than inline on the input for consistency with EzField[type=date] and EzField[type=time] (fixes [issue 300](https://github.com/ezcater/recipe/issues/300)).

#### Bug fixes

- EzField ref now correctly targets the underlying input element, rather than the container (fixes [issue 298](https://github.com/ezcater/recipe/issues/298)).
- Remove unwanted user-agent padding on fieldset legend (i.e. EzField[type=radio] and EzField[type=checkbox])
- Remove unwanted margin-bottom on fieldset legend

#### Documentation

#### Dependency upgrades

#### Development workflow

- Added new component to enable visual testing of components at various different breakpoints
- Added regression test coverage for EzField[type=select/date/time] with error message on small devices
