---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added Clickable rows API to [EzTable](/components/ez-table/#clickable-rows), which allows the table to target specific links to trigger when the table row is clicked.
- Added hover color to table rows to improve scannability of tables

#### Design updates

#### Bug fixes

- Fixed type definition of EzSegmentedControl `onChange` to use `(value: string) => void` instead of `((event: FormEvent<any>) => void) & ((value: string) => void)`.

#### Documentation

- Switch doc-site to using the [playground component from docz](https://github.com/pedronauck/docz/tree/master/core/docz-theme-default) instead of React-live as a direct dependency.
- Run doc-site examples within an iframe. This enables the docz resize/responsive controls to apply the correct viewport, allowing media queries to apply correctly.

#### Dependency upgrades

update devDependency on sosia-markdown

#### Development workflow
