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
