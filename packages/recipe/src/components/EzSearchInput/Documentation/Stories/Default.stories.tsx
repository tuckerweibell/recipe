import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzSearchInput from '../../EzSearchInput';

const meta: Meta<typeof EzSearchInput> = {
  component: EzSearchInput,
  title: 'Input/EzSearchInput',
};

export default meta;
type Story = StoryObj<typeof EzSearchInput>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
