import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzLineChart from '../../EzLineChart';

const meta: Meta<typeof EzLineChart> = {
  component: EzLineChart,
  title: 'Data Display/EzLineChart',
};

export default meta;
type Story = StoryObj<typeof EzLineChart>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
