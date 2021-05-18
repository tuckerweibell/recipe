### base styles should be reset when applying breakpoint styles

Note: the black background here is to highlight the alignment of the items.
When items are misaligned, the content items aren't symmetric.

```jsx
<div>
  <Global
    styles={css(`
    .basic > * > * {
      background-color: yellow;
    }
  `)}
  />
  <EzCard>
    <EzLayout
      layout={{base: 'stack', medium: 'split'}}
      className="basic"
      style={{backgroundColor: 'black'}}
    >
      <div>Content</div>
      <div>Content</div>
    </EzLayout>
  </EzCard>
</div>
```

### Collapse to single column on small screens

```jsx
<div>
  <Global
    styles={css(`
    .tile > *  > * {
      background-color: cadetblue;
      color: white;
    }
  `)}
  />
  <Media size="small">
    <EzCard>
      <EzLayout layout="tile" className="tile" columns={{base: 1, medium: 3}}>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    </EzCard>
  </Media>
</div>
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

### Only applies columns when using tile layout

```jsx
<EzPage>
  <EzCard>
    <EzLayout layout={{base: 'tile', medium: 'basic'}} columns={3}>
      <div style={{backgroundColor: 'cadetblue'}}>Content</div>
      <div style={{backgroundColor: 'cadetblue'}}>Content</div>
      <div style={{backgroundColor: 'cadetblue'}}>Content</div>
    </EzLayout>
  </EzCard>
</EzPage>
```

### Items with width: 100% should be fully contained within layout

```jsx
<EzPage>
  <EzLayout layout="basic">
    <EzLayout layout="stack">
      <EzHeading size="3" id="search-label">
        Search
      </EzHeading>
      <EzSearchInput aria-labelledby="search-label" placeholder="Caterer, cuisine, etc." />
    </EzLayout>
    <p>hello world</p>
  </EzLayout>
</EzPage>
```
