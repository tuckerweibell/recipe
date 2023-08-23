import EzWell from '../src/components/EzWell';

export default {
  component: EzWell,
  title: 'Figma/EzWell',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: 'Well',
  },
  argTypes: {
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    'aria-labelledby': {
      control: {
        type: 'text',
      },
    },
  },
};

export const Primary = {};
