import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack} from '@mui/material';
import EzLogo from '../../EzLogo';
import {ezColors} from '../../../../themes/ezColors';

const meta: Meta<typeof EzLogo> = {
  argTypes: {
    color: {
      control: {type: 'select'},
      defaultValue: 'default',
      description: 'The color of the logo.',
      options: ['default', 'black', 'white'],
      table: {
        defaultValue: {summary: 'default'},
        type: {summary: 'default | black | white'},
      },
    },
    size: {
      control: {type: 'select'},
      defaultValue: 'medium',
      description: 'The size of the logo.',
      options: ['small', 'medium', 'large', 'inherit'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large | inherit'},
      },
    },
    variant: {
      control: {type: 'select'},
      defaultValue: 'horizontal',
      description: 'The variant of the logo.',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {summary: 'horizontal'},
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
  },
  component: EzLogo,
  decorators: [
    (Story, {args}) => (
      <Stack bgcolor={args.color === 'white' ? ezColors.green.green100.color : undefined} p={3}>
        <Story />
      </Stack>
    ),
  ],
  title: 'Typography/EzLogo',
};

export default meta;
type Story = StoryObj<typeof EzLogo>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'medium',
    variant: 'horizontal',
  },
  parameters: {
    playroom: {code: '<EzLogo />'},
  },
  render: args => <EzLogo {...args} />,
};
