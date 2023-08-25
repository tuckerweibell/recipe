import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack} from '@mui/material';
import EzLogo from '../../EzLogo';
import DefaultMeta, {Default} from './Default.stories';
import {EzLogoProps} from '../../EzLogo.types';

const meta: Meta<typeof EzLogo> = {
  argTypes: DefaultMeta.argTypes,
  component: EzLogo,
  title: 'Typography/EzLogo/Variant',
};

export default meta;
type Story = StoryObj<typeof EzLogo>;

export const Horizontal: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: '<EzLogo variant="horizontal" />'}},
    playroom: {code: '<EzLogo variant="horizontal" />'},
  },
  render: args => (
    <Stack alignItems="center" direction="row" gap={4}>
      <EzLogo {...args} />
    </Stack>
  ),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    variant: 'vertical',
  } as EzLogoProps,
  parameters: {
    docs: {source: {code: '<EzLogo variant="vertical" />'}},
    playroom: {code: '<EzLogo variant="vertical" />'},
  },
  render: args => (
    <Stack alignItems="center" direction="row" gap={4}>
      <EzLogo {...args} />
    </Stack>
  ),
};
