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

### Subheader padding on small screens

```jsx
() => {
  const tabs = [{label: 'Customers'}, {label: 'Leads'}];
  return (
    <Media size="small">
      <EzPageHeader
        title="Customers"
        subnav={{tabs, selected: tabs[0]}}
        subheader={
          <EzLayout
            layout={{
              base: 'stack',
              medium: 'basic',
            }}
          >
            <EzLabelledItem position="top" size="small" title="Customers" htmlFor="search">
              <EzSearchInput id="search" placeholder="Search" />
            </EzLabelledItem>
            <EzLabelledItem position="top" size="small" title="Leads" htmlFor="search">
              <EzSearchInput id="search" placeholder="Search" />
            </EzLabelledItem>
          </EzLayout>
        }
      />
      <EzPage>
        <EzCard title="Customer List">
          <div>List content</div>
        </EzCard>
      </EzPage>
    </Media>
  );
};
```

### Buttons are automatically responsive on small screens

```jsx
<Media size="small">
  <EzPageHeader title="Order # XYZ-123" actions={<EzButton use="primary">Accept Order</EzButton>} />
  <EzPage />
</Media>
```
