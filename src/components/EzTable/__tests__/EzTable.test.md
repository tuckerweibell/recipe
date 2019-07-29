### Every row selected

```jsx
() => {
  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        selection={{
          onRowSelectClick: () => {},
          onBulkSelectClick: () => {},
          isRowSelected: () => true,
        }}
        columns={[
          {heading: 'Store name', accessor: 'store'},
          {heading: 'Total sales', accessor: 'total', numeric: true},
          {heading: 'Average order value', accessor: 'average', numeric: true},
        ]}
        items={items}
      />
    </EzPage>
  );

  return <Table />;
};
```

### Table select banner - all rows on page selected

```jsx
() => {
  const items = [
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

  const Table = () => (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        selection={{
          onRowSelectClick: () => {},
          onBulkSelectClick: () => {},
          isRowSelected: () => true,
          onSelectAllClick: () => {},
          onSelectNoneClick: () => {},
        }}
        columns={[
          {heading: 'First Name', accessor: 'first'},
          {heading: 'Last Name', accessor: 'last'},
        ]}
        items={items.slice(0, 5)}
        pagination={{
          currentPage: 1,
          totalRows: 10,
          rowsPerPage: 5,
          rowsPerPageOptions: [5, 10, 20, 30],
          onPrevPageClick: () => {},
          onNextPageClick: () => {},
          onRowsPerPageChange: () => {},
        }}
      />
    </EzPage>
  );

  return <Table />;
};
```

### Table select banner - all rows selected

```jsx
() => {
  const items = [
    {first: 'Tiffany', last: 'Morin'},
    {first: 'Mitchell', last: 'Hoffman'},
    {first: 'Léo', last: 'Gonzalez'},
    {first: 'Alberto', last: 'Arias'},
    {first: 'Olivier', last: 'Campos'},
  ];

  const Table = () => (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        selection={{
          onRowSelectClick: () => {},
          onBulkSelectClick: () => {},
          isRowSelected: () => true,
          onSelectAllClick: () => {},
          onSelectNoneClick: () => {},
        }}
        columns={[
          {heading: 'First Name', accessor: 'first'},
          {heading: 'Last Name', accessor: 'last'},
        ]}
        items={items.slice(0, 5)}
        pagination={{
          currentPage: 1,
          totalRows: 5,
          rowsPerPage: 5,
          rowsPerPageOptions: [5, 10, 20, 30],
          onPrevPageClick: () => {},
          onNextPageClick: () => {},
          onRowsPerPageChange: () => {},
        }}
      />
    </EzPage>
  );

  return <Table />;
};
```

### Table select banner hidden when not enabled

```jsx
() => {
  const items = [
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

  const Table = () => (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        selection={{
          onRowSelectClick: () => {},
          onBulkSelectClick: () => {},
          isRowSelected: () => true,
        }}
        columns={[
          {heading: 'First Name', accessor: 'first'},
          {heading: 'Last Name', accessor: 'last'},
        ]}
        items={items.slice(0, 5)}
        pagination={{
          currentPage: 1,
          totalRows: 10,
          rowsPerPage: 5,
          rowsPerPageOptions: [5, 10, 20, 30],
          onPrevPageClick: () => {},
          onNextPageClick: () => {},
          onRowsPerPageChange: () => {},
        }}
      />
    </EzPage>
  );

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

### With horizontal scroll

```jsx
() => {
  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      const mountNode = ref.current;
      const tableEl = mountNode.querySelector('table');
      const scrollEl = tableEl.parentNode;
      scrollEl.scrollLeft = 10;
      scrollEl.dispatchEvent(new Event('scroll'));
    }, [ref]);

    return (
      <SetOverflow>
        <div style={{width: '400px'}} ref={ref}>
          <EzPage>
            <EzTable
              title="All Stores"
              subtitle="Compared to the same period last year"
              columns={[
                {heading: 'Store name', accessor: 'store'},
                {heading: 'Total sales', accessor: 'total', numeric: true},
                {heading: 'Average order value', accessor: 'average', numeric: true},
              ]}
              items={items}
            />
          </EzPage>
        </div>
      </SetOverflow>
    );
  };

  return <Table />;
};
```

### With horizontal scroll and selection

```jsx
() => {
  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      const mountNode = ref.current;
      const tableEl = mountNode.querySelector('table');
      const scrollEl = tableEl.parentNode;
      scrollEl.scrollLeft = 10;
      scrollEl.dispatchEvent(new Event('scroll'));
    }, [ref]);

    return (
      <SetOverflow>
        <div style={{width: '400px'}} ref={ref}>
          <EzPage>
            <EzTable
              title="All Stores"
              subtitle="Compared to the same period last year"
              selection={{
                onRowSelectClick: () => {},
                onBulkSelectClick: () => {},
                isRowSelected: () => true,
              }}
              columns={[
                {heading: 'Store name', accessor: 'store'},
                {heading: 'Total sales', accessor: 'total', numeric: true},
                {heading: 'Average order value', accessor: 'average', numeric: true},
              ]}
              items={items}
            />
          </EzPage>
        </div>
      </SetOverflow>
    );
  };

  return <Table />;
};
```
