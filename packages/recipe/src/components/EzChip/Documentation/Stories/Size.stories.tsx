import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzChip from '../../EzChip';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  title: 'Data Display/EzChip/Size',
  component: EzChip,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const SizeSmall: Story = {
  args: {
    ...Default.args,
    label: 'Small',
    size: 'small',
  },
  parameters: {
    playroom: {code: '<EzChip label="Small" size="small" />'},
  },
};

export const SizeMedium: Story = {
  args: {
    ...Default.args,
    label: 'Medium',
    size: 'medium',
  },
  parameters: {
    playroom: {code: '<EzChip label="Medium" size="medium" />'},
  },
};

export const SizeInherit: Story = {
  args: {
    ...Default.args,
    label: 'Inherit',
    size: 'inherit',
  },
  decorators: [
    StoryFn => (
      <div style={{fontSize: '1.2em'}}>
        <StoryFn />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div style={{fontSize: '1.2em'}}>
            <EzChip label="Inherit" size="inherit" />
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        <div style={{fontSize: '1.2em'}}>
          <EzChip label="Inherit" size="inherit" />
        </div>
      `,
    },
  },
};
