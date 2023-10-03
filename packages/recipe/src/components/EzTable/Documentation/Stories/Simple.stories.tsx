import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzTable from '../../EzTable';
import DefaultMeta from './Default.stories';
import {EzTableExample, EzTableExampleJSX} from '../EzTableExample';
import {EzTableProps} from '../../EzTable.types';
import {EzCard} from '../../../EzCard';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  title: 'Data Display/EzTable/Simple',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const simpleJSX = EzTableExampleJSX(['store', 'total', 'average']);

export const Simple: Story = {
  args: {},
  parameters: {
    docs: {source: {code: simpleJSX}},
    playroom: {code: simpleJSX},
  },
  render: args => <EzCard>{EzTableExample(['store', 'total', 'average'], args)}</EzCard>,
};

const simpleFullWidthJSX = EzTableExampleJSX(['store', 'total', 'average'], {
  fullWidth: true,
} as EzTableProps);

export const SimpleFullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    docs: {source: {code: simpleFullWidthJSX}},
    playroom: {code: simpleFullWidthJSX},
  },
  render: args => <EzCard>{EzTableExample(['store', 'total', 'average'], args)}</EzCard>,
};
