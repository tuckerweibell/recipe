import React from 'react';
import * as icons from '@ezcater/icons';
import EzChip from '../src/components/EzChip';
import EzIcon from '../src/components/EzIcon';

export default {
  component: EzChip,
  title: 'Figma/EzChip',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    onDelete: {action: 'deleted'},
    icon: <EzIcon icon={icons.Coffee} size="inherit" />,
  },
  argTypes: {
    onClick: {action: 'clicked!'},
    onDelete: {
      control: {
        type: 'boolean', // TODO: make this an action later
      },
    },
    className: {
      control: {
        type: 'none',
      },
    },
    icon: {
      options: Object.keys(icons).sort(),
      mapping: Object.keys(icons).reduce((acc, next) => {
        acc[next] = <EzIcon icon={icons[next]} size="inherit" />;
        return acc;
      }, {}),
      control: {
        type: 'select',
      },
    },
  },
};

export const Primary = {};
