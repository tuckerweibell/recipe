---
name: EzPage
title: Page
category: layout
path: '/components/ez-page'
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

## Examples

### Basic Page Content

Page provides consistent spacing of its children.

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

Page will provide appropriate margin on Headings.

```jsx
<EzPage>
  <EzHeading size="2">Heading</EzHeading>
  <EzCard title="Card">Content</EzCard>
  <EzHeading size="2">Heading</EzHeading>
  <EzCard title="Card">Content</EzCard>
</EzPage>
```

### Page Sections

You can use `EzPageSection` to create layouts that have a left or right sidebar. Passing `use="aside"` createds a sidebar and `use="main"` creates the associated "two thirds ish" section.

```jsxwide
<EzPage>
  <EzCard title="Card">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
      in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
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
    <EzCard title="Card (in main)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
        in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

### Right sidebar

Just change the order of the aside and main sections if you want a right sidebar layout.

```jsxwide
<EzPage>
  <EzCard title="Card">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
      in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
  <EzPageSection use="main">
    <EzCard title="Card (in main)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
        in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
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
    <EzCard title="Card (in aside)">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
        in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
      </p>
    </EzCard>
  </EzPageSection>
</EzPage>
```

---

## Related components

- [Card](/components/ez-card)
