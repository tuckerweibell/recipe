import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzBlankState from '../../EzBlankState';
import EzButton from '../../../EzButton';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBlankState> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBlankState,
  title: 'Layout/EzBlankState/Action',
};

export default meta;
type Story = StoryObj<typeof EzBlankState>;

export const Action: Story = {
  args: {
    ...Default.args,
    action: <EzButton>Request a Review</EzButton>,
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzCard>
          <EzBlankState
            action={<EzButton>Request a Review</EzButton>}
            message="It can take customers a few days after they receive their order to write a review. As you get reviews, they'll appear here."
            title="You don't have any reviews yet"
          />
        </EzCard>
      `,
    },
  },
  render: Default.render,
};
