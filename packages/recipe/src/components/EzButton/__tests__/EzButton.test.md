### EzButton Variants

```jsx
<EzLayout>
  <EzButton>Default</EzButton>
  <EzButton variant="filled">Filled</EzButton>
  <EzButton variant="outlined">Outlined</EzButton>
  <EzButton variant="text">Text</EzButton>
</EzLayout>
```

### EzButton Colors

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzButton color="primary">Test</EzButton>
    <EzButton color="secondary">Test</EzButton>
    <EzButton color="error">Test</EzButton>
    <EzButton color="warning">Test</EzButton>
    <EzButton color="info">Test</EzButton>
    <EzButton color="success">Test</EzButton>
    <EzButton color="alert">Test</EzButton>
    <EzButton color="neutral">Test</EzButton>
    <EzButton color="common.red100">Test</EzButton>
    <EzButton color="common.black">Test</EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton color="primary" variant="outlined">
      Test
    </EzButton>
    <EzButton color="secondary" variant="outlined">
      Test
    </EzButton>
    <EzButton color="error" variant="outlined">
      Test
    </EzButton>
    <EzButton color="warning" variant="outlined">
      Test
    </EzButton>
    <EzButton color="info" variant="outlined">
      Test
    </EzButton>
    <EzButton color="success" variant="outlined">
      Test
    </EzButton>
    <EzButton color="alert" variant="outlined">
      Test
    </EzButton>
    <EzButton color="neutral" variant="outlined">
      Test
    </EzButton>
    <EzButton color="common.red100" variant="outlined">
      Test
    </EzButton>
    <EzButton color="common.black" variant="outlined">
      Test
    </EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton color="primary" variant="text">
      Test
    </EzButton>
    <EzButton color="secondary" variant="text">
      Test
    </EzButton>
    <EzButton color="error" variant="text">
      Test
    </EzButton>
    <EzButton color="warning" variant="text">
      Test
    </EzButton>
    <EzButton color="info" variant="text">
      Test
    </EzButton>
    <EzButton color="success" variant="text">
      Test
    </EzButton>
    <EzButton color="alert" variant="text">
      Test
    </EzButton>
    <EzButton color="neutral" variant="text">
      Test
    </EzButton>
    <EzButton color="common.red100" variant="text">
      Test
    </EzButton>
    <EzButton color="common.black" variant="text">
      Test
    </EzButton>
  </EzLayout>
</EzLayout>
```

### EzButton Custom Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="equal">
      <style>{`
        .EzButton-filled {
          background-color: orange;
        }
        .EzButton-outlined {
          border-color: black;
        }
        .EzButton-text {
          color: grey;
        }
        .EzButton-startIcon svg {
          fill: black;
        }
        .EzButton-endIcon svg {
          fill: red;
        }
        .EzButton-disabled {
          color: blue !important;
          opacity: 0.3;
        }
      `}</style>
      <EzButton>Default</EzButton>
      <EzButton variant="filled">Filled</EzButton>
      <EzButton variant="outlined">Outlined</EzButton>
      <EzButton variant="text">Text</EzButton>
      <EzButton startIcon={<EzIcon icon={faCoffee} />}>Start Icon</EzButton>
      <EzButton endIcon={<EzIcon icon={faCoffee} />}>End Icon</EzButton>
      <EzButton disabled>Disabled</EzButton>
    </EzLayout>
  );
};
```

### EzButton Legacy

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack">
      <EzLayout>
        Primary:
        <EzButton legacy use="primary">
          Legacy Primary
        </EzButton>
      </EzLayout>

      <EzLayout>
        Secondary:
        <EzButton legacy use="secondary">
          Legacy Secondary
        </EzButton>
      </EzLayout>

      <EzLayout>
        Tertiary:
        <EzButton legacy use="tertiary">
          Legacy Tertiary
        </EzButton>
      </EzLayout>

      <EzLayout>
        Tertiary with icon:
        <EzButton legacy use="tertiary" icon={<EzIcon icon={faCoffee} />}>
          Legacy Icon
        </EzButton>
      </EzLayout>

      <EzLayout>
        Destructive:
        <EzButton legacy use="primary" destructive>
          Legacy Destructive
        </EzButton>
      </EzLayout>

      <EzLayout>
        Disabled:
        <EzButton legacy use="primary" disabled>
          Legacy Disabled
        </EzButton>
      </EzLayout>

      <EzLayout>
        Disabled with tooltip:
        <EzButton legacy use="primary" disabled disabledMessage="Disabled message">
          Legacy Disabled Tooltip
        </EzButton>
      </EzLayout>

      <EzLayout>
        Loading:
        <EzButton legacy use="primary" loading>
          Legacy Loading
        </EzButton>
      </EzLayout>
    </EzLayout>
  );
};
```
