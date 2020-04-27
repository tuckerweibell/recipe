---
name: EzLabelledItem
title: Labelling
category: Inputs
path: '/components/ez-labelled-item'
---

Provides a label that can appear in one of several positions relative to its associated content. Typically used to label an interactive element or a short string of text.

---

## Best Practices

Labelled items should:

- Be used to label a static piece of text
- Be used with the `htmlFor` attribute to label form controls.

Labelled items should not:

- Be used to label more than one child (unless being used with a single child that is a collection of multiple items, such as a Segmented Control)
- Be used to label components that already contain labels, such as EzField. Use the label property of the component directly when possible e.g. `EzField[label={label}]`

---

## Content guidelines

Labelled items should

#### Do

- Use size="normal" with any position value
- Use size="small" with position="top"
- Use title case for the label title
- Use htmlFor={controlId} to associate the label with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused.

#### Don’t

- Don't use size="small" with position="left" or position="right"

---

## Examples

### With input controls

Use htmlFor={controlId} to associate the label with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused.

```jsx
<EzLabelledItem htmlFor="search-input" position="top" size="small" title="Search">
  <EzSearchInput id="search-input" placeholder="Search customers" />
</EzLabelledItem>
```

### Top label

A label that appears above its content.

```jsx
<EzLabelledItem position="top" size="normal" title="Top Label">
  Some text
</EzLabelledItem>
```

### Top label (small)

This is alternative style of top label. Use this label style when labelling controls inside the page header or subheader. This label style should also be used to provide additional context in an understated way, as not to draw the focus away from important data.

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
