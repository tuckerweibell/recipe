import React from 'react';
import EzLayout from '../src/components/EzLayout';

const items = [
  {name: 'One'},
  {name: 'Two'},
  {name: 'Three'},
  {name: 'Four'},
  {name: 'Five'},
  {name: 'Six'},
];

export default {
  component: EzLayout,
  title: 'Figma/EzLayout',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: items.map(item => (
      <div
        key={item.name}
        style={{border: '2px solid black', padding: '10px', borderRadius: '6px'}}
      >
        {item.name}
      </div>
    )),
    layout: {base: 'tile', medium: 'split'},
  },
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['basic', 'right', 'equal', 'split', 'stack', 'tile', 'cluster'],
      },
    },
    alignY: {
      control: {
        type: 'select',
        options: ['top', 'center', 'bottom', 'stretch'],
      },
    },
    alignX: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'stretch'],
      },
    },
    columns: {
      control: {
        type: 'object', // TODO: make responsive layouts better later
      },
    },
    css: {
      control: {
        type: 'none',
      },
    },
  },
};

export const Primary = {};
