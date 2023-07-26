import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {EzPage} from '../../../EzPage';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Validation',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const Validation: Story = {
  args: {
    ...Default.args,
    error: 'First name is required',
    label: 'First name',
    touched: true,
  } as EzFieldProps,
  parameters: {
    playroom: {
      code: dedent`
        <EzPage>
          <EzField
            error="First name is required"
            label="First name"
            touched
          />
        </EzPage>
      `,
    },
  },
  render: (args: EzFieldProps) => (
    <EzPage>
      <EzField {...args} />
    </EzPage>
  ),
};
