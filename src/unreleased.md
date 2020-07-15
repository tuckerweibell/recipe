---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

- Added new [EzTimeline](/components/ez-timeline) component for visualizing chronological sequences of events. Closes [issue #195](https://github.com/ezcater/recipe/issues/195).

#### Enhancements

- Update [EzFlashMessage](/components/ez-flash-message) with new spacing consistent with EzCard and EzLayout.

#### Design updates

- Use shadow instead of border for cards to indicate content layering.
- Collapse horizontal padding on narrow viewports to increase surface available for content.
- Remove rounded corners on cards on narrow viewports now that the card surface spans the whole screen.
- Use SVG icon for Page header breadcrumb links.
- Remove "Clear Selection" option for on-page selections in EzTable.
- Add title attribute to pagination buttons on EzTable.
- Design refresh on EzTable pagination for better support for small screen sizes.

#### Bug fixes

- Fix: [EzFlashMessage](/components/ez-flash-message) dismiss button now appears in the top right, rather than vertically centered.
- Fix: ensure [Links](/components/ez-link) have correct cursor (pointer)
- Fix: Prevent [status](/components/ez-status) wrapping below Action Required indicator
- Fix: Align page headings with body content on narrow screens.
- Fix: Remove unwanted hover color on EzTable selection message banner.
- Fix: Remove unwanted padding for [tertiary buttons with icons](/components/ez-button/#tertiary-button-with-icon) when button is icon-only.

#### Documentation

- Update [EzFlashMessage](/components/ez-flash-message) with clearer guidelines to help pick the right tone of message for a variety of situations.
- Update [EzFlashMessage](/components/ez-flash-message) examples to more closely follow the provided guidelines.

#### Dependency upgrades

#### Development workflow

- Updated Recipe's internal build tool to using latest `babel-plugin-emotion` release that had been held back from an upgrade as it had an issue detecting [component selectors](https://emotion.sh/docs/styled#targeting-another-emotion-component). Switched away from using component selectors internally so that we could proceed with the upgrade to the v10 plugin (to avoid any potential pitfalls downstream of using a v9 plugin with v10 code).
- Disabled autolabel and sourcemap options for the `babel-plugin-emotion`. See [PR#387](https://github.com/ezcater/recipe/pull/264) for more details.
