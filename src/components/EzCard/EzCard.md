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
- use `imageMaxHeight` to constrain the max image height. When using this option, if the image's aspect ratio does not match the aspect ratio of its box, the image will be clipped to fit the available space. This option is available for `imagePosition="top"` only.
- use `imageMaxWidth` to constrain the max image width. This option is available with `imagePosition="left"` and `imagePosition="right"`.

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
      imageMaxHeight={120}
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
      imageMaxHeight={120}
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
      imageMaxHeight={120}
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

### Quiet Cards

By default, cards are intentionally prominent and use a drop-shadow to allow the surface of the card to appear slightly raised from the page. By contrast, quiet cards use a solid outline and appear flat on the page, as they are intended for secondary content or lists of homogeneous content where we intentionally trade prominence for easy-scanning.

Quiet cards are [small](#card-size) by default.

```jsx
<EzPage>
  <EzPageSection use="horizontal">
    <EzCard isQuiet>
      <EzLayout layout="stack">
        <EzHeading size="5">Chicken Rice Bowl</EzHeading>
        <EzLayout>
          <span>$9.65</span>
          <svg viewBox="0 0 1148 1008" height="16" width="16">
            <path
              fill="#c30"
              d="M1146 138q9 51-15 93t-43 52q51 71 51 179t-80 176q-106 90-212 158T656.5 903.5 490 967q-136 41-251 41-63 0-96-7.5t-34.5-7.5-12.5-5-20.5-9.5-23.5-13T28 948Q3 926 0 899q0-38 14-56t23.5-26 14-11.5 9-6T71 794t11-5q16-8 27-13 101-44 167-109 29-29 87-116 1-2 21.5-30.5t24.5-34 24-32.5 28-36.5 28-34.5 32.5-37.5 34-34.5 39.5-38q51-44 87-70 76-54 181-45.5t181 74.5q5 0 14.5-10.5t17.5-32 3.5-46.5-28-48.5T1001 65q-15 0-22-11.5t-7-23 6-18.5q11-12 30-12 56 11 94 48t44 90zM65 885q0 10 22.5 24.5t48 20T190 938t112-2.5T470 906t211.5-87T935 660V500l-145 51q-19 10-36-7-1-3-4-8t-4-7-2-6q-1-7 3-15l51-145-174-22h-8q-31 29-49.5 49.5t-28 31T515 450t-20 26-20.5 28-18 25-19.5 27q-46 66-111 147-73 81-188 131-22 14-51 29-19 13-22 22zm928-283l22-15q58-41 58-123 11-98-53-162t-151-74q-94-12-173 48-14 10-22 14l167 15q6 0 14 4.5t8 9.5v29l-36 109 123-44q22 0 32.5 11t10.5 26v152z"
            ></path>
          </svg>
        </EzLayout>
        <EzTextStyle use="subdued" as="small">
          Topped with your choices of up to 5 vegetables and 3 sauces. Consider adding drinks.
          Please limit your order to three bowl types.
        </EzTextStyle>
      </EzLayout>
    </EzCard>
    <EzCard isQuiet>
      <EzLayout layout="stack">
        <EzHeading size="5">Braised Beef Rice Bowl</EzHeading>
        <small>$11.65</small>
        <EzTextStyle use="subdued" as="small">
          Topped with your choices of up to 5 vegetables and 3 sauces. Consider adding drinks.
          Please limit your order to three bowl types.
        </EzTextStyle>
      </EzLayout>
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
