### Header is aligned with content on small screens

```jsx
<Media size="small">
  <EzPageHeader
    title="Order # XYZ-123"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: e => e.preventDefault(),
    }}
  />
  <EzPage>
    <EzCard title="Order details">
      <div>Order content</div>
    </EzCard>
  </EzPage>
</Media>
```

### Title uses available space before wrapping

```jsx
<div>
  <EzPageHeader
    title="Michelangelo Wolfeschlegelsteinhausen"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: e => e.preventDefault(),
    }}
    status={<EzStatus text="Verified User Account" use="success" />}
    actions={
      <EzLayout layout={{base: 'stack', medium: 'basic'}}>
        <EzButton use="primary">Accept Order</EzButton>
      </EzLayout>
    }
  />
  <EzPage>
    <EzCard title="Order details">
      <div>Order content</div>
    </EzCard>
  </EzPage>
</div>
```

### Wraps status before wrapping title

```jsx
<Media size="small">
  <EzPageHeader
    title="Michelangelo Wolfeschlegelsteinhausen"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: e => e.preventDefault(),
    }}
    status={<EzStatus text="Verified User Account" use="success" />}
    actions={
      <EzLayout layout={{base: 'stack', medium: 'basic'}}>
        <EzButton use="primary">Accept Order</EzButton>
      </EzLayout>
    }
  />
  <EzPage>
    <EzCard title="Order details">
      <div>Order content</div>
    </EzCard>
  </EzPage>
</Media>
```
