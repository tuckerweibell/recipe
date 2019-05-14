### EzDateInput Simple

```jsx
<EzField type="date" />
```

### EzDateInput Simple with Date

```jsx
<EzField type="date" value="01/01/2020" />
```

### EzDateInput Disabled

```jsx
<EzField type="date" disabled={true} />
```

### EzDateInput Disabled with Date

```jsx
<EzField type="date" value="01/01/2020" disabled={true} />
```

### EzDateInput Autofocused

```jsx
<EzField type="date" value="01/01/2020" autoFocus />
```

### EzDateInput overlay

```jsx
<EzFormLayout>
  <EzField
    label="Order date"
    helperText="Example date field"
    type="date"
    value="01/01/2020"
    autoFocus
  />
  <EzField
    label="Select delivery date"
    helperText="This is the date your food will be delivered."
    type="date"
    value="01/01/2020"
  />
</EzFormLayout>
```
