import {type Meta, type StoryObj} from '@storybook/react';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Disabled',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const DisabledText: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Label',
    value: 'Some entered text',
  } as EzFieldProps,
  parameters: {playroom: {code: '<EzField disabled label="Label" value="Some entered text" />'}},
};
