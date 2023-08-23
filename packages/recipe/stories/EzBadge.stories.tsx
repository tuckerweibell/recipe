import React from 'react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import EzIcon from '../src/components/EzIcon';
import EzBadge from '../src/components/EzBadge';

export default {
  component: EzBadge,
  title: 'Figma/EzBadge',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    alignX: 'left',
    children: <EzIcon icon={faCartShopping} />,
    value: 100,
  },
};

export const Primary = {};
