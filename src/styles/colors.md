---
path: '/styles/colors'
title: 'Colors'
---

Recipe uses colors to communicate how things function in the user interface. With consistent usage of color, we help make our products more predictable and easier to understand for our users. Colors should be used to help draw attention to important content, supporting the hierarchy of the page.

---

## Content Elements

Recipe uses various colors in the application shell to visually divide the page and draw users focus to the primary content.

Recipe uses the `colors.page.background` color to provide a low contrast color to de-emphasize the page background. Main page content should use the `colors.content.background` color. Borders between content containers should use the `colors.border.base` color.

Primary navigation uses the `colors.navigation.background` color with the `colors.navigation.active` color to indicate the selected navigation items.

<ColorDefinition name="page.background"></ColorDefinition>
<ColorDefinition name="content .background"></ColorDefinition>
<ColorDefinition name="border.base"></ColorDefinition>
<ColorDefinition name="border.subtle"></ColorDefinition>
<ColorDefinition name="navigation .background"></ColorDefinition>
<ColorDefinition name="navigation.active"></ColorDefinition>

---

## Text

Recipe uses the `colors.text.base` color for headings and body copy and the `colors.text.deemphasis` color for secondary, de-emphasized text.

<ColorDefinition name="text .base"></ColorDefinition>
<ColorDefinition name="text .deemphasis"></ColorDefinition>

---

## Interactive elements

### Base

Recipe uses the `interactive.base` color to draw attention to interactive elements for interactions; e.g. buttons, forms, check-marks and radio buttons.

<ColorDefinition name="interactive.base"></ColorDefinition>

#### Example usage

<BaseExample></BaseExample>

### Checked

Recipe uses the `colors.interactive.checked.background` color to indicate that interactive elements are currently enabled, active or selected. This background color should always be paired with the `colors.interactive.active.foreground` color for contrast and the `colors.interactive.active.border` color for containing selected element.

Note: the use of the checked colors should be applied when the use of [`colors.interactive.base`](#base) as a foreground color on the content background is insufficient to distinguish the selected option; e.g. Toggle, Segmented control etc.

<ColorDefinition name="interactive .checked .background"></ColorDefinition>
<ColorDefinition name="interactive .checked .foreground"></ColorDefinition>

#### Example usage

<CheckedExample></CheckedExample>

---

### Hover and active

Recipe uses the `colors.interactive.hover.background` color to indicate when a user interacts with an element with a pointing device. It is generally triggered when the user hovers over an element with the cursor. Once the user has activated the element, typically when the user presses down the primary mouse button, Recipe applies the `colors.interactive.active.background` color as the element background until the interaction is complete, typically when the user releases the mouse button.

For components that need to differentiate between hover and interactive states, such as highlighting interactive table rows (clicking the row navigate or performs an action), use the `colors.interactive.hover.highlight` color.

Note: the use of the hover and active colors should only be applied as a background color when the element background color matches has the content background.

<ColorDefinition name="interactive .hover.background"></ColorDefinition>
<ColorDefinition name="interactive .active.background"></ColorDefinition>
<ColorDefinition name="interactive .hover.highlight"></ColorDefinition>
<ColorDefinition name="interactive .hover.border"></ColorDefinition>

#### Example usage

<HoverExample></HoverExample>

---

# Color usage

Semantics are an important part of color design. Colors can be used to communicate the intent of an interface element:

#### Informational

Used for informational messages and to provide more context to surrounding content.

<ColorDefinition name="info.background"></ColorDefinition>
<ColorDefinition name="info.border"></ColorDefinition>
<ColorDefinition name="info.foreground"></ColorDefinition>
<ColorDefinition name="info.text"></ColorDefinition>

#### Success

Used for success/confirmation messages or actions with positive connotations.

<ColorDefinition name="success .background"></ColorDefinition>
<ColorDefinition name="success .border"></ColorDefinition>
<ColorDefinition name="success .foreground"></ColorDefinition>
<ColorDefinition name="success.text"></ColorDefinition>

#### Destructive

Used to indicate negative trends or destructive actions and to draw attention to elements or notifications that require immediate attention, such as error banners.

<ColorDefinition name="destructive .background"></ColorDefinition>
<ColorDefinition name="destructive.border"></ColorDefinition>
<ColorDefinition name="destructive .foreground"></ColorDefinition>
<ColorDefinition name="destructive.text"></ColorDefinition>

#### Warning

Used to draw attention to content that requires low priority action. Used to to warn or caution the user to proceed carefully going forward.

<ColorDefinition name="warning .background"></ColorDefinition>
<ColorDefinition name="warning .border"></ColorDefinition>
<ColorDefinition name="warning .foreground"></ColorDefinition>
<ColorDefinition name="warning.text"></ColorDefinition>

## Brand Colors

<ColorDefinition name="brandColors .ezOrange">
  Calling attention to desired behaviors. Conversion-focused.
</ColorDefinition>
<ColorDefinition name="brandColors .ezLogoGreen">
  Currently for success/confirmation related messaging or things with positive connotations.
</ColorDefinition>
<ColorDefinition name="brandColors .ezGreen">
  Used for similar reasons to ezLogoGreen, but less often at the moment.
</ColorDefinition>
<ColorDefinition name="brandColors .ezBlue">
  Interactive elements. Provides affordance that something can be interacted with.
  Informational messages.
</ColorDefinition>
