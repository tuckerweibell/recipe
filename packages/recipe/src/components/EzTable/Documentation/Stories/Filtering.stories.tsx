import React, {useMemo, useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import DefaultMeta from './Default.stories';
import EzButton from '../../../EzButton';
import EzField from '../../../EzField';
import EzLayout from '../../../EzLayout';
import EzSearchInput from '../../../EzSearchInput';
import EzTable from '../../EzTable';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  title: 'Data Display/EzTable/Filtering',
};

const FILTERING_COLUMNS = [
  {heading: 'First Name', key: 'first'},
  {heading: 'Last Name', key: 'last'},
  {heading: 'Date', key: 'date'},
  {heading: 'Status', key: 'status'},
  {heading: 'Address', key: 'address'},
];

const FILTERING_ITEMS = [
  {
    id: '001',
    first: 'Tiffany',
    last: 'Morin',
    date: '2023-01-15',
    status: 'completed',
    address: '123 Beacon Street',
  },
  {
    id: '002',
    first: 'Mitchell',
    last: 'Hoffman',
    date: '2023-02-15',
    status: 'todo',
    address: '456 Washington Street',
  },
  {
    id: '003',
    first: 'Léo',
    last: 'Gonzalez',
    date: '2023-02-24',
    status: 'waiting',
    address: '234 Marlborough Street',
  },
  {
    id: '004',
    first: 'Alberto',
    last: 'Arias',
    date: '2023-03-10',
    status: 'completed',
    address: '431 Arlington Street',
  },
  {
    id: '005',
    first: 'Olivier',
    last: 'Campos',
    date: '2023-06-12',
    status: 'blocked',
    address: '678 Berkeley Street',
  },
  {
    id: '006',
    first: 'Ömür',
    last: 'Ekici',
    date: '2023-09-03',
    status: 'todo',
    address: '989 Clarendon Street',
  },
  {
    id: '007',
    first: 'Énio',
    last: 'Barros',
    date: '2023-10-18',
    status: 'todo',
    address: '144 Dartmouth Street',
  },
  {
    id: '008',
    first: 'Ava',
    last: 'Ma',
    date: '2023-12-22',
    status: 'waiting',
    address: '402 Exeter Street',
  },
  {
    id: '009',
    first: 'Norberta',
    last: 'Novaes',
    date: '2023-12-26',
    status: 'blocked',
    address: '635 Fairfield Street',
  },
  {
    id: '010',
    first: 'Deni',
    last: 'Lubbers',
    date: '2024-01-01',
    status: 'completed',
    address: '605 Gloucester Street',
  },
];

const EzTableFilteringExample = () => {
  const allData = FILTERING_ITEMS;
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(allData);

  const handleFilterTerm = (term: string) => {
    const filteredData = allData.filter(({first, last}) =>
      [first, last].some(value => value.toLowerCase().includes(term.toLowerCase()))
    );
    setSearchTerm(term);
    setData(filteredData);
  };

  return (
    <EzTable
      actions={
        <EzSearchInput
          placeholder="Search owner name..."
          aria-label="Search store owners"
          value={searchTerm}
          onChange={event => handleFilterTerm(event.target.value)}
        />
      }
      columns={FILTERING_COLUMNS}
      items={data}
      title="Store Owners"
    />
  );
};

const EzTableFilteringExampleJSX = dedent`
  const allData = [
    {
      id: '001',
      first: 'Tiffany',
      last: 'Morin',
      date: '2023-01-15',
      status: 'completed',
      address: '123 Beacon Street',
    },
    {
      id: '002',
      first: 'Mitchell',
      last: 'Hoffman',
      date: '2023-02-15',
      status: 'todo',
      address: '456 Washington Street',
    },
    {
      id: '003',
      first: 'Léo',
      last: 'Gonzalez',
      date: '2023-02-24',
      status: 'waiting',
      address: '234 Marlborough Street',
    },
    {
      id: '004',
      first: 'Alberto',
      last: 'Arias',
      date: '2023-03-10',
      status: 'completed',
      address: '431 Arlington Street',
    },
    {
      id: '005',
      first: 'Olivier',
      last: 'Campos',
      date: '2023-06-12',
      status: 'blocked',
      address: '678 Berkeley Street',
    },
    {
      id: '006',
      first: 'Ömür',
      last: 'Ekici',
      date: '2023-09-03',
      status: 'todo',
      address: '989 Clarendon Street',
    },
    {
      id: '007',
      first: 'Énio',
      last: 'Barros',
      date: '2023-10-18',
      status: 'todo',
      address: '144 Dartmouth Street',
    },
    {
      id: '008',
      first: 'Ava',
      last: 'Ma',
      date: '2023-12-22',
      status: 'waiting',
      address: '402 Exeter Street',
    },
    {
      id: '009',
      first: 'Norberta',
      last: 'Novaes',
      date: '2023-12-26',
      status: 'blocked',
      address: '635 Fairfield Street',
    },
    {
      id: '010',
      first: 'Deni',
      last: 'Lubbers',
      date: '2024-01-01',
      status: 'completed',
      address: '605 Gloucester Street',
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [data, setData] = React.useState(allData);

  const handleFilterTerm = term => {
    const filteredData = allData.filter(({first, last}) =>
      [first, last].some(value => value.toLowerCase().includes(term.toLowerCase()))
    );
    setSearchTerm(term);
    setData(filteredData);
  };

  return (
    <EzTable
      actions={
        <EzSearchInput
          placeholder="Search"
          aria-label="Search store owners"
          value={searchTerm}
          onChange={event => handleFilterTerm(event.target.value)}
        />
      }
      columns={[
        {heading: 'First Name', key: 'first'},
        {heading: 'Last Name', key: 'last'},
        {heading: 'Date', key: 'date'},
        {heading: 'Status', key: 'status'},
        {heading: 'Address', key: 'address'},
      ]}
      items={data}
      title="Store Owners"
    />
  );
`;

const EzTableFilteringAdvancedExample = () => {
  // paging
  const [{currentPage, rowsPerPage}, setPagingState] = useState({
    currentPage: 1,
    rowsPerPage: 5,
  });
  const startIndex = (currentPage - 1) * rowsPerPage;

  // filters
  const defaultFilters = {
    searchTerm: '',
    selectedAddress: null,
    selectedEndDate: null,
    selectedStartDate: null,
    selectedStatus: null,
  };
  const [filters, setFilters] = useState(defaultFilters);
  const [addressSearchTerm, setAddressSearchTerm] = useState('');
  const handleClearFilters = () => {
    setFilters(defaultFilters);
    setAddressSearchTerm('');
  };

  // filtering logic - use server-side filtering where possible
  const data = useMemo(
    () =>
      FILTERING_ITEMS.filter(({first, last, date, status, address}) => {
        let matches = true;

        if (filters.searchTerm)
          matches = [first, last, date, status, address].some(value =>
            value?.toLowerCase()?.includes(filters.searchTerm.toLowerCase())
          );

        if (matches && filters.selectedAddress)
          matches = address?.toLowerCase()?.includes(filters.selectedAddress.toLowerCase());

        if (matches && filters.selectedStartDate)
          matches = date ? +new Date(date) - +new Date(filters.selectedStartDate) >= 0 : false;

        if (matches && filters.selectedEndDate)
          matches = date ? +new Date(date) - +new Date(filters.selectedEndDate) <= 0 : false;

        if (matches && filters.selectedStatus)
          matches = status?.toLowerCase()?.includes(filters.selectedStatus.toLowerCase());

        return matches;
      }),
    [filters]
  );

  const items = useMemo(
    () => data.slice(startIndex, startIndex + rowsPerPage),
    [data, rowsPerPage, startIndex]
  );

  // selection
  const [selection, setSelection] = useState([]);
  const selectRow = (item: any) => setSelection(selection.concat(item));
  const deselectRow = (item: any) => setSelection(selection.filter(x => x !== item));
  const isRowSelected = (item: any) => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowsPerPageChange = (event: {target: {value: number}}) => {
    setPagingState({rowsPerPage: event.target.value, currentPage: 1});
  };

  const onRowSelectClick = (_event: any, {item}: any) =>
    isRowSelected(item) ? deselectRow(item) : selectRow(item);

  const addressOptions = useMemo(
    () =>
      data
        .map(({address}) => address)
        .filter(address => address.toLowerCase().includes(addressSearchTerm.toLowerCase()))
        .sort((a, b) => (a > b ? 1 : -1))
        .map(address => ({label: address, value: address})),
    [data, addressSearchTerm]
  );

  const statusOptions = useMemo(
    () =>
      data
        .map(({status}) => status)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => (a > b ? 1 : -1))
        .map(status => ({label: status, value: status})),
    [data]
  );

  const actionFilters = (
    <EzLayout layout="stack">
      <EzSearchInput
        aria-label="Search store owners"
        onChange={event => {
          setFilters(currentFilters => ({...currentFilters, searchTerm: event.target.value}));
        }}
        placeholder="Search"
        value={filters.searchTerm}
      />
      <EzField
        label="Address"
        onFilter={setAddressSearchTerm}
        onSelectionChange={(selectedAddress: string) => {
          setFilters(currentFilters => ({...currentFilters, selectedAddress}));
          setAddressSearchTerm(selectedAddress || '');
        }}
        options={addressOptions}
        placeholder="Select address..."
        type="autosuggest"
        value={filters.selectedAddress || ''}
      />
      <EzLayout layout="equal">
        <EzField
          label="Start date"
          onChange={date => {
            setFilters(currentFilters => ({...currentFilters, selectedStartDate: date.toString()}));
          }}
          type="date"
          value={filters.selectedStartDate || ''}
        />
        <EzField
          label="End date"
          onChange={date => {
            setFilters(currentFilters => ({...currentFilters, selectedEndDate: date.toString()}));
          }}
          type="date"
          value={filters.selectedEndDate || ''}
        />
        <EzField
          label="Status"
          onSelectionChange={selectedStatus => {
            if (!selectedStatus) return;
            setFilters(currentFilters => ({...currentFilters, selectedStatus}));
          }}
          options={statusOptions}
          placeholder="Select status..."
          type="select"
          value={filters.selectedStatus || ''}
        />
      </EzLayout>
      <div>
        <EzButton onClick={handleClearFilters}>Clear all filters</EzButton>
      </div>
    </EzLayout>
  );

  return (
    <EzTable
      actions={actionFilters}
      ariaLabel="store owners"
      columns={[
        {heading: 'First Name', key: 'first'},
        {heading: 'Last Name', key: 'last'},
        {heading: 'Date', key: 'date'},
        {heading: 'Status', key: 'status'},
        {heading: 'Address', key: 'address'},
      ]}
      items={items}
      pagination={{
        currentPage,
        onNextPageClick: () =>
          setPagingState(currentPagingState => ({
            ...currentPagingState,
            currentPage: currentPage + 1,
          })),
        onPrevPageClick: () =>
          setPagingState(currentPagingState => ({
            ...currentPagingState,
            currentPage: currentPage - 1,
          })),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalFilteredRows: data.length,
        totalRows: FILTERING_ITEMS.length,
      }}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
        onSelectAllClick: () => setSelection(FILTERING_ITEMS),
        onSelectNoneClick: () => setSelection([]),
        totalRowsSelected: selection.length,
      }}
      showCardWithoutHeading
    />
  );
};

const EzTableFilteringAdvancedExampleJSX = dedent`
  const allData = React.useMemo(() => [
    {
      id: '001',
      first: 'Tiffany',
      last: 'Morin',
      date: '2023-01-15',
      status: 'completed',
      address: '123 Beacon Street',
    },
    {
      id: '002',
      first: 'Mitchell',
      last: 'Hoffman',
      date: '2023-02-15',
      status: 'todo',
      address: '456 Washington Street',
    },
    {
      id: '003',
      first: 'Léo',
      last: 'Gonzalez',
      date: '2023-02-24',
      status: 'waiting',
      address: '234 Marlborough Street',
    },
    {
      id: '004',
      first: 'Alberto',
      last: 'Arias',
      date: '2023-03-10',
      status: 'completed',
      address: '431 Arlington Street',
    },
    {
      id: '005',
      first: 'Olivier',
      last: 'Campos',
      date: '2023-06-12',
      status: 'blocked',
      address: '678 Berkeley Street',
    },
    {
      id: '006',
      first: 'Ömür',
      last: 'Ekici',
      date: '2023-09-03',
      status: 'todo',
      address: '989 Clarendon Street',
    },
    {
      id: '007',
      first: 'Énio',
      last: 'Barros',
      date: '2023-10-18',
      status: 'todo',
      address: '144 Dartmouth Street',
    },
    {
      id: '008',
      first: 'Ava',
      last: 'Ma',
      date: '2023-12-22',
      status: 'waiting',
      address: '402 Exeter Street',
    },
    {
      id: '009',
      first: 'Norberta',
      last: 'Novaes',
      date: '2023-12-26',
      status: 'blocked',
      address: '635 Fairfield Street',
    },
    {
      id: '010',
      first: 'Deni',
      last: 'Lubbers',
      date: '2024-01-01',
      status: 'completed',
      address: '605 Gloucester Street',
    },
  ], []);

  // paging
  const [{currentPage, rowsPerPage}, setPagingState] = React.useState({
    currentPage: 1,
    rowsPerPage: 5,
  });
  const startIndex = (currentPage - 1) * rowsPerPage;

  // filters
  const defaultFilters = {
    searchTerm: '',
    selectedAddress: null,
    selectedEndDate: null,
    selectedStartDate: null,
    selectedStatus: null,
  };

  const [filters, setFilters] = React.useState(defaultFilters);
  const [addressSearchTerm, setAddressSearchTerm] = React.useState('');

  const handleClearFilters = () => {
    setFilters(defaultFilters);
    setAddressSearchTerm('');
  };

  // filtering logic - use server-side filtering where possible
  const data = React.useMemo(
    () =>
      allData.filter(({first, last, date, status, address}) => {
        let matches = true;

        if (filters.searchTerm)
          matches = [first, last, date, status, address].some(value =>
            value?.toLowerCase()?.includes(filters.searchTerm.toLowerCase())
          );

        if (matches && filters.selectedAddress)
          matches = address?.toLowerCase()?.includes(filters.selectedAddress.toLowerCase());

        if (matches && filters.selectedStartDate)
          matches = date ? +new Date(date) - +new Date(filters.selectedStartDate) >= 0 : false;

        if (matches && filters.selectedEndDate)
          matches = date ? +new Date(date) - +new Date(filters.selectedEndDate) <= 0 : false;

        if (matches && filters.selectedStatus)
          matches = status?.toLowerCase()?.includes(filters.selectedStatus.toLowerCase());

        return matches;
      }),
    [filters]
  );

  const items = React.useMemo(
    () => data.slice(startIndex, startIndex + rowsPerPage),
    [data, rowsPerPage, startIndex]
  );

  // selection
  const [selection, setSelection] = React.useState([]);
  const selectRow = item => setSelection(selection.concat(item));
  const deselectRow = item => setSelection(selection.filter(x => x !== item));
  const isRowSelected = item => selection.includes(item);
  const onBulkSelectClick = () => setSelection(selection.length === items.length ? [] : items);

  const onRowsPerPageChange = event => {
    setPagingState({rowsPerPage: event.target.value, currentPage: 1});
  };

  const onRowSelectClick = (_event, {item}) =>
    isRowSelected(item) ? deselectRow(item) : selectRow(item);

  const addressOptions = React.useMemo(
    () =>
      data
        .map(({address}) => address)
        .filter(address => address.toLowerCase().includes(addressSearchTerm.toLowerCase()))
        .sort((a, b) => (a > b ? 1 : -1))
        .map(address => ({label: address, value: address})),
    [data, addressSearchTerm]
  );

  const statusOptions = React.useMemo(
    () =>
      data
        .map(({status}) => status)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => (a > b ? 1 : -1))
        .map(status => ({label: status, value: status})),
    [data]
  );

  const actionFilters = (
    <EzLayout layout="stack">
      <EzSearchInput
        aria-label="Search store owners"
        onChange={event => {
          setFilters(currentFilters => ({...currentFilters, searchTerm: event.target.value}));
        }}
        placeholder="Search"
        value={filters.searchTerm}
      />
      <EzField
        label="Address"
        onFilter={setAddressSearchTerm}
        onSelectionChange={selectedAddress => {
          setFilters(currentFilters => ({...currentFilters, selectedAddress}));
          setAddressSearchTerm(selectedAddress || '');
        }}
        options={addressOptions}
        placeholder="Select address..."
        type="autosuggest"
        value={filters.selectedAddress || ''}
      />
      <EzLayout layout="equal">
        <EzField
          label="Start date"
          onChange={date => {
            setFilters(currentFilters => ({...currentFilters, selectedStartDate: date.toString()}));
          }}
          type="date"
          value={filters.selectedStartDate || ''}
        />
        <EzField
          label="End date"
          onChange={date => {
            setFilters(currentFilters => ({...currentFilters, selectedEndDate: date.toString()}));
          }}
          type="date"
          value={filters.selectedEndDate || ''}
        />
        <EzField
          label="Status"
          onSelectionChange={selectedStatus => {
            if (!selectedStatus) return;
            setFilters(currentFilters => ({...currentFilters, selectedStatus}));
          }}
          options={statusOptions}
          placeholder="Select status..."
          type="select"
          value={filters.selectedStatus || ''}
        />
      </EzLayout>
      <div>
        <EzButton onClick={handleClearFilters}>Clear all filters</EzButton>
      </div>
    </EzLayout>
  );

  return (
    <EzTable
      actions={actionFilters}
      ariaLabel="store owners"
      columns={[
        {heading: 'First Name', key: 'first'},
        {heading: 'Last Name', key: 'last'},
        {heading: 'Date', key: 'date'},
        {heading: 'Status', key: 'status'},
        {heading: 'Address', key: 'address'},
      ]}
      items={items}
      pagination={{
        currentPage,
        onNextPageClick: () =>
          setPagingState(currentPagingState => ({
            ...currentPagingState,
            currentPage: currentPage + 1,
          })),
        onPrevPageClick: () =>
          setPagingState(currentPagingState => ({
            ...currentPagingState,
            currentPage: currentPage - 1,
          })),
        onRowsPerPageChange,
        rowsPerPage,
        rowsPerPageOptions: [5, 10],
        totalFilteredRows: data.length,
        totalRows: allData.length,
      }}
      selection={{
        isRowSelected,
        onBulkSelectClick,
        onRowSelectClick,
        onSelectAllClick: () => setSelection(allData),
        onSelectNoneClick: () => setSelection([]),
        totalRowsSelected: selection.length,
      }}
      showCardWithoutHeading
    />
  );
`;

export default meta;
type Story = StoryObj<typeof EzTable>;

export const Filtering: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableFilteringExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableFilteringExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableFilteringExample(),
};

export const FilteringAdvanced: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableFilteringAdvancedExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableFilteringAdvancedExampleJSX}
        })()}
      `,
    },
  },
  render: () => EzTableFilteringAdvancedExample(),
};
