import {type Meta, type StoryObj} from '@storybook/react';
import EzChip from '../../EzChip';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  title: 'Data Display/EzChip/Variant',
  component: EzChip,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const Filled: Story = {
  args: {
    ...Default.args,
    label: 'Filled',
  },
  parameters: {
    playroom: {code: '<EzChip label="Filled" />'},
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    color: 'common.black',
    label: 'Outlined',
    variant: 'outlined',
  },
  parameters: {
    playroom: {code: '<EzChip color="common.black" label="Outlined" variant="outlined" />'},
  },
};
