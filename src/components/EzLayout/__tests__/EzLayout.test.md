### base styles should be reset when applying breakpoint styles

Note: the black background here is to highlight the alignment of the items.
When items are misaligned, the content items aren't symmetric.

```jsx
<EzCard>
  <Global
    styles={css(`
    .basic > * {
      background-color: yellow;
    }
  `)}
  />
  <EzLayout
    layout={{base: 'stack', medium: 'split'}}
    className="basic"
    style={{backgroundColor: 'black'}}
  >
    <div>Content</div>
    <div>Content</div>
  </EzLayout>
</EzCard>
```

### Collapse to single column on small screens

```jsx
<Media size="small">
  <EzCard>
    <Global
      styles={css(`
    .tile > * {
      background-color: cadetblue;
      color: white;
    }
  `)}
    />
    <EzLayout layout="tile" className="tile" columns={{base: 1, medium: 3}}>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </EzLayout>
  </EzCard>
</Media>
```

### Resets margin correctly

```jsx
<EzCard>
  <EzCardSection>
    <EzLayout layout={{base: 'cluster', medium: 'basic'}}>
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCardSection>
  <EzCardSection>
    <EzLayout layout={{base: 'basic', medium: 'cluster'}}>
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### Applies new margin correctly to elements with margin rest

```jsx
<EzPage>
  <EzCard>
    <EzCardSection>
      <EzLayout layout="stack">
        <EzHeading size={3}>Growth from your site & ours</EzHeading>
        <p>We've spent years solving the complexities of catering orders.</p>
      </EzLayout>
    </EzCardSection>
  </EzCard>
</EzPage>
```
