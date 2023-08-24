import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzWell from '../../EzWell';

const meta: Meta<typeof EzWell> = {
  component: EzWell,
  title: 'Surface/EzWell',
};

export default meta;
type Story = StoryObj<typeof EzWell>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
