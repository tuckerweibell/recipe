### Tooltip Positioned Vertically

```jsx
() => {
  const containerRef = React.createRef();

  const FocusInput = ({children}) => {
    React.useEffect(() => {
      const input = containerRef.current.querySelector('input');
      fireEvent.focus(input);
    }, []);
    return children;
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Global
        styles={css(`
          [data-popper-placement="true"] {
            right: auto;
            bottom: auto;
            transform: translate3d(480px, 122px, 0px);
          }
          [data-popper-arrow="true"] {
            left: 0px;
            top: -4px;
            transform: translate3d(30px, 0px, 0px);
          }
      `)}
      />
      <FocusInput>
        <EzTooltip message="vertical" position="vertical">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```

### Tooltip With a Newline

```jsx
() => {
  const containerRef = React.createRef();

  const FocusInput = ({children}) => {
    React.useEffect(() => {
      const input = containerRef.current.querySelector('input');
      fireEvent.focus(input);
    }, []);
    return children;
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Global
        styles={css(`
          [data-popper-placement="true"] {
            right: auto;
            bottom: auto;
            transform: translate3d(480px, 122px, 0px);
          }
          [data-popper-arrow="true"] {
            left: 0px;
            top: -4px;
            transform: translate3d(33px, 0px, 0px);
          }
      `)}
      />
      <FocusInput>
        <EzTooltip message="multiple\nlines" position="vertical">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```
