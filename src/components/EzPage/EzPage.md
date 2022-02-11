---
name: EzPage
title: Page
category: Layout
path: '/components/ez-page'
tags: ['sidebar']
---

Page is the main content container for a page. The Page component controls the horizontal margins of the content area, as well as the vertical spacing between content.

These examples mostly use Cards, but you can put multiple kinds of content in Page.

---

## Best Practices

Page should:

- Be used as the top level container for most pages.
- Use [Page Sections](#page-sections) to create sidebar layouts within a page.

Page Section should not:

- Be used anywhere except as an immediate descendant of `EzPage`.
- Be used to put more than one sidebar section on the same page. This is unsupported and will render incorrectly if you put two sidebars one after the other.

---

## Examples

### Basic Page Content

Pages provide consistent spacing of their children.

```jsx
<EzPage>
  <EzCard title="Card">Content</EzCard>
  <EzCard title="Card">Content</EzCard>
  <EzCard title="Table">
    This example is really a card, but you can put tables and other content in EzPage too.
  </EzCard>
</EzPage>
```

### Using Headings

Pages provide appropriate margin on Headings to indicate that a heading is related to the subsequent page content.

```jsx
<EzPage>
  <EzHeading size="2">Heading</EzHeading>
  <EzCard title="Card">Content</EzCard>
  <EzHeading size="2">Heading</EzHeading>
  <EzCard title="Card">Content</EzCard>
</EzPage>
```

### Option for white background

Pages have gray backgrounds by default. You can give them a white background by passing in the optional `whiteBackground` prop.

```jsx
<EzPage whiteBackground>
  <EzCard title="Card">Pass in the optional whiteBackground prop to give your page a white background.</EzCard>
</EzPage>
```

### Page Sections

Page sections can be used on larger screens to create layouts that have a left or right sidebar. On small screens, page sections will stack content vertically.

- Use `EzPageSection[use="aside"]` to create a sidebar
- Use `EzPageSection[use="main"]` to create the associated main content section

```jsx
<EzPage>
  <EzCard title="Card">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
  <EzPageSection use="aside">
    <EzCard title="Card (in aside)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
  <EzPageSection use="main">
    <EzCard title="Card (in main)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
    <EzCard title="Card (in main)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

### Right sidebar

Section content is displayed in the order in which it is provided. To change the order of the layout, flip the order of the aside and main sections. The below example demonstrates a "right sidebar" layout.

```jsx
<EzPage>
  <EzCard title="Card">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
  <EzPageSection use="main">
    <EzCard title="Card (in main)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
  <EzPageSection use="aside">
    <EzCard title="Card (in aside)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
    <EzCard title="Card (in aside)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

### Horizontal sections

Page section content may be laid out horizontally on larger screens, instead of vertically, to more clearly communicate how content may be related to other content within the section. For example, feature sections may be laid out horizontally so that features can be compared to one another. On small screens, page sections will stack content vertically.

- Use `EzPageSection[use="horizontal"]` to create a page section that is laid out horizontally.

```jsx
<EzPage>
  <EzPageSection use="horizontal">
    <EzCard title="How to boost your conversion rate">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </p>
    </EzCard>
    <EzCard title="Using features effectively to drive sales">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
    <EzCard title="Tools to improve your customer experience">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
        maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

### Centered Header and Page Content

The page may be paired with a page header to provide a consistent page width within an application layout.

```jsx
<EzAppLayout layout="centered">
  <EzPageHeader
    title="Reviews"
    actions={
      <EzLayout
        layout={{
          base: 'stack',
          medium: 'basic',
        }}
        className="responsive"
      >
        <EzButton use="secondary">Change store or group</EzButton>
      </EzLayout>
    }
  />

  <EzPage>
    <EzPageSection use="aside">
      <EzCard title="Card (in aside)">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCard>
    </EzPageSection>
    <EzPageSection use="main">
      <EzCard title="Card (in main)">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCard>
    </EzPageSection>
  </EzPage>
</EzAppLayout>
```

---

## Related components

- [Card](/components/ez-card)
