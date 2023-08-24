import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzCheckbox from '../../EzCheckbox';

const meta: Meta<typeof EzCheckbox> = {
  args: {
    checked: true,
    color: 'primary',
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    size: 'medium',
    variant: 'outlined',
  },
  argTypes: {
    ariaLabel: {
      control: {type: 'text'},
      description: 'The aria-label of the element.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    checked: {
      control: {type: 'boolean'},
      description: 'If true, the component is checked.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    color: {
      control: {type: 'select'},
      description: 'The color of the component. Supports theme palette properties and colors.',
      options: [
        'primary',
        'secondary',
        'alert',
        'error',
        'info',
        'neutral',
        'success',
        'warning',
        'common.red100',
        'common.blue100',
      ],
      table: {
        defaultValue: {summary: 'primary'},
        type: {summary: 'EzThemeColors'},
      },
    },
    defaultChecked: {
      control: {type: 'boolean'},
      description: 'The default checked state for uncontrolled components.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    disabled: {
      control: {type: 'boolean'},
      description: 'If true, the component is disabled.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    indeterminate: {
      control: {type: 'boolean'},
      description: 'If true, the checkbox is in an indeterminate state.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    name: {
      control: {type: 'text'},
      description: 'The name of the checkbox input.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    onBlur: {
      action: 'blurred',
      control: {type: null},
      description: 'Callback fired when the state is blurred for controlled components.',
      table: {type: {summary: 'FocusEventHandler<HTMLInputElement>'}},
    },
    onChange: {
      action: 'changed',
      control: {type: null},
      description: 'Callback fired when the state is changed for controlled components.',
      table: {type: {summary: '(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void'}},
    },
    onFocus: {
      action: 'focused',
      control: {type: null},
      description: 'Callback fired when the state is focused for controlled components.',
      table: {type: {summary: 'FocusEventHandler<HTMLInputElement>'}},
    },
    size: {
      control: {type: 'select'},
      description: 'The size of the component.',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large'},
      },
    },
    value: {
      control: {type: null},
      description: 'The value of the controlled component.',
      table: {type: {summary: 'any'}},
    },
    variant: {
      control: {type: 'select'},
      description: 'The variant of the component.',
      options: ['filled', 'filled-inverse', 'outlined'],
      table: {
        defaultValue: {summary: 'outlined'},
        type: {
          summary: 'filled | filled-inverse | outlined',
        },
      },
    },
  },
  component: EzCheckbox,
  title: 'Input/EzCheckbox',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

export const Default: Story = {
  args: {
    color: 'primary',
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    size: 'medium',
    variant: 'outlined',
  },
  parameters: {
    playroom: {code: '<EzCheckbox checked />'},
  },
  render: args => <EzCheckbox {...args} />,
};
