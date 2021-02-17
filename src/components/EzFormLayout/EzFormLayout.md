---
name: EzFormLayout
title: Form layout
path: '/components/ez-form-layout'
---

Form layouts are used to arrange fields within a form using standard spacing. Fields are stacked vertically, but can be further grouped into rows using the `EzLayout` component.

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceed with caution."
  use="warning"
/>

---

## Best Practices

Forms should:

- Follow a predicable order, guiding the user to fill out the most important content first
- Group related tasks under section titles to provide more context and make the form easier to scan

---

## Examples

### Standard form layout

```jsx
<EzFormLayout>
  <EzField type="text" label="First name" />
  <EzField type="text" label="Last name" />
  <EzField type="number" label="Favorite Number" value={7} />
</EzFormLayout>
```

### Field groups

Visually grouping closely related fields such as state and zip code, or start and end dates can help users make sense of the information they must fill in. 

Fields that are not directly related to each other should not be visually grouped together as this can make it easier to overlook certain fields.

Use [EzLayout](/components/ez-layout) to arrange fields into groups, or to vary field layouts across different screen sizes and device types.

```jsx
<EzFormLayout>
  {/* a basic layout is used here to group fields into a single row, but you can also tile or cluster fields as needed */}
  <EzLayout layout="basic">
    <EzField type="text" label="First name" />
    <EzField type="text" label="Last name" />
  </EzLayout>
</EzFormLayout>
```

---

## Related components

- [EzField](/components/ez-field)
- [EzLayout](/components/ez-layout)
- [EzAlert](/components/ez-alert)
