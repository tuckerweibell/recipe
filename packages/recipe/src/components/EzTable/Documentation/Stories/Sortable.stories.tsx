import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import {getItems} from '../EzTableExample';
import DefaultMeta from './Default.stories';
import EzIcon from '../../../EzIcon';
import EzTable from '../../EzTable';
import EzTooltip from '../../../EzTooltip';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  excludeStories: /.*Example$/,
  title: 'Data Display/EzTable/Sortable',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const EzTableSortableExample = () => {
  const items = getItems(['average', 'store', 'total'], 6);

  const sortItems = (columnKey: string, direction: string) =>
    [...items].sort((a, b) =>
      (direction === 'asc' ? a[columnKey] > b[columnKey] : a[columnKey] < b[columnKey]) ? 1 : -1
    );

  const [sortedItems, setSortedItems] = useState(() => sortItems('average', 'desc'));

  const onSortClick = (_event: any, {column, direction}: any) => {
    setSortedItems(sortItems(column.key, direction));
  };

  return (
    <EzTable
      title="Store Owners"
      onSortClick={onSortClick}
      columns={[
        {heading: 'Store name', key: 'store'},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
          sortable: true,
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
          sortable: true,
          defaultSort: 'desc',
        },
      ]}
      items={sortedItems}
    />
  );
};

const EzTableSortableExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const items = [
    {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79},
    {id: '#002', store: "Sisko's Kitchen", total: 22788, average: 367.55},
    {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21},
    {id: '#004', store: 'Betazoid Bakery', total: 13085, average: 184.29},
    {id: '#005', store: "Neelix's Nutrients", total: 16209, average: 205.38},
    {id: '#006', store: 'Orion Dive Bar', total: 51730, average: 460.13},
  ];

  const sortItems = (columnKey, direction) =>
    [...items].sort((a, b) =>
      (direction === 'asc' ? a[columnKey] > b[columnKey] : a[columnKey] < b[columnKey]) ? 1 : -1
    );

  const [sortedItems, setSortedItems] = React.useState(() => sortItems('average', 'desc'));

  const onSortClick = (_event, {column, direction}) => {
    setSortedItems(sortItems(column.key, direction));
  };

  return (
    <EzTable
      title="Store Owners"
      onSortClick={onSortClick}
      columns={[
        {heading: 'Store name', key: 'store'},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
          sortable: true,
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
          sortable: true,
          defaultSort: 'desc',
        },
      ]}
      items={sortedItems}
    />
  );
`;

const EzTableSortablePaginationExample = () => {
  const allItems = getItems(['average', 'store', 'total'], 12);

  const sortItems = (columnKey: string, direction: string) =>
    [...allItems].sort((a, b) =>
      (direction === 'asc' ? a[columnKey] > b[columnKey] : a[columnKey] < b[columnKey]) ? 1 : -1
    );

  const [sortedItems, setSortedItems] = useState(() => sortItems('average', 'desc'));
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const startIndex = (currentPage - 1) * rowsPerPage;

  const onRowsPerPageChange = (event: {target: {value: number}}) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const onSortClick = (_event: any, {column, direction}: any) => {
    setSortedItems(sortItems(column.key, direction));
  };

  return (
    <EzTable
      title="Store Owners"
      onSortClick={onSortClick}
      columns={[
        {heading: 'Store name', key: 'store'},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
          sortable: true,
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
          sortable: true,
          defaultSort: 'desc',
        },
      ]}
      items={sortedItems.slice(startIndex, startIndex + rowsPerPage)}
      pagination={{
        currentPage,
        onNextPageClick: () => setCurrentPage(currentPage + 1),
        onPrevPageClick: () => setCurrentPage(currentPage - 1),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalRows: 12,
      }}
    />
  );
};

const EzTableSortablePaginationExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const allItems = [
    {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79},
    {id: '#002', store: "Sisko's Kitchen", total: 22788, average: 367.55},
    {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21},
    {id: '#004', store: 'Betazoid Bakery', total: 13085, average: 184.29},
    {id: '#005', store: "Neelix's Nutrients", total: 16209, average: 205.38},
    {id: '#006', store: 'Orion Dive Bar', total: 51730, average: 460.13},
    {id: '#007', store: 'Lower Decks Froyo', total: 64021, average: 82.42},
    {id: '#008', store: "Pike's Home Cooking", total: 31472, average: 429.51},
    {id: '#009', store: 'Tribble Tuffles', total: 92742, average: 722.64},
    {id: '#010', store: 'Plomeek Soup', total: 72084, average: 98.29},
    {id: '#011', store: "T'Pril's", total: 82012, average: 103.92},
    {id: '#012', store: 'Bloodwine & Gagh', total: 1922, average: 10.32},
  ];

  const sortItems = (columnKey, direction) =>
    [...allItems].sort((a, b) =>
      (direction === 'asc' ? a[columnKey] > b[columnKey] : a[columnKey] < b[columnKey]) ? 1 : -1
    );

  const [sortedItems, setSortedItems] = React.useState(() => sortItems('average', 'desc'));
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const startIndex = (currentPage - 1) * rowsPerPage;

  const onRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const onSortClick = (_event, {column, direction}) => {
    setSortedItems(sortItems(column.key, direction));
  };

  return (
    <EzTable
      title="Store Owners"
      onSortClick={onSortClick}
      columns={[
        {heading: 'Store name', key: 'store'},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
          sortable: true,
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
          sortable: true,
          defaultSort: 'desc',
        },
      ]}
      items={sortedItems.slice(startIndex, startIndex + rowsPerPage)}
      pagination={{
        currentPage,
        onNextPageClick: () => setCurrentPage(currentPage + 1),
        onPrevPageClick: () => setCurrentPage(currentPage - 1),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalRows: 12,
      }}
    />
  );
`;

export const Sortable: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableSortableExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableSortableExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableSortableExample(),
};

export const SortablePagination: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableSortablePaginationExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableSortablePaginationExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableSortablePaginationExample(),
};
