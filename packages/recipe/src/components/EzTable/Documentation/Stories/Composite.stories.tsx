import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {color} from '@storybook/theming';
import {EzCard} from '../../../EzCard';
import {EzTableExample, EzTableExampleJSX} from '../EzTableExample';
import {EzTableProps} from '../../EzTable.types';
import DefaultMeta from './Default.stories';
import EzButton from '../../../EzButton';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import EzSearchInput from '../../../EzSearchInput';
import EzTable from '../../EzTable';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  title: 'Data Display/EzTable/Composite',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const compositeKeys = ['store', 'total', 'average', 'actions'];
const compositeArgs = {
  actions: <EzButton>Add store</EzButton>,
  subtitle: 'Compared to the same period last year',
  title: 'All Stores',
  titleIcon: <EzIcon icon={faCoffee} size="large" />,
};
const compositeJSX = EzTableExampleJSX(compositeKeys, compositeArgs as EzTableProps);

export const Composite: Story = {
  args: compositeArgs as EzTableProps,
  parameters: {
    docs: {source: {code: compositeJSX}},
    playroom: {code: compositeJSX},
  },
  render: args => <EzCard>{EzTableExample(compositeKeys, args)}</EzCard>,
};

const compositeNoHeadingArgs = {
  actions: (
    <EzLayout layout="split">
      <EzSearchInput aria-label="Search stores" placeholder="Search" />
      <EzButton>View related stores</EzButton>
    </EzLayout>
  ),
  ariaLabel: 'Table of store sales and average order value',
  showCardWithoutHeading: true,
};
const compositeNoHeadingJSX = EzTableExampleJSX(
  compositeKeys,
  compositeNoHeadingArgs as EzTableProps
);

export const CompositeNoHeading: Story = {
  args: compositeNoHeadingArgs as EzTableProps,
  parameters: {
    docs: {source: {code: compositeNoHeadingJSX}},
    playroom: {code: compositeNoHeadingJSX},
  },
  render: args => <EzCard>{EzTableExample(compositeKeys, args)}</EzCard>,
};

const compositeTransparentArgs = {
  title: 'All Stores',
  transparent: true,
};
const compositeTransparentJSX = EzTableExampleJSX(
  compositeKeys,
  compositeTransparentArgs as EzTableProps
);

export const CompositeTransparent: Story = {
  args: compositeTransparentArgs as EzTableProps,
  parameters: {
    docs: {source: {code: compositeTransparentJSX}},
    playroom: {code: compositeTransparentJSX},
  },
  render: args => (
    <EzCard style={{backgroundColor: color.lighter}}>{EzTableExample(compositeKeys, args)}</EzCard>
  ),
};
