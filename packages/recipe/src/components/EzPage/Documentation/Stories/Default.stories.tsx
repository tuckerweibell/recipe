import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzPage from '../../EzPage';

const meta: Meta<typeof EzPage> = {
  component: EzPage,
  title: 'Layout/EzPage',
};

export default meta;
type Story = StoryObj<typeof EzPage>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
