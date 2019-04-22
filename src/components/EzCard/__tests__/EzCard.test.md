### Card action alignment

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    subtitle="Descriptive information about the card"
    actions={<EzButton>View</EzButton>}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
</EzPage>
```

### Card with expandable footer (closed)

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    expandable={{
      expandLabel: 'See more orders',
      collapseLabel: 'See fewer orders',
      onClick: e => {
        e.preventDefault();
      },
    }}
    isExpanded={false}
  >
    <EzCardSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <EzCardExpandable isExpanded={false}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCardExpandable>
    </EzCardSection>
  </EzCard>
</EzPage>
```

### Card with expandable footer (open)

```jsx
<EzPage>
  <EzCard
    title="Card Heading"
    expandable={{
      expandLabel: 'See more orders',
      collapseLabel: 'See fewer orders',
      onClick: e => {
        e.preventDefault();
      },
    }}
    isExpanded={true}
  >
    <EzCardSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <EzCardExpandable isExpanded={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCardExpandable>
    </EzCardSection>
  </EzCard>
</EzPage>
```
