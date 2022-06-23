### EzDateInput Simple

```jsx
<EzField type="date" label="Order date" />
```

### EzDateInput Simple with Date

```jsx
<EzField type="date" label="Order date" value="01/01/2020" />
```

### EzDateInput Disabled

```jsx
<EzField type="date" label="Order date" disabled={true} />
```

### EzDateInput with error

```jsx
<EzField
  type="date"
  label="Order date"
  touched
  error="Please select a past date"
  value="01/01/2020"
/>
```

### EzDateInput Disabled with Date

```jsx
<EzField type="date" label="Order date" value="01/01/2020" disabled={true} />
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

### EzField date input with min/max range

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzField
          label="Order date"
          type="date"
          value="01/20/2020"
          minDate={'01/20/2020'}
          maxDate={'01/24/2020'}
          autoFocus
        />
      </Open>
    </div>
  );
};
```

### EzField date input with available date filter

```jsx
() => {
  const containerRef = React.createRef();

  const isWeekday = date => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzField
          label="Order date"
          filterDate={isWeekday}
          type="date"
          value="01/20/2020"
          autoFocus
        />
      </Open>
    </div>
  );
};
```

### EzField date input within modal

```jsx
() => {
  const containerRef = React.createRef();

  const isWeekday = date => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <EzModal
      isOpen
      submitLabel="Submit"
      destructive
      dismissLabel="Dismiss"
      onDismiss={() => {}}
      headerText="Header goes here"
    >
      <div ref={containerRef}>
        <Open containerRef={containerRef}>
          <EzField
            label="Order date"
            filterDate={isWeekday}
            type="date"
            value="01/20/2020"
            autoFocus
          />
        </Open>
      </div>
    </EzModal>
  );
};
```
