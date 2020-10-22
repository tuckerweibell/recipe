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

- fix: EzTable responsive logic incorrectly detecting horizontal overflow.

#### Documentation

- updated typography docs to list options within an EzTable.

#### Dependency upgrades

- upgrade gatsby dev dependency (for doc-site).

#### Development workflow

- added MinifiedBrowserTarget decorator for RemoteBrowserTarget in order to shrink the payload size of visual regression tests.
- Disabled [emotion's vendor prefixing](https://emotion.sh/docs/@emotion/cache#prefix) during visual regression test runs (in order to shrink the payload size of visual regression tests). Given our only browser target in use today is Chrome, we shouldn't need vendor prefixes during tests.
- Switched [emotion's default style prefix](https://emotion.sh/docs/@emotion/cache#key) for emotions generated class names from `css` to `r` (for recipe). This change is only applied to styles generated during test runs and does not impact production. This change reduces the payload size of visual regression tests.
