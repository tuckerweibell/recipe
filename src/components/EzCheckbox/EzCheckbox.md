---
name: EzCheckbox
title: Checkbox
path: '/components/ez-checkbox'
---

Checkbox inputs are used to capture binary choices; they can be used to toggle the state of something on or off.

For use within a form, consider using [EzField](/components/ez-field#multiple-choice-input-field) instead. Checkbox inputs are primarily provided to facilitate building custom components.

---

## Best Practices

Checkbox inputs should:

- Be clearly labelled, or provide an accessible name for assistive technologies
- Be labelled positively; for example, "Enable notifications"
- Be labelled in the first person when asking for acceptance of terms of service
- Be used for interactions where the effect of the interaction is deferred, typically when a form is submitted.

---

## Examples

### Basic checkbox

Checkbox inputs are used to offer binary choices

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <EzCheckbox label="Basic checkbox" onChange={() => setChecked(!checked)} checked={checked} />
  );
};
```

### Disabled checkbox

Use the `disabled` prop to prevent users from being able to interact with the checkbox and to convey the inactive state to assistive technologies.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <EzCheckbox
      label="Disabled checkbox"
      disabled
      onChange={() => setChecked(!checked)}
      checked={checked}
    />
  );
};
```

---

## Related components

- [EzField](/components/ez-field)
