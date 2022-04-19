---
name: EzCarousel
title: Carousel
category: Navigation
path: '/components/ez-carousel'
---

Carousels allow users to browse through a set of items, to find items that may be of interest to them.

---

## Best Practices

Carousels should:

- Highlight a small number of items from an otherwise large set.
- Be used to preview items and indicate that more items may be available, other than what is currently shown.
- Be used when there is not enough space to show the complete set of items.
- Contain highly visual content, typically caterer or menu images.

---

## Examples

### Basic carousel

A carousel with default props. The carousel will show a single item per page, with no gap between items.

```jsx
<EzCarousel>
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
</EzCarousel>
```

### Slides per page

Varies the number of items visible at the same time.

The `slidesPerPage` prop accents either an integer, or an object defining the number of visible items at different breakpoints. The `base` value will be applied from the smallest devices up, until reaching the next breakpoint.

```jsx
<EzLayout layout="stack">
  <EzHeading size="3">Show two slides on small screens, 4 slides on larger screens</EzHeading>
  <EzCarousel slidesPerPage={{base: 2, medium: 4}}>
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 24%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 14%)'}} />
    <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 4%)'}} />
  </EzCarousel>
</EzLayout>
```

### Page change handler

Providing a function to `onPageChange` creates the ability to take an action when the user clicks or scrolls through the carousel in either direction. This introduces a way to track user interaction with the carousel, if `onPageChange` is given a tracking event function. The index of the previous and current pages are available as arguments to the `onChangePage` function, if needed, starting at index 0.

```jsx
<EzCarousel
  onPageChange={({previous, current}) => console.log('previous:', previous, 'current:', current)}
>
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
</EzCarousel>
```

### Peek

Offset the slide size to show a glimpse of the next and/or previous slides at the edge of the carousel.

```jsx
<EzCarousel slidesPerPage={2} peek>
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
</EzCarousel>
```

### Gap

Applies space between between slides.

```jsx
<EzCarousel slidesPerPage={2} gap peek>
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
  <Placeholder style={{backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
</EzCarousel>
```

### Practical Example

An example of how you might use the carousel in conjunction with other components to build a compelling experience for browsing products.

```jsx
() => {
  const caterers = [
    {
      title: 'Splitz Wrap Boxed Lunch',
      subtitle: 'Corporate Catering  |  3 mi  |  $$$$',
      image: `${withPrefix('/images/wrap.jpg')}`,
      reviews: '4.7 (463 reviews)',
    },
    {
      title: 'Flaming Pit Pizza',
      subtitle: 'Globally Inspired Pizza  |  1 mi  |  $$$$',
      image: `${withPrefix('/images/pizza.jpg')}`,
      reviews: '4.8 (671 reviews)',
    },
    {
      title: 'Dakzen Thai',
      subtitle: 'Modern Thai  |  10 mi  |  $$$$',
      image: `${withPrefix('/images/thai.jpg')}`,
      reviews: '4.7 (467 reviews)',
    },
    {
      title: 'Splitz Wrap Boxed Lunch',
      subtitle: 'Corporate Catering  |  3 mi  |  $$$$',
      image: `${withPrefix('/images/wrap.jpg')}`,
      reviews: '4.7 (463 reviews)',
    },
    {
      title: 'Flaming Pit Pizza',
      subtitle: 'Globally Inspired Pizza  |  1 mi  |  $$$$',
      image: `${withPrefix('/images/pizza.jpg')}`,
      reviews: '4.8 (671 reviews)',
    },
    {
      title: 'Dakzen Thai',
      subtitle: 'Modern Thai  |  10 mi  |  $$$$',
      image: `${withPrefix('/images/thai.jpg')}`,
      reviews: '4.7 (467 reviews)',
    },
  ];

  return (
    <EzPage>
      <EzCarousel slidesPerPage={2} gap peek>
        {caterers.map((card, index) => {
          return (
            <EzCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              imageSrc={card.image}
              imageMaxHeight={120}
              size="small"
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 550 100"
                  height="16"
                  width="80"
                >
                  <use xlinkHref="#fiveStarRating" />
                </svg>
                {card.reviews}
              </p>
            </EzCard>
          );
        })}
      </EzCarousel>
    </EzPage>
  );
};
```

---

## Browser support

The Carousel component internally uses [`Element.prototype.scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) and may require a polyfill to provide [browser support](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#Browser_compatibility) depending on the specific requirements for your application.

We recommend using [Polyfill.io](https://polyfill.io/v3/) in your application to apply necessary polyfills only when they are needed for the requesting browser:

<br>`https://polyfill.io/v3/polyfill.min.js?features=smoothscroll`

---

## Related components

- [Cards](/components/ez-card)
