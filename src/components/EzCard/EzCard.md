---
name: EzCard
title: Card
category: layout
path: "/components/ez-card"
---

Cards are the primary means of visually grouping content on a page. Most content should appear inside a card. Cards control the vertical spacing of their content.

---

## Best Practices

Cards should:

* Be used to organize page content.
* Contain related content. Otherwise consider using two separate Cards.
* Contain a maximum of one primary call-to-action per card.
* Position calls-to-action for next steps at the bottom of the card, and use the space in the top right for optional actions.
* Use [Card Sections](#card-with-sections) for related but distinct content. Multiple sections can help break up complicated concepts to make them easier to scan.
* Optionally use a heading to help identify the contents of the card at-a-glance.

Cards should not:

* Be nested inside each other.

Card Sections should not:

* Be used outside of a Card

## Examples

### Basic Card

Used to separate a screen's main content into meaningful groups.

```jsx
<EzCard>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </div>
</EzCard>
```

### Card with Heading

Cards can have an optional heading. Headings should be descriptive of the entire card, not just the first section. Headins should be used when you want the content to be identifiable at a glance.

```jsx
<EzCard title="Card Heading">
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </div>
</EzCard>
```

### Card with Sections

Cards can have multiple sections to break up complex content into easier to digest parts. Card Sections are automatically separated visually with a divider when used in the default configuration (vertically stacked).

You don't need to use an `EzCardSection` if you only have one section in your panel (the component automatically wraps the content in a single section if needed).

```jsx
<EzCard title="Card Heading">
  <EzCardSection>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </EzCardSection>
  <EzCardSection>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </div>
  </EzCardSection>
</EzCard>
```

### Card with Horizontal Sections

Sections can also be laid out horizontally. There is no separator when sections are displayed horizontally.

```jsx
<EzCard title="Card Heading" horizontal>
  <EzCardSection>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </EzCardSection>
  <EzCardSection>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
  </EzCardSection>
</EzCard>
```

---

## Limitations

* Cards currently do not support full-sized linkable content.
* Cards currently do not support varying horizontal/vertical layouts for Card Sections across breakpoints.

---

## Related components

* [Page Content](./ez-page-content)
