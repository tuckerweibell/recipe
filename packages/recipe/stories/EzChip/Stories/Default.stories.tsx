import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import {EzChip, EzIcon} from '../../../src';

const icons = {
  faCoffee: <EzIcon icon={faCoffee} />,
  faStar: <EzIcon icon={faStar} />,
};

const meta: Meta<typeof EzChip> = {
  title: 'Data Display/EzChip',
  component: EzChip,
  argTypes: {
    label: {
      control: {type: 'text'},
      description: 'The label of the component.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
    color: {
      control: {type: 'select'},
      defaultValue: 'common.grey130',
      description: 'The color of the component. Supports theme palette properties and colors.',
      options: [
        'default',
        'primary',
        'secondary',
        'alert',
        'error',
        'info',
        'success',
        'warning',
        'common.grey130',
        'common.yellow90',
        'common.red90',
        'common.blue90',
      ],
      table: {
        defaultValue: {summary: 'common.grey130'},
        type: {summary: 'EzThemeColors'},
      },
    },
    icon: {
      control: {type: 'select'},
      description: 'Icon element.',
      options: Object.keys(icons),
      mapping: icons,
      table: {type: {summary: 'ReactElement'}},
    },
    onClick: {
      action: 'clicked',
      control: {type: null},
      description: 'Callback fired when the chip is clicked.',
      table: {type: {summary: 'MouseEventHandler<any> | undefined'}},
    },
    onDelete: {
      action: 'deleted',
      control: {type: null},
      description:
        'Callback fired when the delete icon is clicked. If set, the delete icon will be shown.',
      table: {type: {summary: 'EventHandler<any> | undefined'}},
    },
    size: {
      control: {type: 'select'},
      defaultValue: 'medium',
      description: 'The size of the component, or if inherit, the font size.',
      options: ['small', 'medium', 'inherit'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | inherit'},
      },
    },
    variant: {
      control: {type: 'select'},
      defaultValue: 'filled',
      description: 'The variant to use.',
      options: [
        'filled',
        'outlined',
        'alert',
        'attention',
        'error',
        'informational',
        'neutral',
        'success',
        'warning',
      ],
      table: {
        defaultValue: {summary: 'filled'},
        type: {
          summary:
            'filled | outlined | alert | attention | error | informational | neutral | success | warning',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const Default: Story = {
  args: {
    label: 'Chip',
    color: 'common.grey130',
    onClick: undefined,
    onDelete: undefined,
    size: 'medium',
    variant: 'filled',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzChip
          label="Chip"
          color="common.grey130"
          onClick={undefined}
          onDelete={undefined}
          size="medium"
          variant="filled"
        />
      `,
    },
  },
};
