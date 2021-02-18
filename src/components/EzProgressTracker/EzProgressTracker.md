---
name: EzProgressTracker
title: Progress tracker
category: Navigation
path: '/components/ez-progress-tracker'
---

A progress tracker conveys progress through linear steps or actions across multiple screens, in order to complete a task. The tracker shows users where they are in the process, and can be used to navigate through the process by selecting steps.

---

## Best Practices

Progress trackers should:

- Use labels that clearly indicate the purpose of the step. When writing, keep options to a single line of text, be short and concise, ideally 1-2 words.
- If a task needs more than six steps, consider simplifying the process or breaking it up into multiple tasks
- If there are less than three steps, consider showing the steps on a single screen

---

## Examples

### Horizontal progress tracker

```jsx
() => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {label: 'Check in at restaurant'},
    {label: 'Leave for destination'},
    {label: 'Arrive at drop-off'},
    {label: 'Delivery Complete'},
  ].map((step, i) => ({...step, complete: i < activeStep}));

  return (
    <EzLayout layout="stack">
      <EzProgressTracker steps={steps} selected={steps[activeStep] || steps[steps.length - 1]} />

      {/* Buttons to navigatie between steps */}
      <EzLayout layout="split">
        {activeStep === steps.length ? (
          <EzButton use="primary" onClick={() => setActiveStep(0)}>
            Reset
          </EzButton>
        ) : (
          <>
            <EzButton
              use="tertiary"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Prev
            </EzButton>
            {steps[activeStep].label}
            <EzButton use="primary" onClick={() => setActiveStep(activeStep + 1)}>
              {activeStep < steps.length - 1 ? 'Next' : 'Finish'}
            </EzButton>
          </>
        )}
      </EzLayout>
    </EzLayout>
  );
};
```

### Vertical progress tracker

```jsx
() => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {label: 'Catering Menu'},
    {label: 'Delivery Capcity & Hours'},
    {label: 'Delivery Range & Fees'},
    {label: 'Order Lead Time'},
    {label: 'Payment Information'},
  ].map((step, i) => ({...step, complete: i < activeStep}));

  return (
    <EzLayout layout="stack">
      <EzProgressTracker
        steps={steps}
        selected={steps[activeStep] || steps[steps.length - 1]}
        orientation="vertical"
      />

      {/* Buttons to navigatie between steps */}
      <EzLayout layout="split">
        {activeStep === steps.length ? (
          <EzButton use="primary" onClick={() => setActiveStep(0)}>
            Reset
          </EzButton>
        ) : (
          <>
            <EzButton
              use="tertiary"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Prev
            </EzButton>
            {steps[activeStep].label}
            <EzButton use="primary" onClick={() => setActiveStep(activeStep + 1)}>
              {activeStep < steps.length - 1 ? 'Next' : 'Finish'}
            </EzButton>
          </>
        )}
      </EzLayout>
    </EzLayout>
  );
};
```

### Navigating through steps

Non-linear steps, or complex multi-step flows can be supported, allowing the user to enter or revist any prior step in the flow.

Each step passed to the `steps` prop allows an optional `href`, or `onClick` handler to be provided, making each step label a clickable link to navigate through multi-step flows.

In order to support client-side routing implementations, each step also supports an optional `as` property, accepting a Link component such as [react-router's Link](https://reacttraining.com/react-router/web/api/Link). The any additional props on each step will also be forwarded to the link component.

```jsx
() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());

  const steps = [
    {label: 'Catering Menu'},
    {label: 'Delivery Capcity & Hours'},
    {label: 'Delivery Range & Fees'},
    {label: 'Order Lead Time'},
    {label: 'Payment Information'},
  ].map((step, i) => ({
    ...step,
    complete: completed.has(i),
    onClick: () => setActiveStep(i),
  }));

  return (
    <EzLayout layout="stack">
      <EzProgressTracker
        steps={steps}
        selected={steps[activeStep] || steps[steps.length - 1]}
        orientation="vertical"
      />

      {/* Buttons to navigatie between steps */}
      <EzLayout layout="split">
        {activeStep === steps.length ? (
          <EzButton
            use="primary"
            onClick={() => {
              setActiveStep(0);
              setCompleted(new Set());
            }}
          >
            Reset
          </EzButton>
        ) : (
          <>
            <EzLayout>
              <EzButton
                use="tertiary"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Prev
              </EzButton>
              <EzButton
                use="primary"
                onClick={() => {
                  if (completed.has(activeStep)) completed.delete(activeStep);
                  else completed.add(activeStep);
                  setCompleted(new Set(completed));
                }}
              >
                {completed.has(activeStep) ? 'Mark as Incomplete' : 'Mark as Complete'}
              </EzButton>
            </EzLayout>
            {steps[activeStep].label}
            <EzButton use="primary" onClick={() => setActiveStep(activeStep + 1)}>
              {activeStep < steps.length - 1 ? 'Next' : 'Finish'}
            </EzButton>
          </>
        )}
      </EzLayout>
    </EzLayout>
  );
};
```

---

## Browser support

The Progress Tracker component internally uses [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) and may require a polyfill to provide [browser support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#browser_compatibility) depending on the specific requirements for your application. We recommend using [Polyfill.io](https://polyfill.io/v3/) in your application to apply necessary polyfills only when they are needed for the requesting browser.

---

## Related components

- [Related](/components/ez-related)
