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

### EzDateInput with error

```jsx
<EzField type="date" touched error="Please select a past date" value="01/01/2020" />
```

### EzDateInput Disabled with Date

```jsx
<EzField type="date" value="01/01/2020" disabled={true} />
```

### EzDateInput overlay

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <EzFormLayout>
      <div ref={containerRef}>
        <Open containerRef={containerRef}>
          <EzField
            label="Order date"
            helperText="Example date field"
            type="date"
            value="01/01/2020"
            autoFocus
          />
        </Open>
      </div>
      <EzField
        label="Select delivery date"
        helperText="This is the date your food will be delivered."
        type="date"
        value="01/01/2020"
      />
    </EzFormLayout>
  );
};
```
