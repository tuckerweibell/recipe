---
name: Table
title: Table
path: '/components/ez-table'
---

Tables are used to display information from a data set in a way that's easy to scan. Tables allow users to compare and analyze the data to look for patterns and insights. Tables will often be the primary content within a [Card](/components/ez-card).

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceeed with caution."
  use="warning"
/>

<br/>
<br/>

Features still in consideration include:

- Responsive variants (cards with repeated labels, transpose table)
- Column pinning to support horizontal scrolling
- Header-less table
- Sorting
- Filtering
- Row hover styles (interactive)
- Zebra Striping
- Pagination
- Table Actions (print, download etc)
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

## Examples

### Simple table

Used whenever the tabular data is directly related to the preceding or subsequent content. Simple tables should be used as a direct child of a [Card](/components/ez-card) component.

```jsxwide
<EzPage>
  <EzCard>
    <EzHeading
      size="3"
    >
      Card Title
    </EzHeading>
    <EzAlert
      headline="Info message"
      tagline="An example of content that is a sibling of the table."
      use="info"
    />
    <EzTable
      columns={[
        {heading: 'From', accessor: 'from'},
        {heading: 'Through', accessor: 'to'},
        {heading: 'Total time closed', accessor: 'total'}
      ]}
      items={[
        {from: '9/3/18', to: '9/5/18', total: '3 days'},
        {from: '10/8/18', to: '10/8/18', total: '1 days'}
      ]} />
    <p>Tables may share a card with other related content.</p>
  </EzCard>
</EzPage>
```

### Tables that fill a Card

Used whenever the tabular data alone represents a cohesive set of content. Should be used with a `title` prop and may include optional actions.

```jsxwide
<EzPage>
  <EzTable
    title="All Stores"
    subtitle="Compared to the same period last year"
    columns={[
      {heading: 'Store name', accessor: 'store'},
      {heading: 'Total sales', accessor: 'total', numeric: true},
      {heading: 'Average order value', accessor: 'average', numeric: true}
    ]}
    items={[
      {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
      {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
    ]} />
</EzPage>
```

### Custom cell rendering

Use when more fine-grained control over the table content is desired (in favor of simple Textual/Numerical content).

```jsxwide
() => {
  // declare any component to define your custom column template
  const StoreName = ({item: {store, id}}) => (
    <div>
      <div>
        <a href="javascript:void(0);">{store}</a>
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
          {heading: 'Store name', accessor: StoreName},
          {heading: 'Total sales', accessor: 'total', numeric: true},
          {heading: 'Average order value', accessor: 'average', numeric: true}
        ]}
        items={[
          {id: '#004', store: '123 Example Store', total: 23267, average: 327.79},
          {id: '#007', store: '45 Meadowview Lane', total: 22788, average: 367.55},
        ]} />
    </EzPage>
  );
}
```

### Bulk row selection

Use when multiple rows of a table can be selected together in order to perform an action in bulk.

Providing the bulk select event handler props (`onRowSelectClick`, `onBulkSelectClick`, `isRowSelected`) will add a column to each table row containing a checkbox input, along with a corresponding column header containing a checkbox input.

The row-level checkbox input can be toggled to indicate that the current row should be included in a particular action. This functionality is handled by the `isRowSelected` and `onRowSelectClick` props. `isRowSelected` is a Function that is used to determine the row-level checkbox input state. It is called when rendering each row, and is passed the row's `item` object as the single argument. `onRowSelectClick` is a Function that is bound to the row-level checkbox input change handler. It is called when the input state changes, and is passed the row's `item` object as the single argument.

The column header checkbox input can be toggled to select or deselect all currently visible rows. This functionality is handled by the `onBulkSelectClick` prop. This should be a Function that handles the behavior of selecting or deselecting all the visible table rows.

The column header checkbox input state and behavior is determined by evaluating the state of each visible table row. If all rows are selected, then the checkbox will appear selected, and deselecting the input should deselect all rows. If some or none of the rows are selected, the checkbox will appear deselected, and selecting the input should select all rows.

```jsxwide
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
          onRowSelectClick={onRowSelectClick}
          onBulkSelectClick={onBulkSelectClick}
          isRowSelected={isRowSelected}
          columns={[
            {heading: 'Store name', accessor: 'store'},
            {heading: 'Total sales', accessor: 'total', numeric: true},
            {heading: 'Average order value', accessor: 'average', numeric: true}
          ]}
          items={items} />
      </EzPage>
    );
  }

  return <Table />;
}
```

### With sortable columns

Use column sorting to help users find items quicker in larger data sets. Column sorting is switched off for all columns by default. Table data can only be sorted by a single column at a time.

To turn on column sorting, set the `sortBy` property for each column where sorting is supported. `sortBy` is a string identifying the attribute to be sorted on. It should be a value that can be used by the client when executing the sort functionality.

The client code must also provide an `onSortClick` function as a prop to `EzTable`. When the column header for a sortable column is clicked, `EzTable` will notify the client that sorting is requested by calling the provided `onSortClick` function. The function is called with the click event as the first argument, and an object with the properties `column` and `direction` as the second argument. `column` is the object representing the column being sorted (of which `sortBy` is a property), and `direction` is a string whose value represents the direction the sort should use, either `asc` or `desc`. The default sort direction is `asc`.

```jsxwide
() => {
  const initialItems = [
    {name: 'Joan Jett', storeCount: 12},
    {name: 'David Bowie', storeCount: 6},
  ];

  const Table = () => {
    const [items, updateItems] = React.useState(initialItems);

    const onSortClick = (_event, {column, direction}) => {
      const newItems = [...items].sort(
        (a, b) => (a[column.sortBy] > b[column.sortBy]) ? 1 : -1
      );
      updateItems(direction === 'desc' ? newItems.reverse() : newItems)
    };

    return (
      <EzPage>
        <EzTable
          title="Store Owners"
          onSortClick={onSortClick}
          columns={[
            {heading: 'Name', accessor: 'name', sortBy: 'NAME'},
            {heading: 'Store Count', accessor: 'storeCount', sortBy: 'STORE_COUNT'},
          ]}
          items={items} />
      </EzPage>
    );
  }

  return <Table />;
}
```
