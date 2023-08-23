import React from 'react';
import {EzPage} from '../src/components/EzPage';

export default {
  component: EzPage,
  title: 'Figma/EzPage',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: <div>Some page content</div>,
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: ['white', 'gray'],
      },
    },
  },
};

export const Primary = {};
