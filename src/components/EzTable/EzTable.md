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
- Headerless table
- Sorting
- Filtering
- Row hover styles (interactive)
- Zebra Striping
- Pagination
- Table Actions (print, download etc)
- Column width options (fixed, grow, auto, ellipsis, tooltip)
- Headerless columns (content between columns, e.g. formula operators)
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

Used whenever the tablular data is directly related to the preceeding or subsequent content. Simple tables should be used as a direct child of a [Card](/components/ez-card) component.

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

Used whenever the tablular data alone represents a cohesive set of content. Should be used with a `title` prop and may include optional actions.

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
<Component>
  {() => {
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
  }}
</Component>
```

### Bulk row selection

Use when multiple rows of a table can be selected together in order to perform an action in bulk.

Providing the bulk select event handler props (`onRowSelectClick`, `onBulkSelectClick`, `isRowSelected`) will add a column to each table row containing a checkbox input, along with a corresponding column header containing a checkbox input.

The row-level checkbox input can be toggled to indicate that the current row should be included in a particular action. This functionality is handled by the `isRowSelected` and `onRowSelectClick` props. `isRowSelected` is a Function that is used to determine the row-level checkbox input state. It is called when rendering each row, and is passed the row's `item` object as the single argument. `onRowSelectClick` is a Function that is bound to the row-level checkbox input change handler. It is called when the input state changes, and is passed the row's `item` object as the single argument.

The column header checkbox input can be toggled to select or deselect all currently visible rows. This functionality is handled by the `onBulkSelectClick` prop. This should be a Function that handles the behavior of selecting or deselecting all the visible table rows.

The column header checkbox input state and behavior is determined by evaluating the state of each visible table row. If all rows are selected, then the checkbox will appear selected, and deselecting the input should deselect all rows. If some or none of the rows are selected, the checkbox will appear deselected, and selecting the input should select all rows.

```jsxwide
<Component initialState={{selectedStoreIds: []}}>
  {({state, setState}) => {
    const storeIds = ['#001', '#002'];

    const selectAll = () => {
      setState({selectedStoreIds: storeIds});
    }

    const deselectAll = () => {
      setState({selectedStoreIds: []});
    }

    const selectRow = item => {
      const {selectedStoreIds} = state;

      if (!selectedStoreIds.includes(item.id)) {
        const newStoreIds = [...selectedStoreIds];
        newStoreIds.push(item.id);
        setState({selectedStoreIds: newStoreIds});
      }
    }

    const deselectRow = item => {
      const {selectedStoreIds} = state;
      const newStoreIds = [...selectedStoreIds].filter(id => id !== item.id);
      setState({selectedStoreIds: newStoreIds});
    }

    const isRowSelected = item => {
      const {selectedStoreIds} = state;
      return selectedStoreIds.some(id => id === item.id);
    }

    const onBulkSelectClick = () => {
      const {selectedStoreIds} = state;

      selectedStoreIds.length === storeIds.length ? deselectAll() : selectAll();
    }

    const onRowSelectClick = (_event, {item}) => {
      isRowSelected(item) ? deselectRow(item) : selectRow(item);
    }

    return (
      <EzPage>
        <EzTable
          title="All Stores"
          subtitle="Compared to the same period last year"
          onBulkSelectClick={onBulkSelectClick}
          onRowSelectClick={onRowSelectClick}
          isRowSelected={isRowSelected}
          columns={[
            {heading: 'Store name', accessor: 'store'},
            {heading: 'Total sales', accessor: 'total', numeric: true},
            {heading: 'Average order value', accessor: 'average', numeric: true}
          ]}
          items={[
            {id: storeIds[0], store: '123 Example Store', total: 23267, average: 327.79},
            {id: storeIds[1], store: '45 Meadowview Lane', total: 22788, average: 367.55},
          ]} />
      </EzPage>
    );
  }}
</Component>
```
