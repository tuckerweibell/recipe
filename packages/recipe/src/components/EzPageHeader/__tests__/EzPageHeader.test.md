### Header is aligned with content on small screens

```jsx
<>
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
</>
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
    status={<EzChip label="Verified User Account" variant="success" size="inherit" />}
    actions={
      <EzLayout layout={{base: 'stack', medium: 'basic'}}>
        <EzButton>Accept Order</EzButton>
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
<>
  <EzPageHeader
    title="Michelangelo Wolfeschlegelsteinhausen"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: e => e.preventDefault(),
    }}
    status={<EzChip label="Verified User Account" variant="success" size="inherit" />}
    actions={
      <EzLayout layout={{base: 'stack', medium: 'basic'}}>
        <EzButton>Accept Order</EzButton>
      </EzLayout>
    }
  />
  <EzPage>
    <EzCard title="Order details">
      <div>Order content</div>
    </EzCard>
  </EzPage>
</>
```

### Subheader padding on small screens

```jsx
() => {
  const tabs = [{label: 'Customers'}, {label: 'Leads'}];
  return (
    <>
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
            <div>
              <EzLabel position="top" use="secondary" htmlFor="search">
                Customers
              </EzLabel>
              <EzSearchInput id="search" placeholder="Search" />
            </div>

            <div>
              <EzLabel position="top" use="secondary" htmlFor="search">
                Leads
              </EzLabel>
              <EzSearchInput id="search" placeholder="Search" />
            </div>
          </EzLayout>
        }
      />
      <EzPage>
        <EzCard title="Customer List">
          <div>List content</div>
        </EzCard>
      </EzPage>
    </>
  );
};
```

### Buttons are automatically responsive on small screens

```jsx
<>
  <EzPageHeader title="Order # XYZ-123" actions={<EzButton>Accept Order</EzButton>} />
  <EzPage />
</>
```
