import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzRadio from '../../EzRadio';

const meta: Meta<typeof EzRadio> = {
  component: EzRadio,
  title: 'Input/EzRadio',
};

export default meta;
type Story = StoryObj<typeof EzRadio>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
