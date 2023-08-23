import EzToggle from '../src/components/EzToggle';

export default {
  component: EzToggle,
  title: 'Figma/EzToggle',
  parameters: {
    theme: 'fulfillment',
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {action: 'clicked!'},
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Primary = {};
