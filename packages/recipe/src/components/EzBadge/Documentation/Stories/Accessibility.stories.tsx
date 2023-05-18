import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzBadge from '../../EzBadge';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import EzLink from '../../../EzLink';
import DefaultMeta, {Default} from './Default.stories';
import {EzCard} from '../../../EzCard';

const meta: Meta<typeof EzBadge> = {
  title: 'Data Display/EzBadge/Accessibility',
  component: EzBadge,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

export const AriaLabel: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div aria-label="3 items in cart">
            <EzBadge value={3}>
              <EzIcon icon={shoppingCart} />
            </EzBadge>
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

          return (
            <EzPage>
              <div aria-label="3 items in cart">
                <EzBadge value={3}>
                  <EzIcon icon={shoppingCart} />
                </EzBadge>
              </div>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: args => (
    <div aria-label="3 items in cart">
      <EzBadge {...args}>
        <EzIcon icon={faCartShopping} />
      </EzBadge>
    </div>
  ),
};

export const Standalone: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div aria-label="View orders - 3 items in cart">
            <EzLayout layout="split">
              <EzLink>
                <a href="/orders">View Orders</a>
              </EzLink>
              <EzBadge value={3} />
            </EzLayout>
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        <EzCard>
          <div aria-label="View orders - 3 items in cart">
            <EzLayout layout="split">
              <EzLink>
                <a href="/orders">View Orders</a>
              </EzLink>
              <EzBadge value={3} />
            </EzLayout>
          </div>
        </EzCard>
      `,
    },
  },
  render: args => (
    <EzCard style={{width: '300px'}}>
      <div aria-label="View orders - 3 items in cart">
        <EzLayout layout="split">
          <EzLink>
            <a href="/orders">View Orders</a>
          </EzLink>
          <EzBadge {...args} />
        </EzLayout>
      </div>
    </EzCard>
  ),
};
