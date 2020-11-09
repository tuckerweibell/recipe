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

---

## Related components

- [Cards](/components/ez-card)
