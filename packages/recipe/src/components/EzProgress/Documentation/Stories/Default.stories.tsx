import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzProgress from '../../EzProgress';

const meta: Meta<typeof EzProgress> = {
  component: EzProgress,
  title: 'Feedback/EzProgress',
};

export default meta;
type Story = StoryObj<typeof EzProgress>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
