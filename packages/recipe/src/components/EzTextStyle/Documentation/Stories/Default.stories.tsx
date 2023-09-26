import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTextStyle, {Props} from '../../EzTextStyle';

const meta: Meta<typeof EzTextStyle> = {
  argTypes: {
    align: {
      control: {type: 'select'},
      description:
        "The alignment of the text element. Supports responsive layouts, ex. `{base: 'left', medium: 'center'}`.",
      options: ['center', 'left', 'right'],
      table: {
        defaultValue: {summary: 'left'},
        type: {summary: 'center | left | right'},
      },
    },
    use: {
      control: {type: 'select'},
      description: 'The use or variant of the text element.',
      options: ['strong', 'subdued'],
      table: {
        type: {summary: 'strong | subdued'},
      },
    },
  },
  component: EzTextStyle,
  title: 'Typography/EzTextStyle',
};

export default meta;
type Story = StoryObj<typeof EzTextStyle>;

export const Default: Story = {
  args: {},
  parameters: {
    playroom: {code: <EzTextStyle>This is some example text.</EzTextStyle>},
  },
  render: (args: Props) => <EzTextStyle {...args}>This is some example text.</EzTextStyle>,
};
