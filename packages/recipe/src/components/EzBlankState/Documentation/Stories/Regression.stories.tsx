import React, {ComponentProps} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {EzCard} from '../../../EzCard';
import {EzPage} from '../../../EzPage';
import EzBlankState from '../../EzBlankState';
import EzButton from '../../../EzButton';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBlankState> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBlankState,
  title: 'Layout/EzBlankState/Regression',
};

export default meta;
type Story = StoryObj<typeof EzBlankState>;

const DefaultEzBlankState = (args: Partial<ComponentProps<typeof EzBlankState>>) => (
  <EzCard>
    <EzBlankState title="" message="" {...Default.args} {...args} />
  </EzCard>
);

export const ActionAndImage: Story = {
  render: () => (
    <DefaultEzBlankState
      action={<EzButton>Request a Review</EzButton>}
      imageSrc="/images/review-star.svg"
    />
  ),
};

export const EzpageWrapper: Story = {
  render: () => (
    <EzPage>
      <DefaultEzBlankState />
    </EzPage>
  ),
};

export const LongMessageCentered: Story = {
  render: () => (
    <DefaultEzBlankState message="Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message. Very long message." />
  ),
};
