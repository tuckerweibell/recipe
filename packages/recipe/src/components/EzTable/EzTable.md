---
name: EzTable
title: Table
category: Data
path: '/components/ez-table'
tags: ['pagination']
---

Tables are used to display information from a data set in a way that's easy to scan. Tables allow users to compare and analyze the data to look for patterns and insights. Tables will often be the primary content within a [Card](/components/ez-card).

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceed with caution."
  use="warning"
/>

<br/>
<br/>

Features still in consideration include:

- Responsive variants (cards with repeated labels, transpose table)
- Column pinning to support horizontal scrolling
- Header-less table
- Filtering
- Column width options (fixed, grow, auto, ellipsis, tooltip)
- Header-less columns (content between columns, e.g. formula operators)
- Sticky headers

---

## Best Practices

Tables should:

- Be used to show homogeneous content.
- Help users visualize values from a data set.
- Only display values supporting the data's purpose.
- Include a heading to help identify the contents of the table at-a-glance.
- Provide links to view additional or related content within the first column of a table.

## Alignment

Column content types can be varied using component props to enable the following alignment rules:

- Numerical values should be right aligned
- Textual values should be left aligned
- Headers (where present) should align with their data

---

## Content guidelines

Tables should:

- Include concise but descriptive headers
- Avoid truncating content where possible

Tables can also:

- Support items that perform an action when clicked. For example, navigating to the item's details page or provide more detail about the item.
- Provide bulk actions for tasks that are applicable to many items at once.

---

## Examples

### Simple table

Used whenever the tabular data is directly related to the preceding or subsequent content. Simple tables should be used as a direct child of a [Card](/components/ez-card) component.

```jsx
<EzPage>
  <EzCard>
    <EzHeading size="3">Card Title</EzHeading>
    <EzAlert
      headline="Info message"
      tagline="An example of content that is a sibling of the table."
      use="info"
    />
    <EzTable
      columns={[
        {heading: 'From', key: 'from'},
        {heading: 'Through', key: 'to'},
        {heading: 'Total time closed', key: 'total'},
      ]}
      items={[
        {from: '9/3/18', to: '9/5/18', total: '3 days'},
        {from: '10/8/18', to: '10/8/18', total: '1 days'},
      ]}
    />
    <p>Tables may share a card with other related content.</p>
  </EzCard>
</EzPage>
```

### Full Width Table

Add the prop `fullWidth` to allow a table to fill the parent element's width.

```jsx
<EzPage>
  <EzCard>
    <EzTable
      fullWidth
      columns={[
        {heading: 'From', key: 'from'},
        {heading: 'Through', key: 'to'},
        {heading: 'Total time closed', key: 'total'},
      ]}
      items={[
        {from: '9/3/18', to: '9/5/18', total: '3 days'},
        {from: '10/8/18', to: '10/8/18', total: '1 days'},
      ]}
    />
  </EzCard>
</EzPage>
```

### Tables that fill a Card

Used whenever the tabular data alone represents a cohesive set of content. Should be used with a `title` prop and may include optional `titleIcon` and actions.

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  const titleIcon = <EzIcon color="primary" size="large" icon={faCoffee} />;

  return (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        columns={[
          {heading: 'Store name', key: 'store'},
          {heading: 'Total sales', key: 'total', numeric: true},
          {heading: 'Average order value', key: 'average', numeric: true},
        ]}
        items={[
          {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
          {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
        ]}
        titleIcon={titleIcon}
      />
    </EzPage>
  );
};
```

### Tables that fill a Card without a Heading

Used whenever the tabular data alone represents a cohesive set of content, without a table card heading using `showCardWithoutHeading` flag.

Maintain accessibility by providing an `ariaLabel`, and optionally also a heading or label above the card.

May include optional actions.

```jsx
() => {
  const [searchTerms, setSearchTerms] = React.useState('');
  return (
    <EzPage>
      <EzTable
        ariaLabel="Table of store sales and average order value"
        showCardWithoutHeading
        actions={
          <EzLayout layout="split">
            <EzSearchInput
              placeholder="Search"
              aria-label="Search stores"
              value={searchTerms}
              onChange={e => setSearchTerms(e.target.value)}
            />
            <EzButton use="secondary">View related stores</EzButton>
          </EzLayout>
        }
        columns={[
          {heading: 'Store name', key: 'store'},
          {heading: 'Total sales', key: 'total', numeric: true},
          {heading: 'Average order value', key: 'average', numeric: true},
        ]}
        items={[
          {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
          {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
        ]}
      />
    </EzPage>
  );
};
```

### Tables with a Transparent Background

Use the `transparent` flag to inherit the parent element's background color.

```jsx
<EzPage>
  <EzTable
    transparent
    title="All Stores"
    subtitle="Compared to the same period last year"
    columns={[
      {heading: 'Store name', key: 'store'},
      {heading: 'Total sales', key: 'total', numeric: true},
      {heading: 'Average order value', key: 'average', numeric: true},
    ]}
    items={[
      {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
      {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
    ]}
  />
</EzPage>
```

### Table with actions

Tables that fill a card can also offer actions that operate on the table data, or are related to the table content.

Consider wrapping actions in an [EzLayout](/components/ez-layout) to manage how actions stack at smaller breakpoints.

```jsx
<EzPage>
  <EzTable
    title="All Orders"
    actions={<EzButton>View related orders</EzButton>}
    columns={[
      {heading: 'Order number', key: 'id'},
      {heading: 'Event date', key: 'date'},
      {heading: 'Total', key: 'total', numeric: true},
    ]}
    items={[
      {id: '#004', date: '02/28/18', total: '$3267'},
      {id: '#007', date: '02/28/18', total: '$3214'},
    ]}
  />
</EzPage>
```

### Table with search

To filter data with a search filter, provide an `EzSearchInput` as an action, with corresponding search term state and a function to handle filtering the data when the search term changes.

If the search filter needs to be disabled in the case of very large datasets, the recommendation is to first work with a designer to show usable tables with more user-friendly pre-filtered datasets. If that is not possible and performance becomes an issue, conditioanlly hide the search input or disable it.

```jsx
() => {
  const Table = () => {
    const allData = [
      {id: '1', first: 'Tiffany', last: 'Morin'},
      {id: '2', first: 'Mitchell', last: 'Hoffman'},
      {id: '3', first: 'Léo', last: 'Gonzalez'},
      {id: '4', first: 'Alberto', last: 'Arias'},
      {id: '5', first: 'Olivier', last: 'Campos'},
      {id: '6', first: 'Ömür', last: 'Ekici'},
      {id: '7', first: 'Énio', last: 'Barros'},
      {id: '8', first: 'Ava', last: 'Ma'},
      {id: '9', first: 'Norberta', last: 'Novaes'},
      {id: '10', first: 'Deni', last: 'Lubbers'},
    ];

    const [searchTerm, setSearchTerm] = React.useState('');
    const [data, setData] = React.useState(allData);

    const handleFilterTerm = term => {
      const filteredData = allData.filter(datum =>
        Object.values(datum).some(
          value => typeof value === 'string' && value.toLowerCase().includes(term)
        )
      );
      setSearchTerm(term);
      setData(filteredData);
    };

    const searchInput = (
      <EzSearchInput
        placeholder="Search"
        aria-label="Search store owners"
        value={searchTerm}
        onChange={e => handleFilterTerm(e.target.value)}
      />
    );

    return (
      <EzTable
        title="Store Owners"
        actions={searchInput}
        columns={[
          {heading: 'First Name', key: 'first'},
          {heading: 'Last Name', key: 'last'},
        ]}
        items={data}
      />
    );
  };

  return <Table />;
};
```

### Custom cell rendering

Use when more fine-grained control over the table content is desired (in favor of simple Textual/Numerical content). To provide custom content, the `component` property of each column can be provided any [React element](https://reactjs.org/docs/rendering-elements.html) or custom React component. Custom components will be provided an `item` prop with the record to be rendered.

To use a custom cell to render links to additional content, see the [Row highlighting and selection example](#row-highlighting-and-selection);

```jsx
() => {
  // declare any component to define your custom column template
  const StoreName = ({item: {store, id}}) => (
    <div>
      <div>
        <a href="#" onClick={e => e.preventDefault()}>
          {store}
        </a>
      </div>
      <div>
        <EzTextStyle use="subdued">{id}</EzTextStyle>
      </div>
    </div>
  );

  return (
    <EzPage>
      <EzTable
        title="All Stores"
        subtitle="Compared to the same period last year"
        columns={[
          {heading: 'Store name', key: 'name', component: StoreName},
          {heading: 'Total sales', key: 'total', numeric: true},
          {heading: 'Average order value', key: 'average', numeric: true},
        ]}
        items={[
          {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
          {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
        ]}
      />
    </EzPage>
  );
};
```

### Clickable rows

Use when offering links to see more information or related content to ensure the click surface of the link spans the entire table row.

When using [custom cell rendering](#custom-cell-rendering) the `component` property of a column is also provided a `linkRef` which allows the table to target specific links to trigger when the table row is clicked.

Note: Typically, [only the first column](#best-practices) should provide links to view additional or related content. The `linkRef` prop should only be applied to a single column's component, as clicking the row should trigger navigation on a single link.

```jsx
() => {
  // declare any component to define your custom column template
  const StoreName = ({item: {store, id}, linkRef}) => (
    <div>
      <div>
        <a href="#" ref={linkRef} onClick={() => alert(store)}>
          {store}
        </a>
      </div>
    </div>
  );

  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => {
    const [selection, setSelection] = React.useState([]);

    const selectRow = item => setSelection(selection.concat(item));
    const deselectRow = item => setSelection(selection.filter(x => x !== item));
    const isRowSelected = item => selection.includes(item);

    const onBulkSelectClick = () => {
      const newSelection = selection.length === items.length ? [] : items;
      setSelection(newSelection);
    };

    const onRowSelectClick = (_event, {item}) => {
      isRowSelected(item) ? deselectRow(item) : selectRow(item);
    };

    return (
      <EzPage>
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          selection={{
            onRowSelectClick,
            onBulkSelectClick,
            isRowSelected,
          }}
          columns={[
            {heading: 'Store name', key: 'name', component: StoreName},
            {heading: 'Total sales', key: 'total', numeric: true},
            {heading: 'Average order value', key: 'average', numeric: true},
          ]}
          items={items}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Bulk row selection

Use when multiple rows of a table can be selected together in order to perform an action in bulk.

When enabled, table selection provides the user with options to select or deselect either individual rows from a data set, or all the currently visible rows in the table. When using pagination, table selection enables all rows to be selected from the current page, or from the data set as a whole. To see selection and pagination features used together, see the [bulk row selection across pages](/components/ez-table/#bulk-row-selection-across-pages) example.

The following properties are required when using selection:

- `selection`
  - `onRowSelectClick` (required): an event that is fired when the user toggles to select or deselect a row in the table. The event handler function will receive two arguments, the click event and an object containing the row's data `item`.
  - `onBulkSelectClick` (required): an event that is fired when the user toggles to select or deselect all currently visible rows.
  - `isRowSelected` (required): a function used to determine whether a row is currently marked as selected or not. The function accepts the row's `item` object as an argument, and should return `true` if the item is selected, or `false` otherwise.

```jsx
() => {
  const items = [
    {store: '123 Example Store', total: 23267, average: 327.79},
    {store: '45 Meadowview Lane', total: 22788, average: 367.55},
  ];

  const Table = () => {
    const [selection, setSelection] = React.useState([]);

    const selectRow = item => setSelection(selection.concat(item));
    const deselectRow = item => setSelection(selection.filter(x => x !== item));
    const isRowSelected = item => selection.includes(item);

    const onBulkSelectClick = () => {
      const newSelection = selection.length === items.length ? [] : items;
      setSelection(newSelection);
    };

    const onRowSelectClick = (_event, {item}) => {
      isRowSelected(item) ? deselectRow(item) : selectRow(item);
    };

    return (
      <EzPage>
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          selection={{
            onRowSelectClick,
            onBulkSelectClick,
            isRowSelected,
          }}
          columns={[
            {heading: 'Store name', key: 'store'},
            {heading: 'Total sales', key: 'total', numeric: true},
            {heading: 'Average order value', key: 'average', numeric: true},
          ]}
          items={items}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### With sortable columns

Use column sorting to help users find items quicker in larger data sets. Column sorting is switched off for all columns by default. Table data can only be sorted by a single column at a time.

To turn on column sorting, set the `sortable` flag for each column where sorting is supported.

When a column header is pressed, the `onSortClick` callback will be called and provided with `column` metadata and the `direction` in which to sort the data, either `asc` or `desc` for ascending or descending respectively. When sorting a column for the first time, the initial sort direction will be ascending.

When providing pre-sorted data to EzTable, the relevant column should have a `defaultSort` value set to either `asc` or `desc` to indicate the sort order applied to the data.

The following example performs client-side sorting, using the `key` metadata of a column to indicate which column to sort by.

```jsx
() => {
  const initialItems = [
    {name: 'Joan Jett', storeCount: 12},
    {name: 'David Bowie', storeCount: 6},
    {name: 'Sheena Easton', storeCount: 6},
    {name: 'Stevie Nicks', storeCount: 1},
  ];

  const Table = () => {
    const [items, updateItems] = React.useState(initialItems);

    const onSortClick = (_event, {column, direction}) => {
      const newItems = [...initialItems].sort((a, b) => {
        const val1 = a[column.key];
        const val2 = b[column.key];

        return (direction === 'asc' ? val1 > val2 : val1 < val2) ? 1 : -1;
      });

      updateItems(newItems);
    };

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          onSortClick={onSortClick}
          columns={[
            {heading: 'Name', key: 'name', sortable: true},
            {heading: 'Store Count', key: 'storeCount', sortable: true, defaultSort: 'desc'},
          ]}
          items={items}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Columns with Icons

To add an icon to a column header, add `icon` to the `column`. Recipe supports `EzIcon`, which can be wrapped in `EzTooltip`.

Consider and choose the appropriate size, color, and accessibility of each icon added to table column headers in the context of the rest of the columns.

```jsx
() => {
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');
  const initialItems = [
    {name: 'Joan Jett', storeCount: 12},
    {name: 'David Bowie', storeCount: 6},
    {name: 'Sheena Easton', storeCount: 6},
    {name: 'Stevie Nicks', storeCount: 1},
  ];

  const Table = () => {
    const [items, updateItems] = React.useState(initialItems);

    const onSortClick = (_event, {column, direction}) => {
      const newItems = [...initialItems].sort((a, b) => {
        const val1 = a[column.key];
        const val2 = b[column.key];

        return (direction === 'asc' ? val1 > val2 : val1 < val2) ? 1 : -1;
      });

      updateItems(newItems);
    };

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          onSortClick={onSortClick}
          columns={[
            {
              heading: 'Name',
              key: 'name',
              sortable: true,
              icon: <EzIcon icon={faCircleInfo} size="inherit" />,
            },
            {
              heading: 'Store Count',
              key: 'storeCount',
              sortable: true,
              defaultSort: 'desc',
              icon: (
                <EzTooltip message="Here's more info about this store count column">
                  <EzIcon icon={faCircleInfo} size="inherit" />
                </EzTooltip>
              ),
            },
          ]}
          items={items}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Pagination

Pagination can be used to display a large data set, either local or remote, with a set number of rows per page.

Pagination is enabled by adding the `pagination` attribute to `EzTable` with the following properties:

- `currentPage` (required): an integer that represents the default starting page for the data set. This number is 1-indexed.
- `totalRows` (required): an integer that represents the total number of items in the data set.
- `rowsPerPage` (required): an integer used to determine how many items to show per page in the table.
- `rowsPerPageOptions` (required): an array of integers that is displayed at the bottom right of the table used to change `rowsPerPage`.
- `onPrevPageClick` (required): an event that is fired when the "Previous Page" link is clicked.
- `onNextPageClick` (required): an event that is fired when the "Next Page" link is clicked.
- `onRowsPerPageChange` (required): an event that is fired when the "n rows per page" select value is changed.
- `totalFilteredRows` (optional): number of rows after data has been filtered, if using a filter

To see selection and pagination features used together, see the [bulk row selection across pages](/components/ez-table/#bulk-row-selection-across-pages) example.

Using bulk selection across pages may interact with your custom `actions` in an unexpected way (for example, with a search filter). Be sure to test all logic to ensure everything works as expected.

#### Local Data

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
    const [state, setState] = React.useState({
      currentPage: 1,
      totalRows: 10,
      rowsPerPage: 5,
    });

    const {currentPage, totalRows, rowsPerPage} = state;
    const startIndex = (currentPage - 1) * rowsPerPage;

    const updateState = changes => setState({...state, ...changes});
    const onPrevPageClick = () => updateState({currentPage: currentPage - 1});
    const onNextPageClick = () => updateState({currentPage: currentPage + 1});
    const onRowsPerPageChange = e =>
      updateState({
        rowsPerPage: e.target.value,
        currentPage: 1,
      });

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          columns={[
            {heading: 'First Name', key: 'first'},
            {heading: 'Last Name', key: 'last'},
          ]}
          items={allItems.slice(startIndex, startIndex + state.rowsPerPage)}
          pagination={{
            currentPage,
            totalRows,
            rowsPerPage,
            rowsPerPageOptions: [5, 10, 20, 30],
            onPrevPageClick,
            onNextPageClick,
            onRowsPerPageChange,
          }}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

#### Local Data with Sorting

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
    const [state, setState] = React.useState({
      currentPage: 1,
      totalRows: 10,
      rowsPerPage: 5,
      items: allItems,
    });

    const {currentPage, totalRows, rowsPerPage, items} = state;
    const startIndex = (currentPage - 1) * rowsPerPage;

    const updateState = changes => setState({...state, ...changes});
    const onPrevPageClick = () => updateState({currentPage: currentPage - 1});
    const onNextPageClick = () => updateState({currentPage: currentPage + 1});
    const onRowsPerPageChange = e =>
      updateState({
        rowsPerPage: e.target.value,
        currentPage: 1,
      });

    const onSortClick = (_event, {column, direction}) => {
      const sorted = [...allItems].sort((a, b) => {
        const val1 = a[column.key];
        const val2 = b[column.key];
        return (direction === 'asc' ? val1 > val2 : val1 < val2) ? 1 : -1;
      });
      updateState({items: sorted});
    };

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          columns={[
            {heading: 'First Name', key: 'first', sortable: true},
            {heading: 'Last Name', key: 'last', sortable: true},
          ]}
          items={items.slice(startIndex, startIndex + rowsPerPage)}
          onSortClick={onSortClick}
          pagination={{
            currentPage,
            totalRows,
            rowsPerPage,
            rowsPerPageOptions: [5, 10, 20, 30],
            onPrevPageClick,
            onNextPageClick,
            onRowsPerPageChange,
          }}
        />
      </EzPage>
    );
  };

  return <Table />;
};
```

### Bulk row selection across pages

When interacting with large data sets that span multiple pages, managing the selection of records in order to perform an action in bulk can be a challenge. To simplify this experience, users are presented with a summary of their selection with options to select all records across all pages of the data set, or clear their current selection.

To enable this feature, the following additional properties are available when using selection and pagination features together:

- `selection`
  - `onSelectAllClick` (required): an event that is fired when the "Select all" message is clicked.
  - `onSelectNoneClick` (required): an event that is fired when the "Clear selection" message is clicked.
  - `totalRowsSelected` (required): number of total rows selected across pages from your selection state
  - `disableMultiPageSelection: true` (optional): set to true if you don't want to allow the user to select all rows on all pages.

When offering pagination and selection, users should be offered options:

- Selecting individual records
- Selecting all records for the entire page
- Selecting all records for the entire data-set

```jsx
() => {
  const Table = () => {
    const allData = [
      {id: '1', first: 'Tiffany', last: 'Morin'},
      {id: '2', first: 'Mitchell', last: 'Hoffman'},
      {id: '3', first: 'Léo', last: 'Gonzalez'},
      {id: '4', first: 'Alberto', last: 'Arias'},
      {id: '5', first: 'Olivier', last: 'Campos'},
      {id: '6', first: 'Ömür', last: 'Ekici'},
      {id: '7', first: 'Énio', last: 'Barros'},
      {id: '8', first: 'Ava', last: 'Ma'},
      {id: '9', first: 'Norberta', last: 'Novaes'},
      {id: '10', first: 'Deni', last: 'Lubbers'},
    ];

    const [state, setState] = React.useState({
      currentPage: 1,
      totalRows: allData.length,
      totalFilteredRows: allData.length,
      rowsPerPage: 5,
    });

    const [searchTerm, setSearchTerm] = React.useState('');
    const [data, setData] = React.useState(allData);

    const handleFilterTerm = term => {
      const filteredData = allData.filter(datum =>
        Object.values(datum).some(
          value => typeof value === 'string' && value.toLowerCase().includes(term)
        )
      );
      setSearchTerm(term);
      setData(filteredData);
      setState({...state, currentPage: 1, totalFilteredRows: filteredData.length});
    };

    const searchInput = (
      <EzSearchInput
        placeholder="Search"
        aria-label="Search orders"
        value={searchTerm}
        onChange={e => handleFilterTerm(e.target.value)}
      />
    );

    const {currentPage, totalFilteredRows, totalRows, rowsPerPage} = state;
    const updateState = changes => setState({...state, ...changes});

    const startIndex = (state.currentPage - 1) * state.rowsPerPage;
    const currentPageItems = data.slice(startIndex, startIndex + state.rowsPerPage);

    const [selection, setSelection] = React.useState([]);

    const isEqual = (item1, item2) => {
      return item1.id === item2.id;
    };

    const selectRow = item => setSelection(selection.concat(item));
    const deselectRow = item => setSelection(selection.filter(x => !isEqual(x, item)));
    const isRowSelected = item1 => selection.find(item2 => isEqual(item1, item2));

    const onSelectAllClick = () => setSelection(allData);
    const onSelectNoneClick = () => setSelection([]);

    const onBulkSelectClick = () => {
      const selectedPageItems = currentPageItems.filter(isRowSelected);

      const areNoneSelectedOnPage = selectedPageItems.length === 0;
      const areAllSelectedOnPage = selectedPageItems.length === currentPageItems.length;

      const selectAllOnPage = () => selection.concat(currentPageItems);
      const deselectAllOnPage = () =>
        selection.filter(item => !selectedPageItems.find(({id}) => id === item.id));
      const selectRestOnPage = () =>
        selection.concat(currentPageItems.filter(item => !isRowSelected(item)));

      setSelection(
        areNoneSelectedOnPage
          ? selectAllOnPage()
          : areAllSelectedOnPage
          ? deselectAllOnPage()
          : selectRestOnPage()
      );
    };

    const onRowSelectClick = (_event, {item}) => {
      return isRowSelected(item) ? deselectRow(item) : selectRow(item);
    };

    const onPrevPageClick = () => updateState({currentPage: currentPage - 1});
    const onNextPageClick = () => updateState({currentPage: currentPage + 1});
    const onRowsPerPageChange = e =>
      updateState({
        rowsPerPage: e.target.value,
        currentPage: 1,
      });

    return (
      <EzTable
        title="Store Owners"
        actions={searchInput}
        columns={[
          {heading: 'First Name', key: 'first'},
          {heading: 'Last Name', key: 'last'},
        ]}
        items={data.slice(startIndex, startIndex + state.rowsPerPage)}
        selection={{
          totalRowsSelected: selection.length,
          onRowSelectClick,
          onBulkSelectClick,
          isRowSelected,
          onSelectAllClick,
          onSelectNoneClick,
        }}
        pagination={{
          currentPage,
          totalFilteredRows,
          totalRows,
          rowsPerPage,
          rowsPerPageOptions: [5, 10, 20, 30],
          onPrevPageClick,
          onNextPageClick,
          onRowsPerPageChange,
        }}
      />
    );
  };

  return <Table />;
};
```
