import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzIcon from '../../EzIcon';

const meta: Meta<typeof EzIcon> = {
  component: EzIcon,
  title: 'Typography/EzIcon',
};

export default meta;
type Story = StoryObj<typeof EzIcon>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
