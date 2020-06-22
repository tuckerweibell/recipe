---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- EzField now supports `type="password"`, allowing the user to securely enter a password using the [browsers default password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). Closes [#332](https://github.com/ezcater/recipe/issues/332).
- Better support for tree-shaking. If you're using ES6 modules and a bundler that supports tree-shaking (such as [webpack](https://webpack.js.org/guides/tree-shaking/) or [Parcel](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)), you can now safely use named imports and get an optimized bundle size automatically - only including the Recipe components you're actually using in your application. Closes [#371](https://github.com/ezcater/recipe/issues/371).

#### Design updates

#### Bug fixes

- fix: EzPageHeader selected link color is now black (consistent with selected link button color). Closes [#348](https://github.com/ezcater/recipe/issues/348).
- fix: EzNavigation link hover color is now always white (instead of purple/blue for router-based links). Closes [#374](https://github.com/ezcater/recipe/issues/374).
- fix: EzLink `to` prop now correctly supports. Closes [#345](https://github.com/ezcater/recipe/issues/345).
- fix: EzBlankState now correctly horizontally centers messages that wrap multiple lines (instead of left-justified). Closes [#319](https://github.com/ezcater/recipe/issues/319).
- fix: EzBlankState now correctly vertically centers EzBlankState content (removes uneven space below message text).
- fix: EzNavigation notification positioning in Safari. Closes [#380](https://github.com/ezcater/recipe/issues/380).
- fix: EzPageHeader usage in documentation site, causing missing bottom margin in Safari.

#### Documentation

- Fix issue in code playground component can sometimes cause the scroll position to "jump" when interacting with playground examples
- Re-prioritized EzField documentation to demonstrate validation API before other API examples
- Added more detailed usage descriptions for validation API: `touched` and `error` props.
- Added complete validation example demonstrating the process of filling out an empty form, validating form input (required fields/input format/range) and managing the state of the form.
- Added documentation for the EzToggle inline saving feedback feature. The example now demonstrates handling the asynchronous actions with an optimistic response and compensating actions on failure.

#### Dependency upgrades

#### Development workflow
