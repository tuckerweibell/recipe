import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzFormLayout from '../../EzFormLayout';

const meta: Meta<typeof EzFormLayout> = {
  component: EzFormLayout,
  title: 'Layout/EzFormLayout',
};

export default meta;
type Story = StoryObj<typeof EzFormLayout>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
