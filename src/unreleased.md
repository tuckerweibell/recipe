---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

#### Design updates

- Added new visual component index to the Recipe doc-site in place of an long alphabetized component list. The component index groups components into categories: Layout, Navigation, Data, Inputs, Feedback, Marketing, Overlays, and Typography.
- Updated [EzModal](/components/ez-modal) documentation to present each example with each modal open, in order to assist readers in quickly finding what they are looking for.

#### Bug fixes

- Fixed `EzLayout` screen breakpoint bug causing layout items to have unwanted margin.
- Fixed reakit warnings logged by EzField[type=select] (Closes [#295](https://github.com/ezcater/recipe/issues/295)).
- Fixed console warning caused by @reach/dialog (Closes [#39](https://github.com/ezcater/recipe/issues/39)).
- Fixed reakit deprecation warning triggered by EzNavigation component usage of `<Dialog modal={false}>`.
- Fixed `:focus` styles on close button for EzModal, EzBanner and EzFlashMessage.

#### Documentation

- Updated github issue templates for bug reports to include codesandbox template to assist with reproducing issues.

#### Dependency upgrades

- Updated reakit to 1.0.0-rc.0
- Removed dependency on @reach/dialog

#### Development workflow
