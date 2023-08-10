import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzIconButton from '../../EzIconButton';

const meta: Meta<typeof EzIconButton> = {
  component: EzIconButton,
  title: 'Input/EzIconButton',
};

export default meta;
type Story = StoryObj<typeof EzIconButton>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
