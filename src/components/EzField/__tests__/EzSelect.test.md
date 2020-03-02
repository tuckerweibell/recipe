### Default Select list

```jsx
() => {
  const [choice, setChoice] = React.useState('upcoming');
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown"
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Default Select list open

```jsx
() => {
  const containerRef = React.createRef();
  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzFormLayout>
          <EzField
            type="select"
            label="Select dropdown"
            options={[
              {label: 'All Upcoming', value: 'upcoming'},
              {label: 'Today', value: 'today'},
              {label: 'Tomorrow', value: 'tomorrow'},
              {label: 'All Time', value: 'all'},
              {label: 'Yesterday', value: 'yesterday'},
              {label: 'Last 7 Days', value: 'week'},
              {label: 'This Month', value: 'month'},
            ]}
            value="tomorrow"
          />
        </EzFormLayout>
      </Open>
    </div>
  );
};
```

### Disabled Select list

```jsx
() => {
  const [choice, setChoice] = React.useState('upcoming');
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown"
        disabled
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Select list with placeholder

```jsx
() => {
  const [choice, setChoice] = React.useState(null);
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown"
        placeholder="Choose..."
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Select list with error

```jsx
() => {
  const [choice, setChoice] = React.useState('upcoming');
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown"
        touched
        error="Please select a past date"
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Select list with error open

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzFormLayout>
          <EzField
            type="select"
            label="Select dropdown"
            touched
            error="Please select a past date"
            options={[
              {label: 'All Upcoming', value: 'upcoming'},
              {label: 'Today', value: 'today'},
              {label: 'Tomorrow', value: 'tomorrow'},
              {label: 'All Time', value: 'all'},
              {label: 'Yesterday', value: 'yesterday'},
              {label: 'Last 7 Days', value: 'week'},
              {label: 'This Month', value: 'month'},
            ]}
            value="tomorrow"
          />
        </EzFormLayout>
      </Open>
    </div>
  );
};
```

### Long select list

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzFormLayout>
          <EzField
            type="select"
            label="Select dropdown"
            options={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
              .split('')
              .map(letter => ({label: letter, value: letter}))}
            value="D"
          />
        </EzFormLayout>
      </Open>
    </div>
  );
};
```

### Select list with optgroup open

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzFormLayout>
          <EzField
            type="select"
            label="Select dropdown with <optgroup>"
            options={[
              {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
              {label: 'Today', value: 'today', group: 'Upcoming'},
              {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
              {label: 'All Time', value: 'all', group: 'Past'},
              {label: 'Yesterday', value: 'yesterday', group: 'Past'},
              {label: 'Last 7 Days', value: 'week', group: 'Past'},
              {label: 'This Month', value: 'month', group: 'Past'},
            ]}
            value="tomorrow"
          />
        </EzFormLayout>
      </Open>
    </div>
  );
};
```

### Select list ordering

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzFormLayout>
          <EzField
            type="select"
            label="Select dropdown with <optgroup>"
            options={[
              {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
              {label: 'All Time', value: 'all', group: 'Past'},
              {label: 'Today', value: 'today', group: 'Upcoming'},
              {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
              {label: 'Yesterday', value: 'yesterday', group: 'Past'},
              {label: 'Last 7 Days', value: 'week', group: 'Past'},
              {label: 'This Month', value: 'month', group: 'Past'},
            ]}
            value="tomorrow"
          />
        </EzFormLayout>
      </Open>
    </div>
  );
};
```

### Select list with error on small screen size

```jsx
<Media size="small">
  <EzField
    type="select"
    label="Select dropdown"
    placeholder="Choose..."
    options={[{label: 'All Upcoming', value: 'upcoming'}]}
    value="upcoming"
    onChange={() => {}}
    helperText="This is a hint about how this field works"
    touched
    error="First name is required"
  />
</Media>
```

### Select list with long content

```jsx
<EzLayout>
  <EzField
    type="select"
    label="Select dropdown"
    placeholder="Choose..."
    options={[{label: 'Short value', value: 1}]}
    value={1}
    onChange={() => {}}
  />
  <EzField
    type="select"
    label="Select dropdown"
    placeholder="Choose..."
    options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
    value={1}
    onChange={() => {}}
  />
</EzLayout>
```

### Open select list with long content

```jsx
() => {
  const containerRef = React.createRef();
  return (
    <EzLayout>
      <EzField
        type="select"
        label="Select dropdown"
        placeholder="Choose..."
        options={[{label: 'Short value', value: 1}]}
        value={1}
        onChange={() => {}}
      />
      <div ref={containerRef}>
        <Open containerRef={containerRef}>
          <EzField
            type="select"
            label="Select dropdown"
            placeholder="Choose..."
            options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
            value={1}
            onChange={() => {}}
          />
        </Open>
      </div>
    </EzLayout>
  );
};
```

### Select list with hidden label should match height of button

```jsx
<EzLayout>
  <EzButton>Click Me</EzButton>
  <EzField
    type="select"
    label="Select dropdown"
    labelHidden
    placeholder="Choose..."
    options={[{label: 'All Upcoming', value: 'upcoming'}]}
    value="upcoming"
    onChange={() => {}}
  />
</EzLayout>
```
