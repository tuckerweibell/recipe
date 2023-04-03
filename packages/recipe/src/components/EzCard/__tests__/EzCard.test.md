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
          <EzButton variant="outlined" color="destructive">
            Delete
          </EzButton>
          <EzButton variant="outlined">Edit</EzButton>
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
    <div ref={containerRef} style={{minHeight: 400}}>
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

### Card image responsive using base right and medium top

```jsx
<EzCard
  title="Card with image on right"
  imageSrc="https://dummyimage.com/800x400/00b373/fff"
  imagePosition={{base: 'right', medium: 'top'}}
  imageMaxHeight={192}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```

### Card image responsive using base top and medium left

```jsx
<EzCard
  title="Card with image at top"
  imageSrc="https://dummyimage.com/900x200/00b373/fff"
  imagePosition={{base: 'top', medium: 'left'}}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```

### Card image responsive using base top and medium right

```jsx
<EzCard
  title="Card with image on right"
  imageSrc="https://dummyimage.com/800x400/00b373/fff"
  imagePosition={{base: 'top', medium: 'right'}}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </p>
</EzCard>
```

### Card image responsive using base left and medium top

```jsx
<EzCard
  title="Card with image at top"
  imageSrc="https://dummyimage.com/900x200/00b373/fff"
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
            <EzHeading size="3">Amuleto Mexican Table</EzHeading>
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
            <use width="535" height="110" xlinkHref="#B" x="105" />
            <use width="535" height="110" xlinkHref="#B" x="211" />
            <use width="535" height="110" xlinkHref="#B" x="316" />
            <use width="535" height="110" xlinkHref="#B" x="421" />
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
          <EzLink href="/orders" use="reset" id="focus-me">
            <EzHeading size="3">Taco bar for Taco Tuesday</EzHeading>
          </EzLink>

          <p>Or taco any day. Spice up your next meeting.</p>
          <p>
            <EzButton variant="text">Order Now →</EzButton>
          </p>
        </EzLayout>
      </EzCard>
    </EzPage>
  );
};
```

### Quiet card should honor size prop if provided

```jsx
<EzPage>
  <EzCard isQuiet size="medium">
    <EzLayout layout="stack">
      <EzHeading size="5">Braised Beef Rice Bowl</EzHeading>
      <small>$11.65</small>
      <EzTextStyle use="subdued" as="small">
        Topped with your choices of up to 5 vegetables and 3 sauces. Consider adding drinks. Please
        limit your order to three bowl types.
      </EzTextStyle>
    </EzLayout>
  </EzCard>
</EzPage>
```
