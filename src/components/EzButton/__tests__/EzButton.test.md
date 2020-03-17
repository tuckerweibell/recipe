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
      <Global
        styles={css(`
          [data-popper-placement="true"] {
            right: auto;
            bottom: auto;
            transform: translate3d(9px, 45px, 0px);
          }
          [data-popper-arrow="true"] {
            left: 0px;
            top: -4px;
            transform: translate3d(35px, 0px, 0px);
          }
      `)}
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
