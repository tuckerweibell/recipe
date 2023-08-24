import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTable from '../../EzTable';

const meta: Meta<typeof EzTable> = {
  component: EzTable,
  title: 'Data Display/EzTable',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

export const Default: Story = {
  render: () => <div>Coming soon...</div>,
};
