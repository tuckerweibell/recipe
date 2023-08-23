import React from 'react';
import EzButton from '../src/components/EzButton';
import EzBlankState from '../src/components/EzBlankState';

export default {
  component: EzBlankState,
  title: 'Figma/EzBlankState',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    action: <EzButton>Take action</EzButton>,
    title: 'Blank state title',
    message: 'Blank state description',
    imageSrc: 'https://ezcater.github.io/recipe/images/review-star.svg',
  },
};

export const Primary = {};
