import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzPageHeader from '../../EzPageHeader';

const meta: Meta<typeof EzPageHeader> = {
  component: EzPageHeader,
  title: 'Layout/EzPageHeader',
};

export default meta;
type Story = StoryObj<typeof EzPageHeader>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
