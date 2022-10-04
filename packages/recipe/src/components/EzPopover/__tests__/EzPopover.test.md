### EzPopover appears above sticky content with z-index

```jsx
() => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return (
    <div style={{height: 150}}>
      <EzButton
        use="secondary"
        ref={ref}
        onClick={() => setVisible(!visible)}
        onKeyDown={e => e.key === 'Escape' && setVisible(false)}
      >
        Open popover
      </EzButton>
      <div
        style={{
          height: '200px',
          width: '400px',
          backgroundColor: '#00b373',
          color: 'white',
          marginTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          position: 'sticky',
        }}
      >
        A sticky container that should appear behind the popover
      </div>

      {visible && (
        <EzPopover targetRef={ref} shouldCloseOnBlur onClose={() => setVisible(false)}>
          <div
            style={{
              border: 'solid 1px hsla(0, 0%, 0%, 0.25)',
              boxShadow: '0px 2px 10px hsla(0, 0%, 0%, 0.25)',
              padding: 20,
              background: '#f0f0f0',
            }}
          >
            This is some popover content!
          </div>
        </EzPopover>
      )}
    </div>
  );
};
```
