import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTooltip from '../../EzTooltip';

const meta: Meta<typeof EzTooltip> = {
  component: EzTooltip,
  title: 'Feedback/EzTooltip',
};

export default meta;
type Story = StoryObj<typeof EzTooltip>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
