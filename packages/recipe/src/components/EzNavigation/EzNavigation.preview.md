```jsx
<ThemeProvider theme={{...themes.standard, breakpoints: {medium: '768px', large: '800px'}}}>
  <EzAppLayout>
    <EzNavigation
      home={{
        href: '/',
        label: '■■■■■■■■',
        logo: {component: <EzLogo />},
      }}
      links={[
        {href: '#', label: '■■■■■■', active: false},
        {href: '#', label: '■■■■■■■■■', active: true},
        {href: '#', label: '■■■■■■', active: false},
      ]}
    >
      <EzPage>
        <EzCard>
          <p>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■</p>
          <p>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■</p>
          <p>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■</p>
        </EzCard>
      </EzPage>
    </EzNavigation>
  </EzAppLayout>
</ThemeProvider>
```
