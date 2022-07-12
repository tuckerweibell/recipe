### EzChip Variants

```jsx
<EzLayout>
  <EzChip label="default" />
  <EzChip label="filled" variant="filled" />
  <EzChip label="outlined" variant="outlined" color="common.black" />
  <EzChip label="neutral" variant="neutral" />
  <EzChip label="success" variant="success" />
  <EzChip label="informational" variant="informational" />
  <EzChip label="attention" variant="attention" />
  <EzChip label="warning" variant="warning" />
  <EzChip label="error" variant="error" />
  <EzChip label="alert" variant="alert" />
</EzLayout>
```

### EzChip Variants with Colors

```jsx
<EzLayout layout="stack" alignX="left">
  <EzLayout>
    <EzChip label="filled" color="primary" />
    <EzChip label="filled" color="secondary" />
    <EzChip label="filled" color="error" />
    <EzChip label="filled" color="warning" />
    <EzChip label="filled" color="info" />
    <EzChip label="filled" color="success" />
    <EzChip label="filled" color="alert" />
    <EzChip label="filled" color="neutral" />
    <EzChip label="filled" color="common.yellow100" />
    <EzChip label="filled" color="common.success90" />
    <EzChip label="filled" color="common.alert90" />
  </EzLayout>

  <EzLayout>
    <EzChip label="outlined" variant="outlined" color="primary" />
    <EzChip label="outlined" variant="outlined" color="secondary" />
    <EzChip label="outlined" variant="outlined" color="error" />
    <EzChip label="outlined" variant="outlined" color="warning" />
    <EzChip label="outlined" variant="outlined" color="info" />
    <EzChip label="outlined" variant="outlined" color="success" />
    <EzChip label="outlined" variant="outlined" color="alert" />
    <EzChip label="outlined" variant="outlined" color="neutral" />
    <EzChip label="outlined" variant="outlined" color="common.primary110" />
    <EzChip label="outlined" variant="outlined" color="common.red100" />
    <EzChip label="outlined" variant="outlined" color="common.blue100" />
  </EzLayout>

  <EzLayout>
    <EzChip label="neutral" variant="neutral" color="primary" />
    <EzChip label="success" variant="success" color="secondary" />
    <EzChip label="informational" variant="informational" color="error" />
    <EzChip label="attention" variant="attention" color="warning" />
    <EzChip label="warning" variant="warning" color="info" />
    <EzChip label="error" variant="error" color="success" />
    <EzChip label="alert" variant="alert" color="neutral" />
  </EzLayout>
</EzLayout>
```

### EzChip Actions with Colors

```jsx
<EzLayout layout="stack" alignX="left">
  <EzLayout>
    <EzChip label="Clickable" onClick={() => {}} color="primary" />
    <EzChip label="Clickable" onClick={() => {}} color="secondary" />
    <EzChip label="Clickable" onClick={() => {}} color="error" />
    <EzChip label="Clickable" onClick={() => {}} color="warning" />
    <EzChip label="Clickable" onClick={() => {}} color="info" />
    <EzChip label="Clickable" onClick={() => {}} color="success" />
    <EzChip label="Clickable" onClick={() => {}} color="alert" />
    <EzChip label="Clickable" onClick={() => {}} color="common.yellow100" />
    <EzChip label="Clickable" onClick={() => {}} color="common.success90" />
    <EzChip label="Clickable" onClick={() => {}} color="common.alert90" />
  </EzLayout>

  <EzLayout>
    <EzChip label="Deletable" onDelete={() => {}} color="primary" />
    <EzChip label="Deletable" onDelete={() => {}} color="secondary" />
    <EzChip label="Deletable" onDelete={() => {}} color="error" />
    <EzChip label="Deletable" onDelete={() => {}} color="warning" />
    <EzChip label="Deletable" onDelete={() => {}} color="info" />
    <EzChip label="Deletable" onDelete={() => {}} color="success" />
    <EzChip label="Deletable" onDelete={() => {}} color="alert" />
    <EzChip label="Deletable" onDelete={() => {}} color="common.yellow100" />
    <EzChip label="Deletable" onDelete={() => {}} color="common.success90" />
    <EzChip label="Deletable" onDelete={() => {}} color="common.alert90" />
  </EzLayout>

  <EzLayout>
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="primary"
    />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="secondary"
    />
    <EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} color="error" />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="warning"
    />
    <EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} color="info" />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="success"
    />
    <EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} color="alert" />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="common.yellow100"
    />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="common.success90"
    />
    <EzChip
      label="Clickable and Deletable"
      onClick={() => {}}
      onDelete={() => {}}
      color="common.alert90"
    />
  </EzLayout>
</EzLayout>
```

### EzChip Status Variants with Actions

```jsx
<EzLayout layout="stack" alignX="left">
  <EzLayout>
    <EzChip label="neutral" variant="neutral" onClick={() => {}} />
    <EzChip label="success" variant="success" onClick={() => {}} />
    <EzChip label="informational" variant="informational" onClick={() => {}} />
    <EzChip label="attention" variant="attention" onClick={() => {}} />
    <EzChip label="warning" variant="warning" onClick={() => {}} />
    <EzChip label="error" variant="error" onClick={() => {}} />
    <EzChip label="alert" variant="alert" onClick={() => {}} />
  </EzLayout>

  <EzLayout>
    <EzChip label="neutral" variant="neutral" onDelete={() => {}} />
    <EzChip label="success" variant="success" onDelete={() => {}} />
    <EzChip label="informational" variant="informational" onDelete={() => {}} />
    <EzChip label="attention" variant="attention" onDelete={() => {}} />
    <EzChip label="warning" variant="warning" onDelete={() => {}} />
    <EzChip label="error" variant="error" onDelete={() => {}} />
    <EzChip label="alert" variant="alert" onDelete={() => {}} />
  </EzLayout>
</EzLayout>
```

### EzChip Icons and Variants

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack" alignX="left">
      <EzLayout>
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="primary" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="secondary" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="error" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="warning" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="info" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="success" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="common.yellow100" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="common.success90" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="common.alert90" />
      </EzLayout>

      <EzLayout>
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="primary" variant="outlined" />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="secondary"
          variant="outlined"
        />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="error" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="warning" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="info" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="success" variant="outlined" />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.primary110"
          variant="outlined"
        />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.red100"
          variant="outlined"
        />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.blue100"
          variant="outlined"
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### EzChip Icons and Sizes

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack" alignX="left">
      Medium chips:
      <EzLayout>
        <EzChip label="default icon size (same as text)" icon={<EzIcon icon={faCoffee} />} />
        <EzChip
          label="inherit (10px) icon size"
          icon={
            <div style={{fontSize: '10px', display: 'flex'}}>
              <EzIcon icon={faCoffee} size="inherit" />
            </div>
          }
        />
      </EzLayout>
      Small chips:
      <EzLayout>
        <EzChip
          label="default icon size (same as text)"
          icon={<EzIcon icon={faCoffee} />}
          size="small"
        />
        <EzChip
          label="inherit (10px) icon size"
          icon={
            <div style={{fontSize: '10px', display: 'flex'}}>
              <EzIcon icon={faCoffee} size="inherit" />
            </div>
          }
          size="small"
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### EzChip Status Icons and Sizes

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack" alignX="left">
      <EzLayout>
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} size="medium" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} size="small" />
      </EzLayout>

      <EzLayout>
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="primary" variant="outlined" />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="secondary"
          variant="outlined"
        />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="error" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="warning" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="info" variant="outlined" />
        <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} color="success" variant="outlined" />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.primary110"
          variant="outlined"
        />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.red100"
          variant="outlined"
        />
        <EzChip
          label="icon"
          icon={<EzIcon icon={faCoffee} />}
          color="common.blue100"
          variant="outlined"
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### EzChip Custom Colors

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout>
      <style>{`
        .EzChip-filled {
          color: white;
          background-color: turquoise;
        }
        .EzChip-outlined {
          border-color: lightGrey;
          color: green;
        }
        .EzChip-icon {
          color: black !important;
        }
        .EzChip-label {
          font-size: 16px;
        }
      `}</style>
      <EzChip label="custom" icon={<EzIcon icon={faCoffee} />} />
      <EzChip label="custom" icon={<EzIcon icon={faCoffee} />} variant="outlined" />
    </EzLayout>
  );
};
```
