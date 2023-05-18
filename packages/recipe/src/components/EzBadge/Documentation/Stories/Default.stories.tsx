import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzBadge from '../../EzBadge';
import EzIcon from '../../../EzIcon';

const meta: Meta<typeof EzBadge> = {
  title: 'Data Display/EzBadge',
  component: EzBadge,
  argTypes: {
    alignX: {
      control: {type: 'select'},
      defaultValue: 'right',
      description: 'The horizontal alignment of the badge relative to its wrapped element.',
      options: ['left', 'right'],
      table: {
        defaultValue: {summary: 'right'},
        type: {summary: 'left | right'},
      },
    },
    alignY: {
      control: {type: 'select'},
      defaultValue: 'top',
      description: 'The vertical alignment of the badge relative to its wrapped element.',
      options: ['bottom', 'top'],
      table: {
        defaultValue: {summary: 'top'},
        type: {summary: 'bottom | top'},
      },
    },
    color: {
      control: {type: 'select'},
      defaultValue: 'common.red110',
      description: 'The color of the badge. Supports theme palette properties and colors.',
      options: [
        'primary',
        'secondary',
        'alert',
        'error',
        'info',
        'success',
        'warning',
        'common.red100',
      ],
      table: {
        defaultValue: {summary: 'common.red110'},
        type: {summary: 'EzThemeColors'},
      },
    },
    hide: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'If true, the badge will be hidden.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    max: {
      control: {type: 'number'},
      defaultValue: 99,
      description:
        'The maximum numerical value allowed. If the value is greater than the max, it will appear as `max+`.',
      table: {
        defaultValue: {summary: 99},
        type: {summary: 'number'},
      },
    },
    minimize: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'If true, the badge will be minimized, appearing as a dot.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    overlap: {
      control: {type: 'select'},
      defaultValue: 'rectangular',
      description: 'The wrapped shape the badge overlaps.',
      options: ['circular', 'rectangular'],
      table: {
        defaultValue: {summary: 'rectangular'},
        type: {summary: 'circular | rectangular'},
      },
    },
    showZero: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'If true, a badge with a 0 value will show the value.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    value: {
      control: {type: 'number'},
      description: 'The content inside the badge.',
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>,
      },
      type: {name: 'number', required: true},
      table: {type: {summary: 'ReactNode'}},
    },
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

          return (
            <EzBadge
              alignX="right"
              alignY="top"
              color="common.red110"
              hide={false}
              max={99}
              minimize={false}
              overlap="rectangular"
              showZero={false}
              value={3}
            >
              <EzIcon icon={faCartShopping} />
            </EzBadge>
          );
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EzBadge>;

export const Default: Story = {
  args: {
    alignX: 'right',
    alignY: 'top',
    color: 'common.red110',
    hide: false,
    max: 99,
    minimize: false,
    overlap: 'rectangular',
    showZero: false,
    value: 3,
  },
  parameters: {
    playroom: {
      code: dedent`
        {(() => {
          const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');
        
          return (
            <EzPage>
              <EzBadge
                alignX="right"
                alignY="top"
                color="common.red110"
                hide={false}
                max={99}
                minimize={false}
                overlap="rectangular"
                showZero={false}
                value={3}
              >
                <EzIcon icon={shoppingCart} />
              </EzBadge>
            </EzPage>
          );
        })()}
      `,
    },
  },
  render: args => (
    <EzBadge {...args}>
      <EzIcon icon={faCartShopping} />
    </EzBadge>
  ),
};
