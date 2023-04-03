---
name: EzAppLayout
title: Application Layout
category: Layout
path: '/components/ez-app-layout'
tags: ['wide']
---

The application layout component, while not visible in the user interface, is used to provide common ways to arrange the content of a screen. The application layout wraps the main page content and houses the primary navigation for the application.

---

## Structure of a screen

A screen is the entire user interface of an application.

A typical screen in Recipe consists of several layers. The application layout is the outermost layer. Typically, the application layout will contain a [navigation component](/components/ez-navigation), and inside that a [page header component](/components/ez-page-header) followed by a [page component](/components/ez-page).

The application layout component ensures that content containers are arranged in an appropriate way across all screen sizes.

### Application layout

The application layout:

- Controls the horizontal margins of the content area
- Offers two variations
  - Full width. This is the default and should be used for pages where the user benefits from the content taking up the available screen width, like on a page with a Table.
  - Centered. Use this narrower variant to focus user attention on the page content, or constrain the max-width to improve readability. Pages with text-heavy cards or forms typically benefit from being constrained to a max-width.

|                  Full width layout, narrow screen                   |                 Full width layout, wide screen                  |
| :-----------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![full width layout, narrow screen](/images/full-narrow.png) | ![full width layout, wide screen](/images/full-wide.png) |

|                    Centered layout, narrow screen                     |                   Centered layout, wide screen                    |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------: |
| ![centered layout, narrow screen](/images/centered-narrow.png) | ![centered layout, wide screen](/images/centered-wide.png) |

## Best Practices

Application layouts should:

- Only appear once per screen
- Host the page content.
- Optionally wrap the page content with a navigation component, where multiple top-level pages are needed.

---

## Examples

### Full width layout

Use the full width layout for wide list or table content that may benefit from more horizontal space.

```jsx
<EzAppLayout>
  <EzNavigation
    home={{href: '#', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
    links={[
      {href: '#', label: 'Orders'},
      {href: '#', label: 'Customers'},
      {href: '#', label: 'Reports'},
    ]}
  >
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
          <EzButton>Change store or group</EzButton>
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
  </EzNavigation>
</EzAppLayout>
```

### Centered layout

Use the centered layout to constrain page width to improve readability or focus use attention the primary page content.

Note: The centered layout will only take effect on wide screen sizes.

```jsx
<EzAppLayout layout="centered">
  <EzNavigation
    home={{href: '#', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
    links={[
      {href: '#', label: 'Orders'},
      {href: '#', label: 'Customers'},
      {href: '#', label: 'Reports'},
    ]}
  >
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
          <EzButton>Change store or group</EzButton>
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
  </EzNavigation>
</EzAppLayout>
```

---

## Related components

- [Navigation](/components/ez-navigation)
- [Page header](/components/ez-page-header)
- [Page](/components/ez-page)
- [Global style resets](/components/ez-global-styles)
