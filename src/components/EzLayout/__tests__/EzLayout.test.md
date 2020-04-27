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
