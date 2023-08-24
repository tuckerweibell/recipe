import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzProgressTracker from '../../EzProgressTracker';

const meta: Meta<typeof EzProgressTracker> = {
  component: EzProgressTracker,
  title: 'Navigation/EzProgressTracker',
};

export default meta;
type Story = StoryObj<typeof EzProgressTracker>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
