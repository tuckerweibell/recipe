---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Update [EzFlashMessage](/components/ez-flash-message) with new spacing consistent with EzCard and EzLayout.

#### Design updates

#### Bug fixes

- Fix: [EzFlashMessage](/components/ez-flash-message) dismiss button now appears in the top right, rather than vertically centered.

#### Documentation

- Update [EzFlashMessage](/components/ez-flash-message) with clearer guidelines to help pick the right tone of message for a variety of situations.
- Update [EzFlashMessage](/components/ez-flash-message) examples to more closely follow the provided guidelines.

#### Dependency upgrades

#### Development workflow

- Updated Recipe's internal build tool to using latest `babel-plugin-emotion` release that had been held back from an upgrade as it had an issue detecting [component selectors](https://emotion.sh/docs/styled#targeting-another-emotion-component). Switched away from using component selectors internally so that we could proceed with the upgrade to the v10 plugin (to avoid any potential pitfalls downstream of using a v9 plugin with v10 code).
- Disabled autolabel and sourcemap options for the `babel-plugin-emotion`. See [PR#387](https://github.com/ezcater/recipe/pull/264) for more details.
