import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import {EzCard} from '../../../EzCard';
import EzBlankState from '../../EzBlankState';

const meta: Meta<typeof EzBlankState> = {
  argTypes: {
    action: {
      control: {type: 'node'},
      description: 'The action of the blank state.',
      table: {type: {summary: 'ReactNode'}},
      type: {name: 'string'},
    },
    imageSrc: {
      control: {type: 'select'},
      description: 'The image source for the blank state.',
      options: ['images/review-star.svg'],
      table: {type: {summary: 'string'}},
      type: {name: 'string'},
    },
    message: {
      description: 'The message of the blank state.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
    title: {
      description: 'The title of the blank state.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
  },
  component: EzBlankState,
  title: 'Layout/EzBlankState',
};

export default meta;
type Story = StoryObj<typeof EzBlankState>;

export const Default: Story = {
  args: {
    message:
      "It can take customers a few days after they receive their order to write a review. As you get reviews, they'll appear here.",
    title: "You don't have any reviews yet",
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzCard>
          <EzBlankState
            message="It can take customers a few days after they receive their order to write a review. As you get reviews, they'll appear here."
            title="You don't have any reviews yet"
          />
        </EzCard>
      `,
    },
  },
  render: args => (
    <EzCard>
      <EzBlankState {...args} />
    </EzCard>
  ),
};
