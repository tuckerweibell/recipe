import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {capitalize, Stack} from '@mui/material';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';
import {EzThemeColors} from '../../../../themes';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Color',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const colors: EzThemeColors[] = [
  'primary',
  'secondary',
  'neutral',
  'error',
  'warning',
  'info',
  'success',
  'common.red100',
];

const ColorsRender = (variant: EzButtonMuiProps['variant']) => (
  <Stack alignItems="center" direction="row" gap={2}>
    <div>{capitalize(variant)}:</div>
    {colors.map(color => (
      <EzButton key={color} color={color} variant={variant}>
        {capitalize(color)}
      </EzButton>
    ))}
  </Stack>
);

const ColorsJSX = (variant: EzButtonMuiProps['variant']) =>
  colors
    .map(color => `<EzButton color="${color}" variant="${variant}">${capitalize(color)}</EzButton>`)
    .join('\n');

export const FilledColors: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: ColorsJSX('filled')}},
    playroom: {code: ColorsJSX('filled')},
  },
  render: () => ColorsRender('filled'),
};

export const OutlinedColors: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: ColorsJSX('outlined')}},
    playroom: {code: ColorsJSX('outlined')},
  },
  render: () => ColorsRender('outlined'),
};

export const TextColors: Story = {
  args: {
    ...Default.args,
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: ColorsJSX('text')}},
    playroom: {code: ColorsJSX('text')},
  },
  render: () => ColorsRender('text'),
};

export const InlineColors: Story = {
  args: {
    ...Default.args,
    variant: 'inline',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: ColorsJSX('inline')}},
    playroom: {code: ColorsJSX('inline')},
  },
  render: () => ColorsRender('inline'),
};
