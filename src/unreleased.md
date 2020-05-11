---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- New alignment options on EzLayout.
  - The `cluster` layout has a new `alignX` option. This option allows the horizontal alignment to be changed to `left`, `right`, `center` or conditionally based on the current screen size.
  - The following layout have a new `alignY` option: `basic`, `right`, `equal`, `split`, `tile` and `cluster`. This option allows the vertical alignment to be changed to `top`, `bottom`, `center`, `stretch` or conditionally based on the current screen size.

#### Design updates

- Adjusted styling of disabled EzField[type=checkbox] options and EzField[type=radio] options to more clearly emphasize the disable state.
- Allow EzField[type=date] width to be controlled/overridden by parent component where needed.
- Normalize the height of EzSegmentedControl to match the same height as EzButton and EzField inputs.

#### Bug fixes

- Fix issue with margin resets when using cluster or tile layouts
- Fix issue with width reset causing layout items to ignore their extrinsic width value (where defined)
- Fix invalid markup in EzField[type=checkbox|radio] (fieldset legend nested inside div)
- Fix invalid markup in EzField[type=checkbox|radio] (div inside label)
- Fixed wrapping of long EzField[type=checkbox] options and EzField[type=radio] options.
- Fixed: support for [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) EzField[type=radio], in addition to the more component controlled component usage. As an uncontrolled component, the DOM handles state changes, instead of React state.

#### Documentation

- Update layout docs with placeholder content to more clearly indicate the differences between layouts. This also allows us to avoid using custom CSS in the layout examples, which may be confused for being part of the API.
- Added prop usage information to EzField[type=checkbox] and EzField[type=radio] to describe the multiple choice `options` prop and how options may be marked as `disabled`.
- Added complex form pattern example, showing how a create promotion page might be made from Recipe components.

#### Dependency upgrades

#### Development workflow

- Fix issue with visual regression Media component that was causing styles to leak across tests.
