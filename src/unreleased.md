---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- deprecated usage of `accessor` prop on EzTable in favor of separate `key` and `component` properties.

#### Design updates

- update the EzTooltip styles to use 'white-space: pre-line', adding support for newlines within a tooltip.
- updated doc-site to more closely align with the updated ezcater branding (icon/colors/typography).

#### Bug fixes

- relax type definition for EzStatus to make `size` optional (already has a default value of `normal`)
- Prevent EzTooltip flyout from overflowing its clipping container (fixes [issue 240](https://github.com/ezcater/recipe/issues/240))
- Fix EzTooltip placement relative to page scroll position (fixes [issue 313](https://github.com/ezcater/recipe/issues/313))

#### Documentation

- use centered layout for most doc-site pages to help limit line-length to promote readability.
- update page header docs to use the correct component to present the page status (i.e. EzStatus instead of EzAlert).

#### Dependency upgrades

#### Development workflow
