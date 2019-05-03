### Every row selected

```jsx
() => {
  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => {
    const onBulkSelectClick = () => {};
    const onRowSelectClick = () => {};

    return (
      <EzPage>
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          onRowSelectClick={onRowSelectClick}
          onBulkSelectClick={onBulkSelectClick}
          isRowSelected={() => true}
          columns={[
            {heading: 'Store name', accessor: 'store'},
            {heading: 'Total sales', accessor: 'total', numeric: true},
            {heading: 'Average order value', accessor: 'average', numeric: true},
          ]}
          items={items}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Pagination, testing last page

```jsx
() => {
  const allItems = [
    {first: 'Tiffany', last: 'Morin'},
    {first: 'Mitchell', last: 'Hoffman'},
    {first: 'Léo', last: 'Gonzalez'},
    {first: 'Alberto', last: 'Arias'},
    {first: 'Olivier', last: 'Campos'},
    {first: 'Ömür', last: 'Ekici'},
    {first: 'Énio', last: 'Barros'},
    {first: 'Ava', last: 'Ma'},
    {first: 'Norberta', last: 'Novaes'},
    {first: 'Deni', last: 'Lubbers'},
  ];

  const Table = () => {
    const state = {
      currentPage: 2,
      totalRows: 10,
      rowsPerPage: 5,
    };

    const startIndex = (state.currentPage - 1) * state.rowsPerPage;

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          columns={[
            {heading: 'First Name', accessor: 'first'},
            {heading: 'Last Name', accessor: 'last'},
          ]}
          items={allItems.slice(startIndex, startIndex + state.rowsPerPage)}
          pagination={{
            currentPage: state.currentPage,
            totalRows: state.totalRows,
            rowsPerPage: state.rowsPerPage,
            rowsPerPageOptions: [5, 10, 20, 30],
            onPrevPageClick: () => {},
            onNextPageClick: () => {},
            onRowsPerPageChange: () => {},
          }}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Pagination, changing default rows per page

```jsx
() => {
  const allItems = [
    {first: 'Tiffany', last: 'Morin'},
    {first: 'Mitchell', last: 'Hoffman'},
    {first: 'Léo', last: 'Gonzalez'},
    {first: 'Alberto', last: 'Arias'},
    {first: 'Olivier', last: 'Campos'},
    {first: 'Ömür', last: 'Ekici'},
    {first: 'Énio', last: 'Barros'},
    {first: 'Ava', last: 'Ma'},
    {first: 'Norberta', last: 'Novaes'},
    {first: 'Deni', last: 'Lubbers'},
  ];

  const Table = () => {
    const state = {
      currentPage: 1,
      totalRows: 10,
      rowsPerPage: 10,
    };

    const startIndex = (state.currentPage - 1) * state.rowsPerPage;

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          columns={[
            {heading: 'First Name', accessor: 'first'},
            {heading: 'Last Name', accessor: 'last'},
          ]}
          items={allItems.slice(startIndex, startIndex + state.rowsPerPage)}
          pagination={{
            currentPage: state.currentPage,
            totalRows: state.totalRows,
            rowsPerPage: state.rowsPerPage,
            rowsPerPageOptions: [5, 10, 20, 30],
            onPrevPageClick: () => {},
            onNextPageClick: () => {},
            onRowsPerPageChange: () => {},
          }}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```
