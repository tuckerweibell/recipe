import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzNavigation from '../../EzNavigation';

const meta: Meta<typeof EzNavigation> = {
  component: EzNavigation,
  title: 'Navigation/EzNavigation',
};

export default meta;
type Story = StoryObj<typeof EzNavigation>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
