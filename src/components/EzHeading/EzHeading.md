---
name: EzHeading
title: Heading
category: Typography
path: '/components/ez-heading'
---

Headings are the primary way of styling text in Recipe. Use them to create visual hierarchy on the page.

---

## Best Practices

Headings should:

- Be used to style text.
- Follow Recipe's guidance on [typography](/styles/style#typography).
- Use the `as` property if they need to provide a hierarchy for accessibility or SEM reasons that is different from the visual hierarchy.

Headings should not:

- Use the `as` property unless there there is a specific need to have a visual hierarchy that is different from the markup hierarchy.

---

## Content guidelines

Use sentence case for content in headings (only capitalize the first word).

---

## Examples

### Heading sizes

We support six sizes of heading. Headings don't have margin...in our current model margin is applied by containers to their children.

```jsx
<React.Fragment>
  <EzHeading size="1">Page titles</EzHeading>
  <EzHeading size="2">On-page headings</EzHeading>
  <EzHeading size="3">Container headings</EzHeading>
  <EzHeading size="4">Navigation / tabs</EzHeading>
  <EzHeading size="5">Labels</EzHeading>
  <EzHeading size="6">Small stuff</EzHeading>
</React.Fragment>
```

### Subheadings

You can provide an optional subheading. At this time you should only use subheadings with `3` and `5` headings. If you provide a `subheading` prop to other sizes it will not be rendered.

```jsx
<EzCard>
  <EzHeading size="3" subheading="I'm a subheading">
    Container headings
  </EzHeading>
  <EzHeading size="5" subheading="I'm a subheading">
    Labels
  </EzHeading>
</EzCard>
```

### Heading elements

Normally heading size numbers correspond directly to the same size `h` tag, but you can provide an optional `as` property to override the markup that is rendered for heading. You should only need to use this property sparingly and only for accessibility or SEM purposes. For example: an empty state might call for a visually larger heading, but it's position in the page hierarchy might make a lower level `h` tag the appropriate markup.

```jsx
<EzHeading size="3" as="h1">
  Container headings
</EzHeading>
```

### Heading alignment

By default, heading text will be left-aligned within the available space.

- Use `align` to control the text alignment: `left`, `center` or `right`. Alter the alignment for different screen sizes using `{base: 'left', medium: 'center'}`.

```jsx
<EzHeading size="3" align="center">
  Online ordering boosts sales through your site. ezOrdering boosts it further.
</EzHeading>
```
