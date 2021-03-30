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
    imageSrc="http://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400"
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
    imageSrc="http://via.placeholder.com/900+x+200/00b373/FFFFFF?text=900+x+200"
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
  imageSrc="http://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400"
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
  imageSrc="http://via.placeholder.com/900+x+200/00b373/FFFFFF?text=900+x+200"
  imagePosition={{base: 'left', medium: 'top'}}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```

#### Cards with a heading link (focused)

```jsx
() => {
  React.useEffect(() => {
    // :focus state doesn't persist in the HTML for the visual test
    // so we need to trigger focus via a script element inside the HTML
    const script = document.createElement('script');
    const code = `document.getElementById("focus-me").focus();`;

    try {
      script.appendChild(document.createTextNode(code));
    } catch (e) {
      script.text = code;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <EzPage>
      <EzCard
        title={
          <EzLink href="/orders" use="reset" id="focus-me">
            Amuleto Mexican Table
          </EzLink>
        }
        subtitle="Upscale Authentic Flavor  |  10 mi  |  $$$"
        imageSrc={withPrefix('/images/tacos.jpg')}
        imagePosition="left"
        imageMaxWidth={200}
        clickable
      >
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
            <path
              id="B"
              d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z"
              fill="currentColor"
            />
            <use width="535" height="110" xlink:href="#B" x="105" />
            <use width="535" height="110" xlink:href="#B" x="211" />
            <use width="535" height="110" xlink:href="#B" x="316" />
            <use width="535" height="110" xlink:href="#B" x="421" />
          </svg>
          4.7 (467 reviews)
        </p>
      </EzCard>
    </EzPage>
  );
};
```

#### Card with a specific call to action (focused)

```jsx
() => {
  React.useEffect(() => {
    // :focus state doesn't persist in the HTML for the visual test
    // so we need to trigger focus via a script element inside the HTML
    const script = document.createElement('script');
    const code = `document.getElementById("focus-me").focus();`;

    try {
      script.appendChild(document.createTextNode(code));
    } catch (e) {
      script.text = code;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <EzPage>
      <EzCard
        imageSrc={withPrefix('/images/tacos.jpg')}
        imagePosition="left"
        imageMaxWidth={200}
        clickable
      >
        <EzLayout layout="stack">
          <EzHeading size="3">
            <EzLink href="/orders" use="reset" id="focus-me">
              Taco bar for Taco Tuesday
            </EzLink>
          </EzHeading>
          <p>Or taco any day. Spice up your next meeting.</p>
          <p>
            <EzButton use="tertiary" as="span" aria-hidden>
              Order Now
              <svg
                aria-hidden="true"
                height={16}
                width={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -8 30 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h20M20 5l7 7-8 7" />
              </svg>
            </EzButton>
          </p>
        </EzLayout>
      </EzCard>
    </EzPage>
  );
};
```
