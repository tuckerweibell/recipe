### Items centered on second page

```jsx
() => {
  useNextPage();
  return (
    <EzCarousel slidesPerPage={2} peek>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
      <Placeholder>5</Placeholder>
      <Placeholder>6</Placeholder>
    </EzCarousel>
  );
};
```

### Items on last page with odd number of items

```jsx
() => {
  useNextPage();
  return (
    <EzCarousel slidesPerPage={{base: 1, medium: 2}} peek>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
    </EzCarousel>
  );
};
```

### Cards are always equal in width even with uneven content

```jsx
<div style={{width: 700}}>
  <EzCarousel slidesPerPage={2} peek gap>
    <EzCard
      title="Short name"
      imageSrc={withPrefix('/images/wrap.jpg')}
      imageMaxHeight={120}
      size="small"
    />
    <EzCard
      title="Constantine Wolfeschlegelsteinhausenbergerdorff"
      imageSrc={withPrefix('/images/pizza.jpg')}
      imageMaxHeight={120}
      size="small"
    />
    <Placeholder>3</Placeholder>
  </EzCarousel>
</div>
```
