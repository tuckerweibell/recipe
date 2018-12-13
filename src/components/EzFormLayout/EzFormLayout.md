---
name: EzFormLayout
title: Form layout
category: forms
path: '/components/ez-form-layout'
---

Form layouts are used to arrange fields within a form using standard spacing. Fields are stacked vertically, but can be further grouped into rows using the `EzLayout` component.

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
  <EzField type="input" label="First name" />
  <EzField type="input" label="Last name" />
  <EzField type="number" label="Favorite Number" value={7} />
</EzFormLayout>
```

### Field groups

Use `EzLayout` to arrange multiple fields into a row or to vary form field layout across various breakpoints.

Typically used to group familiar layouts such as state and zip code, or start/end dates. Fields that are not directly related to each other should not be grouped next to each other as this makes it easier to miss at a glance.

```jsx
<EzFormLayout>
  <EzLayout layout="basic">
    <EzField type="input" label="First name" />
    <EzField type="input" label="Last name" />
  </EzLayout>
</EzFormLayout>
```

---

## Related components

- [EzField](/components/ez-field)
- [EzLayout](/components/ez-layout)
- [EzAlert](/components/ez-alert)
