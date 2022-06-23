### Empty Autosuggest

```jsx
<EzField type="autosuggest" label="Autosuggest" options={[]} />
```

### Autosuggest with placeholder

```jsx
<EzField type="autosuggest" label="Autosuggest" placeholder="Choose..." options={[]} />
```

### Autosuggest with value

```jsx
<EzField
  type="autosuggest"
  label="Autosuggest"
  placeholder="Choose..."
  options={[{label: 'All Upcoming', value: 'upcoming'}]}
  value="upcoming"
/>
```

### Autosuggest open

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzField
          type="autosuggest"
          label="Autosuggest"
          options={[
            {label: 'All Upcoming', value: 'upcoming'},
            {label: 'Today', value: 'today'},
            {label: 'Tomorrow', value: 'tomorrow'},
            {label: 'All Time', value: 'all'},
            {label: 'Yesterday', value: 'yesterday'},
            {label: 'Last 7 Days', value: 'week'},
            {label: 'This Month', value: 'month'},
          ]}
          value={null}
        />
      </Open>
    </div>
  );
};
```

### Disabled Autosuggest

```jsx
<EzField
  type="autosuggest"
  label="Autosuggest"
  disabled
  options={[{label: 'All Upcoming', value: 'upcoming'}]}
  value="upcoming"
/>
```

### Autosuggest with error

```jsx
<EzField
  type="autosuggest"
  label="Autosuggest"
  touched
  error="Value must be in the future"
  options={[{label: 'Yesterday', value: 'yesterday'}]}
  value="yesterday"
/>
```

### Autosuggest with error open

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzField
          type="autosuggest"
          label="Autosuggest"
          placeholder="Choose..."
          touched
          error="Value must be in the future"
          options={[{label: 'Yesterday', value: 'yesterday'}]}
          value=""
        />
      </Open>
    </div>
  );
};
```

### Autosuggest with many options

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <EzField
          type="autosuggest"
          label="Autosuggest"
          options={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .map(letter => ({label: letter, value: letter}))}
          value="D"
        />
      </Open>
    </div>
  );
};
```

### Autosuggest with long text content

```jsx
<EzLayout>
  <EzField
    type="autosuggest"
    label="Autosuggest"
    options={[{label: 'Short value', value: 1}]}
    value={1}
  />
  <EzField
    type="autosuggest"
    label="Autosuggest"
    options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
    value={1}
  />
</EzLayout>
```

### Open Autosuggest with long text content

```jsx
() => {
  const containerRef = React.createRef();
  return (
    <EzLayout>
      <EzField
        type="autosuggest"
        label="Autosuggest"
        options={[{label: 'Short value', value: 1}]}
        value={1}
      />
      <div ref={containerRef}>
        <Open containerRef={containerRef}>
          <EzField
            type="autosuggest"
            label="Autosuggest"
            options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
            value={1}
          />
        </Open>
      </div>
    </EzLayout>
  );
};
```

### Autosuggest highlight matching items

```jsx
() => {
  const containerRef = React.createRef();

  function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
  }

  const TypeInField = ({children}) => {
    React.useEffect(() => {
      const input = containerRef.current.querySelector('input');
      setNativeValue(input, 'to');
      input.dispatchEvent(new Event('change', {bubbles: true}));
    }, [containerRef]);
    return children;
  };

  return (
    <div ref={containerRef}>
      <Open containerRef={containerRef}>
        <TypeInField>
          <EzField
            type="autosuggest"
            label="Autosuggest"
            options={[
              {label: 'Today', value: 'today'},
              {label: 'Tomorrow', value: 'tomorrow'},
            ]}
            value={null}
          />
        </TypeInField>
      </Open>
    </div>
  );
};
```
