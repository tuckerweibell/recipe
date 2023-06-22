import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCircle, faSquare} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzBadge from '../../EzBadge';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBadge> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBadge,
  title: 'Data Display/EzBadge/Alignment',
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

export const TopRight: Story = {
  args: Default.args,
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <>
              <EzBadge alignX="right" alignY="top" value={3}>
                <EzIcon icon={faCartShopping} />
              </EzBadge>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

          return (
            <EzPage>
              <EzBadge alignX="right" alignY="top" value={3}>
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

export const BottomRight: Story = {
  args: {
    ...Default.args,
    alignY: 'bottom',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge alignX="right" alignY="bottom" value={3}>
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

          return (
            <EzPage>
              <EzBadge alignX="right" alignY="bottom" value={3}>
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

export const TopLeft: Story = {
  args: {
    ...Default.args,
    alignX: 'left',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzBadge alignX="left" alignY="top" value={3}>
            ${'    '}<EzIcon icon={faCartShopping} />
          ${'    '}</EzBadge>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

          return (
            <EzPage>
              <EzBadge alignX="left" alignY="top" value={3}>
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

export const BottomLeft: Story = {
  args: {
    ...Default.args,
    alignX: 'left',
    alignY: 'bottom',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
              <EzBadge alignX="left" alignY="bottom" value={3}>
                <EzIcon icon={faCartShopping} />
              </EzBadge>
            </>
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
              <EzBadge alignX="left" alignY="bottom" value={3}>
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

export const Rectangular: Story = {
  args: Default.args,
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCircle, faSquare} from '@fortawesome/free-solid-svg-icons';

          return (
            <>
              <EzBadge overlap="rectangular" value={3}>
                <EzIcon icon={faSquare} />
              </EzBadge>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faSquare} = require('@fortawesome/free-solid-svg-icons/faSquare');

          return (
            <EzPage>
              <EzBadge overlap="rectangular" value={3}>
                <EzIcon icon={faSquare} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: args => (
    <EzBadge {...args}>
      <EzIcon icon={faSquare} />
    </EzBadge>
  ),
};

export const Circular: Story = {
  args: {
    ...Default.args,
    overlap: 'circular',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
              <EzBadge overlap="circular" value={3}>
                <EzIcon icon={faCircle} />
              </EzBadge>
            </>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faCircle} = require('@fortawesome/free-solid-svg-icons/faCircle');

          return (
            <EzPage>
              <EzBadge overlap="circular" value={3}>
                <EzIcon icon={faCircle} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: args => (
    <EzBadge {...args}>
      <EzIcon icon={faCircle} />
    </EzBadge>
  ),
};
