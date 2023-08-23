import EzTextStyle from '../src/components/EzTextStyle';

export default {
  component: EzTextStyle,
  title: 'Figma/EzTextStyle',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: 'Some text',
  },
  argTypes: {
    use: {
      control: {
        type: 'select',
        options: ['strong', 'subdued'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['center', 'left', 'right'],
      },
    },
  },
};

export const Primary = {};
