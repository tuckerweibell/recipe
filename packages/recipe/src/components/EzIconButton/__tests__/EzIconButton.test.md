### EzIconButton Variants

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  const CoffeeIconButton = props => (
    <EzIconButton ariaLabel="coffee" {...props}>
      <EzIcon icon={faCoffee} />
    </EzIconButton>
  );

  return (
    <EzLayout>
      <CoffeeIconButton />
      <CoffeeIconButton variant="filled" />
      <CoffeeIconButton variant="outlined" />
      <CoffeeIconButton variant="basic" />
    </EzLayout>
  );
};
```

### EzIconButton Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  const CoffeeIconButton = props => (
    <EzIconButton ariaLabel="coffee" {...props}>
      <EzIcon icon={faCoffee} />
    </EzIconButton>
  );

  return (
    <EzLayout layout="stack">
      <EzLayout>
        <CoffeeIconButton color="primary" />
        <CoffeeIconButton color="secondary" />
        <CoffeeIconButton color="error" />
        <CoffeeIconButton color="warning" />
        <CoffeeIconButton color="info" />
        <CoffeeIconButton color="success" />
        <CoffeeIconButton color="alert" />
        <CoffeeIconButton color="neutral" />
        <CoffeeIconButton color="common.destructive" />
        <CoffeeIconButton color="common.red100" />
        <CoffeeIconButton color="common.black" />
      </EzLayout>

      <EzLayout>
        <CoffeeIconButton color="primary" variant="outlined" />
        <CoffeeIconButton color="secondary" variant="outlined" />
        <CoffeeIconButton color="error" variant="outlined" />
        <CoffeeIconButton color="warning" variant="outlined" />
        <CoffeeIconButton color="info" variant="outlined" />
        <CoffeeIconButton color="success" variant="outlined" />
        <CoffeeIconButton color="alert" variant="outlined" />
        <CoffeeIconButton color="neutral" variant="outlined" />
        <CoffeeIconButton color="common.destructive" variant="outlined" />
        <CoffeeIconButton color="common.red100" variant="outlined" />
        <CoffeeIconButton color="common.black" variant="outlined" />
      </EzLayout>

      <EzLayout>
        <CoffeeIconButton color="primary" variant="basic" />
        <CoffeeIconButton color="secondary" variant="basic" />
        <CoffeeIconButton color="error" variant="basic" />
        <CoffeeIconButton color="warning" variant="basic" />
        <CoffeeIconButton color="info" variant="basic" />
        <CoffeeIconButton color="success" variant="basic" />
        <CoffeeIconButton color="alert" variant="basic" />
        <CoffeeIconButton color="neutral" variant="basic" />
        <CoffeeIconButton color="common.destructive" variant="basic" />
        <CoffeeIconButton color="common.red100" variant="basic" />
        <CoffeeIconButton color="common.black" variant="basic" />
      </EzLayout>

      <EzLayout>
        <EzIconButton ariaLabel="coffee" color="common.black">
          <EzIcon icon={faCoffee} color="primary" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" color="common.black" variant="outlined">
          <EzIcon icon={faCoffee} color="primary" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" color="common.black" variant="basic">
          <EzIcon icon={faCoffee} color="primary" />
        </EzIconButton>
      </EzLayout>
    </EzLayout>
  );
};
```

### EzIconButton Custom Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  const CoffeeIconButton = props => (
    <EzIconButton ariaLabel="coffee" {...props}>
      <EzIcon icon={faCoffee} />
    </EzIconButton>
  );

  return (
    <EzLayout layout="equal">
      <style>{`
        .EzIconButton-filled {
          background-color: orange;
        }
        .EzIconButton-outlined {
          background-color: #eee;
        }
        .EzIconButton-basic {
          background-color: #eee;
        }
        .EzIconButton-disabled {
          background-color: blue !important;
          opacity: 0.1;
        }
      `}</style>
      <CoffeeIconButton variant="filled" />
      <CoffeeIconButton variant="outlined" />
      <CoffeeIconButton variant="basic" />
      <CoffeeIconButton disabled />
    </EzLayout>
  );
};
```

### EzIconButton Sizes

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  const CoffeeIconButton = props => (
    <EzIconButton ariaLabel="coffee" {...props}>
      <EzIcon icon={faCoffee} />
    </EzIconButton>
  );

  return (
    <EzLayout layout="stack">
      <EzLayout>
        <CoffeeIconButton />
        <CoffeeIconButton size="small" />
        <CoffeeIconButton size="medium" />
        <CoffeeIconButton size="large" />
      </EzLayout>

      <EzLayout>
        <EzIconButton ariaLabel="coffee" size="small">
          <EzIcon icon={faCoffee} size="small" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="small">
          <EzIcon icon={faCoffee} size="medium" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="small">
          <EzIcon icon={faCoffee} size="large" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="small">
          <EzIcon icon={faCoffee} size="inherit" />
        </EzIconButton>
      </EzLayout>

      <EzLayout>
        <EzIconButton ariaLabel="coffee" size="medium">
          <EzIcon icon={faCoffee} size="small" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="medium">
          <EzIcon icon={faCoffee} size="medium" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="medium">
          <EzIcon icon={faCoffee} size="large" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="medium">
          <EzIcon icon={faCoffee} size="inherit" />
        </EzIconButton>
      </EzLayout>

      <EzLayout>
        <EzIconButton ariaLabel="coffee" size="large">
          <EzIcon icon={faCoffee} size="small" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="large">
          <EzIcon icon={faCoffee} size="medium" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="large">
          <EzIcon icon={faCoffee} size="large" />
        </EzIconButton>

        <EzIconButton ariaLabel="coffee" size="large">
          <EzIcon icon={faCoffee} size="inherit" />
        </EzIconButton>
      </EzLayout>
    </EzLayout>
  );
};
```
