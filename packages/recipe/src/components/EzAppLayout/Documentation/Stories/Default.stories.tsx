import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAppLayout from '../../EzAppLayout';
import RenderedChildren, {RenderedChildrenCode} from '../RenderedChildren';

const meta: Meta<typeof EzAppLayout> = {
  title: 'Layout/EzAppLayout',
  component: EzAppLayout,
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
};

export default meta;
type Story = StoryObj<typeof EzAppLayout>;

export const Default: Story = {
  render: args => (
    <EzAppLayout {...args}>
      <RenderedChildren />
    </EzAppLayout>
  ),
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
};
