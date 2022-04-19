```jsx
<div
  style={{
    backgroundColor: '#f4f7f8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }}
>
  <div style={{flexBasis: '80%'}}>
    <EzTable
      title="■■■■■■■■        ■■■■■■■■"
      columns={[
        {heading: '■■■■■■■■', key: 'first'},
        {heading: '■■■■■■■■', key: 'last'},
      ]}
      items={[
        {first: '■■■■■■■■■■■', last: '■■■■■■'},
        {first: '■■■■■■', last: '■■■■■■■'},
        {first: '■■■', last: '■■■■■'},
        {first: '■■■■■■■■■', last: '■■■'},
        {first: '■■■■■■■■', last: '■■■■'},
      ]}
      selection={{
        onRowSelectClick: () => {},
        onBulkSelectClick: () => {},
        isRowSelected: () => false,
        onSelectAllClick: () => {},
        onSelectNoneClick: () => {},
      }}
    />
  </div>
</div>
```
