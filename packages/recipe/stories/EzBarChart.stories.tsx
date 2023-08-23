import EzBarChart from '../src/components/EzBarChart';

export default {
  component: EzBarChart,
  title: 'Figma/EzBarChart',
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
