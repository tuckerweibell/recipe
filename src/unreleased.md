---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- added visual regression coverage for EzField[type=time] with validation messages
- added visual regression coverage for EzField[type=fn] with validation messages

#### Design updates

- Update doc-site h3 level headings to use EzHeader[size=3]
- Add syntax highlighting for doc-site code snippets
- Added thematic breaks to [Colors](/styles/colors) and [Typography](/styles/typography) to break up related content into easier to digest parts.

#### Bug fixes

- Fix EzNavigation issue where clicking the currently selected page causes the content to disappear on large screens. (fixes [issue 237](https://github.com/ezcater/recipe/issues/237))
- fix regression bug causing EzField[type=select] to stringify `event.target.value`. This bug impacted any usage of EzField[type=select] where an option value was of type Number or Boolean.
- fix styling of EzField[type=time] when the field is in an error state
- fix positioning of error message and validation flyout on EzField[type=fn]
- fix incorrect EzField[type=date] tests (missing Label which is a required prop)

#### Documentation

- add documentation for migration to Recipe 8.x releases
- add documentation for migration to Recipe 10.x releases

#### Dependency upgrades

#### Development workflow
