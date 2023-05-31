import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAppLayout from '../../EzAppLayout';
import DefaultMeta, {Default} from './Default.stories';
import RenderedChildren, {RenderedChildrenCode} from '../RenderedChildren';

const meta: Meta<typeof EzAppLayout> = {
  argTypes: DefaultMeta.argTypes,
  component: EzAppLayout,
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
  title: 'Layout/EzAppLayout/Centered',
};

export default meta;
type Story = StoryObj<typeof EzAppLayout>;

export const Centered: Story = {
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
  render: args => (
    <EzAppLayout {...args}>
      <RenderedChildren />
    </EzAppLayout>
  ),
};
