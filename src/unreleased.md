---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Update dependency on emotion from v9 to v10. This is a significant breaking change. At a minimum, downstream applications will be required to update their emotion dependencies to v10 in order to take this Recipe release. Additionally, this release may require significant changes to downstream applications as part of the Emotion upgrade. See the [emotion docs](https://emotion.sh/docs/migrating-to-emotion-10) and our [github issue](https://github.com/ezcater/recipe/issues/218) for more information on breaking changes.
- EzLink and EzField now support React.ForwardRef instead of `innerRef`. You will need to **upgrade React Router to at least v5.1** if your application passes refs to EzLink and uses EzLink's `as` prop.
- Update the Recipe analytics bookmarklet tool to support emotion 10. If you wish to be able to run analytics against emotion 9 based applications, you should retain you current bookmarklet link as a separate bookmark.

#### New components

#### Enhancements

- Internally use emotion 10's `Global` Component for global styles.
- Modified Recipe's CSS selector usage for closer compatibility with Emotion 10's SSR approach. See: https://github.com/emotion-js/emotion/issues/1178

#### Design updates

#### Bug fixes

- fix react list unique key warning in typography docs

#### Documentation

- Updated doc-site to use emotion v10
- Update documentation about peerDependencies

#### Dependency upgrades

- Remove devDependency on React (for testing).
- Update devDependency emotion from v9 to v10.

#### Development workflow
