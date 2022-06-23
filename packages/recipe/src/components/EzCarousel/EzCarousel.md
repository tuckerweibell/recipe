---
name: EzCarousel
title: Carousel
category: Navigation
path: '/components/ez-carousel'
---

Carousels allow users to browse through a set of items to find items that may be of interest to them.

---

## Best Practices

Carousels should:

- Highlight a small number of items from an otherwise large set (no more than 16 items).
- Be used when there is not enough space to show the complete set of items.
- Contain highly visual content, typically caterer or menu images.
- Be used with an [EzCard](/components/ez-card) for each item.

---

## Examples

### Basic Carousel

A carousel with required props `title` and `description`. The description is used for the `aria-description` of the carousel.

The carousel will automatically determine how many slides to show per page as follows:

- Desktop viewports (`>= 768px`) will show a number of cards per page depending on the container width:
  - container width `> 1024px` will show 4 cards per page
  - container width `650px` to `1023px` will show 3 cards per page
  - container width `< 650px` will show 2 cards per page
- Mobile viewports (`< 768px`) regardless of container width will show all cards with horizontal scroll

To view the behavior on a wider page, see the [responsive example](/cookbook/responsive-carousel) in the Cookbook.

```jsx
<EzPage>
  <EzCarousel title="Basic carousel" description="basic carousel description">
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
  </EzCarousel>
</EzPage>
```

### Link

A carousel with an optional navigational link. You must provide `link` an [EzLink](/components/ez-link#text-link).

```jsx
<EzPage>
  <EzCarousel
    title="Carousel with link"
    description="carousel with link description"
    link={
      <EzLink>
        <a href="https://ezcater.com" target="_blank">
          View All
        </a>
      </EzLink>
    }
  >
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
  </EzCarousel>
</EzPage>
```

### Page Change Handler

Providing an optional function to `onPageChange` will call that action when the user clicks a page change button in the carousel for desktop viewports, providing a method of tracking user interaction. If needed, the previous and current page numbers are available as arguments, starting at page 1.

```jsx
<EzPage>
  <EzCarousel
    title="Carousel with page change handler"
    description="carousel with page change handler description"
    onPageChange={(previous, current) => console.log('previous:', previous, 'current:', current)}
  >
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 94%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 84%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 74%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 64%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 54%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 44%)'}} />
    <Placeholder style={{width: '100%', backgroundColor: 'hsl(230deg, 44%, 34%)'}} />
  </EzCarousel>
</EzPage>
```

### Practical Example

An example of how you might use the carousel in conjunction with other components to build a compelling experience for browsing products.

To view the behavior on a wider page, see the [responsive example](/cookbook/responsive-carousel).

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
      title: 'Tacos Supreme',
      subtitle: 'Mexican From Scratch |  2 mi  |  $$',
      image: `${withPrefix('/images/tacos.jpg')}`,
      reviews: '4.2 (39 reviews)',
    },
    {
      title: 'California Bagel',
      subtitle: 'Voted Best Bagels!  |  1 mi  |  $$$',
      image: `${withPrefix('/images/bagels.jpg')}`,
      reviews: '4.8 (836 reviews)',
    },
    {
      title: 'Mamas Italian Kitchen',
      subtitle: 'True Italian  |  10 mi  |  $$$$',
      image: `${withPrefix('/images/pasta.jpg')}`,
      reviews: '4.9 (18 reviews)',
    },
    {
      title: 'Main Street Cafe',
      subtitle: 'American Dining On The Go  |  3 mi  |  $$',
      image: `${withPrefix('/images/sandwiches.jpg')}`,
      reviews: '4.3 (274 reviews)',
    },
  ];

  return (
    <EzPage>
      <EzCarousel title="Practical example" description="practical example description">
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

## Related components

- [Cards](/components/ez-card)
- [Links](/components/ez-link)
- [Buttons](/components/ez-button)
