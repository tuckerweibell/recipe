import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzRating from '../../EzRating';

const meta: Meta<typeof EzRating> = {
  component: EzRating,
  title: 'Data Display/EzRating',
};

export default meta;
type Story = StoryObj<typeof EzRating>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
