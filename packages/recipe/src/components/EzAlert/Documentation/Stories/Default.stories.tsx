import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAlert from '../../EzAlert';

const meta: Meta<typeof EzAlert> = {
  title: 'Feedback/EzAlert',
  component: EzAlert,
  argTypes: {
    arrow: {
      control: {type: 'select'},
      description: 'The location of the arrow.',
      options: ['top', 'bottom'],
      table: {type: {summary: 'string'}},
    },
    headline: {
      control: {type: 'text'},
      description: 'The headline of the alert.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
    tagline: {
      control: {type: 'text'},
      description: 'The tagline of the alert.',
      type: {name: 'string', required: false},
      table: {type: {summary: 'string'}},
    },
    use: {
      control: {type: 'select'},
      description: 'The use or variant of the arrow.',
      options: ['success', 'error', 'warning', 'tip', 'info', 'marketing'],
      table: {
        defaultValue: {summary: 'info'},
        type: {summary: 'string'},
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EzAlert>;

export const Default: Story = {
  args: {
    arrow: undefined,
    headline: 'Informational tips for customers',
    tagline: 'Here is something you should know.',
    use: 'info',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          arrow={undefined}
          headline="Informational tips for customers"
          tagline="Here is something you should know."
          use="info"
        />
      `,
    },
  },
};
