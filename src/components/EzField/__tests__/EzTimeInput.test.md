### EzField time input with error

```jsx
<EzFormLayout>
  <EzField
    type="time"
    touched
    error="Please select a different time"
    label="Select delivery time"
    helperText="This is the time your food will be delivered."
    start="9:00am"
    end="5:00pm"
    step={60}
    value="1:00 PM"
  />
</EzFormLayout>
```

### EzField time input with error on small screen size

```jsx
<Media size="small">
  <EzField
    type="time"
    touched
    error="Please select a different time"
    label="Select delivery time"
    helperText="This is the time your food will be delivered."
    start="9:00am"
    end="5:00pm"
    step={60}
    value="1:00 PM"
  />
</Media>
```

### EzField time flyout overlap with another EzField time control

```jsx
() => {
  const containerRef = React.createRef();
  return (
    <div ref={containerRef}>
      <EzFormLayout>
        <Open containerRef={containerRef}>
          <EzField
            type="time"
            label="Select order time"
            start="9:00am"
            end="5:00pm"
            step={60}
            value="1:00 PM"
          />
        </Open>
        <EzField
          type="time"
          label="Select delivery time"
          start="9:00am"
          end="5:00pm"
          step={60}
          value="1:00 PM"
        />
      </EzFormLayout>
    </div>
  );
};
```
