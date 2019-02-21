---
path: '/changelog'
title: "What's new?"
---

The latest news, updates, and changes to the Recipe design system.

The format is based on [these versioning and changelog guidelines](/guides/versioning-and-changelog).

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

- fixed type definiton of `EzButton` onClick to `MouseEventHandler`

#### Documentation

- Added titles to [EzHeading](/components/ez-heading) docs

#### Development wokflow

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

#### Development wokflow

- Integrated code climate with CI build
- Added code climate config to separate doc-site from recipe code quality checks
- Added `npm run build:watch` mode for TypeScript builds
- Suppress lint warning from development doc-site builds

## 2.0.0-alpha.2

#### Documentation

- Removed empty bullet list of "related components" section in several components
- Updated structure of `EzModal` docs to follow the same format of other components
  - Removed "props table" style documentation in favor of demonstrating how properties are applied to achieve various usecases

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
- Render bug with EzModal and EzHeading causing unnecessary rerenders and event handlers to be removed/reapplied every render

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
