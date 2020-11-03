---
name: EzCard
title: Card
category: Layout
path: '/components/ez-card'
---

Cards are the primary means of visually grouping content on a page. Cards can be completely custom, or build using any of the card options provided out-of-the-box. Cards may have a cover photo or preview image, a card body or multiple card sections with information about the content, and an optional footer.

---

## Best Practices

Cards should:

- Be used to organize page content.
- Group related content. Otherwise consider using two separate Cards.
- Contain a maximum of one primary call-to-action per card.
- Position calls-to-action for next steps at the bottom of the card, and use the space in the top right for optional actions.
- Use [Card Sections](#card-with-sections) for related but distinct content. Multiple sections can help break up complicated concepts to make them easier to scan.
- Optionally use a heading to help identify the contents of the card at-a-glance.
- Cards with accents should be used sparingly.

Cards should not:

- Be nested inside each other.

---

## Examples

### Basic Card

Used to separate a screen's main content into meaningful groups.

```jsx
<EzPage>
  <EzCard>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with Heading

Cards can have an optional heading. Headings should be descriptive of the entire card, not just the first section. Headings should be used when you want the content to be identifiable at a glance.

```jsx
<EzPage>
  <EzCard title="Card Heading">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with Subheading

Cards can have an optional subheading to provide further information for the card. A subheading should only be used with a heading and should also describe the entire card, not just a particular section.

```jsx
<EzPage>
  <EzCard title="Card Heading" subtitle="Descriptive information about the card">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with Footer

Cards can have an optional footer to provide a link to expand more contents of the card.

#### Expandable

Cards can sometimes contain a large amount of content when only a fraction of the content needs to be available at-a-glance. Expandable cards can be used to offer at-a-glance content, with the option to show more on demand.

Expandable cards should be used when space is a constraint and where the information is either not frequently used, or is not critical for the user to make informed choices.

When the `expandable` attribute is set a footer will appear at the bottom of `EzCard` for toggling `EzCardExpandable` components. To get the `EzCardExpandable` component to toggle, an `isExpanded` state must be passed down to both the `EzCard` and `EzCardExpandable` components. The `expandLabel`, `collapseLabel` and `onClick` properties are all required in the `expandable` attribute.

```jsx
() => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <EzPage>
      <EzCard
        title="Card Heading"
        expandable={{
          expandLabel: 'See more orders',
          collapseLabel: 'See fewer orders',
          onClick: e => {
            e.preventDefault();

            setIsExpanded(!isExpanded);
          },
          isExpanded: isExpanded,
        }}
      >
        <EzCardSection>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <EzCardExpandable isExpanded={isExpanded}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
              purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
              purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
            </p>
          </EzCardExpandable>
        </EzCardSection>
      </EzCard>
    </EzPage>
  );
};
```

### Card with Actions

While call to actions are typically found at the bottom of a card, the space in the top-right can be include optional actions. Optional actions should only be provided with a corresponding card title, such that the target of the action is clear.

Consider wrapping actions in an EzLayout to manage how they stack at smaller breakpoints.

#### Single Action

```jsx
<EzPage>
  <EzCard title="Card Heading" actions={<EzButton>View</EzButton>}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

#### Multiple Actions

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    actions={
      <EzLayout layout="basic">
        <EzButton use="secondary" destructive>
          Delete
        </EzButton>
        <EzButton>View</EzButton>
      </EzLayout>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with Sections

Cards can have multiple sections to break up complex content into easier to digest parts. Card Sections are automatically separated visually with a divider when used in the default configuration (vertically stacked).

You don't need to use an `EzCardSection` if you only have one section in your panel (the component automatically wraps the content in a single section if needed).

- Card sections may optionally include a heading.
- Card sections may optionally include a subheading. A subheading should only be used alongside a card section heading.
- Card sections may optionally include actions. Actions should only be provided when the card section has a corresponding card title, such that the target of the action is clear.

```jsx
<EzPage>
  <EzCard>
    <EzCardSection title="Card Heading">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </EzCardSection>
    <EzCardSection
      title="Card Section Heading"
      subtitle="Descriptive information about the card section"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCardSection>
  </EzCard>
</EzPage>
```

### Card with Horizontal Sections

Sections can also be laid out horizontally. There is no separator when sections are displayed horizontally.

```jsx
<EzPage>
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
</EzPage>
```

### Cards with Accents

#### Info Accent

Accented info cards can be used when you want to draw attention to a card that does not need immediate action.

```jsx
<EzPage>
  <EzCard title="Card Heading" accent="info">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card images

Card images can be used to enhance the content of the card and are ideal for marketing content. Images will render full-bleed inside of a card (i.e. without padding between the image and the card container). By default, images will fill the width of the container while maintaining their aspect ratio, however images positioned to the right or left of the container will fill half of the card, clipping the image to match the aspect ratio of the available space.

- use `imageSrc` to provide an image URL
- use `imagePosition` to provide an optional image position; `left`, `right`, `top`, or responsive e.g. `{base: 'top', medium: 'left'}`.

```jsx
<EzPage>
  <EzCard
    title="Card with image at top"
    imageSrc="https://via.placeholder.com/900+x+200/00b373/FFFFFF?text=900+x+200"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
  <EzCard
    title="Card with image on right"
    imageSrc="https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400"
    imagePosition="right"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card Size

Cards apply spacing to the card container, card header, card sections and top-level content within the card body.

Medium is the default size for a card. Small cards are best for browsing content as part of a list or grid of cards.

```jsx
<EzPage>
  <EzPageSection use="horizontal">
    <EzCard
      title="Splitz Wrap Boxed Lunch"
      subtitle="Corporate Catering  |  3 mi  |  $$$$"
      imageSrc={withPrefix('/images/wrap.jpg')}
      size="small"
    >
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
          <path
            id="B"
            d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z"
            fill="currentColor"
          />
          <use width="535" height="110" xlink:href="#B" x="105" />
          <use width="535" height="110" xlink:href="#B" x="211" />
          <use width="535" height="110" xlink:href="#B" x="316" />
          <use width="535" height="110" xlink:href="#B" x="421" />
        </svg>
        4.7 (463 reviews)
      </p>
    </EzCard>
    <EzCard
      title="Flaming Pit Pizza"
      subtitle="Globally Inspired Pizza  |  1 mi  |  $$$$"
      imageSrc={withPrefix('/images/pizza.jpg')}
      size="small"
    >
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
          <path
            id="B"
            d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z"
            fill="currentColor"
          />
          <use width="535" height="110" xlink:href="#B" x="105" />
          <use width="535" height="110" xlink:href="#B" x="211" />
          <use width="535" height="110" xlink:href="#B" x="316" />
          <use width="535" height="110" xlink:href="#B" x="421" />
        </svg>
        4.8 (671 reviews)
      </p>
    </EzCard>
    <EzCard
      title="Dakzen Thai"
      subtitle="Modern Thai  |  10 mi  |  $$$$"
      imageSrc={withPrefix('/images/thai.jpg')}
      size="small"
    >
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 100" height="16" width="80">
          <path
            id="B"
            d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z"
            fill="currentColor"
          />
          <use width="535" height="110" xlink:href="#B" x="105" />
          <use width="535" height="110" xlink:href="#B" x="211" />
          <use width="535" height="110" xlink:href="#B" x="316" />
          <use width="535" height="110" xlink:href="#B" x="421" />
        </svg>
        4.7 (467 reviews)
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

---

## Limitations

- Cards currently do not support full-sized linkable content.
- Cards currently do not support varying horizontal/vertical layouts for Card Sections across breakpoints.

---

## Related components

- [Page Content](/components/ez-page-content)
