### Card action alignment

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    subtitle="Descriptive information about the card"
    actions={<EzButton>View</EzButton>}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with expandable footer (closed)

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    expandable={{
      expandLabel: 'See more orders',
      collapseLabel: 'See fewer orders',
      onClick: e => {
        e.preventDefault();
      },
      isExpanded: false,
    }}
  >
    <EzCardSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <EzCardExpandable isExpanded={false}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCardExpandable>
    </EzCardSection>
  </EzCard>
</EzPage>
```

### Card with expandable footer (open)

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    expandable={{
      expandLabel: 'See more orders',
      collapseLabel: 'See fewer orders',
      onClick: e => {
        e.preventDefault();
      },
      isExpanded: true,
    }}
  >
    <EzCardSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <EzCardExpandable isExpanded={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCardExpandable>
    </EzCardSection>
  </EzCard>
</EzPage>
```

#### Card with multiple actions causing wrap

```jsx
<EzPage>
  <EzPageSection use="aside">
    <EzCard
      title="Card Heading"
      actions={
        <EzLayout layout="basic">
          <EzButton use="secondary" destructive>
            Delete
          </EzButton>
          <EzButton>Edit</EzButton>
          <EzButton>View</EzButton>
        </EzLayout>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

### Card doesn't clip overflow of absolutely positioned content

```jsx
() => {
  const containerRef = React.createRef();

  return (
    <div ref={containerRef}>
      <EzPage>
        <EzPageSection use="aside">
          <EzCard>
            <Open containerRef={containerRef}>
              <EzField type="date" value="01/01/2020" />
            </Open>
          </EzCard>
        </EzPageSection>
      </EzPage>
    </div>
  );
};
```

### Card image responsive small screen image-right

```jsx
<Media size="small">
  <EzCard
    title="Card with image on right"
    imageSrc="https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400"
    imagePosition={{base: 'right', medium: 'top'}}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</Media>
```

### Card image responsive small screen image-top

```jsx
<Media size="small">
  <EzCard
    title="Card with image at top"
    imageSrc="https://via.placeholder.com/900+x+200/00b373/FFFFFF?text=900+x+200"
    imagePosition={{base: 'top', medium: 'left'}}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</Media>
```

### Card image responsive medium screen image-right

```jsx
<EzCard
  title="Card with image on right"
  imageSrc="https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400"
  imagePosition={{base: 'top', medium: 'right'}}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```

### Card image responsive medium screen image-top

```jsx
<EzCard
  title="Card with image at top"
  imageSrc="https://via.placeholder.com/900+x+200/00b373/FFFFFF?text=900+x+200"
  imagePosition={{base: 'left', medium: 'top'}}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```
