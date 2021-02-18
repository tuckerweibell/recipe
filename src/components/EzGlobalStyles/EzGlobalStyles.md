---
name: EzGlobalStyles
title: Global Styles
path: '/components/ez-global-styles'
---

Global Styles is a component that enables the sharing of global styles rules for Recipe, so that these rules are applied consistently throughout your application. Recipe Global Style includes common rules such as the application of the base font-size and font-family.

<EzAlert
  headline="Global Styles is automatically included by the EzAppLayout component"
  tagline="Direct usage of this component is typically unnecessary except to support backwards-compatibility."
  use="info"
/>

---

## Best Practices

Global Styles should:

- Only be used directly to support backwards-compatibility or testing scenarios. Most applications should use [App Layout](/components/ez-app-layout) which automatically includes Global Styles.

---

## Examples

### Global styles

By including the Global Styles component inside your application, the Recipe global style rules will be inserted into the top of the `head` of the current document.

```jsx
/* No rendered output */
<EzGlobalStyles />
```

---

## Related components

- [App Layout](/components/ez-app-layout)
