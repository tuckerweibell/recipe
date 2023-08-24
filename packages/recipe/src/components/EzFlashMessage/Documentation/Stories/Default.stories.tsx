import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzFlashMessage from '../../EzFlashMessage';

const meta: Meta<typeof EzFlashMessage> = {
  component: EzFlashMessage,
  title: 'Feedback/EzFlashMessage',
};

export default meta;
type Story = StoryObj<typeof EzFlashMessage>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
