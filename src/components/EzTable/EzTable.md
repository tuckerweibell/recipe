---
name: Table
title: Table
path: "/components/ez-table"
---

Tables are use to display information from a data set in a way that's easy to scan. Tables allow users to compare and analyze the data to look for patterns and insights. Tables will often be the primary content within a [Card](/components/ez-card).

Tables can also:

* Support customized cell content
* Include bulk actions so users can act on multiple records at once
* Support sorting and filtering
* Support pagination to handle larger data sets

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceeed with caution."
  use="warning"
/>

##

---

## Best Practices

Tables should:

* Be used to show homogeneous content.
* Help users visualize values from a data set.
* Only display values supporting the data's purpose.
* Allow filtering and sorting when embedded in a card.
* Optionally include a heading to help identify the contents of the table at-a-glance.
* Optionally allow sorting and filtering interactions so that user's can view the data in meaningful ways.

## Alignment

Column content types can be varied using component props to enable the following alignment rules:

* Numerical values should be right aligned
* Textual values should be left aligned
* Headers (where present) should align with their data

---

## Content guidelines

Tables should:

* Include concise but descriptive headers
* Avoid truncating content where possible

Tables can also:
* Support items that perform an action when clicked. For example, navigating to the item's details page or provide more detail about the item.
* Provide bulk actions for tasks that are applicable to many items at once.


## Examples

### Simple table

Used whenever the tablular data is directly related to the preceeding or subsequent content. Simple tables should be used as a direct child of a [Card](/components/ez-card) component.

```jsx-wide
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

```jsx-wide
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

```jsx-wide
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

---
