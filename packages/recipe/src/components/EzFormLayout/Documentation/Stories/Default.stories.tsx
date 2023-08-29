import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../../EzField';
import EzFormLayout from '../../EzFormLayout';

const meta: Meta<typeof EzFormLayout> = {
  component: EzFormLayout,
  title: 'Layout/EzFormLayout',
};

export default meta;
type Story = StoryObj<typeof EzFormLayout>;

export const Default: Story = {
  parameters: {
    playroom: {
      code: dedent`
        <EzFormLayout>
          <EzField type="text" label="First name" />
          <EzField type="text" label="Last name" />
        </EzFormLayout>
      `,
    },
  },
  render: args => (
    <EzFormLayout {...args}>
      <EzField type="text" label="First name" />
      <EzField type="text" label="Last name" />
    </EzFormLayout>
  ),
};
