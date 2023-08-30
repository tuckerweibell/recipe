import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzHeading, {EzHeadingProps} from '../../EzHeading';

const meta: Meta<typeof EzHeading> = {
  argTypes: {
    align: {
      control: {type: 'select'},
      description:
        "The alignment of the heading element. Supports responsive layouts, ex. `{base: 'left', medium: 'center'}`.",
      options: ['center', 'left', 'right'],
      table: {type: {summary: 'center | left | right'}},
      type: {name: 'string'},
    },
    as: {
      control: {type: 'select'},
      description: 'The element type for the heading (overrides corresponding size element type).',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {type: {summary: 'h1 | h2 | h3 | h4 | h5 | h6'}},
      type: {name: 'string'},
    },
    casing: {
      control: {type: 'select'},
      description: 'The casing of the heading element.',
      options: ['uppercase'],
      table: {type: {summary: 'uppercase'}},
    },
    color: {
      control: {type: 'select'},
      description: 'The color of the heading element.',
      options: ['blue', 'green'],
      table: {type: {summary: 'blue | green'}},
      type: {name: 'string'},
    },
    size: {
      control: {type: 'select'},
      description: 'The size of the heading element.',
      options: ['1', '2', '3', '4', '5', '6'],
      table: {
        type: {
          required: true,
          summary: '1 | 2 | 3 | 4 | 5 | 6',
        },
      },
      type: {name: 'string', required: true},
    },
    subheading: {
      control: {type: 'text'},
      description:
        'The subheading of the heading element. Can only be used for headings with `size="3"` or `size="5"`.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
  },
  component: EzHeading,
  title: 'Typography/EzHeading',
};

export default meta;
type Story = StoryObj<typeof EzHeading>;

export const Default: Story = {
  args: {
    size: '1',
  },
  parameters: {
    playroom: {code: '<EzHeading size="1">Heading title</EzHeading>'},
  },
  render: (args: EzHeadingProps) => <EzHeading {...args}>Heading title</EzHeading>,
};
