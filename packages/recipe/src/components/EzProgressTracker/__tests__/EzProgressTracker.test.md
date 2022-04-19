### All Complete

```jsx
() => {
  const steps = [
    {label: 'Check in at restaurant', complete: true},
    {label: 'Leave for destination', complete: true},
    {label: 'Arrive at drop-off', complete: true},
    {label: 'Delivery Complete', complete: true},
  ];

  return <EzProgressTracker steps={steps} selected={steps[steps.length - 1]} />;
};
```

### Non-linear

```jsx
() => {
  const steps = [
    {label: 'Check in at restaurant', complete: true},
    {label: 'Leave for destination', complete: false},
    {label: 'Arrive at drop-off', complete: true},
    {label: 'Delivery Complete', complete: false},
  ];

  return <EzProgressTracker steps={steps} selected={steps[2]} />;
};
```
