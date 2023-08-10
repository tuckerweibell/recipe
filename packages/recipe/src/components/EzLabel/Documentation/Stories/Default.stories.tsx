import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzLabel from '../../EzLabel';

const meta: Meta<typeof EzLabel> = {
  component: EzLabel,
  title: 'Input/EzLabel',
};

export default meta;
type Story = StoryObj<typeof EzLabel>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
