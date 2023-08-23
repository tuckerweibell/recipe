import EzLineChart from '../src/components/EzLineChart';

export default {
  component: EzLineChart,
  title: 'Figma/EzLineChart',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    data: [
      {x: 1, y: 21},
      {x: 2, y: 54},
      {x: 3, y: 43},
      {x: 4, y: 88},
    ],
  },
  argTypes: {
    idPrefix: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Primary = {};
