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

#### Bug fixes

- Fix issue with margin resets when using cluster or tile layouts
- Fix issue with width reset causing layout items to ignore their extrinsic width value (where defined)
- Fix invalid markup in EzField[type=checkbox|radio] (fieldset legend nested inside div)
- Fix invalid markup in EzField[type=checkbox|radio] (div inside label)

#### Documentation

- Update layout docs with placeholder content to more clearly indicate the differences between layouts. This also allows us to avoid using custom CSS in the layout examples, which may be confused for being part of the API.

#### Dependency upgrades

#### Development workflow

- Fix issue with visual regression Media component that was causing styles to leak across tests.
