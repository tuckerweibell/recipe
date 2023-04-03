The following test emulate having styles injected via css-modules, so we don't need to maintain this dependency in tests.

### uses provided theme

This test asserts that the provided theme is applied to the descendant content.

```jsx
<>
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
    `,
    }}
  />
  <EzProvider theme={{toString: () => 'blue-theme-xyz'}}>
    <EzTextStyle>blue text</EzTextStyle>
  </EzProvider>
  <EzTextStyle>body text (default)</EzTextStyle>
</>
```

### nested providers follow their ancestor settings by default

```jsx
<>
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
    `,
    }}
  />
  <EzProvider theme={{toString: () => 'blue-theme-xyz'}}>
    <EzTextStyle>blue text</EzTextStyle>
    <EzProvider theme={{toString: () => 'other-theme-xyz'}}>
      <EzTextStyle>blue text</EzTextStyle>
    </EzProvider>
  </EzProvider>
</>
```

### nested providers follow their ancestors after updates

```jsx
() => {
  const blueTheme = {toString: () => 'blue-theme-xyz'};
  const greenTheme = {toString: () => 'green-theme-abc'};
  const [theme, setTheme] = React.useState(blueTheme);

  React.useEffect(() => {
    // immediately set the theme to green on mount
    setTheme(greenTheme);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .blue-theme-xyz { color: blue }
          .green-theme-abc { color: green }
        `,
        }}
      />
      <EzProvider theme={theme}>
        <EzTextStyle>green text</EzTextStyle>
        <EzProvider theme={{toString: () => 'other-theme-xyz'}}>
          <EzTextStyle>green text</EzTextStyle>
        </EzProvider>
      </EzProvider>
    </>
  );
};
```

### nested providers can override their ancestors theme

```jsx
<>
  <style
    dangerouslySetInnerHTML={{
      __html: `
      .blue-theme-xyz { color: blue }
      .green-theme-abc { color: green }
    `,
    }}
  />
  <EzProvider theme={{toString: () => 'blue-theme-xyz'}}>
    <EzTextStyle>blue text</EzTextStyle>
    <EzProvider theme={{toString: () => 'green-theme-abc'}}>
      <EzTextStyle>green text</EzTextStyle>
    </EzProvider>
  </EzProvider>
</>
```
