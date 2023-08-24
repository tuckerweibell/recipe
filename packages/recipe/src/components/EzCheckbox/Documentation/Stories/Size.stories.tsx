import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzCheckbox from '../../EzCheckbox';
import DefaultMeta, {Default} from './Default.stories';
import {EzCheckboxProps} from '../../EzCheckbox.types';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Size',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

const storyCodeNew = (variant: EzCheckboxProps['variant']) => {
  const sizes: EzCheckboxProps['size'][] = ['small', 'medium', 'large'];

  return sizes
    .map(size => `<EzCheckbox defaultChecked size="${size}" variant="${variant}" />`)
    .join('\n');
};

export const OutlinedSizes: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: storyCodeNew('outlined')}},
    playroom: {code: storyCodeNew('outlined')},
  },
  render: (args: EzCheckboxProps) => (
    <>
      <div>Outlined:</div>
      <EzCheckbox {...args} defaultChecked size="small" />
      <EzCheckbox {...args} defaultChecked size="medium" />
      <EzCheckbox {...args} defaultChecked size="large" />
    </>
  ),
};

export const FilledSizes: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
  parameters: {
    docs: {source: {code: storyCodeNew('filled')}},
    playroom: {code: storyCodeNew('filled')},
  },
  render: (args: EzCheckboxProps) => (
    <div className="canvas-dark">
      <div style={{color: 'white'}}>Filled:</div>
      <EzCheckbox {...args} defaultChecked size="small" variant="filled" />
      <EzCheckbox {...args} defaultChecked size="medium" variant="filled" />
      <EzCheckbox {...args} defaultChecked size="large" variant="filled" />
    </div>
  ),
};

export const FilledInverseSizes: Story = {
  args: {
    ...Default.args,
    variant: 'filled-inverse',
  },
  parameters: {
    docs: {source: {code: storyCodeNew('filled-inverse')}},
    playroom: {code: storyCodeNew('filled-inverse')},
  },
  render: (args: EzCheckboxProps) => (
    <>
      <div>Filled-inverse:</div>
      <EzCheckbox {...args} defaultChecked size="small" variant="filled-inverse" />
      <EzCheckbox {...args} defaultChecked size="medium" variant="filled-inverse" />
      <EzCheckbox {...args} defaultChecked size="large" variant="filled-inverse" />
    </>
  ),
};
