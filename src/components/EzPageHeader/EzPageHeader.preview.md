```jsx
<div
  style={{
    '--zoom': 2,
    width: '100%',
    height: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  }}
>
  <div style={{flexBasis: '100%'}}>
    <EzPageHeader
      title="■■■■■■■■■■■■■■■"
      subnav={{tabs: [{label: '■■■'}, {label: '■■■■■'}, {label: '■■■■'}], onChange: () => {}}}
      actions={
        <EzLayout layout="right" className="responsive">
          <EzButton use="secondary">■■■■■</EzButton>
        </EzLayout>
      }
    />
  </div>
  <div style={{paddingBottom: '30%', background: '#f4f7f8', flexBasis: '100%'}} />
</div>
```
