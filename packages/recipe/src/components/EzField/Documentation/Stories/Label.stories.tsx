import {type Meta, type StoryObj} from '@storybook/react';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Labels',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const Label: Story = {
  args: {
    ...Default.args,
    label: 'Name',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField label="Name" />'}},
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'Enter your full name.',
    label: 'Name',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField helperText="Enter your full name." label="Name" />'}},
};

export const LabelSmall: Story = {
  args: {
    ...Default.args,
    label: 'Name',
    labelSize: 'small',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField label="Name" labelSize="small" />'}},
};

export const LabelHidden: Story = {
  args: {
    ...Default.args,
    labelHidden: true,
    label: 'Name',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField labelHidden label="Name" />'}},
};
