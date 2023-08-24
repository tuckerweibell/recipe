import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzBadge from '../../EzBadge';
import DefaultMeta, {Default} from './Default.stories';

const playroomCode = (color: string) =>
  dedent`
    {(() => {
      const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
    
      return (
        <EzPage>
          <EzBadge color="${color}" value={3}>
            <EzIcon icon={shoppingCart} />
          </EzBadge>
        </EzPage>
      );
    })()}
  `;

const meta: Meta<typeof EzBadge> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBadge,
  title: 'Data Display/EzBadge/Color',
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    color: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <>
              <EzBadge value={3} color="primary">
                <EzIcon icon={faCartShopping} />
              </EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('primary')},
  },
  render: Default.render,
};

export const SecondaryColor: Story = {
  args: {
    ...Default.args,
    color: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="secondary">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('secondary')},
  },
  render: Default.render,
};

export const ErrorColor: Story = {
  args: {
    ...Default.args,
    color: 'error',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="error">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('error')},
  },
  render: Default.render,
};

export const WarningColor: Story = {
  args: {
    ...Default.args,
    color: 'warning',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="warning">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('warning')},
  },
  render: Default.render,
};

export const AlertColor: Story = {
  args: {
    ...Default.args,
    color: 'alert',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="alert">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('alert')},
  },
  render: Default.render,
};

export const InfoColor: Story = {
  args: {
    ...Default.args,
    color: 'info',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="info">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('info')},
  },
  render: Default.render,
};

export const NeutralColor: Story = {
  args: {
    ...Default.args,
    color: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="neutral">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('neutral')},
  },
  render: Default.render,
};

export const SuccessColor: Story = {
  args: {
    ...Default.args,
    color: 'success',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge value={3} color="success">
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {code: playroomCode('success')},
  },
  render: Default.render,
};

export const CommonColor: Story = {
  args: {
    ...Default.args,
    color: 'common.red100',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
              <EzBadge value={3} color="common.red100">
                <EzIcon icon={faCartShopping} />
              </EzBadge>
            </>
          );
        `,
      },
    },
    playroom: {code: playroomCode('common.red100')},
  },
  render: Default.render,
};
