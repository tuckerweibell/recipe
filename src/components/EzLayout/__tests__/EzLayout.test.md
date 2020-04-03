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
