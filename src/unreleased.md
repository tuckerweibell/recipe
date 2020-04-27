---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Support "small" label style in EzField.

#### Design updates

- Make label elements `display: block` by default, allowing the margin/line-height of labels to be controlled via css.

#### Bug fixes

- Labels for interactive controls (i.e. input fields) rendered by EzLabelledItem now render using the `label` element and correctly apply the `htmlFor` prop to associate the label element with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused.

#### Documentation

- Improved guidance on label variations (when to use small labels).

#### Dependency upgrades

#### Development workflow
