---
name: EzButton
title: Button
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

### Loading State

Used to indicate to the user that an action is currently being processed. The button remains disabled and no further actions will be triggered until loading has completed.

```jsx
<div>
  <EzButton use="primary" loading>
    Save Changes
  </EzButton>
</div>
```
