import React from 'react';
import dedent from 'ts-dedent';
import {EzCard} from '../../EzCard';
import EzCarousel from '../EzCarousel';
import {EzCarouselProps} from '../EzCarousel.types';

export const caterers = [
  {
    title: 'Splitz Wrap Boxed Lunch',
    subtitle: 'Corporate Catering  |  3 mi  |  $$$$',
    image: '/images/wrap.jpg',
    reviews: '4.7 (463 reviews)',
  },
  {
    title: 'Flaming Pit Pizza',
    subtitle: 'Globally Inspired Pizza  |  1 mi  |  $$$$',
    image: '/images/pizza.jpg',
    reviews: '4.8 (671 reviews)',
  },
  {
    title: 'Dakzen Thai',
    subtitle: 'Modern Thai  |  10 mi  |  $$$$',
    image: '/images/thai.jpg',
    reviews: '4.7 (467 reviews)',
  },
  {
    title: 'Tacos Supreme',
    subtitle: 'Mexican From Scratch |  2 mi  |  $$',
    image: '/images/tacos.jpg',
    reviews: '4.2 (39 reviews)',
  },
  {
    title: 'California Bagel',
    subtitle: 'Voted Best Bagels!  |  1 mi  |  $$$',
    image: '/images/bagels.jpg',
    reviews: '4.8 (836 reviews)',
  },
  {
    title: 'Mamas Italian Kitchen',
    subtitle: 'True Italian  |  10 mi  |  $$$$',
    image: '/images/pasta.jpg',
    reviews: '4.9 (18 reviews)',
  },
  {
    title: 'Main Street Cafe',
    subtitle: 'American Dining On The Go  |  3 mi  |  $$',
    image: '/images/sandwiches.jpg',
    reviews: '4.3 (274 reviews)',
  },
];

const EzCarouselExample = (args?: EzCarouselProps) => (
  <EzCarousel title="Caterers" description="A list of caterers" {...args}>
    {caterers.map((caterer, index) => (
      <EzCard
        key={index}
        title={caterer.title}
        subtitle={caterer.subtitle}
        imageSrc={caterer.image}
        imageMaxHeight={120}
        size="small"
      >
        {caterer.reviews}
      </EzCard>
    ))}
  </EzCarousel>
);

const EzCarouselExampleJSX = (args?: string) => dedent`
  const caterers = ${JSON.stringify(caterers, null, 2)};

  return (
    <EzPage>
      <EzCarousel
        title="Caterers"
        description="A list of caterers"${
          args
            ? `
      ${args}`
            : ''
        }
      >
        {caterers.map((caterer, index) => (
          <EzCard
            key={index}
            title={caterer.title}
            subtitle={caterer.subtitle}
            imageSrc={caterer.image}
            imageMaxHeight={120}
            size="small"
          >
            {caterer.reviews}
          </EzCard>
        ))}
      </EzCarousel>
    </EzPage>
  );
`;

export {EzCarouselExample, EzCarouselExampleJSX};
