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

- Fixed clock icon positioning on EzField type="time". See See [issue 271](https://github.com/ezcater/recipe/issues/271)
- Removed `aria-labelledby` attribute from combobox element. This attribute/value pair was already applied to the combobox input, causing the latest version of `@testing-library/react` to fail to match a unique element.

#### Documentation

#### Dependency upgrades

#### Development workflow

- Created a lint plugin for recipe (`@ezcater/eslint-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.
- Updated Recipe's devDependencies used for build/dev tooling. This addressed some npm audit reported known vulnerabilities.
- Updated doc-site's package dependencies
