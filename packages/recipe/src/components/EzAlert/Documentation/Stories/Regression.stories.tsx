import React, {ComponentProps} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzAlert from '../../EzAlert';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzAlert> = {
  argTypes: DefaultMeta.argTypes,
  component: EzAlert,
  title: 'Feedback/EzAlert/Regression',
};

export default meta;
type Story = StoryObj<typeof EzAlert>;

const DefaultEzAlert = (args: ComponentProps<typeof EzAlert>) => (
  <EzAlert {...Default.args} {...args} />
);

export const LongContent: Story = {
  render: () => (
    <DefaultEzAlert
      headline="Heads up!"
      tagline="EzPopover is a low-level building block for building more complex interactions like context menus, custom dialogs and information overlays. Additional care should be taken to ensure the interactions you are building are accessible, in particular, when handling user events, key presses and focus."
      use="info"
    />
  ),
};
