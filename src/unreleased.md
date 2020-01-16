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

- Remove usage of `javascript:urls` from component examples ([deprecated in React 16.9](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#deprecating-javascript-urls))
- Allow links within examples to trigger navigation of the parent window, rather than the iframe

#### Dependency upgrades

#### Development workflow

- Created a lint plugin for recipe (`@ezcater/eslint-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.
- Updated Recipe's devDependencies used for build/dev tooling. This addressed some npm audit reported known vulnerabilities.
- Updated doc-site's package dependencies
