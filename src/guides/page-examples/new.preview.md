### order-details

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
      <EzPageHeader
        title="■■■■■■■■■"
        actions={
          <EzLayout layout="right">
            <EzButton use="primary">■■■■■</EzButton>
          </EzLayout>
        }
      />
      <EzPage>
        <EzFlashMessage use="success" headline="■■■■■■■■■■■■■■■■■■■■■■■■■">
          <p>■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■</p>
        </EzFlashMessage>
        <EzPageSection use="main">
          <EzCard>
            <p>■■■■■■■■■■■■■■■■■■■■■■■■■■■</p>
            <p>■■■■■■■■■■■■■</p>
          </EzCard>

          <EzTable
            title=" "
            columns={[
              {heading: '■■■■■■■■', key: 'first'},
              {heading: '■■■■■■■■', key: 'last'},
            ]}
            items={[
              {first: '■■■■■■', last: '■■■■■■■'},
              {first: '■■■', last: '■■■■■'},
            ]}
          />
        </EzPageSection>
        <EzPageSection use="aside">
          <EzCard title="■■■■■■■■■■■">
            <p>■■■■■■■■■■■■■</p>
            <p>■■■■■■■■■■</p>
            <p>■■■■■■■■■■■■■</p>
            <p>■■■■■■■■■■</p>
          </EzCard>
        </EzPageSection>
      </EzPage>
    </EzNavigation>
  </EzAppLayout>
</ThemeProvider>
```
