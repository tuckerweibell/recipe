import {type Meta, type StoryObj} from '@storybook/react';
import EzChip from '../../EzChip';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  argTypes: DefaultMeta.argTypes,
  component: EzChip,
  title: 'Data Display/EzChip/Color',
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    color: 'primary',
    label: 'Primary',
  },
  parameters: {
    playroom: {code: '<EzChip color="primary" label="Primary" />'},
  },
};

export const SecondaryColor: Story = {
  args: {
    ...Default.args,
    color: 'secondary',
    label: 'Secondary',
  },
  parameters: {
    playroom: {code: '<EzChip color="secondary" label="Secondary" />'},
  },
};

export const NeutralColor: Story = {
  args: {
    ...Default.args,
    color: 'neutral',
    label: 'Neutral',
  },
  parameters: {
    playroom: {code: '<EzChip color="neutral" label="Neutral" />'},
  },
};

export const ErrorColor: Story = {
  args: {
    ...Default.args,
    color: 'error',
    label: 'Error',
  },
  parameters: {
    playroom: {code: '<EzChip color="error" label="Error" />'},
  },
};

export const WarningColor: Story = {
  args: {
    ...Default.args,
    color: 'warning',
    label: 'Warning',
  },
  parameters: {
    playroom: {code: '<EzChip color="warning" label="Warning" />'},
  },
};

export const InfoColor: Story = {
  args: {
    ...Default.args,
    color: 'info',
    label: 'Info',
  },
  parameters: {
    playroom: {code: '<EzChip color="info" label="Info" />'},
  },
};

export const SuccessColor: Story = {
  args: {
    ...Default.args,
    color: 'success',
    label: 'Success',
  },
  parameters: {
    playroom: {code: '<EzChip color="success" label="Success" />'},
  },
};

export const CommonColor: Story = {
  args: {
    ...Default.args,
    color: 'common.grey120',
    label: 'common.grey120',
  },
  parameters: {
    playroom: {code: '<EzChip color="common.grey120" label="common.grey120" />'},
  },
};
