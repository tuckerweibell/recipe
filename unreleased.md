---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes.

#### New components
- Added new [EzPopover](/components/ez-popover) component. Popover is a non-modal dialog that floats relative to another element. It's commonly used for displaying additional rich content on top of something.

#### Enhancements

- New "clickable" card variant of EzCard. Clickable cards present a preview of a piece of content and offer a large hit-surface to make it easy to link to the full content.
- Improvements to the EzLink API. Allows Recipe to be able to apply styles to any kind of link component or link element via component composition, without Recipe needing to be coupled to the API details of the specific link/router component in use. This allows recipe to be used more easily with client-side routers (in addition to React router).
- New "secondary" style link variant, matching the current color of the containing paragraph text, ideal for large blocks of text with several references linked throughout.
- New "reset" link variant, removing the browser default text decoration and color from the wrapped link. This variant can be used to provide navigation semantics to other elements, such as headings or charts, without impacting their default appearance.

#### Design updates

- Small change to box-shadow of cards in `@recipe-ui/theme-marketplace` v1.1.2. EzCard has more clearly defined corners.

#### Bug fixes

- fix: Carousel bug causing items to be sized in correctly. This bug occurred when there are fewer items in the carousel than the configured slidesPerPage value for the current breakpoint.
- fix: Accessibility improvements for EzCard expandable footer. Switched expandable trigger to use button semantics instead of presenting as a link. Link expose browser features like context menus and "open in new tab", but those features aren't applicable to expandable cards.
- fix: Accessibility improvements for the Recipe doc-site. Restored missing focus styles on the code playground action buttons.

#### Documentation

- Improved legibility of inline code snippets in doc-site.
- Documented two common variations of clickable cards:
  - Cards with a heading link
  - Cards with a call to action link

#### Dependency upgrades

#### Development workflow

- Avoid creating visual regression snapshots for any documented code examples that do not have a corresponding name. This allows us to write code-blocks to further clarify expected usage, without necessarily requiring a corresponding visual regression test.
