import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack, capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Button Size',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const sizes: EzButtonMuiProps['size'][] = ['small', 'medium', 'large'];

const ButtonSizesRender = (variant: EzButtonMuiProps['variant']) => (
  <Stack alignItems="center" direction="row" gap={2}>
    <div>{capitalize(variant)}:</div>
    {sizes.map(size => (
      <EzButton key={size} size={size} variant={variant}>
        {capitalize(size)}
      </EzButton>
    ))}
  </Stack>
);

const ButtonSizesJSX = (variant: EzButtonMuiProps['variant']) =>
  sizes
    .map(size => `<EzButton size="${size}" variant="${variant}">${capitalize(size)}</EzButton>`)
    .join('\n');

export const FilledButtonSizes: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: ButtonSizesJSX('filled')}},
    playroom: {code: ButtonSizesJSX('filled')},
  },
  render: () => ButtonSizesRender('filled'),
};

export const OutlinedButtonSizes: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: ButtonSizesJSX('outlined')}},
    playroom: {code: ButtonSizesJSX('outlined')},
  },
  render: () => ButtonSizesRender('outlined'),
};

export const TextButtonSizes: Story = {
  args: {
    ...Default.args,
    variant: 'text',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: ButtonSizesJSX('text')}},
    playroom: {code: ButtonSizesJSX('text')},
  },
  render: () => ButtonSizesRender('text'),
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    children: 'Full width',
    fullWidth: true,
  } as EzButtonProps,
  parameters: {
    playroom: {
      code: dedent`
        <EzButton fullWidth>
          Full width
        </EzButton>
      `,
    },
  },
};
