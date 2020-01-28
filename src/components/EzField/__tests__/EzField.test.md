### EzField error overlap

```jsx
<EzFormLayout style={{maxWidth: '360px'}}>
  <EzLayout layout="basic">
    <EzField
      label="Send to"
      touched
      error="A valid send to email address is required"
      value="Kevi"
      autoFocus
    />
    <EzField label="Reply to" value="ky@sa-pa.com-test" />
  </EzLayout>
  <EzField label="Subject" value="Invoice from SA PA | Vietnamese Kitchen" />
</EzFormLayout>
```

### EzField custom input with error

```jsx
<EzField
  type={({value, onChange}) => <input value={value} onChange={onChange} />}
  label="Character Name"
  helperText="Provide the name of your favorite Sesame Street character."
  touched
  error="A valid send to email address is required"
/>
```
