---
name: EzLayout
title: Layout
path: "/components/ez-layout"
---

The layout component provide common ways to arrange the content of a screen. The layout component controls the horizontal spacing of its content.

---

## Best Practices

Layouts should:

* Be used for small-scale layout tasks when you want to lay out a horizontal row of content

Layouts should not:

* Be used for large-scale page layout. For large-scale layouts, consider using a [Card](./ez-card) within [Page Content](./ez-page-content)
* Wrap content onto multiple lines. The content inside a layout should be designed as not to exceed the available horizontal space.

---

## Examples

### Basic layout

The `basic` layout arranges content into a single row with even spacing between the content items.

```jsx
<EzCard
  className={css(`
  .basic > * {
    background-color: yellow;
  }
`)}
>
  <EzLayout layout="basic" className="basic">
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </EzLayout>
</EzCard>
```

### Right layout

The `right` layout arranges content into a single row, aligned to the right edge of its container, with even spacing between the content items. The `right` layout can be used, for example, for aligning action buttons within a card.

```jsx
<EzCard
  className={css(`
  .right > * {
    background-color: coral;
  }
`)}
>
  <EzLayout layout="right" className="right">
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </EzLayout>
</EzCard>
```

### Equal layout

The `equal` layout arranges content into equal widths filling a single row. The `equal` layout can be used, for example, for evenly spacing spending statistics across a single row.

```jsx
<EzCard
  className={css(`
  .equal > * {
    background-color: aqua;
  }
`)}
>
  <EzCardSection>
    <EzLayout layout="equal" className="equal">
      <div>Equal Layout</div>
      <div>Content</div>
      <div>Content</div>
    </EzLayout>
  </EzCardSection>
  <EzCardSection>
    <EzLayout layout="equal" className="equal">
      <div>Equal Layout</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </EzLayout>
  </EzCardSection>
</EzCard>
```

### Split layout

The `split` layout arranges content into two groups on a single row, one aligned to the left edge of its container with the other to the right edge. The `split` layout will usually be [combined with other layout arrangements inside](#combining-layouts). The `split` layout can be used, for example, for aligning secondary buttons for next steps to the bottom left of a card, while aligning primary calls-to-action to the bottom right of a card.

```jsx
<EzCard
  className={css(`
  .split > * {
    background-color: palegreen;
  }
`)}
>
  <EzLayout layout="split" className="split">
    <div>Split Layout</div>
    <div>Content</div>
  </EzLayout>
</EzCard>
```

### Combining Layouts

The layout component can be nested in order to provide more complex or unique arrangements of components. For example, a toolbar might use a basic layout inside of an equal layout, to arrange logical groupings of action buttons into visual groups with even spacing between the grouped buttons.

```jsx
<EzCard
  className={css(`
  .basic > * {
    background-color: yellow;
  }
  .equal > * {
    background-color: aqua;
  }
`)}
>
  <EzCardSection>
    <EzLayout layout="split">
      <EzLayout layout="basic" className="basic">
        <div>Basic Layouts in a Split Layout</div>
        <div>Content</div>
      </EzLayout>
      <EzLayout layout="basic" className="basic">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    </EzLayout>
  </EzCardSection>
  <EzCardSection>
    <EzLayout layout="split">
      <EzLayout layout="equal" className="equal">
        <div>Equal Layouts in a Split Layout</div>
        <div>Content</div>
      </EzLayout>
      <EzLayout layout="equal" className="equal">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    </EzLayout>
  </EzCardSection>
</EzCard>
```

---

## Limitations

* Layout does not currently support vertically stacked content
* Layout does not currently support varying horizontal/vertical stacked layouts across breakpoints.

---

## Related components

* [Card](./ez-card)
* [Page Content](./ez-page-content)
