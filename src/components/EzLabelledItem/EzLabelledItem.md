---
name: EzLabelledItem
title: Labelled Item
path: '/components/ez-labelled-item'
---

Provides a label that can appear in one of several positions relative to its associated content. Typically used to label an interactive element or a short string of text.

---

## Best Practices

Labelled items should:

- Be used to label a static piece of text
- Be used to label a control such as a Dropdown

Labelled items should not:

- Be used to label more than one child (unless being used with a single child that is a collection of multiple items, such as a Segmented Control)

---

## Content guidelines

Labelled items should

#### Do

- Use size="normal" with any position value
- Use size="small" with position="top"
- Use title case for the label title

#### Don’t

- Don't use size="small" with position="left" or position="right"

---

## Examples

### Top label

A label that appears above its content.

```jsx
<EzLabelledItem position="top" size="normal" title="Top Label">
  Some text
</EzLabelledItem>
```

### Top label (small)

This is alternative style of top label.

```jsx
<EzLabelledItem position="top" size="small" title="Small Label">
  Some text
</EzLabelledItem>
```

### Left label

A label that appears next to its content.

```jsx
<EzLabelledItem position="left" size="normal" title="Left Label">
  Some text
</EzLabelledItem>
```

### Bottom label

A label that appears below its content.

```jsx
<EzLabelledItem position="bottom" size="normal" title="Bottom Label">
  Some text
</EzLabelledItem>
```
