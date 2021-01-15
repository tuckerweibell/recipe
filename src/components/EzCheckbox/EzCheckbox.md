---
name: EzCheckbox
title: Checkbox
category: Inputs
path: '/components/ez-checkbox'
---

Checkbox inputs are used to capture binary choices; they can be used to toggle the state of something on or off.

For use within a form, [EzField](/components/ez-field#multiple-choice-input-field) should be used instead of EzCheckbox. Checkbox inputs are primarily provided to facilitate building custom components.

---

## Best Practices

Checkbox inputs should:

- Be clearly labelled, or provide an accessible name for assistive technologies
- Be labelled positively; for example, "Enable notifications"
- Be labelled in the first person when asking for acceptance of terms of service
- Be used for interactions where the effect of the interaction is deferred, typically when a form is submitted. For immediate interactions, such as immediately saving changes on interaction, use the [toggle component](/components/ez-toggle) instead;

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

### Acknowledgement checkbox

Actions taken within applications may require explicit acknowledgment before they can proceed. In particular, legal agreements in place, such as a Terms & Conditions agreement, End-User License Agreement (EULA) or a Privacy Policy agreement may require that terms and conditions are presented for users to acknowledge.

An acknowledgement checkbox (indicated by an `acknowledgement` prop) should be used to allow the user to record acceptance of terms.

Optionally, a `terms` prop may be used to present a small amount of text inline below the checkbox. It is recommended that longer terms, such as a legal agreement, should be linked to in a new window, rather than included inline.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <EzCheckbox
      acknowledgement
      label="I accept the new terms of service"
      terms={
        <span>
          I have read and agree to the{' '}
          <EzLink>
            <a href="/" target="_blank" rel="noreferrer noopener">
              terms of service
            </a>
          </EzLink>{' '}
          and{' '}
          <EzLink>
            <a href="/" target="_blank" rel="noreferrer noopener">
              privacy policy
            </a>
          </EzLink>
          .
        </span>
      }
      onChange={() => setChecked(!checked)}
      checked={checked}
    />
  );
};
```

---

## Related components

- [EzField](/components/ez-field)
- [EzFormLayout](/components/ez-form-layout)
- [EzToggle](/components/ez-toggle)
