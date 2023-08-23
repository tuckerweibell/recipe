import * as icons from '@ezcater/icons';
import EzIcon from '../src/components/EzIcon';

export default {
  component: EzIcon,
  title: 'Figma/EzIcon',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    icon: icons.Coffee,
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
  },
};

export const Primary = {};
