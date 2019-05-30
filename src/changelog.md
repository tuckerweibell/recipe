---
path: '/changelog'
title: "What's new?"
---

The latest news, updates, and changes to the Recipe design system.

The format is based on [these versioning and changelog guidelines](/guides/versioning-and-changelog).

## 5.1.0 - 2019-05-30

#### Enhancements

- Added Clickable rows API to [EzTable](/components/ez-table/#clickable-rows), which allows the table to target specific links to trigger when the table row is clicked.
- Added hover color to table rows to improve scannability of tables
- Better support for EzTable on small screens. When screens are constrained in width, the responsive table now pins the first column (including selection where present) and allows for the remaining columns in the row to overflow with support for scrolling.

#### Bug fixes

- Fixed type definition of EzSegmentedControl `onChange` to use `(value: string) => void` instead of `((event: FormEvent<any>) => void) & ((value: string) => void)`.

#### Documentation

- Switch doc-site to using the [playground component from docz](https://github.com/pedronauck/docz/tree/master/core/docz-theme-default) instead of React-live as a direct dependency.
- Run doc-site examples within an iframe. This enables the docz resize/responsive controls to apply the correct viewport, allowing media queries to apply correctly.

#### Dependency upgrades

- Update devDependency on sosia to reduce test execution time (by half!)
- Update devDependency on sosia-markdown to improve support for larger visual regression tests

## 5.0.0 - 2019-05-13

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
- Update EzField type="radio" to use custom styles

#### Bug fixes

- Fixed type definition of EzTable `rowsPerPageOptions` to use `number[]` instead of `[number]`.
- Added background color on `EzCheckbox` component.
- Removed export-to-sketch feature from doc-site due to some unexpected side-effects with how the feature rendered components "off screen":
  - EzSegmented control documentation examples were broken due to duplicated radio-buttons with the same id
  - Documentation pages were presenting excessive scroll bars due to hidden content out of the screen dimensions
- updated checkbox styles to be consistent with radiobutton
  - simpler implementation
  - added `:active` checkbox styles
  - fixed focus style to tightly hug the checkbox (was previously a few pixels out)
  - replace focus style to avoid using `:focus-within` (for compatibility)

#### Documentation

- Simplified pagination documentation for [EzTable](./components/ez-table#pagination).

#### Development workflow

- Added the `--open` flag to `gatsby develop` NPM target. This will launch the doc site during development similar to how create-react-app auto launches when running.

## 4.5.0 - 2019-05-06

#### New components

- Added EzAppLayout which is used for centering page content at a fixed or full width.

#### Enhancements

- Added pagination support to EzTable.
- Added support for `actions` on EzTable
- Added initial docs for sub nav (tabs) support in EzPageHeader.
- Added sub navigation support to EzPageHeader, either via state change or via route change
- Add type definitions to enable support for EzButton to accept/pass through standard HTML button props (such as type, role, etc) to the underlying DOM element
- Add support for [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) on EzButton and EzLink components to allow access to underlying DOM element
- Support URL and client-side router links in [EzPageHeader](/components/ez-page-header/#page-header-with-breadcrumb-links). Closes issue [#60](https://github.com/ezcater/recipe/issues/60);
- Add support for using components to define custom cell content in [EzTable](./components/ez-table#custom-cell-rendering). Closes [#92](https://github.com/ezcater/recipe/issues/92). Previously, the EzTable accessor allowed functions to be provided to define a template for custom cell content. By supporting Components instead of basic functions, we allow access to the full set of React features (state, life cycle etc) when rendering each custom cell.

#### Design updates

- Support wider card actions that wrap correctly under the card heading

#### Bug fixes

- Fix server render of components rendered inside react router in doc-site

#### Documentation

- Improved visibility of the inline code tags.

#### Development workflow

- Improved local development workflow by way of a new NPM target `start`. `npm start` runs both `recipe` and the documentation site in the same terminal window. This command will also auto link the `recipe` NPM package to the documentation site.

## 4.4.0 - 2019-04-30

#### New components

- Added new [EzOrderSummary](/components/ez-order-summary) component

## 4.3.0 - 2019-04-24

#### New components

- Added new [EzLink](/components/ez-link) component

#### Enhancements

- Added underline styles to [EzButton](/components/ez-button) component, consistent with [EzLink](/components/ez-link) component.
- Added support for collapsible/expandable [EzCard](/components/ez-card#expandable).

#### Design updates

- set base font color in doc-site (in lieu of global style reset)
- set base font color in visual regression test suite
- enable font antialiasing in doc-site
- remove unwanted font-size media query from doc-site (causing inconsistencies between how doc-site and production sites behave)

#### Bug fixes

- fixed runtime error in doc-site when rendering `jsxwide` examples

## 4.2.1 - 2019-04-10

#### Bug fixes

- Fixed [regression in table select all](https://github.com/ezcater/recipe/issues/71).
- Fixed [Card action stretching](https://github.com/ezcater/recipe/issues/62).

#### Documentation

- Added timeline page with current status of components in pipeline

## 4.2.0

#### Enhancements

- Added support for [sorting EzTable](/components/ez-table#with-sortable-columns).
  - Can now mark columns as `sortable`. EzTable will call `onSortClick` when sortable columns are clicked.
  - Can mark column as `defaultSort: 'asc' | 'desc'` to indicate the default sort order for data sets

## 4.1.1

#### Development workflow

- Re-enabled linting using [ez-scripts](https://github.com/ezcater/ez-scripts)

## 4.1.0

#### New components

- Added new [EzPageHeader](/components/ez-page-header) component

#### Documentation

- Fixed spelling/typos in changelog and other docs
- Corrected deprecation warning of EzPageContent component to refer to EzLayout

#### Dependency upgrades

- Switched usage of React.SFC to React.FC as [React.SFC is now deprecated](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30364).

#### Development workflow

- Removed google font loading service from visual testing path to reduce visual test flakiness caused by delay in font-loading

## 4.0.0

#### Breaking changes

- Removed `margin-right` from [EzButton](/components/ez-button). To apply spacing between buttons, the preferred approach is to use an [EzLayout](/components/ez-layout) as the direct parent of the buttons.
- Removed padding from the [`tertiary` variant of EzButton](/components/ez-button#tertiary-button). As with other buttons, spacing between sibling buttons should be applied via a direct parent [EzLayout](/components/ez-layout).
- Replaced `onRowClick` property on [EzTable](/components/ez-table) with `onRowSelectClick` to more closely align with the existing `onBulkSelectClick` property.
- Replaced `rowIsSelected` property on [EzTable](/components/ez-table) with `isRowSelected`. Using question phrasing to more clearly indicate that this property is a function.

#### Enhancements

- Simplified internal type definitions for [EzTable](/components/ez-table) bulk selection properties. Replaced custom type definitions for click handlers with `React.MouseEvent` based handlers.

#### Documentation

- Simplified [EzTable](/components/ez-table) examples in the documentation
  - Replaced `Component` wrapper for state with `useState` hooks
  - Remove unneeded `Component` wrapper from example that didn't use state
  - Use reference equality for bulk selection example to simplify selection logic

## 3.0.1

#### Enhancements

- Visual changes to the [EzTable bulk select](components/ez-table#bulk-row-selection) feature. Check boxes now use custom styling rather than the browser default.

## 3.0.0

#### Breaking changes

- Updated internals of EzField to use React hooks, which required a peerDependency bump of React to a >16.8 version.

## 2.4.1

#### Dependency upgrades

- Updated minor version of @emotion/is-prop-valid dependency
- Update patch version of @reach/dialog dependency
- Updated various dev dependencies

## 2.4.0

#### Enhancements

- Added focus styles for tertiary buttons (to improve accessibility)
- Minor padding changes for tertiary buttons (to improve accessibility)

#### Dependency upgrades

- Removed peerDependency on polished (Fixes [#44](https://github.com/ezcater/recipe/issues/44))

## 2.3.0

#### Enhancements

- Add 'bulk select' functionality to EzTable

## 2.2.0

#### New components

- Add new [EzField](/components/ez-field) and [EzFormLayout](/components/ez-form-layout) components

#### Enhancements

- apply line-height/color/spacing to `EzHeading`
- internally updated `EzCard` to use `EzHeading` for consistency

#### Bug fixes

- fixed type definition of `EzButton` onClick to `MouseEventHandler`

#### Documentation

- Added titles to [EzHeading](/components/ez-heading) docs

#### Development workflow

- Fixed `npm run build:watch` mode for TypeScript builds

## 2.1.0

#### Enhancements

- Adds optional `actions` prop to [EzCard](/components/ez-card) component for rendering secondary calls-to-action.

## 2.0.0

#### Breaking changes

- Removed `styled<Theme>` export from Recipe's public api. This undocumented api became available as part of the 2.0.0-alpha.0 release, but the api is too broad for the scope of Recipe.

#### Enhancements

- Restored backwards-compatible behavior of providing the `standard` theme to Recipe components where no `ThemeProvider` is in use. This was a breaking change for the 2.0.0-alpha.0 release, but the impact on downstream projects would delayed the upgrade path to 2.0.0 with this change in place.

#### Documentation

- Added documentation for the upcoming `EzFormLayout` and `EzFormField` components
- Fix `Lato` font import in the doc-site

#### Development workflow

- Integrated code climate with CI build
- Added code climate config to separate doc-site from recipe code quality checks
- Added `npm run build:watch` mode for TypeScript builds
- Suppress lint warning from development doc-site builds

## 2.0.0-alpha.2

#### Documentation

- Removed empty bullet list of "related components" section in several components
- Updated structure of `EzModal` docs to follow the same format of other components
  - Removed "props table" style documentation in favor of demonstrating how properties are applied to achieve various use cases

## 2.0.0-alpha.1

#### Bug fixes

- Fixed bug in `EzLayout` type definition that prevented the base layout (mobile view) of a responsive layout from using any layout other than stack
- Fixed bug in `EzLayout` type definition that prevented multiple breakpoints being specified for responsive layouts
- Linked the `EzLayout` type definition to the breakpoints specified by the `theme`, such that changes to the number of breakpoints don't require changes to `EzLayout`.

## 2.0.0-alpha.0

#### Breaking changes

- Upgraded Recipe to Typescript
- Removed internal `withTheme` wrapper around components; Recipe components must now be used inside a `ThemeProvider`

## 1.13.0 - 2018-11-28

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Design updates

- Use consistent spacing withing EzModal header/footer/body

#### Bug fixes

- EzModal close button stretching when heading flows onto multiple lines
- Render bug with EzModal and EzHeading causing unnecessary re-renders and event handlers to be removed/reapplied every render

#### Documentation

Updated formatting of [changelog](/changelog) to conform to our [changelog guidelines](/guides/versioning-and-changelog)

#### Dependency upgrades

- Revert back to @reach/dialog for EzModal

## 1.12.1 - 2018-11-19

#### Bug fixes

- Remove automatic error for yarn installs

## 1.12.0 - 2018-11-15

#### Dependency upgrades

- Reverts [EzModal](/components/ez-modal) component back to using react-modal

#### Design updates

- Restore slide up animation on [EzModal](/components/ez-modal) component
- Reintroduce optional `appElement` prop on [EzModal](/components/ez-modal) component

## 1.11.3 - 2018-11-14

#### Bug fixes

- Fix flexbox issues seen on [EzModal](/components/ez-modal) component in older browsers
- Remove slide animation on [EzModal](/components/ez-modal) component to avoid janky rendering on some browsers

## 1.11.1 - 2018-11-13

#### Bug fixes

- Include table styles missed due default doc-site styles

#### Documentation

- Enumerate specific `peerDepenedency` requirements in Getting Started docs

## 1.11.0 - 2018-11-8

#### New components

- Adds new [EzTable](/components/ez-table) component.

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Bug fixes

- Fixes component `displayName` and [EzCard](/components/ez-card) bug causing `EzCardSection` to not render correctly.

#### Dependency upgrades

- Switches [EzModal](/components/ez-modal) component to use @reach/dialog

## 1.10.1 - 2018-11-2

#### Design updates

- Minor refactor of CSS styles on [EzModal](/components/ez-modal) component.

#### Documentation

- Adds documentation around props on [EzModal](/components/ez-modal) component.

## 1.10.0 - 2018-10-30

#### New components

- Adds new [EzModal](/components/ez-modal) component.

## 1.9.0 - 2018-10-4

#### New components

- Adds new [EzPage](/components/ez-page) component.

#### Documentation

- Deprecated [EzPageContent](/components/ez-page-content).

## 1.8.2 - 2018-09-17

#### Bug fixes

- Removes an unnecessary addition of `className` to [EzAlert](/components/ez-alert)

## 1.8.1 - 2018-09-17

#### New components

- Adds new [EzHeading](/components/ez-heading) component.

#### Enhancements

- Made [EzPageContent](/components/ez-page-content) padding responsive.

#### Design updates

- Changed value of `spacing.xl2`.

## 1.7.2 - 2018-09-17

#### Bug fixes

- Clean up some design fixes for [EzAlert](/components/ez-alert)

## 1.7.1 - 2018-09-14

#### Bug fixes

- Fixed `theme` property for [EzAlert](/components/ez-alert)

## 1.7.0 - 2018-09-12

#### New components

- Added [EzAlert](/components/ez-alert) component and accompanying documentation

## 1.6.0 - 2018-09-07

#### Enhancements

- Refactored color variable names and added new colors

#### Documentation

- Added documentation for [colors](/styles/style/#colors)

## 1.5.0 - 2018-08-15

#### Enhancements

- Added optional accent prop to [EzCard](/components/ez-card)

## 1.4.1 - 2018-08-13

#### Bug fixes

- Fixed issue with buttons getting a white border due to the order of declared styles.

## 1.4.0 - 2018-08-08

#### Enhancements

- Added responsive layout options to [EzLayout](/components/ez-layout)

#### Documentation

- Added info on progressive enhancement to [Principles](/guides/principles)

## 1.3.0 - 2018-08-07

#### Enhancements

- Added tertiary button use type to [EzButton](/components/ez-button)
- Added optional subtitle prop to [EzCard](/components/ez-card)

#### Documentation

- Added guidance on when and how to use tertiary buttons
- Added guidance on when and how to use EzCards with subheadings

## 1.2.0 - 2018-08-02

#### Enhancements

- Updated [EzButton](/components/ez-button) to be bold font and not wrap on whitespace
- New variables for [spacing](/styles/style/#spacing), [typography](/styles/style/#typography) (including [font sizes](/styles/style/#font-sizes) and [font weights](/styles/style/#font-weights))

## 1.1.0 - 2018-07-30

#### Enhancements

- New "[stack](/components/ez-layout#stack-layout)" variant added for [EzLayout](/components/ez-layout)

#### Documentation

- Added guidance on [versioning and releasing](/guides/versioning-and-changelog) Recipe.

#### Development workflow

- Added [changelog](/changelog)
