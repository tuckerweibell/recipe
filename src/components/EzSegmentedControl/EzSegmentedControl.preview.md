```jsx
<div
  style={{
    '--zoom': 2,
    backgroundColor: '#f4f7f8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }}
>
  <EzSegmentedControl
    name="name"
    label="label"
    labelPosition="hidden"
    options={[
      {label: '■■■', value: 1},
      {label: '■■■■■■', value: 2},
      {label: '■■■■', value: 3},
    ]}
    active={1}
  />
</div>
```
