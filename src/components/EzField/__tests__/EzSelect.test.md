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
