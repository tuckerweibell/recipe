---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased changes

#### Breaking changes

#### New components

#### Enhancements

- Added support for `onSelectionChange` API for `EzField[type=select]`, consistent with `EzField[type=Autosuggest]` component.

#### Design updates

#### Bug fixes

- Fixed nested popover issue where the parent popover's `close` method was called when clicking inside of a nested popover's content. Closes #522.
- Removed duplicate handling of "click outside" of the popover for Select lists that caused the popover to close before the selection had committed (found in IE11).
- fix: EzField[type=select] use of Event constructor breaks on IE11. Added fallback to `document.createEvent()`. Closes #523.
- fix: incorrect TypeScript definition for EzField custom input fields.

#### Documentation

#### Dependency upgrades

#### Development workflow
