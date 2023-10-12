import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
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

const simpleAlignYJSX = dedent`
  <EzTable
    alignY="top"
    columns={[
      {heading: 'Store name', key: 'store', width: 200},
      {heading: 'Description', key: 'description', allowWrap: true},
    ]}
    items={[
      {
        id: '#001',
        store: 'Ten Forward',
        description:
          'Serves as the social center of the Enterprise and is equipped with a number of recreational activities such as three-dimensional chess, Terrace, and Strategema, tables and seating, and a bar which serves several alcoholic and syntheholic beverages. Designed with several large windows, which offers a spectacular view of space ahead of the vessel.',
      },
      {
        id: '#002',
        store: "Sisko's Kitchen",
        description:
          'A restaurant in the French Quarter of New Orleans serving blackened redfish, shrimp creole, shrimp remoulade, crawfish étouffée, jambalaya, pasta boudin, and gumbo.',
      },
      {
        id: '#003',
        store: "Quark's Bar",
        description: 'A popular recreational facility located on the space station Deep Space 9.',
      },
      {
        id: '#004',
        store: 'Betazoid Bakery',
        description:
          'Produces and sells flour-based food baked in an oven such as bread, cookies, cakes, doughnuts, bagels, pastries, and pies.',
      },
    ]}
  />
`;

export const SimpleAlignY: Story = {
  args: {
    alignY: 'top',
  },
  parameters: {
    docs: {source: {code: simpleAlignYJSX}},
    playroom: {code: simpleAlignYJSX},
  },
  render: args => (
    <EzTable
      columns={[
        {heading: 'Store name', key: 'store', width: 200},
        {heading: 'Description', key: 'description', allowWrap: true},
      ]}
      items={[
        {
          id: '#001',
          store: 'Ten Forward',
          description:
            'Serves as the social center of the Enterprise and is equipped with a number of recreational activities such as three-dimensional chess, Terrace, and Strategema, tables and seating, and a bar which serves several alcoholic and syntheholic beverages. Designed with several large windows, which offers a spectacular view of space ahead of the vessel.',
        },
        {
          id: '#002',
          store: "Sisko's Kitchen",
          description:
            'A restaurant in the French Quarter of New Orleans serving blackened redfish, shrimp creole, shrimp remoulade, crawfish étouffée, jambalaya, pasta boudin, and gumbo.',
        },
        {
          id: '#003',
          store: "Quark's Bar",
          description: 'A popular recreational facility located on the space station Deep Space 9.',
        },
        {
          id: '#004',
          store: 'Betazoid Bakery',
          description:
            'Produces and sells flour-based food baked in an oven such as bread, cookies, cakes, doughnuts, bagels, pastries, and pies.',
        },
      ]}
      {...args}
    />
  ),
};
