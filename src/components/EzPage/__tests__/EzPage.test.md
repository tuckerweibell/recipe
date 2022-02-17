### Multiple rows of page sections

```jsx
<EzPage>
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
</EzPage>
```

### Horizontal section collapses on small screens

```jsx
<Media size="small">
  <EzPage>
    <EzPageSection use="horizontal">
      <EzCard title="How to boost your conversion rate">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </EzCard>
      <EzCard title="Using features effectively to drive sales">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCard>
      <EzCard title="Tools to improve your customer experience">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCard>
    </EzPageSection>
  </EzPage>
</Media>
```

### Header has adequate margin on small screens

```jsx
<Media size="small">
  <EzPage>
    <EzHeading size="2">Heading</EzHeading>
    <EzCard title="Card">Content</EzCard>
  </EzPage>
</Media>
```

### Has white background when optional backgroundColor prop is passed in with "white" as value

```jsx
<EzPage backgroundColor="white">
  <EzCard title="Card">The background behind this card should be white</EzCard>
</EzPage>
```
