import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzOrderSummary from '../../EzOrderSummary';

const meta: Meta<typeof EzOrderSummary> = {
  component: EzOrderSummary,
  title: 'Data Display/EzOrderSummary',
};

export default meta;
type Story = StoryObj<typeof EzOrderSummary>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
