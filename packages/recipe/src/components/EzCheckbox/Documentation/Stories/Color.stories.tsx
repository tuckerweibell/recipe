import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzCheckbox from '../../EzCheckbox';
import DefaultMeta, {Default} from './Default.stories';
import {EzCheckboxProps} from '../../EzCheckbox.types';
import {EzThemeColors} from '../../../../themes';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Color',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

const ColorsJSX = (variant: EzCheckboxProps['variant']) => {
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

  return colors
    .map(color => `<EzCheckbox color="${color}" defaultChecked variant="${variant}" />`)
    .join('\n');
};

export const OutlinedColors: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
  },
  parameters: {
    docs: {source: {code: ColorsJSX('outlined')}},
    playroom: {code: ColorsJSX('outlined')},
  },
  render: (args: EzCheckboxProps) => (
    <>
      <div>Outlined:</div>
      <EzCheckbox {...args} color="primary" />
      <EzCheckbox {...args} color="secondary" />
      <EzCheckbox {...args} color="neutral" />
      <EzCheckbox {...args} color="error" />
      <EzCheckbox {...args} color="warning" />
      <EzCheckbox {...args} color="info" />
      <EzCheckbox {...args} color="success" />
      <EzCheckbox {...args} color="common.red100" />
    </>
  ),
};

export const FilledColors: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
    variant: 'filled',
  },
  parameters: {
    docs: {source: {code: ColorsJSX('filled')}},
    playroom: {code: ColorsJSX('filled')},
  },
  render: (args: EzCheckboxProps) => (
    <div className="canvas-dark">
      <div style={{color: 'white'}}>Filled:</div>
      <EzCheckbox {...args} color="primary" />
      <EzCheckbox {...args} color="secondary" />
      <EzCheckbox {...args} color="neutral" />
      <EzCheckbox {...args} color="error" />
      <EzCheckbox {...args} color="warning" />
      <EzCheckbox {...args} color="info" />
      <EzCheckbox {...args} color="success" />
      <EzCheckbox {...args} color="common.red100" />
    </div>
  ),
};

export const FilledInverseColors: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
    variant: 'filled-inverse',
  },
  parameters: {
    docs: {source: {code: ColorsJSX('filled-inverse')}},
    playroom: {code: ColorsJSX('filled-inverse')},
  },
  render: (args: EzCheckboxProps) => (
    <>
      <div>Filled-inverse:</div>
      <EzCheckbox {...args} color="primary" />
      <EzCheckbox {...args} color="secondary" />
      <EzCheckbox {...args} color="neutral" />
      <EzCheckbox {...args} color="error" />
      <EzCheckbox {...args} color="warning" />
      <EzCheckbox {...args} color="info" />
      <EzCheckbox {...args} color="success" />
      <EzCheckbox {...args} color="common.red100" />
    </>
  ),
};
