### cluster - horizontal

NOTE: Only cluster and stack layouts supports horizontal alignment.

`basic`/`right` layouts are always left or right aligned respectively.
`equal`, `split`, and `tile` fill the horizontal space.

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">cluster - align left</EzHeading>
    <EzLayout layout="cluster" alignX="left">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align right</EzHeading>
    <EzLayout layout="cluster" alignX="right">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align center</EzHeading>
    <EzLayout layout="cluster" alignX="center">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### stack - horizontal

```jsx
<EzCard>
  <EzHeading size="3">stack - align left</EzHeading>
  <EzLayout layout="stack" alignX="stretch">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
  <EzHeading size="3">stack - align right</EzHeading>
  <EzLayout layout="stack" alignX="right">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
  <EzHeading size="3">stack - align center</EzHeading>
  <EzLayout layout="stack" alignX="center">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```

### stack - horizontal - stretch

```jsx
<EzCard>
  <EzHeading size="3">stack - stretch</EzHeading>
  <EzLayout layout="stack" alignX="stretch">
    <Placeholder height={48} />
    <Placeholder height={48} />
    <Placeholder height={48} />
  </EzLayout>
</EzCard>
```

### basic - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">basic - align top</EzHeading>
    <EzLayout layout="basic" alignY="top">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">basic - align center</EzHeading>
    <EzLayout layout="basic" alignY="center">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">basic - align bottom</EzHeading>
    <EzLayout layout="basic" alignY="bottom">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">basic - align stretch</EzHeading>
    <EzLayout layout="basic" alignY="stretch">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### right - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">right - align top</EzHeading>
    <EzLayout layout="right" alignY="top">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">right - align center</EzHeading>
    <EzLayout layout="right" alignY="center">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">right - align bottom</EzHeading>
    <EzLayout layout="right" alignY="bottom">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">right - align stretch</EzHeading>
    <EzLayout layout="right" alignY="stretch">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### equal - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">equal - align top</EzHeading>
    <EzLayout layout="equal" alignY="top">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">equal - align center</EzHeading>
    <EzLayout layout="equal" alignY="center">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">equal - align bottom</EzHeading>
    <EzLayout layout="equal" alignY="bottom">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">equal - align stretch</EzHeading>
    <EzLayout layout="equal" alignY="stretch">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### split - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">split - align top</EzHeading>
    <EzLayout layout="split" alignY="top">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">split - align center</EzHeading>
    <EzLayout layout="split" alignY="center">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">split - align bottom</EzHeading>
    <EzLayout layout="split" alignY="bottom">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">split - align stretch</EzHeading>
    <EzLayout layout="split" alignY="stretch">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### tile - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">tile - align top</EzHeading>
    <EzLayout layout="tile" columns={3} alignY="top">
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={80} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
    </EzLayout>
    <EzHeading size="3">tile - align center</EzHeading>
    <EzLayout layout="tile" columns={3} alignY="center">
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={80} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
    </EzLayout>
    <EzHeading size="3">tile - align bottom</EzHeading>
    <EzLayout layout="tile" columns={3} alignY="bottom">
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={80} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
    </EzLayout>
    <EzHeading size="3">tile - align stretch</EzHeading>
    <EzLayout layout="tile" columns={3} alignY="stretch">
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={80} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
      <Placeholder minHeight={40} height="auto" />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### cluster - vertical

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">cluster - align top</EzHeading>
    <EzLayout layout="cluster" alignY="top">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align center</EzHeading>
    <EzLayout layout="cluster" alignY="center">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align bottom</EzHeading>
    <EzLayout layout="cluster" alignY="bottom">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align stretch</EzHeading>
    <EzLayout layout="cluster" alignY="stretch">
      <Placeholder minHeight={40} height="auto" width={48} />
      <Placeholder minHeight={100} height="auto" width={48} />
      <Placeholder minHeight={60} height="auto" width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### responsive - medium - horizontal

NOTE: since only cluster supports horizontal alignment, we only have to check that we can change breakpoints from/to cluster
and that the alignment doesn't cause odd side-effects when reset

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">cluster (medium) - align right</EzHeading>
    <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignX="right">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
    <EzHeading size="3">basic (medium) - ignore alignment</EzHeading>
    <EzLayout layout={{base: 'cluster', medium: 'basic'}} alignX="right">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
    <EzHeading size="3">cluster - align right (medium)</EzHeading>
    <EzLayout layout="cluster" alignX={{base: 'center', medium: 'right'}}>
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### responsive - basic base - horizontal

```jsx
<Media size="small">
  <EzCard>
    <EzHeading size="3">basic (base) - ignore alignment</EzHeading>
    <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignX="right">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCard>
</Media>
```

### responsive - cluster base - horizontal

```jsx
<Media size="small">
  <EzCard>
    <EzHeading size="3">cluster (base) - align right</EzHeading>
    <EzLayout layout={{base: 'cluster', medium: 'basic'}} alignX="right">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCard>
</Media>
```

### responsive - cluster - center base - horizontal

```jsx
<Media size="small">
  <EzCard>
    <EzHeading size="3">cluster - align center (base)</EzHeading>
    <EzLayout layout="cluster" alignX={{base: 'center', medium: 'right'}}>
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </EzLayout>
  </EzCard>
</Media>
```

### responsive layout - responsive alignment - horizontal

```jsx
<EzCard>
  <EzHeading size="3">cluster (medium) - align right (medium)</EzHeading>
  <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignX={{base: 'center', medium: 'right'}}>
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```
