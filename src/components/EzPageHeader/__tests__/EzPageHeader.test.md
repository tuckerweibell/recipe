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
