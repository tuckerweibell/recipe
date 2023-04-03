### toggle checked

```jsx
<EzToggle onChange={() => {}} checked={true} />
```

### toggle unchecked

```jsx
<EzToggle onChange={() => {}} checked={false} />
```

### toggle in progress status

```jsx
<EzToggle defaultChecked={false} label="Receive marketing emails" status="progress" />
```

### toggle success status

```jsx
<EzToggle defaultChecked={false} label="Receive marketing emails" status="success" />
```

### toggle error status

```jsx
<EzToggle defaultChecked={false} label="Receive marketing emails" status="error" />
```

### Toggle control renders in a consistent position regardless of status

```jsx
<div className="test" style={{minHeight: 20}}>
  <Global
    styles={css(`
    .test > * {
      position: absolute !important;
    }
  `)}
  />
  <EzToggle defaultChecked={false} label="Receive marketing emails" status="progress" />
  <EzToggle defaultChecked={false} label="Receive marketing emails" />
</div>
```
