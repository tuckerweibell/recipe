---
name: EzTextStyle
title: Text Style
category: Typography
path: '/components/ez-text-style'
tags: ['font']
---

Enhances text with styles to visually communicate meaning, such as emphasis.

---

## Best Practices

Text style should:

- Be used to guide users to understand which data is important
- Use `Strong` to highlight important data, such as Totals in a pricing table
- Use `Subdued` to de-emphasize less important text, such as the second line of an address.

Text style should NOT:

- Be used in the place of headings. Headings break up content into sections and can be used by screen reader users to identify sections of a page the user can quickly navigate to.

---

## Examples

### Text alignment

By default, text will be left-aligned within the available space.

- Use `align` to control the text alignment: `left`, `center` or `right`. Alter the alignment for different screen sizes using `{base: 'left', medium: 'center'}`.

```jsx
<EzTextStyle align="center">
  Online ordering boosts sales through your site. ezOrdering boosts it further.
</EzTextStyle>
```

### Strong text style

Use to highlight important data, such as Totals in a pricing table.

```jsx
<div>
  <div>
    <EzTextStyle use="strong">Order Total</EzTextStyle>
  </div>
  <br />
  <div>
    This sentence has one <EzTextStyle use="strong">strong</EzTextStyle> word.
  </div>
</div>
```

### Subdued text style

Use to de-emphasize less important text, such as the second line of an address. Subdued text may be used to indicate empty state, for example, "No orders placed".

```jsx
<div>
  <div>
    <EzTextStyle use="subdued">No action needed.</EzTextStyle>
  </div>
  <br />
  <EzTextStyle>
    This sentence has one <EzTextStyle use="subdued">subdued</EzTextStyle> word.
  </EzTextStyle>
</div>
```
