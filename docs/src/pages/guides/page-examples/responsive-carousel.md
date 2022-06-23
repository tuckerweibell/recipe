---
name: responsive-carousel
title: Responsive carousel
category: Marketing Screens
path: '/cookbook/responsive-carousel'
tags: ['wide']
---

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
    <EzCarousel
      title="Caterers (7)"
      link={
        <EzLink>
          <a href="https://ezcater.com" target="_blank">
            View All
          </a>
        </EzLink>
      }
      description="Carousel of caterers"
      onPageChange={(previous, current) =>
        console.log('page changed!, previous: ', previous, 'current: ', current)
      }
    >
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
                <use xlinkHref="#fiveStarRating" />
              </svg>
              {card.reviews}
            </p>
          </EzCard>
        );
      })}
    </EzCarousel>
  );
};
```

---

## Related components

- [Carousel](/components/ez-carousel)
- [Cards](/components/ez-card)
- [Links](/components/ez-link)
- [Buttons](/components/ez-button)
