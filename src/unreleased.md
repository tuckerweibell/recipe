---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

#### Design updates

#### Bug fixes

- fix: EzPageHeader selected link color is now black (consistent with selected link button color). Closes [#348](https://github.com/ezcater/recipe/issues/348).
- fix: EzNavigation link hover color is now always white (instead of purple/blue for router-based links). Closes [#374](https://github.com/ezcater/recipe/issues/374).
- fix: EzLink `to` prop now correctly supports. Closes [#345](https://github.com/ezcater/recipe/issues/345).
- fix: EzBlankState now correctly horizontally centers messages that wrap multiple lines (instead of left-justified). Closes [#319](https://github.com/ezcater/recipe/issues/319).
- fix: EzBlankState now correctly vertically centers EzBlankState content (removes uneven space below message text).

#### Documentation

- Fix issue in code playground component can sometimes cause the scroll position to "jump" when interacting with playground examples
- Re-prioritized EzField documentation to demonstrate validation API before other API examples
- Added more detailed usage descriptions for validation API: `touched` and `error` props.
- Added complete validation example demonstrating the process of filling out an empty form, validating form input (required fields/input format/range) and managing the state of the form.

#### Dependency upgrades

#### Development workflow
