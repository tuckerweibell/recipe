import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAppLayout from '../../EzAppLayout';
import DefaultMeta, {Default} from './Default.stories';
import RenderedChildren, {RenderedChildrenCode} from '../RenderedChildren';

const meta: Meta<typeof EzAppLayout> = {
  title: 'Layout/EzAppLayout/Centered',
  component: EzAppLayout,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzAppLayout layout="centered">
            ${RenderedChildrenCode}
          </EzAppLayout>
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EzAppLayout>;

export const Centered: Story = {
  render: args => (
    <EzAppLayout {...args}>
      <RenderedChildren />
    </EzAppLayout>
  ),
  args: {
    ...Default.args,
    layout: 'centered',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAppLayout layout="centered">
          ${RenderedChildrenCode}
        </EzAppLayout>
      `,
    },
  },
};
