import React from 'react';
import * as icons from '@ezcater/icons';
import EzButton from '../src/components/EzButton';
import EzIcon from '../src/components/EzIcon';

export default {
  component: EzButton,
  title: 'Figma/EzButton',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: 'Click me!',
    icon: <EzIcon icon={icons.Coffee} />,
  },
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['reset', 'button', 'submit'],
      },
    },
    onClick: {action: 'clicked'},
    onKeyDown: {action: 'key down'},
    color: {
      control: {
        type: 'select',
        options: [
          'alert',
          'error',
          'info',
          'neutral',
          'primary',
          'secondary',
          'success',
          'warning',
          'destructive',
        ], // TODO: add additional theme colors later
      },
    },
    startIcon: {
      options: Object.keys(icons).sort(),
      mapping: Object.keys(icons).reduce((acc, next) => {
        acc[next] = <EzIcon icon={icons[next]} size="inherit" />;
        return acc;
      }, {}),
      control: {
        type: 'select',
      },
    },
    endIcon: {
      options: Object.keys(icons).sort(),
      mapping: Object.keys(icons).reduce((acc, next) => {
        acc[next] = <EzIcon icon={icons[next]} size="inherit" />;
        return acc;
      }, {}),
      control: {
        type: 'select',
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Primary = {};
