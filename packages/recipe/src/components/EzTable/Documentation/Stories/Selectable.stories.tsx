import React, {useMemo, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import {getColumns, getItems} from '../EzTableExample';
import DefaultMeta from './Default.stories';
import EzTable from '../../EzTable';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  excludeStories: /.*Example$/,
  title: 'Data Display/EzTable/Selectable',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const EzTableSelectableExample = () => {
  const items = useMemo(() => getItems(['average', 'store', 'total'], 4), []);
  const [selection, setSelection] = useState([]);
  const isRowSelected = (item: any) => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowSelectClick = (_event: any, {item}: any) =>
    isRowSelected(item)
      ? setSelection(selection.filter(x => x !== item)) // deselect row
      : setSelection(selection.concat(item)); // select row

  return (
    <EzTable
      columns={getColumns(['average', 'store', 'total'])}
      items={items}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
      }}
      title="All Stores"
    />
  );
};

const EzTableSelectableExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const items = React.useMemo(() => [
    {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79},
    {id: '#002', store: "Sisko's Kitchen", total: 22788, average: 367.55},
    {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21},
    {id: '#004', store: 'Betazoid Bakery', total: 13085, average: 184.29},
  ], []);

  const [selection, setSelection] = React.useState([]);
  const isRowSelected = item => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowSelectClick = (_event, {item}) =>
    isRowSelected(item)
      ? setSelection(selection.filter(x => x !== item)) // deselect row
      : setSelection(selection.concat(item)); // select row

  return (
    <EzTable
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
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
        },
      ]}
      items={items}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
        totalRowsSelected: selection.length,
      }}
      title="All Stores"
    />
  );
`;

const EzTableSelectablePaginationExample = () => {
  const items = useMemo(() => getItems(['average', 'store', 'total'], 12), []);
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const isRowSelected = (item: any) => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowsPerPageChange = (event: {target: {value: number}}) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const onRowSelectClick = (_event: any, {item}: any) =>
    isRowSelected(item)
      ? setSelection(selection.filter(x => x !== item)) // deselect row
      : setSelection(selection.concat(item)); // select row

  return (
    <EzTable
      columns={getColumns(['average', 'store', 'total'])}
      items={items.slice(startIndex, startIndex + rowsPerPage)}
      pagination={{
        currentPage,
        onNextPageClick: () => setCurrentPage(currentPage + 1),
        onPrevPageClick: () => setCurrentPage(currentPage - 1),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalRows: 12,
      }}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
        onSelectAllClick: () => setSelection(items),
        onSelectNoneClick: () => setSelection([]),
        totalRowsSelected: selection.length,
      }}
      title="All Stores"
    />
  );
};

const EzTableSelectablePaginationExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const items = React.useMemo(() => [
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
  ], []);

  const [selection, setSelection] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const isRowSelected = item => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const onRowSelectClick = (_event, {item}) =>
    isRowSelected(item)
      ? setSelection(selection.filter(x => x !== item)) // deselect row
      : setSelection(selection.concat(item)); // select row

  return (
    <EzTable
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
        },
        {
          heading: 'Average order value',
          key: 'average',
          numeric: true,
        },
      ]}
      items={items.slice(startIndex, startIndex + rowsPerPage)}
      pagination={{
        currentPage,
        onNextPageClick: () => setCurrentPage(currentPage + 1),
        onPrevPageClick: () => setCurrentPage(currentPage - 1),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalRows: 12,
      }}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
        onSelectAllClick: () => setSelection(items),
        onSelectNoneClick: () => setSelection([]),
        totalRowsSelected: selection.length,
      }}
      title="All Stores"
    />
  );
`;

export const Selectable: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableSelectableExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableSelectableExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableSelectableExample(),
};

export const SelectablePagination: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableSelectablePaginationExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableSelectablePaginationExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableSelectablePaginationExample(),
};
