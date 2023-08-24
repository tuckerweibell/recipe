import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzLayout from '../../EzLayout';

const meta: Meta<typeof EzLayout> = {
  component: EzLayout,
  title: 'Layout/EzLayout',
};

export default meta;
type Story = StoryObj<typeof EzLayout>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
