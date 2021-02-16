---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

#### Enhancements

- Added support for capturing email address with `EzField[type=email]`.

#### Design updates

#### Design updates

- Remove unwanted/collapsed margin from first checkbox/radio option.

#### Bug fixes

- Fix: Unexpected tab-sequence from popover trigger buttons to EzPopover content (and back) caused by to EzPopovers' [Portal](https://reactjs.org/docs/portals.html) use.
- Fix: Broken "related component" links in EzPopover documentation.
- Fix: Incorrect/inconsistent sizing of icons within EzAlert.
- Fix: Tapered accent border corners in marketplace theme for `EzFlashMessage`.

#### Documentation

- Added best practices guidance to EzPopover documentation.
- Added accessibility reminder to EzPopover documentation; EzPopover is a low-level building block for building more complex interactions, and cannot provide a complete accessibility story for every scenario. Additional care should be taken to ensure the interactions you are building are accessible, in particular, when handling user events, key presses and focus.
- Added more detailed property descriptions within the EzPopover documentation.
- Added license notice for referenced sources.
- Fix: doc-site playground scroll flicker/jumping (Closes #503)
- Fix: Added min-height on doc-site playground when rendering error messages.

#### Dependency upgrades

#### Development workflow

- Added [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/) and google tag manager id for doc-site usage visibility.
- Added new CLI tool for generating the component preview images used within the [components list page](/components) of the doc-site.
