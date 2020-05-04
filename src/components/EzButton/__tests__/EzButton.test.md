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

### EzButton[use="tertiary" icon={}] should match height of other controls

```jsx
<div style={{display: 'flex', alignItems: 'flex-end'}}>
  <EzButton use="primary">Submit</EzButton>
  <EzButton
    use="tertiary"
    icon={
      <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.06295 4.07865C2.06295 3.87385 2.21417 3.70787 2.40075 3.70787H3.46066C3.64712 3.70787 3.79846 3.87385 3.79846 4.07865C3.79846 4.28345 3.64712 4.44944 3.46066 4.44944H2.40075C2.21417 4.44944 2.06295 4.28345 2.06295 4.07865ZM9.45842 7.53933H8.12197L7.98009 6.53178C7.95093 6.32043 7.78529 6.17978 7.5905 6.17978H2.76884C2.57404 6.17978 2.40841 6.32043 2.37924 6.53178L2.23737 7.53933H0.900802V2.8427H9.45842V7.53933ZM2.68 10.1348L3.10743 7.04494H7.25191L7.67934 10.1348H2.68ZM3.37801 1.85393H6.98122V0.741573H3.37801V1.85393ZM9.90882 1.85393H7.65682V0.370787C7.65682 0.165989 7.55818 0 7.3716 0H2.98774C2.80127 0 2.70241 0.165989 2.70241 0.370787V1.85393H0.450401C0.201667 1.85393 0 2.06627 0 2.33929V8.00961C0 8.28263 0.201667 8.52809 0.450401 8.52809H2.10033L1.83189 10.4526C1.81455 10.5773 1.84766 10.7288 1.92254 10.8245C1.99742 10.9202 2.10664 11 2.22149 11H8.13796C8.25281 11 8.36192 10.9141 8.4368 10.8184C8.51168 10.7228 8.54478 10.5928 8.52755 10.468L8.259 8.52809H9.90882C10.1576 8.52809 10.3592 8.28263 10.3592 8.00961V2.33929C10.3592 2.06627 10.1576 1.85393 9.90882 1.85393Z"
          fill="#8B99A6"
        />
      </svg>
    }
  >
    Print Order
  </EzButton>
</div>
```
