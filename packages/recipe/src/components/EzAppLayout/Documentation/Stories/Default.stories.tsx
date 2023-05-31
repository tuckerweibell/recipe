import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAppLayout from '../../EzAppLayout';
import RenderedChildren, {RenderedChildrenCode} from '../RenderedChildren';

const meta: Meta<typeof EzAppLayout> = {
  argTypes: {
    layout: {
      control: {type: 'select'},
      description: 'The layout of the app.',
      options: ['centered', 'full'],
      table: {
        defaultValue: {summary: 'full'},
        type: {summary: 'string'},
      },
    },
  },
  component: EzAppLayout,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzAppLayout>
            ${RenderedChildrenCode}
          </EzAppLayout>
        `,
      },
    },
  },
  title: 'Layout/EzAppLayout',
};

export default meta;
type Story = StoryObj<typeof EzAppLayout>;

export const Default: Story = {
  args: {
    layout: 'full',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAppLayout>
          ${RenderedChildrenCode}
        </EzAppLayout>
      `,
    },
  },
  render: args => (
    <EzAppLayout {...args}>
      <RenderedChildren />
    </EzAppLayout>
  ),
};
