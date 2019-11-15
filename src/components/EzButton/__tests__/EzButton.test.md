### Disabled button wrapped in a Tooltip

```jsx
() => {
  const containerRef = React.createRef();

  const FocusButton = ({children}) => {
    React.useEffect(() => {
      const button = containerRef.current.querySelector('button');
      fireEvent.focus(button);
    }, []);
    return children;
  };

  return (
    <div ref={containerRef}>
      <StubBoundingClientRect
        rect={{
          bottom: 40,
          top: 57,
          left: -15,
          height: 33,
          width: 125,
        }}
        type={HTMLDivElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 768,
          width: 1024,
        }}
        type={HTMLBodyElement}
      />
      <FocusButton>
        <EzButton use="primary" disabled disabledMessage="Disabled">
          Submit
        </EzButton>
      </FocusButton>
    </div>
  );
};
```
