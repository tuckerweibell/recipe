import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect, jest} from '@storybook/jest';
import dedent from 'ts-dedent';
import EzBanner from '../../EzBanner';

const meta: Meta<typeof EzBanner> = {
  argTypes: {
    link: {
      control: {type: 'object'},
      description:
        'The link of the banner. Used to offer the user an action to take relating to the banner message.',
      table: {type: {summary: 'LabelledLink'}},
      type: {name: 'string', required: true},
    },
    message: {
      control: {type: 'text'},
      description: 'The message of the banner.',
      table: {type: {summary: 'ReactNode'}},
      type: {name: 'string', required: true},
    },
    onDismiss: {
      action: 'dismissed',
      control: {type: 'function'},
      description:
        'Callback fired when the banner is dismissed. Allows the user to acknowledge and dismiss the banner.',
      table: {type: {summary: 'EventHandler<any>'}},
      type: {name: 'function', required: true},
    },
    title: {
      control: {type: 'text'},
      description: 'The title of the banner.',
      table: {type: {summary: 'ReactNode'}},
      type: {name: 'string', required: true},
    },
    use: {
      control: {type: 'select'},
      description: 'The use of the banner.',
      options: ['marketing', 'ezOrdering'],
      type: {name: 'string', required: true},
    },
  },
  component: EzBanner,
  title: 'Layout/EzBanner',
};

export default meta;
type Story = StoryObj<typeof EzBanner>;
const onClick = jest.fn();

export const Default: Story = {
  args: {
    link: {
      label: 'Learn more',
      onClick,
    },
    message:
      'Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order.',
    title: 'More orders, lower commission.',
    use: 'marketing',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzBanner
          link={{
            label: 'Learn more',
            onClick: () => {},
          }}
          message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
          onDismiss={() => {}}
          title="More orders, lower commission."
          use="marketing"
        />
      `,
    },
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getAllByRole('button', {name: /Close/i})[0]);
    expect(args.onDismiss).toHaveBeenCalled();

    onClick.mockReset();
    userEvent.click(canvas.getAllByRole('button', {name: /Learn more/i})[0]);
    expect(onClick).toHaveBeenCalled();
  },
};
