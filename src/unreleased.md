---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Changed the `EzTable` API by moving/grouping the props `onRowSelectClick`, `onBulkSelectClick` and `isRowSelected` under a new selection prop, rather than being individual props to `EzTable`.

#### New components

- Added new EzStatus component.
- Added new EzFlashMessage component.

#### Enhancements

- Added `onSelectAllClick` and `onSelectNoneClick` to the `selection` prop of `EzTable` to handle the new interactions available from the table select all banner.

#### Design updates

- Reduced the width of the checkbox/selection column for [EzTable](./components/ez-table#bulk-row-selection) to improve the layout and more clearly emphasize the relationship between the selection and the row data.

#### Bug fixes

- Fixed type definition of EzTable `rowsPerPageOptions` to use `number[]` instead of `[number]`.

#### Documentation

- Simplified pagination documentation for [EzTable](./components/ez-table#pagination).

#### Dependency upgrades

#### Development workflow

- Added the `--open` flag to `gatsby develop` NPM target. This will launch the doc site during development similar to how create-react-app auto launches when running.
