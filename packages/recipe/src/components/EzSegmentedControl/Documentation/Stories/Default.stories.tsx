import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzSegmentedControl from '../../EzSegmentedControl';

const meta: Meta<typeof EzSegmentedControl> = {
  component: EzSegmentedControl,
  title: 'Input/EzSegmentedControl',
};

export default meta;
type Story = StoryObj<typeof EzSegmentedControl>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
