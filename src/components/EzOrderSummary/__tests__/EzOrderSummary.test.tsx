import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzOrderSummary.md';
import regressionTests from './EzOrderSummary.test.md';
import EzOrderSummary from '../EzOrderSummary';
import {EzButton, EzPage} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzButton, EzPage, EzOrderSummary};

describe('EzOrderSummary', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzOrderSummary
        title="Required heading"
        subtitle="Optional subtitle"
        items={[
          {
            name: 'Build-Your-Own Chicken Hot Buffet',
            price: '$10.29',
            quantity: 54,
            total: '$178.92',
            options: [
              {label: 'Chicken Type', value: 'Original Rotisserie'},
              {label: 'Sides', value: 'Mac & Cheese, Mashed Potatoes & Gravy'},
              {label: 'Add', value: '14 x Green Beans @ $2.49'},
            ],
          },
          {
            name: 'Make-Your-Own Bowl',
            price: '$120.00',
            quantity: 2,
            total: '$240.00',
            options: [
              {label: 'Base', value: 'Vermicelli Noodles'},
              {label: 'Proteins', value: 'Ginger-Curry Chicken, Ginger-Curry Tofu'},
              {label: 'Dressings', value: 'Ginger Miso Dressing'},
              {label: 'This group includes', value: '4 Vegetarians'},
            ],
          },
          {
            name: 'Caesar Salad w/ Chicken',
            price: '$34.99',
            quantity: 1,
            total: '$34.99',
            specialInstructions: 'Salad dressing and croutons on the side please!',
          },
          {
            name: 'Chocolate Chunk Cookies',
            price: '$1.29',
            quantity: 14,
            total: '$18.06',
          },
        ]}
        tableware={{
          options: [{label: 'Include', value: 'Cups, Napkins, Plates, Utensils'}],
        }}
        summary={{
          lineItems: [
            {label: 'Subtotal', value: '$471.97'},
            {label: 'Delivery Fee', value: '$20.00'},
            {label: 'ezRewards Promo', value: '-$15.00'},
            {label: '7.0% Sales Tax', value: '$33.04'},
          ],
          total: '$510.01',
        }}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
