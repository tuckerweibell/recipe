import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzFlashMessage from '../../EzFlashMessage';

const meta: Meta<typeof EzFlashMessage> = {
  argTypes: {
    autohide: {
      control: {type: 'boolean'},
      description:
        'If true, the flash message with automatically hide after 5 seconds, or a specified time using `autohideDuration`.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    autohideDuration: {
      control: {type: 'number'},
      description: 'The duration of time after which the flash message will hide in `ms`.',
      table: {
        defaultValue: {summary: 5000},
        type: {summary: 'number'},
      },
    },
    headline: {
      control: {type: 'text'},
      description: 'The headline of the flash message.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    onAutohide: {
      action: 'automatically hidden',
      control: {type: null},
      description: 'Callback fired when the flash message is automatically hidden.',
      table: {type: {summary: '() => void'}},
    },
    onDismiss: {
      action: 'dismissed',
      control: {type: null},
      description: 'Callback fired when the flash message is dismissed.',
      table: {type: {summary: '() => void'}},
    },
    use: {
      control: {type: 'select'},
      description: 'The color of the component. Supports theme palette properties and colors.',
      options: ['error', 'info', 'success', 'warning'],
      table: {
        type: {
          required: true,
          summary: 'error | info | success | warning',
        },
      },
    },
  },
  component: EzFlashMessage,
  title: 'Feedback/EzFlashMessage',
};

export default meta;
type Story = StoryObj<typeof EzFlashMessage>;

export const Default: Story = {
  args: {
    headline: 'We saved that for you.',
    onAutohide: undefined,
    onDismiss: undefined,
    use: 'success',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzFlashMessage headline="We saved that for you." use="success">
          No further action required, just letting you know! Your changes will take effect immediately.
        </EzFlashMessage>
      `,
    },
  },
  render: args => (
    <EzFlashMessage {...args}>
      No further action required, just letting you know! Your changes will take effect immediately.
    </EzFlashMessage>
  ),
};
