### lead-form

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
      <EzPageHeader title="■■■■■■■■■" />
      <EzPage>
        <EzCard title="■■■■■ ■■■■">
          <EzCardSection>
            <EzFormLayout>
              <EzLayout layout="equal">
                <EzField type="text" label="■■■ ■■■" style={{maxWidth: '300px'}} />
                <EzField type="text" label="■■■ ■■■" style={{maxWidth: '300px'}} />
              </EzLayout>
              <EzLayout layout="equal">
                <EzField type="text" label="■■■" style={{maxWidth: '300px'}} />
                <EzField type="text" label="■■■ ■■■ ■■" style={{maxWidth: '300px'}} />
              </EzLayout>
              <EzField type="text" label="■■■ ■■" style={{maxWidth: '645px'}} />
            </EzFormLayout>
          </EzCardSection>
          <EzCardSection>
            <EzButton use="primary">■■■</EzButton>
          </EzCardSection>
        </EzCard>
      </EzPage>
    </EzNavigation>
  </EzAppLayout>
</ThemeProvider>
```

### promos-form

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
      <EzPageHeader title="■■■■■■■■■" />
      <EzPage>
        <EzCard title="■■■■■ ■■■■">
          <EzCardSection>
            <EzFormLayout>
              <EzLayout layout="equal">
                <EzField type="text" label="■■■ ■■■" style={{maxWidth: '308px'}} />
                <EzField type="text" label="■■■ ■■■" style={{maxWidth: '300px'}} />
              </EzLayout>
              <EzLayout layout="equal">
                <div>
                  <EzLayout layout="equal" style={{alignItems: 'flex-end'}}>
                    <EzField type="text" label="■■■ ■■■" style={{maxWidth: '130px'}} />
                    <EzSegmentedControl
                      name="promo-value-unit"
                      label="Promotion value: unit"
                      labelPosition="hidden"
                      options={[
                        {label: '■', value: 'percentage'},
                        {label: '■', value: 'dollar'},
                      ]}
                      active="percentage"
                    />
                  </EzLayout>
                </div>
                <EzField type="text" label="■■■ ■■■" style={{maxWidth: '300px'}} />
              </EzLayout>
            </EzFormLayout>
          </EzCardSection>
          <EzCardSection>
            <EzCheckbox
              acknowledgement
              label="■■■ ■■■ ■■ ■■■"
              terms="■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■ ■■■ ■■■ ■■"
            />
          </EzCardSection>
          <EzCardSection>
            <EzLayout layout="basic">
              <EzButton use="primary">■■■</EzButton>
              <EzButton use="secondary">■■■</EzButton>
            </EzLayout>
          </EzCardSection>
        </EzCard>
      </EzPage>
    </EzNavigation>
  </EzAppLayout>
</ThemeProvider>
```
