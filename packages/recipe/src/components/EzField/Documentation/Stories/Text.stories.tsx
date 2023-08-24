import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzField from '../../EzField';
import EzLayout from '../../../EzLayout';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Text',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const Text: Story = {
  args: {
    ...Default.args,
    type: 'text',
  } as EzFieldProps,
  parameters: {
    docs: {source: {code: '<EzField type="text" />'}},
    playroom: {code: '<EzField type="text" />'},
  },
};

export const TextPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Enter text here...',
    type: 'text',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField placeholder="Enter text here..." type="text" />'}},
};

export const TextArea: Story = {
  args: {
    ...Default.args,
    type: 'textarea',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField type="textarea" />'}},
};

const TextMaxLengthRender = (args: EzFieldProps) => (
  <EzLayout layout="stack">
    <EzField {...args} maxLength={30} placeholder="maxLength 30" />
    <EzField {...args} maxLength={600} type="textarea" placeholder="maxLength 600" />
  </EzLayout>
);

export const TextMaxLength: Story = {
  args: Default.args,
  parameters: {playroom: {code: getJSXString(TextMaxLengthRender({} as EzFieldProps))}},
  render: (args: EzFieldProps) => TextMaxLengthRender(args),
};

const TextAreaSizeRender = (args: EzFieldProps) => (
  <EzLayout layout="stack">
    <EzField {...args} placeholder="size small" size="small" type="textarea" />
    <EzField {...args} placeholder="size medium" size="medium" type="textarea" />
    <EzField {...args} placeholder="size large" size="large" type="textarea" />
  </EzLayout>
);

export const TextAreaSize: Story = {
  args: Default.args,
  parameters: {
    playroom: {code: getJSXString(TextAreaSizeRender({} as EzFieldProps))},
  },
  render: (args: EzFieldProps) => TextAreaSizeRender(args),
};
