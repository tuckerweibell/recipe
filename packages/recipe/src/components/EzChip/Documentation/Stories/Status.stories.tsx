import {type Meta, type StoryObj} from '@storybook/react';
import EzChip from '../../EzChip';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  argTypes: DefaultMeta.argTypes,
  component: EzChip,
  title: 'Data Display/EzChip/Status',
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const StatusNeutral: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Neutral',
    variant: 'neutral',
  },
  parameters: {
    playroom: {code: '<EzChip label="Neutral" variant="neutral" />'},
  },
};

export const StatusSuccess: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Success',
    variant: 'success',
  },
  parameters: {
    playroom: {code: '<EzChip label="Success" variant="success" />'},
  },
};

export const StatusInformational: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Informational',
    variant: 'informational',
  },
  parameters: {
    playroom: {code: '<EzChip label="Informational" variant="informational" />'},
  },
};

export const StatusAttention: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Attention',
    variant: 'attention',
  },
  parameters: {
    playroom: {code: '<EzChip label="Attention" variant="attention" />'},
  },
};

export const StatusWarning: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Warning',
    variant: 'warning',
  },
  parameters: {
    playroom: {code: '<EzChip label="Warning" variant="warning" />'},
  },
};

export const StatusError: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Error',
    variant: 'error',
  },
  parameters: {
    playroom: {code: '<EzChip label="Error" variant="error" />'},
  },
};

export const StatusAlert: Story = {
  args: {
    ...Default.args,
    color: undefined,
    label: 'Alert',
    variant: 'alert',
  },
  parameters: {
    playroom: {code: '<EzChip label="Alert" variant="alert" />'},
  },
};
