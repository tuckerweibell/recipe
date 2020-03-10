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
      <StubBoundingClientRect
        rect={{
          bottom: 117,
          height: 23,
          left: 435,
          right: 608,
          top: 88.5,
          width: 153,
        }}
        type={HTMLInputElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 33,
          width: 62,
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
      <FocusInput>
        <EzTooltip message="vertical" position="vertical">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```

### Tooltip Positioned Horizontally

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
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StubBoundingClientRect
        rect={{
          bottom: 81.5,
          height: 23,
          left: 446,
          right: 608,
          top: 46,
          width: 153,
        }}
        type={HTMLInputElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 33,
          width: 78.734375,
        }}
        type={HTMLDivElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 100,
          width: 1024,
        }}
        type={HTMLBodyElement}
      />
      <FocusInput>
        <EzTooltip message="horizontal" position="horizontal">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```

### Tooltip Positioned on the Left

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <StubBoundingClientRect
        rect={{
          bottom: 40,
          height: 23,
          left: 842,
          right: 989,
          top: 7,
          width: 153,
        }}
        type={HTMLInputElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 33,
          width: 78.734375,
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
      <FocusInput>
        <EzTooltip message="horizontal" position="horizontal">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```

### Tooltip Positioned on the Top

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
        height: '738px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <StubBoundingClientRect
        rect={{
          bottom: 748,
          height: 23,
          left: 435,
          right: 589,
          top: 725,
          width: 153,
        }}
        type={HTMLInputElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 33,
          width: 62,
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
      <StubBoundingClientRect
        rect={{
          bottom: 117,
          height: 23,
          left: 435,
          right: 608,
          top: 88.5,
          width: 153,
        }}
        type={HTMLInputElement}
      />
      <StubBoundingClientRect
        rect={{
          height: 33,
          width: 62,
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
      <FocusInput>
        <EzTooltip message="multiple\nlines" position="vertical">
          <input />
        </EzTooltip>
      </FocusInput>
    </div>
  );
};
```
