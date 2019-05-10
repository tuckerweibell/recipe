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
- Added new EzCheckbox component.
- Added new EzToggle component.

#### Enhancements

- Added `onSelectAllClick` and `onSelectNoneClick` to the `selection` prop of `EzTable` to handle the new interactions available from the table select all banner.
- Support controlled and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) usage of [EzSegmentedControl](./components/ez-segmented-control)
- Prevent accidental text selection in [EzSegmentedControl](./components/ez-segmented-control)

#### Design updates

- Reduced the width of the checkbox/selection column for [EzTable](./components/ez-table#bulk-row-selection) to improve the layout and more clearly emphasize the relationship between the selection and the row data.
- Updated EzField type="checkbox" to use new EzCheckbox component.

#### Bug fixes

- Fixed type definition of EzTable `rowsPerPageOptions` to use `number[]` instead of `[number]`.
- Added background color on `EzCheckbox` component.
- Removed export-to-sketch feature from doc-site due to some unexpected side-effects with how the feature rendered components "off screen":
  - EzSegmented control documentation examples were broken due to duplicated radio-buttons with the same id
  - Documentation pages were presenting excessive scroll bars due to hidden content out of the screen dimensions

#### Documentation

- Simplified pagination documentation for [EzTable](./components/ez-table#pagination).

#### Dependency upgrades

#### Development workflow

- Added the `--open` flag to `gatsby develop` NPM target. This will launch the doc site during development similar to how create-react-app auto launches when running.
