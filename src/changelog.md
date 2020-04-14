---
path: '/changelog'
title: "What's new?"
order: 70
---

The latest news, updates, and changes to the Recipe design system.

The format is based on [these versioning and changelog guidelines](/guides/versioning-and-changelog).

## 10.0.5 - 2020-04-14

#### Design updates

- Added new visual component index to the Recipe doc-site in place of an long alphabetized component list. The component index groups components into categories: Layout, Navigation, Data, Inputs, Feedback, Marketing, Overlays, and Typography.
- Updated [EzModal](/components/ez-modal) documentation to present each example with each modal open, in order to assist readers in quickly finding what they are looking for.
- emphasize flyout shadow in EzField[type=select] to more closely match original design

#### Bug fixes

- Fixed `EzLayout` screen breakpoint bug causing layout items to have unwanted margin.
- Fixed reakit warnings logged by EzField[type=select] (Closes [#295](https://github.com/ezcater/recipe/issues/295)).
- Fixed console warning caused by @reach/dialog (Closes [#39](https://github.com/ezcater/recipe/issues/39)).
- Fixed reakit deprecation warning triggered by EzNavigation component usage of `<Dialog modal={false}>`.
- Fixed `:focus` styles on close button for EzModal, EzBanner and EzFlashMessage.
- Fixed positioning issue with EzField[type=select] causing flyout to overflow the bounds of the screen. The flyout will now "flip" above the input if the dropdown list would otherwise overflow the bottom of the screen. (Closes [#289](https://github.com/ezcater/recipe/issues/289)).
- Fixed positioning issue with EzField[type=select] causing flyout to be clipped by scrolling container elements (such as modal dialogs).
- Fixed z-index issue with EzField[type=time] icon appearing above other content (Closes [#326](https://github.com/ezcater/recipe/issues/326)).

#### Documentation

- Updated github issue templates for bug reports to include codesandbox template to assist with reproducing issues.

#### Dependency upgrades

- Updated reakit to 1.0.0-rc.0
- Removed dependency on @reach/dialog

## 10.0.4 - 2020-03-19

#### Enhancements

- deprecated usage of `accessor` prop on EzTable in favor of separate `key` and `component` properties.

#### Design updates

- update the EzTooltip styles to use 'white-space: pre-line', adding support for newlines within a tooltip.
- updated doc-site to more closely align with the updated ezcater branding (icon/colors/typography).

#### Bug fixes

- relax type definition for EzStatus to make `size` optional (already has a default value of `normal`)
- Prevent EzTooltip flyout from overflowing its clipping container (fixes [issue 240](https://github.com/ezcater/recipe/issues/240))
- Fix EzTooltip placement relative to page scroll position (fixes [issue 313](https://github.com/ezcater/recipe/issues/313))

#### Documentation

- use centered layout for most doc-site pages to help limit line-length to promote readability.
- update page header docs to use the correct component to present the page status (i.e. EzStatus instead of EzAlert).

## 10.0.3 - 2020-03-05

#### Enhancements

- Use svgomg to optimize file sizes of a some commonly used icons.

#### Design updates

- Reduced label spacing for EzField[type=radio] and EzField[type=checkbox] to match other types of input.
- Reduced spacing between radio/checkbox items to keep item spacing equal with label spacing.
- Switched EzField[type=select] to display error icon and messaging against the field label, rather than inline on the input for consistency with EzField[type=date] and EzField[type=time] (fixes [issue 300](https://github.com/ezcater/recipe/issues/300)).
- Updated EzField and EzButton to match in height when rendered side-by-side (fixes [issue 221](https://github.com/ezcater/recipe/issues/221)).
- Updated EzField[type=select] to apply an ellipsis when a select option has a value too long for the available space for the input (fixes [issue 213](https://github.com/ezcater/recipe/issues/213)).
- Updated EzField internals to use flexbox for centering icons within inputs.

#### Bug fixes

- EzField ref now correctly targets the underlying input element, rather than the container (fixes [issue 298](https://github.com/ezcater/recipe/issues/298)).
- Remove unwanted user-agent padding on fieldset legend (i.e. EzField[type=radio] and EzField[type=checkbox])
- Remove unwanted margin-bottom on fieldset legend
- Fixed issue with EzField[type=select] causing the selected text to overlap with the input chevron or the selected option checkmark.
- Fixed issue with EzField[type=custom] missing rounded corners (fixes [issue 302](https://github.com/ezcater/recipe/issues/302)).
- Fixed issue where EzField[labelHidden] has unwanted top margin causing alignment issues with similar height components (fixes [issue 194](https://github.com/ezcater/recipe/issues/194)).
- Fixed issue with component playground in the doc-site causing full-width components to have unwanted top margin.
- Fixed issue with EzCard throwing an error when empty (fixes [issue 294](https://github.com/ezcater/recipe/issues/294)).d
- Update type definition for EzLayout to no longer require a `layout` prop. The type definition now represents our existing usage pattern. The default (EzLayout[layout=basic]) remains unchanged.
- Fixed flash of unstyled content on the doc-site caused by incorrect usage of emotion CacheProvider for static rendering setup.

#### Development workflow

- Added new component to enable visual testing of components at various different breakpoints
- Added regression test coverage for EzField[type=select/date/time] with error message on small devices

## 10.0.2 - 2020-02-20

#### Enhancements

- Added accessibility labels to EzModal.
- Extract internal EzPortal and EzPopover components for easier reuse and to simplify EzTooltip internals.

#### Bug fixes

- Fix EzModal issue on doc-site causing modal to appear unstyled at the bottom of the screen (fixes [issue 288](https://github.com/ezcater/recipe/issues/288)). The modal will now appear inside the component playground/iframe consistent with other components.
- Fix height resizing of EzTooltip documentation playground examples to no longer clip the tooltip flyout.
- Fix EzTooltip flashing up temporarily in the wrong position on screen.
- Fix EzModal issue on IE where content gets hidden if height exceeds container.

#### Dependency upgrades

- update reach/dialog to 0.8.2.
- update prettier devDependency to 1.19.1 to support optional chaining syntax.

## 10.0.1 - 2020-02-07

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

- add documentation for [migration to Recipe 8.x releases](/advanced/migrating-to-recipe-8)
- add documentation for [migration to Recipe 10.x releases](/advanced/migrating-to-recipe-10)

## 10.0.0 - 2020-01-23

#### Breaking changes

- Update dependency on emotion from v9 to v10. This is a significant breaking change. At a minimum, downstream applications will be required to update their emotion dependencies to v10 in order to take this Recipe release. Additionally, this release may require significant changes to downstream applications as part of the Emotion upgrade. See the [emotion docs](https://emotion.sh/docs/migrating-to-emotion-10) and our [github issue](https://github.com/ezcater/recipe/issues/218) for more information on breaking changes.
- EzLink and EzField now support React.ForwardRef instead of `innerRef`. You will need to **upgrade React Router to at least v5.1** if your application passes refs to EzLink and uses EzLink's `as` prop.
- Update the Recipe analytics bookmarklet tool to support emotion 10. If you wish to be able to run analytics against emotion 9 based applications, you should retain you current bookmarklet link as a separate bookmark.

#### Enhancements

- Internally use emotion 10's `Global` Component for global styles.
- Modified Recipe's CSS selector usage for closer compatibility with Emotion 10's SSR approach. See: https://github.com/emotion-js/emotion/issues/1178

#### Bug fixes

- fix react list unique key warning in typography docs

#### Documentation

- Updated doc-site to use emotion v10
- Update documentation about peerDependencies

#### Dependency upgrades

- Remove devDependency on React (for testing).
- Update devDependency emotion from v9 to v10.

## 8.0.3 - 2020-01-23

#### Enhancements

- Added missing type definitions for EzField[type=time]

#### Bug fixes

- Make EzField[type=time] start/end props case insensitive
- Make EzField[type=time] step prop optional (fixes [issue 257](https://github.com/ezcater/recipe/issues/257))
- Fix issue causing potential infinite loop when using EzField[type=select|date|time]
- Fix EzField[type=select|date|time] "current" icon positioning
- Fix `event.target` element on the `onChange` event of EzField[type=select|date|time] (fixes [issue 257](https://github.com/ezcater/recipe/issues/282))

#### Development workflow

- split up tests for EzField by type (i.e. checkbox, radio, select, date, time etc)
- updated EzField[type=time] tests to use public API, rather than internal/private methods

## 8.0.2 - 2020-01-16

#### Breaking changes

- Use `active` as the `activeClassName` in EzNavigation links. While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes due to the change in HTML generated by the component. In particular applications that contain a CSS rule that targets elements with a `.active` selector may be affected.

#### Enhancements

- Refactored Recipe's internal component for generating icons to compose styles using Emotion's `styled` helper instead of relying on the class name generated by the `css` helper.

#### Bug fixes

- Fixed clock icon positioning on EzField type="time". See [issue 271](https://github.com/ezcater/recipe/issues/271)
- Removed `aria-labelledby` attribute from combobox element. This attribute/value pair was already applied to the combobox input, causing the latest version of `@testing-library/react` to fail to match a unique element.
- Fixed test code usage of `act()` (using `react-dom/test-utils` instead of `TestRenderer.act()`)
- Fixed warning raised by accidentally forwarding `loading` flag from EzButton to the underlying DOM element.
- Fix `Using kebab-case for css properties in objects is not supported. Did you mean marginBottom?` warning generated by the internal EzLabel component.

#### Documentation

- Remove usage of `javascript:urls` from component examples ([deprecated in React 16.9](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#deprecating-javascript-urls))
- Allow links within examples to trigger navigation of the parent window, rather than the iframe

#### Dependency upgrades

- Remove unused `babel-core` dev dependency. We're using babel 7 (and @babel/core), so `babel-core` is no longer being used.
- Remove `react-test-renderer` in favor of consistently using `@testing-library/react`.

#### Development workflow

- Created a lint plugin for recipe (`@ezcater/eslint-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.
- Updated Recipe's devDependencies used for build/dev tooling. This addressed some npm audit reported known vulnerabilities.
- Updated doc-site's package dependencies
- Remove usage of enzyme's shallow/mount methods in tests, in favor of `@testing-library/react`.
- Remove DOM snapshot based testing template. Recipe tests should include visual regression tests instead.

## 8.0.1 - 2020-01-07

#### Bug fixes

- Fixed doc-site rendering issue. See [issue 265](https://github.com/ezcater/recipe/issues/265).
- Fixed unintentional modal closing issue. See [issue 243](https://github.com/ezcater/recipe/issues/243).

#### Dependency upgrades

- Updated hosted visual regression test runtime to use latest chrome-aws-lambda and puppeteer libraries to be compatible with the AWS runtime support policy updated on Jan 1, 2020.

#### Development workflow

- Created a babel plugin for recipe (`@ezcater/babel-plugin-recipe`) for using static analysis to track Recipe usage in downstream applications.

## 8.0.0 - 2019-12-16

#### Breaking changes

- Changed base font size to 16px (from 14px) to be inline with our recommended guidance for readability. For compatibility with applications that are not yet using our recommended base font size, a new `EzBaseFontSizeCompatibility` component is provided to support a base font size of 14px.
- Defer the internal "pixel to rem" calculation within Theme until runtime. This allows us to make the `baseFontSize` changeable in downstream applications, even if `spacing`, `fontSize` or `pageContentWidth` values are read from our theme module immediately on script import (rather than the intended use of reading from the theme within a theme provider). While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, if an application performs math/calculations upon these values.
- Use CSS custom variable (property) for Recipe's base font size. This is also in support of allowing the `baseFontSize` to be changeable in downstream applications. For applications that need to support IE11, to provide support for CSS custom properties a polyfill will be required. We recommend using the [css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill).

#### Documentation

- Updated Spacing and Typography documentation to no longer perform "rem to pixel" math on theme values.
- Added guidance on base font size compatibility to support applications that use a 14px base font size instead of Recipe's recommended size of 16px.
- Added CSS Custom Variable Polyfill recommendation for applications that need to support IE.

## 7.1.3 - 2019-12-16

#### Enhancements

- Support Component preview in IE11. Note: Component Editor is not yet supported as Docz doesn't support IE11.

#### Bug fixes

- Include polyfills when running doc-site in dev mode for browsing with IE11. See: gatsbyjs/gatsby#14502.
- Fix logo sizing for IE11.
- Avoid loading docz component playground when running IE11. Docz doesn't support IE11. See: doczjs/docz#249.
- Fix sidebar/main content spanning beyond the width of the page in IE11.
- Fixes for Component Playground for FireFox
  - Suppress error inserting styles into iframe
  - Delay rendering iframe portal until iframe `onLoad` has fired
  - Include iframe `srcDoc` to ensure `onLoad` event is fired

## 7.1.2 - 2019-12-9

#### Bug fixes

- Fix max-width and max-height of EzSuperRadioButton image such that it is constrained within its wrapper in IE11. Fixes [#256](https://github.com/ezcater/recipe/issues/256).

## 7.1.1 - 2019-12-3

#### Bug fixes

- Fixes EzSelect focus issue that caused problems with IE11 #252

## 7.1.0 - 2019-12-3

#### Enhancements

- Added `disabledMessage` property to EzButton to make using buttons wrapped with an EzTooltip easier.

## 7.0.3 - 2019-11-6

#### Bug fixes

- Reverts changes made in in 7.0.2. Dependency react-remove-scroll breaks the doc site.

## 7.0.2 - 2019-11-6

#### Bug fixes

- Fix modal closing when the cursor is clicked on the modal and released on the overlay [#243](https://github.com/ezcater/recipe/issues/243)

## 7.0.1 - 2019-10-30

#### Bug fixes

- Fix layout of EzFlashMessage in IE11. Setting the height / width of the icon ensures the flex layout is respected. Fixes [#231](https://github.com/ezcater/recipe/issues/231)

## 7.0.0 - 2019-10-23

#### Breaking changes

- Removed previously deprecated `e.target.selected` property from the `onChange` callback of both EzField[type="radio"] and EzField[type="checkbox"] in favor `e.target.value` for consistency with the `onChange` event handlers for other EzField types.

#### Bug fixes

- Change EzBlankState message to use a `div` instead of a `p` to prevent the style from being overriden by EzPage
- Set line-height and remove padding for `EzInlineFeedback` to prevent shifting in `EzToggle`. This fixes [#223](https://github.com/ezcater/recipe/issues/223)

#### Documentation

- Fix image paths in EzBlankState docs
- Added github issue templates for bug reports and new component proposals
- Updated PR template to include checklist for including tests/release notes.

#### Dependency upgrades

- updated ez-scripts (linting) version
- Dependency bumps for security vulnerability warning from npm audit.

## 6.1.3 - 2019-08-28

#### Bug fixes

- Bump width of content of EzModal to accomodate a 3 wide super radio button with scroll bar. Fixes [#209](https://github.com/ezcater/recipe/issues/209)

#### Documentation

- Improve tooltip notes to explicitly call out the need for the target element to support refs, mouse events and focus events.

## 6.1.2 - 2019-08-22

#### Enhancements

- add unique landmarks to EzNavigation improve a11y

#### Bug fixes

- fix EzField[type="select"] bug preventing the ability to "reset" the value of a select list via props

## 6.1.1 - 2019-08-19

#### Enhancements

- Exposed Recipe version on each component for generating analytics. Added a new [bookmarklet package](https://github.com/ezcater/recipe/tree/master/packages/analytics-bookmarklet) for highlighting Recipe usage in downstream applications.

#### Bug fixes

- Changed EzModal to vertically space content, such that it behaves the same as EzCard content.
- Changed EzField to only trigger `onChange` if the selection causes a change to the initially provided value.

#### Documentation

- Fix image paths in application layout and super radio button docs
- updated contribution instructions and provided detailed guidelines for approaching development of new components
  - Working towards a more open governance model
  - Iterating on the process for getting new developers up-to-speed with contributing to Recipe
- added new [meet-the-team](/meet-the-team) page.

#### Dependency upgrades

- Dependency bump (jest-axe) for security vulnerability warning from npm audit.

## 6.1.0 - 2019-07-29

#### Bug fixes

- fix font-size typo causing (inputs/text area in) EzField to render at incorrect font-size)
- Fix flash-of-unstyled-content during server render, due to global styles.

#### Documentation

- Update timeline with components from 5.2.0-6.0.0 releases.
- fix: make app layout documentation images scale to fit the window

## 6.0.0 - 2019-07-29

#### Breaking changes

- Added [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) support to `EzField`, `EzCheckbox`, `EzToggle` and `EzStatus` to allow access to the underlying native DOM elements for providing support for tooltips. While we do not anticipate this being a breaking change for most consumers of Recipe, there maybe some observable changes, in particular, around exported type definitions. For more information, see: https://reactjs.org/docs/forwarding-refs.html#note-for-component-library-maintainers.
- Added Global Styles to the `EzAppLayout` component to ensure applications use the correct font size/style/color/smoothing rules. While we do not anticipate this being a breaking change for most consumers of Recipe, any applications that use the `EzAppLayout` component that do not already apply the necessary base font settings may experience observable changes in font appearance.

#### New components

- Added EzTooltip component.
- Added EzBlankState component.
- Added EzSuperRadioButtons component.
- Add new `EzGlobalStyles` component that enables the sharing of global styles rules for Recipe, so that these rules are applied consistently throughout your application. Note: Global Styles is automatically included by the EzAppLayout component, and direct usage of this component is typically unnecessary except to support backwards-compatibility.

#### Enhancements

- Support for `EzField[type="Select"]` to allow users to pick from a dropdown list of options.
- Support for option groups for `EzField[type="Select"]`.
- Support for `EzField[type="time"]` to allow users to pick from a list of times.
- Added `fonts` object to standard theme with grouped styles.
- Added `size` property to EzField with type textarea for changing the default size of the textarea.

#### Design updates

- Updated EzField to use consistent presentation for "drop down" styles across `type="date"`, `type="time"` and `type="select"`.
- Revised interaction behavior EzField[type="date"] to no longer auto-open on focus to behave consistently with `type="time"` and `type="select"`.
- Updated Table headings to match small label style (Closes [#133](https://github.com/ezcater/recipe/issues/133)).
- Updated simple table to no longer grow to fill the available space (Closes [#147](https://github.com/ezcater/recipe/issues/147))
- Added zebra striping to simple tables in place of row hover style.
- Changed width of modal to 550px.
- Set base font-size and type on EzTable, EzField and EzButton.
- Tweaked input placeholder styles to more closely match mocks
- Removed the constraint that select all must be implemented if both selection and pagination are implemented together. This change is intended to facilitate an easier migration path for pages that offer pagination and selection, but are not in a position to implement "select all", either due to data-size constraints, or due to the added complexity of handling both a "select many" vs "select all" action. Closes [#160](https://github.com/ezcater/recipe/issues/160) and [#165](https://github.com/ezcater/recipe/issues/160).

#### Bug fixes

- Fix z-index issue with validation message flyout appearing underneath subsequent content
- Fix keyboard selection of dates in EzField[type="date"]
- Fix focus bug with EzField[type="date"] that causes the control to draw focus when clicking other page elements
- Fix up/down icon toggle on EzField[type="date"] for open/closed states
- Fix font color and icon colors on EzField[type="date"] disabled state

#### Documentation

- Adds documentation for [application layout](/components/ez-app-layout). Closes #146.
- Update 'Getting started' documentation to include more complete instructions around setting up Recipe to work with emotion and theming
- Added instructions for setting up applications to import Recipe's base font
- Update doc-site to include Recipe's font link (as per the new getting started docs) and to include the `EzGlobalStyles` within the Component playground
- Trimmed down excess global styles impacting Recipe components

#### Dependency upgrades

- npm audit fixes

#### Development workflow

- Fixed an issue with emotion css-in-js leaking state across visual regression test runs
- Replace manual style reset from `jest.config` in favor of using `EzGlobalStyles` component.

## 5.2.0 - 2019-06-24

#### New components

- Added new `EzSearchInput` component to allow users to search for specific content by providing search terms or simple keywords.
- Added new `EzBanner` component to display a prominent, succinct message with a related link or action.
- Added new `EzNavigation` component. The navigation component provides the primary means for users to move between sections of the application. On small screens, the Navigation menu is presented as a top-bar, while on larger screens the Navigation menu is presented as a left side-bar.

#### Enhancements

- Added new `date` type to `EzField` component.
- Added `label` attribute to `EzToggle`.
- Added semantic names for Recipe colors to more clearly define a consistent set of rules around color usage and to better support for theming in the future.
- Changed `EzModal`, `EzFlashMessage` and `EzBanner` to use a consistent button for dismissing.

#### Design updates

- Consistency changes to EzSegmentedControl, EzTable and EzFlashMessage to reflect [the new guidance](styles/style/#colors) around semantic variable names.
- Design updates for input fields:
  - Add box-shadow to form input fields
  - Added default font color to form input fields
- Changed `EzModal` and `EzFlashMessage` to have a transparent color for `:active` and `:hover` click-surface styles.
- Added `flex-grow` to `EzPage` to ensure pages expand to fill the available space when placed inside a flex container.

#### Bug fixes

- Suppressed global styles from the doc-site playground impacting how Recipe components render
- Fixed an issue with server-rendering/static rendering playground component (ResizeObserver undefined)
- Deprecated target.selected in favor of target.value in the onChange callback parameters on checkboxes and radio buttons.
- Add workaround for doc-site playground to ensure the navigation component docs render at a minimum height when the content of the playground determines it's height from the container (e.g. height: 100%).
- Restore overflow:visible in EzCard to allow for "flyout" content to overflow the card container. Closes [#144](https://github.com/ezcater/recipe/issues/144).

#### Documentation

- Complete reskin of the doc-site, using Recipe components as the building blocks
- update timeline/roadmap with recent releases

#### Dependency upgrades

- update devDependency on sosia-remote-puppeteer to improve support for larger visual regression tests
- update to latest js-dom to facilitate testing of component that internally uses [`Element.prototype.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest).
- Introduce dependency on `Reakit` to simplify building accessible components.

## 5.1.0 - 2019-05-30

#### Enhancements

- Added Clickable rows API to [EzTable](/components/ez-table/#clickable-rows), which allows the table to target specific links to trigger when the table row is clicked.
- Added hover color to table rows to improve scannability of tables
- Better support for EzTable on small screens. When screens are constrained in width, the responsive table now pins the first column (including selection where present) and allows for the remaining columns in the row to overflow with support for scrolling.

#### Bug fixes

- Fixed type definition of EzSegmentedControl `onChange` to use `(value: string) => void` instead of `((event: FormEvent<any>) => void) & ((value: string) => void)`.

#### Documentation

- Switch doc-site to using the [playground component from docz](https://github.com/pedronauck/docz/tree/master/core/docz-theme-default) instead of React-live as a direct dependency.
- Run doc-site examples within an iframe. This enables the docz resize/responsive controls to apply the correct viewport, allowing media queries to apply correctly.

#### Dependency upgrades

- Update devDependency on sosia to reduce test execution time (by half!)
- Update devDependency on sosia-markdown to improve support for larger visual regression tests

## 5.0.0 - 2019-05-13

#### Breaking changes

- Changed the `EzTable` API by moving/grouping the props `onRowSelectClick`, `onBulkSelectClick` and `isRowSelected` under a new selection prop, rather than being individual props to `EzTable`.

#### New components

- Added new EzStatus component.
- Added new EzFlashMessage component.
- Added new EzCheckbox component.
- Added new EzToggle component.

#### Enhancements

- Added `onSelectAllClick` and `onSelectNoneClick` to the `selection` prop of `EzTable` to handle the new interactions available from the table select all banner.
- Support controlled and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) usage of [EzSegmentedControl](./components/ez-segmented-control)
- Prevent accidental text selection in [EzSegmentedControl](./components/ez-segmented-control)

#### Design updates

- Reduced the width of the checkbox/selection column for [EzTable](./components/ez-table#bulk-row-selection) to improve the layout and more clearly emphasize the relationship between the selection and the row data.
- Updated EzField type="checkbox" to use new EzCheckbox component.
- Update EzField type="radio" to use custom styles

#### Bug fixes

- Fixed type definition of EzTable `rowsPerPageOptions` to use `number[]` instead of `[number]`.
- Added background color on `EzCheckbox` component.
- Removed export-to-sketch feature from doc-site due to some unexpected side-effects with how the feature rendered components "off screen":
  - EzSegmented control documentation examples were broken due to duplicated radio-buttons with the same id
  - Documentation pages were presenting excessive scroll bars due to hidden content out of the screen dimensions
- updated checkbox styles to be consistent with radiobutton
  - simpler implementation
  - added `:active` checkbox styles
  - fixed focus style to tightly hug the checkbox (was previously a few pixels out)
  - replace focus style to avoid using `:focus-within` (for compatibility)

#### Documentation

- Simplified pagination documentation for [EzTable](./components/ez-table#pagination).

#### Development workflow

- Added the `--open` flag to `gatsby develop` NPM target. This will launch the doc site during development similar to how create-react-app auto launches when running.

## 4.5.0 - 2019-05-06

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

#### Development workflow

- Improved local development workflow by way of a new NPM target `start`. `npm start` runs both `recipe` and the documentation site in the same terminal window. This command will also auto link the `recipe` NPM package to the documentation site.

## 4.4.0 - 2019-04-30

#### New components

- Added new [EzOrderSummary](/components/ez-order-summary) component

## 4.3.0 - 2019-04-24

#### New components

- Added new [EzLink](/components/ez-link) component

#### Enhancements

- Added underline styles to [EzButton](/components/ez-button) component, consistent with [EzLink](/components/ez-link) component.
- Added support for collapsible/expandable [EzCard](/components/ez-card#expandable).

#### Design updates

- set base font color in doc-site (in lieu of global style reset)
- set base font color in visual regression test suite
- enable font antialiasing in doc-site
- remove unwanted font-size media query from doc-site (causing inconsistencies between how doc-site and production sites behave)

#### Bug fixes

- fixed runtime error in doc-site when rendering `jsxwide` examples

## 4.2.1 - 2019-04-10

#### Bug fixes

- Fixed [regression in table select all](https://github.com/ezcater/recipe/issues/71).
- Fixed [Card action stretching](https://github.com/ezcater/recipe/issues/62).

#### Documentation

- Added timeline page with current status of components in pipeline

## 4.2.0

#### Enhancements

- Added support for [sorting EzTable](/components/ez-table#with-sortable-columns).
  - Can now mark columns as `sortable`. EzTable will call `onSortClick` when sortable columns are clicked.
  - Can mark column as `defaultSort: 'asc' | 'desc'` to indicate the default sort order for data sets

## 4.1.1

#### Development workflow

- Re-enabled linting using [ez-scripts](https://github.com/ezcater/ez-scripts)

## 4.1.0

#### New components

- Added new [EzPageHeader](/components/ez-page-header) component

#### Documentation

- Fixed spelling/typos in changelog and other docs
- Corrected deprecation warning of EzPageContent component to refer to EzLayout

#### Dependency upgrades

- Switched usage of React.SFC to React.FC as [React.SFC is now deprecated](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30364).

#### Development workflow

- Removed google font loading service from visual testing path to reduce visual test flakiness caused by delay in font-loading

## 4.0.0

#### Breaking changes

- Removed `margin-right` from [EzButton](/components/ez-button). To apply spacing between buttons, the preferred approach is to use an [EzLayout](/components/ez-layout) as the direct parent of the buttons.
- Removed padding from the [`tertiary` variant of EzButton](/components/ez-button#tertiary-button). As with other buttons, spacing between sibling buttons should be applied via a direct parent [EzLayout](/components/ez-layout).
- Replaced `onRowClick` property on [EzTable](/components/ez-table) with `onRowSelectClick` to more closely align with the existing `onBulkSelectClick` property.
- Replaced `rowIsSelected` property on [EzTable](/components/ez-table) with `isRowSelected`. Using question phrasing to more clearly indicate that this property is a function.

#### Enhancements

- Simplified internal type definitions for [EzTable](/components/ez-table) bulk selection properties. Replaced custom type definitions for click handlers with `React.MouseEvent` based handlers.

#### Documentation

- Simplified [EzTable](/components/ez-table) examples in the documentation
  - Replaced `Component` wrapper for state with `useState` hooks
  - Remove unneeded `Component` wrapper from example that didn't use state
  - Use reference equality for bulk selection example to simplify selection logic

## 3.0.1

#### Enhancements

- Visual changes to the [EzTable bulk select](components/ez-table#bulk-row-selection) feature. Check boxes now use custom styling rather than the browser default.

## 3.0.0

#### Breaking changes

- Updated internals of EzField to use React hooks, which required a peerDependency bump of React to a >16.8 version.

## 2.4.1

#### Dependency upgrades

- Updated minor version of @emotion/is-prop-valid dependency
- Update patch version of @reach/dialog dependency
- Updated various dev dependencies

## 2.4.0

#### Enhancements

- Added focus styles for tertiary buttons (to improve accessibility)
- Minor padding changes for tertiary buttons (to improve accessibility)

#### Dependency upgrades

- Removed peerDependency on polished (Fixes [#44](https://github.com/ezcater/recipe/issues/44))

## 2.3.0

#### Enhancements

- Add 'bulk select' functionality to EzTable

## 2.2.0

#### New components

- Add new [EzField](/components/ez-field) and [EzFormLayout](/components/ez-form-layout) components

#### Enhancements

- apply line-height/color/spacing to `EzHeading`
- internally updated `EzCard` to use `EzHeading` for consistency

#### Bug fixes

- fixed type definition of `EzButton` onClick to `MouseEventHandler`

#### Documentation

- Added titles to [EzHeading](/components/ez-heading) docs

#### Development workflow

- Fixed `npm run build:watch` mode for TypeScript builds

## 2.1.0

#### Enhancements

- Adds optional `actions` prop to [EzCard](/components/ez-card) component for rendering secondary calls-to-action.

## 2.0.0

#### Breaking changes

- Removed `styled<Theme>` export from Recipe's public api. This undocumented api became available as part of the 2.0.0-alpha.0 release, but the api is too broad for the scope of Recipe.

#### Enhancements

- Restored backwards-compatible behavior of providing the `standard` theme to Recipe components where no `ThemeProvider` is in use. This was a breaking change for the 2.0.0-alpha.0 release, but the impact on downstream projects would delayed the upgrade path to 2.0.0 with this change in place.

#### Documentation

- Added documentation for the upcoming `EzFormLayout` and `EzFormField` components
- Fix `Lato` font import in the doc-site

#### Development workflow

- Integrated code climate with CI build
- Added code climate config to separate doc-site from recipe code quality checks
- Added `npm run build:watch` mode for TypeScript builds
- Suppress lint warning from development doc-site builds

## 2.0.0-alpha.2

#### Documentation

- Removed empty bullet list of "related components" section in several components
- Updated structure of `EzModal` docs to follow the same format of other components
  - Removed "props table" style documentation in favor of demonstrating how properties are applied to achieve various use cases

## 2.0.0-alpha.1

#### Bug fixes

- Fixed bug in `EzLayout` type definition that prevented the base layout (mobile view) of a responsive layout from using any layout other than stack
- Fixed bug in `EzLayout` type definition that prevented multiple breakpoints being specified for responsive layouts
- Linked the `EzLayout` type definition to the breakpoints specified by the `theme`, such that changes to the number of breakpoints don't require changes to `EzLayout`.

## 2.0.0-alpha.0

#### Breaking changes

- Upgraded Recipe to Typescript
- Removed internal `withTheme` wrapper around components; Recipe components must now be used inside a `ThemeProvider`

## 1.13.0 - 2018-11-28

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Design updates

- Use consistent spacing withing EzModal header/footer/body

#### Bug fixes

- EzModal close button stretching when heading flows onto multiple lines
- Render bug with EzModal and EzHeading causing unnecessary re-renders and event handlers to be removed/reapplied every render

#### Documentation

Updated formatting of [changelog](/changelog) to conform to our [changelog guidelines](/guides/versioning-and-changelog)

#### Dependency upgrades

- Revert back to @reach/dialog for EzModal

## 1.12.1 - 2018-11-19

#### Bug fixes

- Remove automatic error for yarn installs

## 1.12.0 - 2018-11-15

#### Dependency upgrades

- Reverts [EzModal](/components/ez-modal) component back to using react-modal

#### Design updates

- Restore slide up animation on [EzModal](/components/ez-modal) component
- Reintroduce optional `appElement` prop on [EzModal](/components/ez-modal) component

## 1.11.3 - 2018-11-14

#### Bug fixes

- Fix flexbox issues seen on [EzModal](/components/ez-modal) component in older browsers
- Remove slide animation on [EzModal](/components/ez-modal) component to avoid janky rendering on some browsers

## 1.11.1 - 2018-11-13

#### Bug fixes

- Include table styles missed due default doc-site styles

#### Documentation

- Enumerate specific `peerDepenedency` requirements in Getting Started docs

## 1.11.0 - 2018-11-8

#### New components

- Adds new [EzTable](/components/ez-table) component.

#### Enhancements

- Remove need to specify `appElement` prop on [EzModal](/components/ez-modal) component

#### Bug fixes

- Fixes component `displayName` and [EzCard](/components/ez-card) bug causing `EzCardSection` to not render correctly.

#### Dependency upgrades

- Switches [EzModal](/components/ez-modal) component to use @reach/dialog

## 1.10.1 - 2018-11-2

#### Design updates

- Minor refactor of CSS styles on [EzModal](/components/ez-modal) component.

#### Documentation

- Adds documentation around props on [EzModal](/components/ez-modal) component.

## 1.10.0 - 2018-10-30

#### New components

- Adds new [EzModal](/components/ez-modal) component.

## 1.9.0 - 2018-10-4

#### New components

- Adds new [EzPage](/components/ez-page) component.

#### Documentation

- Deprecated [EzPageContent](/components/ez-page-content).

## 1.8.2 - 2018-09-17

#### Bug fixes

- Removes an unnecessary addition of `className` to [EzAlert](/components/ez-alert)

## 1.8.1 - 2018-09-17

#### New components

- Adds new [EzHeading](/components/ez-heading) component.

#### Enhancements

- Made [EzPageContent](/components/ez-page-content) padding responsive.

#### Design updates

- Changed value of `spacing.xl2`.

## 1.7.2 - 2018-09-17

#### Bug fixes

- Clean up some design fixes for [EzAlert](/components/ez-alert)

## 1.7.1 - 2018-09-14

#### Bug fixes

- Fixed `theme` property for [EzAlert](/components/ez-alert)

## 1.7.0 - 2018-09-12

#### New components

- Added [EzAlert](/components/ez-alert) component and accompanying documentation

## 1.6.0 - 2018-09-07

#### Enhancements

- Refactored color variable names and added new colors

#### Documentation

- Added documentation for [colors](/styles/style/#colors)

## 1.5.0 - 2018-08-15

#### Enhancements

- Added optional accent prop to [EzCard](/components/ez-card)

## 1.4.1 - 2018-08-13

#### Bug fixes

- Fixed issue with buttons getting a white border due to the order of declared styles.

## 1.4.0 - 2018-08-08

#### Enhancements

- Added responsive layout options to [EzLayout](/components/ez-layout)

#### Documentation

- Added info on progressive enhancement to [Principles](/guides/principles)

## 1.3.0 - 2018-08-07

#### Enhancements

- Added tertiary button use type to [EzButton](/components/ez-button)
- Added optional subtitle prop to [EzCard](/components/ez-card)

#### Documentation

- Added guidance on when and how to use tertiary buttons
- Added guidance on when and how to use EzCards with subheadings

## 1.2.0 - 2018-08-02

#### Enhancements

- Updated [EzButton](/components/ez-button) to be bold font and not wrap on whitespace
- New variables for [spacing](/styles/style/#spacing), [typography](/styles/style/#typography) (including [font sizes](/styles/style/#font-sizes) and [font weights](/styles/style/#font-weights))

## 1.1.0 - 2018-07-30

#### Enhancements

- New "[stack](/components/ez-layout#stack-layout)" variant added for [EzLayout](/components/ez-layout)

#### Documentation

- Added guidance on [versioning and releasing](/guides/versioning-and-changelog) Recipe.

#### Development workflow

- Added [changelog](/changelog)
