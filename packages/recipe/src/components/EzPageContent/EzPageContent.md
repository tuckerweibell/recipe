---
name: EzPageContent
title: Page Content
path: '/components/ez-page-content'
---

<EzAlert
  headline="This component is deprecated"
  tagline="EzPage Content and EzContentGroup are deprecated. Use EzPage and EzLayout for new pages instead."
  use="error"
/>

<br/>
<br/>

Page Content is the main content container for a page. The Page Content component controls the horizontal margins of the content area, as well as the vertical spacing between content.

These examples mostly use Cards, but you can put multiple kinds of content in Page Content.

---

## Best Practices

Page Content should:

- Be used as the top level container for most pages.
- Use [Content Groups](#organizing-with-content-group) to visually group related content with tighter spacing.

Content Group should not:

- Be used anywhere except as an immediate descendant of `EzPageContent`.

---

## Examples

### Basic Page Content

Page Content provides consistent spacing of its children.

```jsx
<EzPageContent>
  <EzCard title="Card">Content</EzCard>
  <EzCard title="Card">Content</EzCard>
  <EzCard title="Table">
    This example is really a card, but you can put tables and other content in EzPageContent too.
  </EzCard>
</EzPageContent>
```

### Organizing with Content Group

In some cases you may want to visually group related content with tighter spacing. You can use `EzContentGroup` to cluster content within `EzPageContent`.

```jsx
<EzPageContent>
  <EzCard title="Card">Content</EzCard>
  <EzContentGroup>
    <EzSegmentedControl
      name="view-map-options"
      label="Map View"
      options={[
        {label: 'Map', value: 'map'},
        {label: 'Transit', value: 'transit'},
        {label: 'Satellite', value: 'satellite'},
      ]}
      active="map"
    />
    <EzCard title="Card">Content</EzCard>
  </EzContentGroup>
  <EzCard title="Card">Content</EzCard>
</EzPageContent>
```

### Horizontal Content Group

Content Groups can be laid out horizontally.

```jsx
<EzPageContent>
  <EzCard title="Card">Content</EzCard>
  <EzContentGroup horizontal>
    <EzCard title="Card">Content</EzCard>
    <EzCard title="Card">Content</EzCard>
    <EzCard title="Card">Content</EzCard>
  </EzContentGroup>
  <EzCard title="Card">Content</EzCard>
</EzPageContent>
```

---

## Limitations

- Sidebar content is not currently supported
- Content Groups currently do not support varying horizontal/vertical layouts across breakpoint.

---

## Related components

- [Card](/components/ez-card)
- [Page](/components/ez-page)
