The following test emulate having styles injected via css-modules, so we don't need to maintain this dependency in tests.

### uses provided theme

This test asserts that the provided theme is applied to the descendant content.

```jsx
<>
  {/*
    
  */}
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
    `,
    }}
  />
  <EzProvider theme={{global: {'blue-theme': 'blue-theme-xyz'}}}>
    <div>blue text</div>
  </EzProvider>
  <div>body text (default)</div>
</>
```

### nested providers follow their ancestor settings by default

```jsx
<>
  {/*
    
  */}
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
    `,
    }}
  />
  <EzProvider theme={{global: {'blue-theme': 'blue-theme-xyz'}}}>
    <div>blue text</div>
    <EzProvider>
      <div>blue text</div>
    </EzProvider>
  </EzProvider>
</>
```

### nested providers follow their ancestors after updates

```jsx
() => {
  const blueTheme = {global: {'blue-theme': 'blue-theme-xyz'}};
  const greenTheme = {global: {'green-theme': 'green-theme-abc'}};
  const [theme, setTheme] = React.useState(blueTheme);

  React.useEffect(() => {
    // immediately set the theme to green on mount
    setTheme(greenTheme);
  }, []);

  return (
    <>
      {/*
        
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .blue-theme-xyz { color: blue }
          .green-theme-abc { color: green }
        `,
        }}
      />
      <EzProvider theme={theme}>
        <div>green text</div>
        <EzProvider>
          <div>green text</div>
        </EzProvider>
      </EzProvider>
    </>
  );
};
```

### nested providers can override their ancestors theme

```jsx
<>
  {/*
    
  */}
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
      .green-theme-abc { color: green }
    `,
    }}
  />
  <EzProvider theme={{global: {'blue-theme': 'blue-theme-xyz'}}}>
    <div>blue text</div>
    <EzProvider theme={{global: {'green-theme': 'green-theme-abc'}}}>
      <div>green text</div>
    </EzProvider>
  </EzProvider>
</>
```
