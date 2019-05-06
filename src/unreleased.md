---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

- Added EzAppLayout which is used for centering page content at a fixed or full width.

#### Enhancements

- Added pagination support to EzTable.
- Added support for `actions` on EzTable
- Added initial docs for sub nav (tabs) support in EzPageHeader.
- Added sub navigation support to EzPageHeader, either via state change or via route change
- Add type definitions to enable support for EzButton to accept/pass through standard HTML button props (such as type, role, etc) to the underlying DOM element
- Add support for [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) on EzButton and EzLink components to allow access to underlying DOM element
- Support URL and client-side router links in [EzPageHeader](/components/ez-page-header/#page-header-with-breadcrumb-links). Closes issue [#60](https://github.com/ezcater/recipe/issues/60);
- Add support for using components to define custom cell content in [EzTable](./components/ez-table#custom-cell-rendering). Closes [#92](https://github.com/ezcater/recipe/issues/92). Previously, the EzTable accessor allowed functions to be provided to define a template for custom cell content. By supporting Components instead of basic functions, we allow access to the full set of React features (state, life cycle etc) when rendering each custom cell.

#### Design updates

- Support wider card actions that wrap correctly under the card heading

#### Bug fixes

- Fix server render of components rendered inside react router in doc-site

#### Documentation

- Improved visibility of the inline code tags.

#### Dependency upgrades

#### Development workflow

- Improved local development workflow by way of a new NPM target `start`. `npm start` runs both `recipe` and the documentation site in the same terminal window. This command will also auto link the `recipe` NPM package to the documentation site.
