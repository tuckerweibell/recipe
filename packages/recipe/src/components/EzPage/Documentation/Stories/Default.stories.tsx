import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import {EzCard} from '../../../EzCard';
import EzPage, {EzPageProps} from '../../EzPage';

const meta: Meta<typeof EzPage> = {
  argTypes: {
    backgroundColor: {
      control: {type: 'select'},
      description: 'The background color of the page.',
      options: ['gray', 'white'],
      table: {
        defaultValue: {summary: 'gray'},
        type: {summary: 'string'},
      },
    },
  },
  component: EzPage,
  title: 'Layout/EzPage',
};

export default meta;
type Story = StoryObj<typeof EzPage>;

export const Default: Story = {
  args: {
    backgroundColor: 'gray',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzPage>
          <EzCard title="Card">Content</EzCard>
          <EzCard title="Card">Content</EzCard>
          <EzCard title="Table">
            This example is really a card, but you can put tables and other content in EzPage too.
          </EzCard>
        </EzPage>
      `,
    },
  },
  render: (args: EzPageProps) => (
    <EzPage {...args}>
      <EzCard title="Card">Content</EzCard>
      <EzCard title="Card">Content</EzCard>
      <EzCard title="Table">
        This example is really a card, but you can put tables and other content in EzPage too.
      </EzCard>
    </EzPage>
  ),
};
