import React, {useEffect, useRef, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import DefaultMeta from './Default.stories';
import EzTable from '../../EzTable';
import {EXAMPLE_COLUMNS, EXAMPLE_ITEMS} from '../EzTableExample';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  excludeStories: /.*Example$/,
  title: 'Data Display/EzTable/Regression',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

export const EveryRowSelected: Story = {
  render: () => (
    <EzTable
      columns={EXAMPLE_COLUMNS}
      items={EXAMPLE_ITEMS}
      selection={{
        isRowSelected: () => true,
        onBulkSelectClick: () => {},
        onRowSelectClick: () => {},
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  ),
};

export const SelectBannerAllRows: Story = {
  render: () => (
    <EzTable
      columns={EXAMPLE_COLUMNS}
      items={EXAMPLE_ITEMS.slice(0, 5)}
      pagination={{
        currentPage: 1,
        onNextPageClick: () => {},
        onPrevPageClick: () => {},
        onRowsPerPageChange: () => {},
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10],
        totalRows: 5,
      }}
      selection={{
        isRowSelected: () => true,
        onBulkSelectClick: () => {},
        onRowSelectClick: () => {},
        onSelectAllClick: () => {},
        onSelectNoneClick: () => {},
        totalRowsSelected: 5,
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  ),
};

export const SelectBannerAllRowsOnPage: Story = {
  render: () => (
    <EzTable
      columns={EXAMPLE_COLUMNS}
      items={EXAMPLE_ITEMS.slice(0, 5)}
      pagination={{
        currentPage: 1,
        onNextPageClick: () => {},
        onPrevPageClick: () => {},
        onRowsPerPageChange: () => {},
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10],
        totalRows: 10,
      }}
      selection={{
        isRowSelected: () => true,
        onBulkSelectClick: () => {},
        onRowSelectClick: () => {},
        onSelectAllClick: () => {},
        onSelectNoneClick: () => {},
        totalRowsSelected: 5,
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  ),
};

export const SelectBannerDisabled: Story = {
  render: () => (
    <EzTable
      columns={EXAMPLE_COLUMNS}
      items={EXAMPLE_ITEMS.slice(0, 5)}
      pagination={{
        currentPage: 1,
        onNextPageClick: () => {},
        onPrevPageClick: () => {},
        onRowsPerPageChange: () => {},
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10],
        totalRows: 10,
      }}
      selection={{
        isRowSelected: () => true,
        onBulkSelectClick: () => {},
        onRowSelectClick: () => {},
        totalRowsSelected: EXAMPLE_ITEMS.length,
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  ),
};

export const PaginationLastPage: Story = {
  render: () => {
    const currentPage = 2;
    const rowsPerPage = 5;
    const startIndex = (currentPage - 1) * rowsPerPage;
    return (
      <EzTable
        columns={EXAMPLE_COLUMNS}
        items={EXAMPLE_ITEMS.slice(startIndex, startIndex + rowsPerPage)}
        pagination={{
          currentPage,
          onNextPageClick: () => {},
          onPrevPageClick: () => {},
          onRowsPerPageChange: () => {},
          rowsPerPage,
          rowsPerPageOptions: [5, 10],
          totalRows: 10,
        }}
        subtitle="Compared to the same period last year"
        title="All Stores"
      />
    );
  },
};

const PaginationDefaultRowsExample = () => {
  const [pagingState, setPagingState] = useState({currentPage: 1, rowsPerPage: 5});
  const startIndex = (pagingState.currentPage - 1) * pagingState.rowsPerPage;
  const onRowsPerPageChange = (event: {target: {value: number}}) =>
    setPagingState({currentPage: 1, rowsPerPage: event.target.value});

  return (
    <EzTable
      columns={EXAMPLE_COLUMNS}
      items={EXAMPLE_ITEMS.slice(startIndex, startIndex + pagingState.rowsPerPage)}
      pagination={{
        currentPage: pagingState.currentPage,
        onNextPageClick: () => {},
        onPrevPageClick: () => {},
        onRowsPerPageChange,
        rowsPerPage: pagingState.rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalRows: 10,
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  );
};

export const PaginationDefaultRows: Story = {
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const rowsPerPageSelect = canvas.queryAllByDisplayValue(/5 rows per page/i)[0];
    expect(rowsPerPageSelect).toBeInTheDocument();
    expect(canvas.queryAllByText('1-5 of 10')[0]).toBeInTheDocument();

    userEvent.selectOptions(rowsPerPageSelect, '10');
    expect(canvas.queryAllByText('1-10 of 10')[0]).toBeInTheDocument();

    userEvent.click(document.body); // unfocus the select input
  },
  render: () => PaginationDefaultRowsExample(),
};

const HorizontalScrollExample = () => {
  const ref = useRef(null);

  useEffect(() => {
    const mountNode = ref.current;
    const tableEl = mountNode.querySelector('table');
    const scrollEl = tableEl.parentNode;
    scrollEl.scrollLeft = 100;
    scrollEl.dispatchEvent(new Event('scroll'));
  }, [ref]);

  return (
    <div style={{width: '300px'}} ref={ref}>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        columns={EXAMPLE_COLUMNS}
        items={EXAMPLE_ITEMS.slice(0, 3)}
      />
    </div>
  );
};

export const HorizontalScroll: Story = {
  render: () => HorizontalScrollExample(),
};

export const NumericPadded: Story = {
  render: () => (
    <EzTable
      columns={[
        {heading: 'Store name', key: 'store'},
        {
          heading: 'Total sales',
          key: 'total',
          numeric: true,
        },
        {heading: 'Average order value', key: 'average', numericPadded: true},
        {heading: 'Status', key: 'status'},
      ]}
      items={[
        {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79, status: 'Open'},
        {id: '#002', store: "Sisko's Kitchen", total: 22788, average: 367.55, status: 'Open'},
        {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21, status: 'Closed'},
        {id: '#004', store: 'Betazoid Bakery', total: 13085, average: 184.29, status: 'Open'},
      ]}
      selection={{
        isRowSelected: () => true,
        onBulkSelectClick: () => {},
        onRowSelectClick: () => {},
      }}
      subtitle="Compared to the same period last year"
      title="All Stores"
    />
  ),
};

export const TopAligned: Story = {
  render: () => (
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
      title="Store descriptions"
    />
  ),
};
