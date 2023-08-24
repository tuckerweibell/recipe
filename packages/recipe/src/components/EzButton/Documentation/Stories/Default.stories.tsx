import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import EzIcon from '../../../EzIcon';

const icons = {
  faCoffee: <EzIcon icon={faCoffee} />,
  faStar: <EzIcon icon={faStar} />,
};

const meta: Meta<typeof EzButton> = {
  argTypes: {
    ariaHidden: {
      control: {type: 'boolean'},
      description: 'If true, the component is hidden from accessibility APIs.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    ariaLabel: {
      control: {type: 'text'},
      description: 'The aria-label of the element.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    color: {
      control: {type: 'select'},
      defaultValue: 'primary',
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
    data: {
      control: {type: 'object'},
      description: 'The data attributes to be applied to the component.',
      table: {type: {summary: 'object'}},
    },
    destructive: {
      control: {type: 'boolean'},
      description: '**[Deprecated]** If true, the color of the button is red.',
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
    disabledMessage: {
      control: {type: 'text'},
      description: '**[Deprecated]** The tooltip message for a disabled button.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    endIcon: {
      control: {type: 'select'},
      description: 'End icon element.',
      options: Object.keys(icons),
      mapping: icons,
      table: {type: {summary: 'ReactElement'}},
    },
    fontSize: {
      control: {type: 'select'},
      defaultValue: 'medium',
      description: 'The font size of the component.',
      options: ['small', 'medium', 'large', 'inherit'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large | inherit'},
      },
    },
    fullWidth: {
      control: {type: 'boolean'},
      description: 'If true, the button will take up the full width of its container.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    icon: {
      control: {type: 'select'},
      description: '**[Deprecated]** Icon element.',
      options: Object.keys(icons),
      mapping: icons,
      table: {type: {summary: 'ReactElement'}},
    },
    legacy: {
      control: {type: 'boolean'},
      description: '**[Deprecated]** If true, the component is a legacy button.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    loading: {
      control: {type: 'boolean'},
      description: 'If true, the button displays a spinning loading icon in place of its label.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    onClick: {
      action: 'clicked',
      control: {type: null},
      description: 'Callback fired when the button is clicked.',
      table: {type: {summary: 'MouseEventHandler<any> | undefined'}},
    },
    onKeyDown: {
      action: 'key pressed down',
      control: {type: null},
      description: 'Callback fired when the button is focused and an event key is pressed.',
      table: {type: {summary: 'KeyboardEventHandler<any> | undefined'}},
    },
    size: {
      control: {type: 'select'},
      defaultValue: 'medium',
      description: 'The size of the component.',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large'},
      },
    },
    startIcon: {
      control: {type: 'select'},
      description: 'Start icon element.',
      options: Object.keys(icons),
      mapping: icons,
      table: {type: {summary: 'ReactElement'}},
    },
    type: {
      control: {type: 'select'},
      defaultValue: 'button',
      description: 'The type of the component.',
      options: ['button', 'reset', 'submit'],
      table: {
        defaultValue: {summary: 'button'},
        type: {summary: 'button | reset | submit'},
      },
    },
    use: {
      control: {type: 'select'},
      defaultValue: 'secondary',
      description: '**[Deprecated]** The use of the component.',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        defaultValue: {summary: 'secondary'},
        type: {summary: 'primary | secondary | tertiary'},
      },
    },
    variant: {
      control: {type: 'select'},
      defaultValue: 'filled',
      description: 'The variant of the component.',
      options: ['filled', 'outlined', 'text', 'inline'],
      table: {
        defaultValue: {summary: 'filled'},
        type: {
          summary: 'filled | outlined | text | inline',
        },
      },
    },
  },
  component: EzButton,
  title: 'Input/EzButton',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

export const Default: Story = {
  args: {
    ariaHidden: false,
    children: 'Button',
    color: 'primary',
    disabled: false,
    fontSize: 'medium',
    legacy: false, // deprecated
    loading: false,
    onClick: undefined,
    onKeyDown: undefined,
    size: 'medium',
    type: 'button',
    variant: 'filled',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzButton>Button</EzButton>
      `,
    },
  },
  render: args => <EzButton {...args}>{args.children}</EzButton>,
};
