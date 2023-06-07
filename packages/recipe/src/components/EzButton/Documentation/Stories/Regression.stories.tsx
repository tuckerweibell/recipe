import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack} from '@mui/material';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import EzButton from '../../EzButton';
import EzIcon from '../../../EzIcon';
import DefaultMeta from './Default.stories';
import {EzButtonMuiProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Regression',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const filled = {variant: 'filled'} as const;
const outlined = {variant: 'outlined'} as const;
const text = {variant: 'text'} as const;
const startIcon = {startIcon: <EzIcon icon={faStar} />} as const;
const endIcon = {endIcon: <EzIcon icon={faStar} />} as const;
const disabled = {disabled: true} as const;

const DefaultEzButton = (args: EzButtonMuiProps) => <EzButton {...args}>{args.children}</EzButton>;

export const Variants: Story = {
  render: () => (
    <Stack alignItems="center" spacing={1}>
      <DefaultEzButton>Default</DefaultEzButton>
      <DefaultEzButton {...filled}>Filled</DefaultEzButton>
      <DefaultEzButton {...outlined}>Outlined</DefaultEzButton>
      <DefaultEzButton {...text}>Text</DefaultEzButton>
    </Stack>
  ),
};

export const FilledVariantsWithColors: Story = {
  render: () => (
    <Stack alignItems="center" spacing={1}>
      <DefaultEzButton {...filled} color="primary">
        filled - color primary
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="secondary">
        filled - color secondary
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="neutral">
        filled - color neutral
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="error">
        filled - color error
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="info">
        filled - color info
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="success">
        filled - color success
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="warning">
        filled - color warning
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="alert">
        filled - color alert
      </DefaultEzButton>
      <DefaultEzButton {...filled} color="common.red100">
        filled - color common
      </DefaultEzButton>
    </Stack>
  ),
};

export const OutlinedVariantsWithColors: Story = {
  render: () => (
    <Stack alignItems="center" spacing={1}>
      <DefaultEzButton {...outlined} color="primary">
        outlined - color primary
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="secondary">
        outlined - color secondary
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="neutral">
        outlined - color neutral
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="error">
        outlined - color error
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="info">
        outlined - color info
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="success">
        outlined - color success
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="warning">
        outlined - color warning
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="alert">
        outlined - color alert
      </DefaultEzButton>
      <DefaultEzButton {...outlined} color="common.red100">
        filled - color common
      </DefaultEzButton>
    </Stack>
  ),
};

export const TextVariantsWithColors: Story = {
  render: () => (
    <Stack alignItems="center" spacing={1}>
      <DefaultEzButton {...text} color="primary">
        text - color primary
      </DefaultEzButton>
      <DefaultEzButton {...text} color="secondary">
        text - color secondary
      </DefaultEzButton>
      <DefaultEzButton {...text} color="neutral">
        text - color neutral
      </DefaultEzButton>
      <DefaultEzButton {...text} color="error">
        text - color error
      </DefaultEzButton>
      <DefaultEzButton {...text} color="info">
        text - color info
      </DefaultEzButton>
      <DefaultEzButton {...text} color="success">
        text - color success
      </DefaultEzButton>
      <DefaultEzButton {...text} color="warning">
        text - color warning
      </DefaultEzButton>
      <DefaultEzButton {...text} color="alert">
        text - color alert
      </DefaultEzButton>
      <DefaultEzButton {...text} color="common.red100">
        filled - color common
      </DefaultEzButton>
    </Stack>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Stack alignItems="center" spacing={1}>
      <style>
        {`
          .EzButton-filled {
            background-color: orange;
          }
          .EzButton-outlined {
            border-color: black;
          }
          .EzButton-text {
            color: grey;
          }
          .EzButton-startIcon svg {
            fill: black;
          }
          .EzButton-endIcon svg {
            fill: red;
          }
          .EzButton-disabled {
            color: blue !important;
            opacity: 0.3;
          }
        `}
      </style>
      <DefaultEzButton>Default</DefaultEzButton>
      <DefaultEzButton {...filled}>Filled</DefaultEzButton>
      <DefaultEzButton {...outlined}>Outlined</DefaultEzButton>
      <DefaultEzButton {...text}>Text</DefaultEzButton>
      <DefaultEzButton {...startIcon}>Start icon</DefaultEzButton>
      <DefaultEzButton {...endIcon}>End icon</DefaultEzButton>
      <DefaultEzButton {...disabled}>Disabled</DefaultEzButton>
    </Stack>
  ),
};
