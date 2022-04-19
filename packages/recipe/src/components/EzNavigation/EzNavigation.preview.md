```jsx
<ThemeProvider theme={{...themes.standard, breakpoints: {medium: '768px', large: '800px'}}}>
  <EzAppLayout>
    <EzNavigation
      home={{
        href: '/',
        label: '■■■■■■■■',
        logo: {
          src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 100 100" height="100px" width="100px"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightgray"></circle></svg>`,
          width: 50,
        },
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
