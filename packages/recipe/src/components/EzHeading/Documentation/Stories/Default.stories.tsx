import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzHeading from '../../EzHeading';

const meta: Meta<typeof EzHeading> = {
  component: EzHeading,
  title: 'Typography/EzHeading',
};

export default meta;
type Story = StoryObj<typeof EzHeading>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
