import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzToggle from '../../EzToggle';

const meta: Meta<typeof EzToggle> = {
  component: EzToggle,
  title: 'Input/EzToggle',
};

export default meta;
type Story = StoryObj<typeof EzToggle>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
