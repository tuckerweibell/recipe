import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzBadge from '../../EzBadge';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBadge> = {
  title: 'Data Display/EzBadge/Value',
  component: EzBadge,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

export const Value: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge value={3}>
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

          return (
            <EzPage>
              <EzBadge value={3}>
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: Default.render,
};

export const Hide: Story = {
  args: {
    ...Default.args,
    hide: true,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge hide value={3}>
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
        
          return (
            <EzPage>
              <EzBadge hide value={3}>
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: Default.render,
};

export const Minimize: Story = {
  args: {
    ...Default.args,
    minimize: true,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge minimize value={3}>
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
        
          return (
            <EzPage>
              <EzBadge minimize value={3}>
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: Default.render,
};

export const ShowZero: Story = {
  args: {
    ...Default.args,
    showZero: true,
    value: 0,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge showZero value={0}>
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
        
          return (
            <EzPage>
              <EzBadge showZero value={0}>
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: Default.render,
};

export const Max: Story = {
  args: {
    ...Default.args,
    value: 100,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge max={99} value={100}>
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
        
          return (
            <EzPage>
              <EzBadge max={99} value={100}>
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: Default.render,
};
