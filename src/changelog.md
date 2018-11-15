---
path: "/changelog"
title: "What's new?"
---

The latest news, updates, and changes to the Recipe design system.

The format is based on [these versioning and changelog guidelines](/guides/versioning-and-changelog).

## 1.12.0 - 2018-11-15
* Switches [EzModal](/components/ez-modal) component to use react-modal
  * Adds `appElement` prop to `EzModal`
  * Adds back slide up amination

## 1.11.3 - 2018-11-14
* Fixes cross-browser bugs and removes slide up animation on [EzModal](/components/ez-modal) component.

## 1.11.1 - 2018-11-13
* Include table styles missed due default doc-site styles
* Enumerate specific `peerDepenedency` requirements in Getting Started docs

## 1.11.0 - 2018-11-8

* Adds new [EzTable](/components/ez-table) component.
* Fixes component `displayName` and [EzCard](/components/ez-card) bug causing `EzCardSection` to not render correctly.
* Switches [EzModal](/components/ez-modal) component to use @reach/dialog
  * Remove `appElement` prop from `EzModal`

## 1.10.1 - 2018-11-2

* Adds documentation around props on [EzModal](/components/ez-modal) component.
* Updates and cleans up CSS styles on [EzModal](/components/ez-modal) component.

## 1.10.0 - 2018-10-30

* Adds new [EzModal](/components/ez-modal) component.

## 1.9.0 - 2018-10-4

###

* Adds new [EzPage](/components/ez-page) component.
* Deprecates [EzPageContent](/components/ez-page-content).

## 1.8.2 - 2018-09-17

### Bug fixes

* Removes an unnecessary addition of `className` to [EzAlert](/components/ez-alert)

## 1.8.1 - 2018-09-17

### Enhancements

* Adds new [EzHeading](/components/ez-heading) component.
* Changed value of `spacing.xl2`.
* Made [EzPageContent](/components/ez-page-content) padding responsive.

## 1.7.2 - 2018-09-17

### Bug fixes

* Clean up some design fixes for [EzAlert](/components/ez-alert)

## 1.7.1 - 2018-09-14

### Bug fixes

* Fixed `theme` property for [EzAlert](/components/ez-alert)

## 1.7.0 - 2018-09-12

### Enhancements

* Added [EzAlert](/components/ez-alert) component and accompanying documentation

## 1.6.0 - 2018-09-07

### Enhancements

* Refactored color variable names and added new colors

### Documentation

* Added documentation for [colors](/styles/style/#colors)

## 1.5.0 - 2018-08-15

### Enhancements

* Added optional accent prop to [EzCard](/components/ez-card)

## 1.4.1 - 2018-08-13

### Bug fixes

* Fixed issue with buttons getting a white border due to the order of declared styles.

## 1.4.0 - 2018-08-08

### Enhancements

* Added responsive layout options to [EzLayout](/components/ez-layout)

### Documentation

* Added info on progressive enhancement to [Principles](/guides/principles)

## 1.3.0 - 2018-08-07

### Enhancements

* Added tertiary button use type to [EzButton](/components/ez-button)
* Added optional subtitle prop to [EzCard](/components/ez-card)

### Documentation

* Added guidance on when and how to use tertiary buttons
* Added guidance on when and how to use EzCards with subheadings

## 1.2.0 - 2018-08-02

### Enhancements

* Updated [EzButton](/components/ez-button) to be bold font and not wrap on whitespace
* New variables for [spacing](/styles/style/#spacing), [typography](/styles/style/#typography) (including [font sizes](/styles/style/#font-sizes) and [font weights](/styles/style/#font-weights))

## 1.1.0 - 2018-07-30

### Enhancements

* New "[stack](/components/ez-layout#stack-layout)" variant added for [EzLayout](/components/ez-layout)

### Documentation

* Added guidance on [versioning and releasing](/guides/versioning-and-changelog) Recipe.

### Development workflow

* Added [changelog](/changelog)
