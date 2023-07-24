import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Variant',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

export const Filled: Story = {
  args: {
    ...Default.args,
    children: 'Filled',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
        <EzButton variant="filled">
          Filled
        </EzButton>
      `,
      },
    },
    playroom: {code: '<EzButton variant="filled">Filled</EzButton>'},
  },
  render: Default.render,
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    children: 'Outlined',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: '<EzButton variant="outlined">Outlined</EzButton>'},
  },
  render: Default.render,
};

export const Text: Story = {
  args: {
    ...Default.args,
    children: 'Text',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: '<EzButton variant="text">Text</EzButton>'},
  },
  render: Default.render,
};

export const Inline: Story = {
  args: {
    ...Default.args,
    children: 'Inline',
    variant: 'inline',
  } as EzButtonProps,
  parameters: {
    playroom: {
      code: dedent`
        <div>
          This <EzButton variant="inline">Inline</EzButton> button is between text.
        </div>
      `,
    },
  },
  render: (args: EzButtonProps) => (
    <div>
      This <EzButton {...args}>Inline</EzButton> button is between text.
    </div>
  ),
};
