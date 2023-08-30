import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzIcon from '../../EzIcon';
import {EzIconProps} from '../../EzIcon.types';

const ICONS = {
  faCoffee,
  faStar,
};

const meta: Meta<typeof EzIcon> = {
  argTypes: {
    color: {
      control: {type: 'select'},
      description: 'The color of the icon. Supports theme palette properties and colors.',
      options: [
        'inherit',
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
        defaultValue: {summary: 'inherit'},
        type: {summary: 'EzThemeColors'},
      },
    },
    icon: {
      control: {type: 'select'},
      description: 'Icon element.',
      options: Object.keys(ICONS),
      mapping: ICONS,
      table: {type: {summary: 'EzIconTypes'}},
      type: {name: 'other', value: 'EzIconTypes', required: true},
    },
    size: {
      control: {type: 'select'},
      description: 'The size of the icon.',
      options: ['small', 'medium', 'large', 'xlarge', 'inherit'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large | xlarge | inherit'},
      },
    },
    title: {
      control: {type: 'text'},
      description: 'The accessible title of the icon.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
  },
  component: EzIcon,
  title: 'Typography/EzIcon',
};

export default meta;
type Story = StoryObj<typeof EzIcon>;

export const Default: Story = {
  args: {
    color: 'inherit',
    icon: faCoffee,
    size: 'medium',
    title: 'Coffee icon with EzIcon and Font Awesome',
  },
  parameters: {
    playroom: {
      code: dedent`
      {(() => {
        const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');
        return (
          <EzPage>
            <EzIcon icon={faCoffee} title="Coffee icon with EzIcon and Font Awesome" />
          </EzPage>
        );
      })()}
      `,
    },
  },
  render: (args: EzIconProps) => <EzIcon {...args} />,
};
