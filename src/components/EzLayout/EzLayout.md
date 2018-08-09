---
name: EzLayout
title: Layout
path: "/components/ez-layout"
---

The layout component provide common ways to arrange the content of a screen. The layout component controls the spacing of its content. For horizontal layout types, the layout component will vertically center the content items.

---

## Best Practices

Layouts should:

* Be used for small-scale layout tasks
* Be used when you want to lay out a horizontal row of content OR
* Be used when you want to layout out a vertical stack of content that would otherwise be inline

Layouts should not:

* Be used for large-scale page layout. For large-scale layouts, consider using a [Card](/components/ez-card) within [Page Content](/components/ez-page-content)
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

### Stack layout

The `stack` layout arranges content into a vertical column. The `stack` layout can be used, for example, when targeting small screen sizes, to organize content into stacked columns. In many cases, a `stack` layout may not be necessary; block level components will naturally stack in a container, and container components such as [`EzCard`](/components/ez-card) and [`EzPageContent`](/components/ez-page-content) will apply consistent spacing between content items.

```jsx
<EzCard
  className={css(`
  .stack > * {
    background-color: lightgray;
  }
`)}
>
  <EzLayout layout="stack" className="stack">
    <div>Stack Layout</div>
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

### Responsive Layouts

The layout component can be used to optimize the layout of content to suit various device sizes. For example, a group of action buttons may use the `stack` layout on small screens where horizontal space limited, and the `basic` layout on larger screens.

If you provide more than one layout, you should think of it as progressive enhancement. The `base` layout will be applied from the smallest devices up, until reaching the other layout. Then that second layout will takeover for larger devices. You can control where the transition happens.

While it is technically possible to pass more than two layouts (e.g. have a different layout each for phone, tablet, desktop) we don't see a need for that at this time. If designers run into a case for this kind of behavior they should bring it up for discussion.

```jsx
<EzCard
  className={css(`
  .responsive > * {
    background-color: lightgreen;
  }
`)}
>
  <EzLayout
    layout={{
      base: 'stack',
      medium: 'basic',
    }}
    className="responsive"
  >
    <div>Stack Layout</div>
    <div>Content</div>
  </EzLayout>
</EzCard>
```

---

## Related components

* [Card](/components/ez-card)
* [Page Content](/components/ez-page-content)
