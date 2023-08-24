import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzPopover from '../../EzPopover';

const meta: Meta<typeof EzPopover> = {
  component: EzPopover,
  title: 'Feedback/EzPopover',
};

export default meta;
type Story = StoryObj<typeof EzPopover>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
