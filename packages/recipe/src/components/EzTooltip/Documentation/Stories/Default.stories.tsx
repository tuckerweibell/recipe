import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzTooltip, {EzTooltipProps} from '../../EzTooltip';

const meta: Meta<typeof EzTooltip> = {
  argTypes: {
    message: {
      control: {type: 'text'},
      description: 'The message of the tooltip. Use `\\n` to create multiple lines.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
    onShowTooltip: {
      action: 'tooltip shown',
      control: {type: null},
      description: 'Callback fired when the tooltip is shown.',
      table: {type: {summary: '() => void'}},
    },
    position: {
      control: {type: 'select'},
      description: 'The position of the tooltip relative to its child node.',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {summary: 'vertical'},
        type: {summary: 'horizontal | vertical'},
      },
    },
  },
  component: EzTooltip,
  title: 'Feedback/EzTooltip',
};

export default meta;
type Story = StoryObj<typeof EzTooltip>;

export const Default: Story = {
  args: {
    message: 'This is a tooltip!',
    position: 'vertical',
  },
  parameters: {
    layout: 'centered',
    playroom: {
      code: dedent`
        <EzTooltip message="This is a tooltip!">
          <span>Hover over me</span>
        </EzTooltip>
      `,
    },
  },
  render: (args: EzTooltipProps) => (
    <EzTooltip {...args}>
      <span>Hover over me</span>
    </EzTooltip>
  ),
};
