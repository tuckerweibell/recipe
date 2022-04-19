---
name: EzLabel
title: Labelling
category: Inputs
path: '/components/ez-label'
tags: ['label']
---

A label visually and/or programmatically associates an input element with a name or caption. Use the label property of the component directly when possible e.g. `EzField[label={label}]`

---

## Best Practices

Labelled items should:

- Be associated with an `<input>` element. To associate the label with an input, the `htmlFor` attribute for the label should be set to the same value as the `id` attribute of the input. Alternatively, you can nest the `<input>` element directly inside the label.
- Be used to label a static piece of text. In this case, the `as` prop is required in order to render a non-label [phrasing element](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content).
- Be associated with only one form input (unless being used with a single child that is a collection of multiple items)

Labelled items should not:

- Be used to label components that already contain labels, such as EzField.
- Contain interactive elements such as anchors or buttons inside the text of a label. Doing so makes it difficult for people to activate the form input associated with the label.
- Contain headings. Placing heading elements within a label interferes with many kinds of assistive technology, because headings are commonly used as a navigation aid.

---

## Content guidelines

Labelled items should

#### Do

- Use prop `use="primary"` to label important content, like form fields.
- Use prop `use="secondary"` to label supporting content, like a search field. Secondary labels are intentionally less prominent, allowing users to focus on the primary page content.
- Use `htmlFor={controlId}` to associate the label with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused. Alternatively, an `<input>` element can be nested directly inside the label to automatically associate the label with the input element.

#### Don’t

- Don't use prop `use="secondary"` with `position="side"`

---

## Examples

### Primary label

A label for important content.

```jsx
<div>
  <EzLabel use="primary" htmlFor="primary-input">
    Primary Label
  </EzLabel>
  <input id="primary-input" placeholder="Some text" />
</div>
```

Use `htmlFor={controlId}` to associate the label with the form control. This allows the label to increase the hit-surface to focus/activate the input, as well as allowing assistive technology to identify the label when the input is focused.

### Secondary label

This is alternative style of top label. Use this label style when labelling controls inside the page header or subheader. This label style should also be used to provide additional context in an understated way, as not to draw the focus away from important data.

```jsx
<EzLabel htmlFor="search-input" use="secondary">
  Search
  <EzSearchInput id="search-input" placeholder="Search customers" />
</EzLabel>
```

### Unstyled labels

Typically labelled elements should use either the primary or secondary label styles depending on whether the element is part of the main page content, or used a supporting role. However a label may be used without any additional styles by omitting the `use` prop from `EzLabel`. This will render a label using only the current page's body text style.

```jsx
<div>
  <EzLabel htmlFor="unstyled-container">Unstyled Label</EzLabel>
  <input id="unstyled-container" placeholder="Some text" />
</div>
```

### Label positioning

Top labels are the default position for `EzLabel` and are recommended because they work better with long copy, localization, and responsive layouts. Side labels can be useful when vertical space is limited.

The label's overall position relative to the element it is labeling may be changed using the `position` prop.

```jsx
<div>
  <EzLabel position="side" use="primary" htmlFor="side-label">
    Side Primary Label
  </EzLabel>
  <input id="side-label" placeholder="Some text" />
</div>
```

### Hidden labels

Hidden labels, with `position='hidden'`, are used to programmatically associate an input element with a label for accessibility purposes.

```jsx
<div>
  <EzLabel position="hidden" htmlFor="hidden-label">
    Label
  </EzLabel>
  <input id="hidden-label" placeholder="Some text" />
</div>
```

### Labels with error state

When provided the `error` prop, the label will receive error styling.

```jsx
<div>
  <EzLabel use="primary" error={true} htmlFor="invalid-input">
    Label
  </EzLabel>
  <input id="invalid-input" placeholder="Some text" />
</div>
```

### Label accessibility

Labels render `<label>` elements by default, allowing form elements to be programmatically associated with an identifying text caption and allows browsers to provide additional user experience benefits such as using the label to provide a larger hit-target for inputs.

To render an element that looks like a label without rendering a html `<label>` element, the `as` prop can be provided with another element type, such as: `as='div'` or `as='span'`.

This may be useful if providing a top-level label for a group of inputs where each individual input may already have a label, such as a radio button group.

NOTE: the `htmlFor` prop should be omitted when using the `as` prop. In order to retain programmatic association of the label with the content, additional `aria-` attributes such as `aria-labelledby` may be necessary.

```jsx
<div>
  <EzLabel as="div" use="primary">
    Label
  </EzLabel>
  Some text
</div>
```
