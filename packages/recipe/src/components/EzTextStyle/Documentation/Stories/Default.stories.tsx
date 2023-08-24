import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTextStyle from '../../EzTextStyle';

const meta: Meta<typeof EzTextStyle> = {
  component: EzTextStyle,
  title: 'Typography/EzTextStyle',
};

export default meta;
type Story = StoryObj<typeof EzTextStyle>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
