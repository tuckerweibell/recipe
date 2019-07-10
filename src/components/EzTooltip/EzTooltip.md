---
name: EzTooltip
title: Tooltip
path: '/components/ez-tooltip'
---

A tooltip is a floating label for displaying helpful contextual messages.

---

## Best Practices

Tooltips should:

- Provide succinct contextual information about the element they point to.
- Be used with components to provide additional information that would otherwise not be available. For example, providing icon-only buttons with a contextual description.

Tooltips should not:

- Contain important information. Use a [`EzFlashMessage`](../ez-flash-message) for important contextual information.
- Be used sparingly.

---

### Examples

#### Basic tooltip

Allows a single component to be wrapped with a tooltip to provide additional information for the user.

```jsx
<EzTooltip message="Single-line informational tooltip">
  <input />
</EzTooltip>
```

#### Tooltip wrapping another recipe component

```jsx
<EzFormLayout>
  <EzTooltip message="The users first name">
    <EzField type="input" label="First name" />
  </EzTooltip>
  <EzTooltip message="The users last name">
    <EzField type="input" label="Last name" />
  </EzTooltip>
</EzFormLayout>
```

## Positioning

A tooltip can be positioned either vertically or horizontally around an element by setting `position` to either `vertical` or `horizontal.` Usually, this will mean the tooltip will appear below or to the right of an element, but if there is not enough room, the tooltip will appear on the opposite side. The default position is `vertical`.

### Examples

#### Positioned Vertically

```jsx
<EzTooltip message="Vertically aligned tooltip" position="vertical">
  <input />
</EzTooltip>
```

#### Positioned Horizontally

```jsx
<EzTooltip message="Horizontally aligned tooltip" position="horizontal">
  <input />
</EzTooltip>
```
