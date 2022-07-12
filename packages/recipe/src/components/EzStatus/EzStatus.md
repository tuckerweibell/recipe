---
name: EzStatus
title: Status
category: Feedback
path: '/components/ez-status'
---

<EzAlert
  headline="Deprecation Warning"
  tagline="EzStatus is deprecated as of v15 and will be removed in v16. Status variants can be used with EzChip."
  use="warning"
/>

See: <EzLink><a href="/components/ez-chip/#status">EzChip Status</a></EzLink>

---

Use a status when you need to call attention to an individual item in a set. Sometimes (like with a list of orders) you need to show a status for each item. In those cases, use a neutral status for as many items as possible so the items that need more attention stand out.

---

## Examples

### Basic Status

Does not contain a dot to help these blend in with the background. Use when an action is not required of the user, or there’s not a compelling reason to draw their attention to an item. For colorblind users, these statuses look different than statuses with a dot.

Success and informational statuses are to provide designers with a little flexibility in displaying statuses that don’t require action or need attention. Don’t use these in lists or collections of items where statuses will appear multiple times, since these statuses take attention away from the action required / needs attention statuses.

```jsx
<EzLayout layout="stack" alignX="left">
  <EzStatus text="Neutral" use="neutral" />
  <EzStatus text="Success / completion" use="success" />
  <EzStatus text="Informational" use="informational" />
</EzLayout>
```

### Action Required - Needs Attention

These have a colored dot to help signify that they require an action from the user or command a user’s attention. For colorblind users, the text serves as a way for the meaning of the color to be conveyed, so no icon is necessary.

```jsx
<EzLayout layout="stack" alignX="left">
  <EzStatus text="Needs attention" use="attention" />
  <EzStatus text="Warning / could be concerning" use="warning" />
  <EzStatus text="Error / Destructive / Concerning" use="error" />
  <EzStatus text="Alert / Reconfirm" use="alert" />
</EzLayout>
```

### Changing Size

```jsx
<EzLayout layout="stack" alignX="left">
  <EzStatus text="Error / Destructive / Concerning" use="error" size="normal" />
  <EzStatus text="Error / Destructive / Concerning" use="error" size="small" />
</EzLayout>
```

### Custom Icons

In some cases, a custom icon may be appropriate to visually parse different types of required actions more easily. Provide an icon to the `icon` prop using `EzIcon`.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');

  return (
    <EzLayout layout="stack" alignX="left">
      <EzStatus text="New" use="success" size="normal" icon={<EzIcon icon={fullStar} />} />
    </EzLayout>
  );
};
```

## Related components

- [Chip](/components/ez-chip)
