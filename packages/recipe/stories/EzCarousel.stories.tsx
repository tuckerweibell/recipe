import React from 'react';
import {EzCard} from '../src/components/EzCard';
import EzCarousel from '../src/components/EzCarousel';
import EzLink from '../src/components/EzLink';

const items = [
  {name: 'One'},
  {name: 'Two'},
  {name: 'Three'},
  {name: 'Four'},
  {name: 'Five'},
  {name: 'Six'},
  {name: 'Seven'},
  {name: 'Eight'},
  {name: 'Nine'},
  {name: 'Ten'},
];

export default {
  component: EzCarousel,
  title: 'Figma/EzCarousel',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: items.map(item => (
      <EzCard key={item.name} isQuiet>
        {item.name}
      </EzCard>
    )),
    link: (
      <EzLink>
        <a href="https://ezcater.com" target="_blank" rel="noreferrer">
          View All
        </a>
      </EzLink>
    ),
  },
  argTypes: {
    onPageChange: {action: 'page changed'},
  },
};

export const Primary = {};
