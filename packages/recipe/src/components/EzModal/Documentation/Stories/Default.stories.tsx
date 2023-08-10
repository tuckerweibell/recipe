import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzModal from '../../EzModal';

const meta: Meta<typeof EzModal> = {
  component: EzModal,
  title: 'Feedback/EzModal',
};

export default meta;
type Story = StoryObj<typeof EzModal>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
