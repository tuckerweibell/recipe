---
name: EzLayout
title: Small-scale Layout
category: Layout
path: '/components/ez-layout'
---

The layout component provide common ways to arrange the content of a screen. The layout component controls the spacing of its content. For horizontal layout types, the layout component will vertically center the content items.

---

## Best Practices

Layouts should:

- Be used for small-scale layout tasks
- Be used when you want to lay out a horizontal row of content OR
- Be used when you want to layout out a vertical stack of content that would otherwise be inline

Layouts should not:

- Be used for large-scale page layout. For large-scale layouts, consider using a [Card](/components/ez-card) within [Page Content](/components/ez-page-content)
- Wrap content onto multiple lines. The content inside a layout should be designed as not to exceed the available horizontal space.

---

## Examples

### Basic layout

The `basic` layout arranges content into a single row with even spacing between the content items.

```jsx
<EzCard>
  <EzLayout layout="basic">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```

### Right layout

The `right` layout arranges content into a single row, aligned to the right edge of its container, with even spacing between the content items. The `right` layout can be used, for example, for aligning action buttons within a card.

```jsx
<EzCard>
  <EzLayout layout="right">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```

### Equal layout

The `equal` layout arranges content into equal widths filling a single row. The `equal` layout can be used, for example, for evenly spacing spending statistics across a single row.

```jsx
<EzCard>
  <EzCardSection>
    <EzLayout layout="equal">
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
    </EzLayout>
  </EzCardSection>
  <EzCardSection>
    <EzLayout layout="equal">
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### Split layout

The `split` layout arranges content into two groups on a single row, one aligned to the left edge of its container with the other to the right edge. The `split` layout will usually be [combined with other layout arrangements inside](#combining-layouts). The `split` layout can be used, for example, for aligning secondary buttons for next steps to the bottom left of a card, while aligning primary calls-to-action to the bottom right of a card.

```jsx
<EzCard>
  <EzLayout layout="split">
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```

### Stack layout

The `stack` layout arranges content into a vertical column. The `stack` layout can be used, for example, when targeting small screen sizes, to organize content into stacked columns. In many cases, a `stack` layout may not be necessary; block level components will naturally stack in a container, and container components such as [`EzCard`](/components/ez-card) will apply consistent spacing between content items.

```jsx
<EzCard>
  <EzLayout layout="stack">
    <Placeholder height={48} />
    <Placeholder height={48} />
    <Placeholder height={48} />
  </EzLayout>
</EzCard>
```

### Tile layout

The `tile` layout arranges content in a grid with equal spacing between rows and columns. Tile layouts are a good choice when the number of items in the layout may vary, or when the exact number of items is unknown, since the layout will automatically wrap items into rows. The number of columns can be varied by screen size, for example, if you wanted a single column on mobile and three columns otherwise.

- Use a `tile` layout for content that benefits from being laid out in columns of uniform width.

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">Fixed number of columns</EzHeading>
    <EzLayout layout="tile" columns={3}>
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
    </EzLayout>
  </EzCardSection>
  <EzCardSection>
    <EzHeading size="3">Responsive number of columns</EzHeading>
    <EzLayout layout="tile" columns={{base: 1, medium: 3}}>
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
      <Placeholder height={48} />
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### Cluster layout

The `cluster` layout, like the `tile` layout, arranges content across columns and rows. Unlike `tile` layouts however, cluster layouts are perfect for content that may vary in shape and length. Instead of conforming to a grid of a fixed number of columns, content within the `cluster` layout is distributed to fill the available space as best it can. Left-aligned content may have a 'ragged' right edge, because each line can vary in length. Unlike the `left` and `right` layouts, content is allowed to wrap into evenly spaced rows.

```jsx
<EzCard style={{maxWidth: 350}}>
  <EzLayout layout="cluster">
    <Placeholder height={48} width={96} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={96} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={96} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={96} />
    <Placeholder height={48} width={48} />
    <Placeholder height={48} width={96} />
    <Placeholder height={48} width={48} />
  </EzLayout>
</EzCard>
```

### Aligning content within a layout

Content inside a layout is often variable in size and as such it may be necessary to align content within a container:

- **Horizontal alignment**

Some layouts, such as `equal`, `split`, `stack` and `tile` distribute items across the horizontal space in the container to fill the available space. In the remaining layouts, if the content width does not fill the available space, the layout may need to align the items within the available space. The `basic` and `right` layouts align content to the left and right respectively. The `cluster` layout offers an `alignX` prop to allow the content to be horizontally aligned either `left`, `right` or `center`.

- **Vertical alignment**

In layouts that position content into rows (i.e. all layouts except `stack`), content with varying height may cause there to be extra whitespace around the top and/or bottom of content items. By default layouts will typically center content within the container, but these layouts offer an `alignY` prop to allow the content to be vertically aligned `top`, `bottom`, `center` or `stretch`.

```jsx
() => {
  const [alignY, setAlignY] = React.useState('top');
  const [alignX, setAlignX] = React.useState('right');
  return (
    <EzCard>
      <EzCardSection>
        <EzHeading size="3">Align vertically ({alignY})</EzHeading>
        <EzLayout layout="cluster" alignY={alignY}>
          <Placeholder minHeight={40} height="auto" width={48} />
          <Placeholder minHeight={100} height="auto" width={48} />
          <Placeholder minHeight={60} height="auto" width={48} />
        </EzLayout>
        <EzField
          type="radio"
          bordered
          label="Choose"
          options={[
            {label: 'Top', value: 'top'},
            {label: 'Center', value: 'center'},
            {label: 'Bottom', value: 'bottom'},
            {label: 'Stretch', value: 'stretch'},
          ]}
          value={alignY}
          onChange={e => setAlignY(e.target.value)}
        />
      </EzCardSection>
      <EzCardSection>
        <EzHeading size="3">Align horizontally ({alignX})</EzHeading>
        <EzLayout layout="cluster" alignX={alignX}>
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
          <Placeholder height={48} width={48} />
        </EzLayout>
        <EzField
          type="radio"
          bordered
          label="Choose"
          options={[
            {label: 'Left', value: 'left'},
            {label: 'Center', value: 'center'},
            {label: 'Right', value: 'right'},
          ]}
          value={alignX}
          onChange={e => setAlignX(e.target.value)}
        />
      </EzCardSection>
    </EzCard>
  );
};
```

### Combining Layouts

The layout component can be nested in order to provide more complex or unique arrangements of components. For example, a toolbar might use a basic layout inside of an equal layout, to arrange logical groupings of action buttons into visual groups with even spacing between the grouped buttons.

```jsx
<EzCard>
  <EzCardSection>
    <EzHeading size="3">Basic Layouts nested in a Split Layout</EzHeading>
    <EzLayout layout="split">
      <EzLayout layout="basic">
        <Placeholder height={48} width={48} />
        <Placeholder height={48} width={48} />
      </EzLayout>
      <EzLayout layout="basic">
        <Placeholder height={48} width={48} />
        <Placeholder height={48} width={48} />
      </EzLayout>
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### Responsive Layouts

The layout component can be used to optimize the layout of content to suit various device sizes. For example, a group of action buttons may use the `stack` layout on small screens where horizontal space limited, and the `basic` layout on larger screens.

If you provide more than one layout, you should think of it as progressive enhancement. The `base` layout will be applied from the smallest devices up, until reaching the other layout. Then that second layout will takeover for larger devices. You can control where the transition happens.

```jsx
<EzCard>
  <EzHeading size="3">Stack on small screens, equal otherwise</EzHeading>
  <EzLayout layout={{base: 'stack', medium: 'equal'}}>
    <Placeholder height={48} />
    <Placeholder height={48} />
    <Placeholder height={48} />
  </EzLayout>
</EzCard>
```

---

## Related components

- [Card](/components/ez-card)
- [Page Content](/components/ez-page-content)
