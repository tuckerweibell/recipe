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
- Updated EzField and EzButton to match in height when rendered side-by-side (fixes [issue 221](https://github.com/ezcater/recipe/issues/221)).
- Updated EzField[type=select] to apply an ellipsis when a select option has a value too long for the available space for the input (fixes [issue 213](https://github.com/ezcater/recipe/issues/213)).
- Updated EzField internals to use flexbox for centering icons within inputs.

#### Bug fixes

- EzField ref now correctly targets the underlying input element, rather than the container (fixes [issue 298](https://github.com/ezcater/recipe/issues/298)).
- Remove unwanted user-agent padding on fieldset legend (i.e. EzField[type=radio] and EzField[type=checkbox])
- Remove unwanted margin-bottom on fieldset legend
- Fixed issue with EzField[type=select] causing the selected text to overlap with the input chevron or the selected option checkmark.
- Fixed issue with EzField[type=custom] missing rounded corners (fixes [issue 302](https://github.com/ezcater/recipe/issues/302)).
- Fixed issue where EzField[labelHidden] has unwanted top margin causing alignment issues with similar height components (fixes [issue 194](https://github.com/ezcater/recipe/issues/194)).
- Fixed issue with component playground in the doc-site causing full-width components to have unwanted top margin.

#### Documentation

#### Dependency upgrades

#### Development workflow

- Added new component to enable visual testing of components at various different breakpoints
- Added regression test coverage for EzField[type=select/date/time] with error message on small devices
