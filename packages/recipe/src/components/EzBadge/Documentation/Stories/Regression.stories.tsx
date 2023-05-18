import React, {ComponentProps} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Stack} from '@mui/material';
import EzBadge from '../../EzBadge';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBadge> = {
  title: 'Data Display/EzBadge/Regression',
  component: EzBadge,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

const value = {value: 3} as const;
const hide = {hide: true, value: 3} as const;
const minimize = {minimize: true, value: 3} as const;
const showZero = {showZero: true, value: 0} as const;
const max = {max: 99, value: 100} as const;
const topRight = {alignX: 'right', alignY: 'top', value: 3} as const;
const bottomRight = {alignX: 'right', alignY: 'bottom', value: 3} as const;
const topLeft = {alignX: 'left', alignY: 'top', value: 3} as const;
const bottomLeft = {alignX: 'left', alignY: 'bottom', value: 3} as const;
const rectangular = {overlap: 'rectangular', value: 3} as const;
const circular = {overlap: 'circular', value: 3} as const;

const DefaultEzBadge = (args: ComponentProps<typeof EzBadge>) => (
  <EzBadge {...Default.args} {...args}>
    <EzIcon icon={faCartShopping} />
  </EzBadge>
);

const EzBadgeOptions = (args: Omit<ComponentProps<typeof EzBadge>, 'value'>) => (
  <Stack alignItems="center" direction="row" spacing={3}>
    <DefaultEzBadge {...args} {...value} />
    <DefaultEzBadge {...args} {...hide} />
    <DefaultEzBadge {...args} {...minimize} />
    <DefaultEzBadge {...args} {...showZero} />
    <DefaultEzBadge {...args} {...max} />
    <DefaultEzBadge {...args} {...topRight} />
    <DefaultEzBadge {...args} {...bottomRight} />
    <DefaultEzBadge {...args} {...topLeft} />
    <DefaultEzBadge {...args} {...bottomLeft} />
    <DefaultEzBadge {...args} {...rectangular} />
    <DefaultEzBadge {...args} {...circular} />
  </Stack>
);

export const Options: Story = {
  render: () => <EzBadgeOptions />,
};

export const OptionsWithColors: Story = {
  render: () => (
    <Stack gap={3}>
      <EzBadgeOptions color="primary" />
      <EzBadgeOptions color="secondary" />
      <EzBadgeOptions color="error" />
      <EzBadgeOptions color="warning" />
      <EzBadgeOptions color="alert" />
      <EzBadgeOptions color="info" />
      <EzBadgeOptions color="neutral" />
      <EzBadgeOptions color="success" />
      <EzBadgeOptions color="common.red100" />
    </Stack>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Stack>
      <style>
        {`
        .EzBadge-badge.MuiBadge-badge {
          color: lightcyan;
          background-color: darkcyan;
        }
        .EzBadge-dot.MuiBadge-dot {
          background-color: orange;
        }
      `}
      </style>
      <EzBadgeOptions />
    </Stack>
  ),
};
