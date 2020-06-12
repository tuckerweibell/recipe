---
name: EzToggle
title: Toggle
category: Inputs
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

### Basic toggle with label

Add a descriptive label to the right of the toggle input that when interacted with will toggle the state of the input.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <EzToggle
      onChange={() => setChecked(!checked)}
      checked={checked}
      label="Receive marketing emails"
    />
  );
};
```

### Basic toggle with status

When providing a choice that requires an asynchronous action to take affect, it can be beneficial to indicate the progress of the action to the user. Use the optional `status` prop to indicate whether the toggled changes have been successfully applied.

The `checked` value should always be updated optimistically to reflect the new state and assume the asynchronous action completes successfully. Should the asynchronous action fail to complete, the `checked` value will need to be reset accordingly.

The `status` prop accepts the following values:

- use `status="progress"` when the change is still in-flight, or confirmation has not yet been received.
- use `status="success"` when the change has been successfully applied.
- use `status="error"` when the change could not be applied.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  const [status, setStatus] = React.useState('progress');

  function onChange() {
    setStatus('progress');

    // optimistically set the updated state
    setChecked(checked => !checked);
  }

  React.useEffect(() => {
    let serviceTimeout;
    let resetTimeout;

    if (status === 'progress') {
      // simulate a flakey service that fails half the time
      serviceTimeout = setTimeout(() => {
        const status = Math.random() > 0.5 ? 'success' : 'error';
        setStatus(status);

        // reset the checked state on error
        if (status === 'error') setChecked(checked => !checked);
      }, 2000);
    }

    if (status && status !== 'progress') {
      // reset status after a few seconds
      resetTimeout = setTimeout(() => {
        setStatus(null);
      }, 4000);
    }

    return () => {
      clearTimeout(serviceTimeout);
      clearTimeout(resetTimeout);
    };
  }, [checked, status]);

  return (
    <EzToggle
      onChange={onChange}
      checked={checked}
      label="Receive marketing emails"
      status={status}
    />
  );
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

### Disabled toggle with label

Add a descriptive label to the right of the toggle input that when interacted with will toggle the state of the input.

```jsx
() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <EzToggle
      disabled
      onChange={() => setChecked(!checked)}
      checked={checked}
      label="Receive marketing emails"
    />
  );
};
```

---

## Related components

- [EzField](/components/ez-field)
- [EzFormLayout](/components/ez-form-layout)
- [EzCheckbox](/components/ez-checkbox)
