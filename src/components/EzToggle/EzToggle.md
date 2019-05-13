---
name: EzToggle
title: Toggle
path: '/components/ez-toggle'
---

Toggle inputs, much like checkbox inputs are used to capture binary choices; they can be used to toggle the state of something on or off. Unlike checkbox inputs however, toggles should be used when the effect of the interaction is immediate, for example, immediately persisting the users selection.

---

## Best Practices

Ez toggle should:

- Be clearly labelled, or provide an accessible name for assistive technologies
- Be labelled positively; for example, "Enable notifications"
- Be used for interactions where the effect of the interaction is immediate. For deferred interactions, such as saving changes when a form is submitted, use the [checkbox component](/components/ez-checkbox) instead;

---

## Examples

### Basic toggle

Toggle inputs are used to offer binary choices. Use a toggle input only when the effect of the interaction is immediate.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return <EzToggle onChange={() => setChecked(!checked)} checked={checked} />;
};
```

### Disabled toggle

Use the `disabled` prop to prevent users from being able to interact with the toggle input and to convey the inactive state to assistive technologies.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return <EzToggle disabled onChange={() => setChecked(!checked)} checked={checked} />;
};
```

---

## Related components

- [EzField](/components/ez-field)
- [EzFormLayout](/components/ez-form-layout)
- [EzCheckbox](/components/ez-checkbox)
