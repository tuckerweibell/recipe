---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased changes

#### Breaking changes

#### New components

#### Enhancements

- Added support for capturing email address with `EzField[type=email]`.
- Added new "slots" based API for [EzCard](/components/ez-card), allowing areas within a card can be populated by providing content components (Preview, Header, Content, Footer) as direct descendants to the card.

#### Design updates

- Remove unwanted/collapsed margin from first checkbox/radio option.
- EzHeading no longer renders a semantic `header` element.

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
- Added a search input to the component list page.
- Added instructions for using `findIndex()` polyfill to `Getting Started`, `EzField`, `EzProgressTracker`, and `EzPageHeader`.
- Improved IE11 support for the doc-site component preview. The code preview feature has been visually updated to more closely match the design of the code playground available in modern browsers.
- Fix: doc-site playground scroll flicker/jumping (Closes #503)
- Fix: doc-site component preview having unbounded width when viewed in IE11.
- Fix: Added min-height on doc-site playground when rendering error messages.
- Fix: Added `findIndex()` polyfill to the doc-site for compatibility with IE11.
- Fix: Avoid syntax error when evaluating code example in the `EzGlobalStyles` component documentation.
- Fix: Avoid layout-shift caused by the code playground. This detrimentally affected jump-to-anchor behavior within the doc-site.

#### Dependency upgrades

#### Development workflow

- Added [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/) and google tag manager id for doc-site usage visibility.
- Added new CLI tool for generating the component preview images used within the [components list page](/components) of the doc-site.
- Added [gatsby-remark-copy-images](https://www.gatsbyjs.com/plugins/gatsby-remark-copy-images/) to allow Recipe image assets to be available within the doc-site.
