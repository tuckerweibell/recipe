import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzLabel, {EzLabelProps} from '../../EzLabel';

const meta: Meta<typeof EzLabel> = {
  argTypes: {
    as: {
      control: {type: 'select'},
      description: 'The element type for the label.',
      options: ['label', 'legend', 'div'],
      table: {
        defaultValue: {summary: 'label'},
        type: {summary: 'label | legend | div'},
      },
    },
    error: {
      control: {type: 'boolean'},
      description: 'If true, the label indicates an error state.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    htmlFor: {
      control: {type: 'text'},
      description:
        'Associates a label with an input, and should be the same as the id of the input. Alternatively, nest the input element directly inside the label.',
      table: {
        type: {summary: 'string'},
      },
    },
    position: {
      control: {type: 'select'},
      description: 'The position of the label relative to the element it describes.',
      options: ['top', 'bottom', 'side', 'hidden'],
      table: {
        defaultValue: {summary: 'top'},
        type: {summary: 'top | bottom | side | hidden'},
      },
    },
    use: {
      control: {type: 'select'},
      description: 'The use or variant of the label.',
      options: ['primary', 'secondary'],
      table: {
        type: {summary: 'primary | secondary'},
      },
    },
  },
  component: EzLabel,
  title: 'Input/EzLabel',
};

export default meta;
type Story = StoryObj<typeof EzLabel>;

export const Default: Story = {
  args: {},
  parameters: {
    playroom: {
      code: dedent`
        <div>
          <EzLabel use="primary" htmlFor="primary-input">Label</EzLabel>
          <input id="primary-input" placeholder="Some text" />
        </div>
      `,
    },
  },
  render: (args: EzLabelProps) => (
    <div>
      <EzLabel {...args}>Label</EzLabel>
      <input id="primary-input" placeholder="Some text" />
    </div>
  ),
};
