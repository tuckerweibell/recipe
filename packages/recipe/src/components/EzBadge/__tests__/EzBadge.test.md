### EzBadge Variants

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout>
      <EzBadge value={3}>
        <EzIcon icon={faCoffee} />
      </EzBadge>
      <EzBadge value={3} minimize>
        <EzIcon icon={faCoffee} />
      </EzBadge>
    </EzLayout>
  );
};
```

### EzBadge Variants with Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack" alignX="left">
      <EzLayout>
        <EzBadge value={3} color="primary">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="secondary">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="error">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="warning">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="info">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="success">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="alert">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="neutral">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="common.red100">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="common.grey150">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} color="common.green110">
          <EzIcon icon={faCoffee} />
        </EzBadge>
      </EzLayout>
      <EzLayout>
        <EzBadge value={3} minimize color="primary">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="secondary">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="error">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="warning">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="info">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="success">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="alert">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="neutral">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="common.red100">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="common.grey150">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} minimize color="common.green110">
          <EzIcon icon={faCoffee} />
        </EzBadge>
      </EzLayout>
    </EzLayout>
  );
};
```

### EzBadge Custom Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout>
      <style>{`
        .EzBadge-badge {
          color: LightCyan;
          background-color: DarkCyan;
        }
      `}</style>
      <EzBadge value={3}>
        <EzIcon icon={faCoffee} />
      </EzBadge>
      <EzBadge value={3} minimize>
        <EzIcon icon={faCoffee} />
      </EzBadge>
    </EzLayout>
  );
};
```

### EzBadge Alignment

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack" alignX="left">
      <EzLayout>
        <EzBadge value={3} alignX="left" alignY="top">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="right" alignY="top">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="left" alignY="bottom">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="right" alignY="bottom">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="left" alignY="top" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="right" alignY="top" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="left" alignY="bottom" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} alignX="right" alignY="bottom" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
      </EzLayout>
      <EzLayout>
        <EzBadge value={3} overlap="rectangular">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} overlap="circular">
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} overlap="rectangular" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
        <EzBadge value={3} overlap="circular" minimize>
          <EzIcon icon={faCoffee} />
        </EzBadge>
      </EzLayout>
    </EzLayout>
  );
};
```
