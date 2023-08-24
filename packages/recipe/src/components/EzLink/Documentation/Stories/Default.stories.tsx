import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzLink from '../../EzLink';

const meta: Meta<typeof EzLink> = {
  component: EzLink,
  title: 'Navigation/EzLink',
};

export default meta;
type Story = StoryObj<typeof EzLink>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
