---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Added [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) support to `EzField`, `EzCheckbox`, `EzToggle` and `EzStatus` to allow access to the underlying native DOM elements for providing support for tooltips. While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, around exported type definitions. For more information, see: https://reactjs.org/docs/forwarding-refs.html#note-for-component-library-maintainers.
- Added Global Styles to the `EzAppLayout` component to ensure applications use the correct font size/style/color/smoothing rules. While we do not anticipate this being a breaking change for most consumers of Recipe, any applications that use the `EzAppLayout` component that do not already apply the necessary base font settings may experience observable changes in font appearance.

#### New components

- Added EzTooltip component.
- Added EzBlankState component.
- Added EzSuperRadioButtons component.
- Add new `EzGlobalStyles` component that enables the sharing of global styles rules for Recipe, so that these rules are applied consistently throughout your application. Note: Global Styles is automatically included by the EzAppLayout component, and direct usage of this component is typically unnecessary except to support backwards-compatibility.

#### Enhancements

- Support for `EzField[type="Select"]` to allow users to pick from a dropdown list of options.
- Support for option groups for `EzField[type="Select"]`.
- Support for `EzField[type="time"]` to allow users to pick from a list of times.
- Added `fonts` object to standard theme with grouped styles.
- Added `size` property to EzField with type textarea for changing the default size of the textarea.

#### Design updates

- Updated EzField to use consistent presentation for "drop down" styles across `type="date"`, `type="time"` and `type="select"`.
- Revised interaction behavior EzField[type="date"] to no longer auto-open on focus to behave consistently with `type="time"` and `type="select"`.
- Updated Table headings to match small label style (Closes [#133](https://github.com/ezcater/recipe/issues/133)).
- Updated simple table to no longer grow to fill the available space (Closes [#147](https://github.com/ezcater/recipe/issues/147))
- Added zebra striping to simple tables in place of row hover style.
- Changed width of modal to 550px.

#### Bug fixes

- Fix z-index issue with validation message flyout appearing underneath subsequent content
- Fix keyboard selection of dates in EzField[type="date"]
- Fix focus bug with EzField[type="date"] that causes the control to draw focus when clicking other page elements
- Fix up/down icon toggle on EzField[type="date"] for open/closed states
- Fix font color and icon colors on EzField[type="date"] disabled state

#### Documentation

- Adds documentation for [application layout](/components/ez-app-layout). Closes #146.
- Update 'Getting started' documentation to include more complete instructions around setting up Recipe to work with emotion and theming
- Added instructions for setting up applications to import Recipe's base font
- Update doc-site to include Recipe's font link (as per the new getting started docs) and to include the `EzGlobalStyles` within the Component playground

#### Dependency upgrades

#### Development workflow

- Fixed an issue with emotion css-in-js leaking state across visual regression test runs
- Replace manual style reset from `jest.config` in favor of using `EzGlobalStyles` component.
