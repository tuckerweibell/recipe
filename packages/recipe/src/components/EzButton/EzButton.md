---
name: EzButton
title: Button
category: Inputs
path: '/components/ez-button'
---

Buttons represent actions on a page that can be triggered with one click. Buttons can be used in forms, or in other locations in a page to communicate that an action is available.

---

## Best Practices

Buttons should:

- Be clearly labeled, or provide an accessible name (icon buttons)
- Be positioned in consistent locations
- Use spacing to separate them from other interactive content
- Not wrap text. For maximum legibility, a label should remain on a single line

Buttons should not:

- Be used be used in place of a more semantic element. For example, favor anchors for navigation.

---

## Content guidelines

Buttons should clearly communicate the action that will occur when the user interacts with them. Try leading with actionable verbs when labeling Buttons. Follow the Verb+Noun format on buttons except in the case of common actions like Save, Edit, Close, or Cancel.

---

## Examples

### Primary Button

Primary buttons are used to highlight the most important actions a user can take. There should not be more than one primary button in a section of a page.

```jsx
<EzButton use="primary">Create Order</EzButton>
```

### Secondary Button

Secondary buttons are used for action on a page that are important, but aren't the primary action.

```jsx
<EzButton use="secondary">Edit</EzButton>
```

### Tertiary Button

Tertiary buttons are used when a section or page has too many actions of varying importance. A page should always have one primary action, and may have one or two secondary actions. Any actions that aren’t as important as these primary and secondary actions should use a tertiary button style. For example, on an order details page, if we’re asking the user to accept the order (primary), and reject or request ezDispatch (secondary actions), then any other actions aren’t as important and should use a tertiary button.

Tertiary buttons should also be used when space is a constraint or when content is repeated many times on a page. For example, an action in a table row should use a tertiary button since space is limited and having the outline around the button text in multiple table rows would distract the user from the action we want them to take.

```jsx
<EzButton use="tertiary">Save as PDF</EzButton>
```

### Tertiary Button with icon

Tertiary buttons may optionally include an image icon, typically an SVG element, to enhance the UX of the application where logos may be more easily recognizable than plain text.

Tertiary buttons with icons should never be mixed with tertiary buttons without icons within the same parent component.

```jsx
<EzButton
  use="tertiary"
  icon={
    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.06295 4.07865C2.06295 3.87385 2.21417 3.70787 2.40075 3.70787H3.46066C3.64712 3.70787 3.79846 3.87385 3.79846 4.07865C3.79846 4.28345 3.64712 4.44944 3.46066 4.44944H2.40075C2.21417 4.44944 2.06295 4.28345 2.06295 4.07865ZM9.45842 7.53933H8.12197L7.98009 6.53178C7.95093 6.32043 7.78529 6.17978 7.5905 6.17978H2.76884C2.57404 6.17978 2.40841 6.32043 2.37924 6.53178L2.23737 7.53933H0.900802V2.8427H9.45842V7.53933ZM2.68 10.1348L3.10743 7.04494H7.25191L7.67934 10.1348H2.68ZM3.37801 1.85393H6.98122V0.741573H3.37801V1.85393ZM9.90882 1.85393H7.65682V0.370787C7.65682 0.165989 7.55818 0 7.3716 0H2.98774C2.80127 0 2.70241 0.165989 2.70241 0.370787V1.85393H0.450401C0.201667 1.85393 0 2.06627 0 2.33929V8.00961C0 8.28263 0.201667 8.52809 0.450401 8.52809H2.10033L1.83189 10.4526C1.81455 10.5773 1.84766 10.7288 1.92254 10.8245C1.99742 10.9202 2.10664 11 2.22149 11H8.13796C8.25281 11 8.36192 10.9141 8.4368 10.8184C8.51168 10.7228 8.54478 10.5928 8.52755 10.468L8.259 8.52809H9.90882C10.1576 8.52809 10.3592 8.28263 10.3592 8.00961V2.33929C10.3592 2.06627 10.1576 1.85393 9.90882 1.85393Z"
        fill="#8B99A6"
      />
    </svg>
  }
>
  Print Order
</EzButton>
```

### Destructive Button

When an action will delete data, or discard the current page state, a destructive button should be used. Destructive buttons should trigger a confirmation dialog before the action is completed. Destructive buttons should typically be secondary buttons, but are promoted to primary buttons on confirmation dialogs.

```jsx
<EzLayout layout="basic">
  <EzButton use="secondary" destructive>
    Delete Draft
  </EzButton>
  <EzButton use="primary" destructive>
    Confirm Deletion
  </EzButton>
  <EzButton use="tertiary" destructive>
    Delete Item
  </EzButton>
</EzLayout>
```

### Disabled State

Used to indicate to the user that an action is not currently available. The surrounding interface should indicate the necessary prerequisite action to enable the action. Disabled buttons do not respond to user input (and therefore will not trigger onClick behavior).

```jsx
<div>
  <EzButton use="primary" disabled>
    Save Changes
  </EzButton>
</div>
```

### Disabled State with Tooltip

Used to provide a helpful message to the user as to why the button/action is currently unavailable on mouse over. This prop will need to be paired with the `disabled` prop to function properly.

```jsx
<div>
  <EzButton use="primary" disabled disabledMessage="Disabled message">
    Submit
  </EzButton>
</div>
```

### Loading State

Used to indicate to the user that an action is currently being processed. The button remains disabled and no further actions will be triggered until loading has completed.

```jsx
<div>
  <EzButton use="primary" loading>
    Save Changes
  </EzButton>
</div>
```

## Related components

- [Chip](/components/ez-chip)
