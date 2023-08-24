import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTimeline from '../../EzTimeline';

const meta: Meta<typeof EzTimeline> = {
  component: EzTimeline,
  title: 'Data Display/EzTimeline',
};

export default meta;
type Story = StoryObj<typeof EzTimeline>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
