---
name: EzPageHeader
title: Page Header
path: '/components/ez-page-header'
---

A Page header is used to build the outer structure of a page, including the page title and associated actions.

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceed with caution."
  use="warning"
/>

<br/>
<br/>

Features still in consideration include:

- Responsive subnavigation variants (collapsing tabs into menu when space constrained)

---

## Best Practices

Page headers should:

- Always provide a title for the page
- Optionally provide a description to provide more context about the page content
- Always provide a link back when a page has a parent page
- Offer common actions that apply to the whole page and are important enough to appear before the page content
- Display important status information

---

## Content guidelines

- Use title case for the Page title, and describe the page in as few words as possible. Typically this will be the primary identifier or a pluralized name when the page is a list. Avoid truncating the page title.
- Use clear and predictable labels for page actions, favoring the {verb}+{noun} naming format where there may be ambiguity about the target of the action.
- Consider wrapping page header actions in a [Layout](/components/ez-layout) to manage how they stack at smaller breakpoints.
- Avoid using interactive components for displaying status information

## Examples

### Basic Page header

Used for summary or detail pages with no further action to take.

```jsxwide
<EzPageHeader title="Reviews" />
```

### Page header with breadcrumb

Used when a page belongs to a parent page or collection. The `breadcrumb` prop must include a label. Optionally, the breadcrumb may include an `onClick` to trigger navigation or support the handling side effects (such as logging page views).

Optionally, an `accessibilityLabel` to render a visibly hidden label for providing additional context to improve accessibility.

```jsxwide
<EzPageHeader
  title="Order # XYZ-123"
  breadcrumb={{
    label: 'Back to Orders',
    accessibilityLabel: 'Orders list',
    onClick: () => alert('Clicked back'),
  }}
/>
```

### Page header with breadcrumb links

Instead of providing an `onChange` handler as demonstrated in the [Page header with breadcrumb example](#page-header-with-breadcrumb), Page navigation can also be triggered using links.

The breadcrumb can be used to render a link by proving an `href` property.

Normally links render an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), but in order to support client-side routing implementations, you can instead provide a Link component, such as [react-router's Link](https://reacttraining.com/react-router/web/api/Link) to render via the optional `as` property. When using the `as` property, you must use the `to` prop in place of `href` to provide the destination url for the link.

```jsxwide
<EzPageHeader
  title="Order # XYZ-123"
  breadcrumb={{
    label: 'Back to Orders',
    href: '/components/ez-page-header#page-header-with-breadcrumb-links',
  }}
/>
```

### Page header with status

Used to communicate brief, important and non-interactive status information about the page. The status appears immediately after the page title. The `status` prop accepts any `ReactNode`.

```jsxwide
<EzPageHeader title="Order # XYZ-123" status={<EzAlert headline="Verified" use="marketing" />} />
```

### Page header with actions

While call to actions are typically found at the bottom of cards within the page content, the space in the top-right of a page header is ideal for common actions associated for the page as a whole.

Consider wrapping actions in an EzLayout to manage how they stack at smaller breakpoints.

```jsxwide
<EzPageHeader
  title="Order # XYZ-123"
  actions={
    <EzLayout
      layout={{
        base: 'stack',
        medium: 'basic',
      }}
      className="responsive"
    >
      <EzButton use="secondary" destructive>
        Reject Order
      </EzButton>
      <EzButton use="secondary">
        Request Third Party Delivery
      </EzButton>
      <EzButton use="primary">Accept Order</EzButton>
    </EzLayout>
  }
/>
```

### Page header with subnavigation

Use page header with subnavigation to offer multiple views related to the page. To enable subnavigation, use the `subnav` prop.

The `subnav` prop should be provided an object that describes paths to related pages and the current selection.

The `subnav` object can have the following properties:

- `tabs` (required): an array that represents each of the related views available for navigation.
- `selected`: A tab from the `tabs` array that represents the currently displayed view.
- `onChange`: An event handler for notifying when the user has selected a link to view.

Each entry in the `tabs` array must provide a `label` for the related page and can optionally provide an `accessibilityLabel` for providing additional context to improve accessibility. Optionally, tabs may include an `onClick` handler to support the handling of actions that occur when tabs are clicked (such as logging page views);

The following example demonstrates how subnavigation can use `onChange` events to switch which view to display. Page navigation can also be triggered using links as shown in the [Page header with subnavigation links example](#page-header-with-subnavigation-links).

```jsxwide
() => {
  const [tabs] = React.useState([
    {label: 'All', accessibilityLabel: 'All orders'},
    {label: 'Accepted', accessibilityLabel: 'Accepted orders'},
    {label: 'Draft', accessibilityLabel: 'Draft orders'},
  ]);
  const [selected, onChange] = React.useState(tabs[0]);
  return (
    <>
      <EzPageHeader
        title="Order # XYZ-123"
        subnav={{tabs, selected, onChange}}
      />
      <EzPage>
        <EzCard>
          <div>{selected && selected.accessibilityLabel}</div>
        </EzCard>
      </EzPage>
    </>
  );
};
```

### Page header with subnavigation links

Use page header with subnavigation to offer url-accessible related views.

Instead of providing an `onChange` handler as demonstrated in the [Page header with subnavigation example](#page-header-with-subnavigation), Page navigation can also be triggered using links.

Each entry in the `tabs` array can be used to render a link by proving an `href` property for each tab.

Normally links render an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), but in order to support client-side routing implementations, you can instead provide a Link component, such as [react-router's Link](https://reacttraining.com/react-router/web/api/Link) to render via the optional `as` property. When using the `as` property, you must use the `to` prop in place of `href` to provide the destination url for the link.

```jsxwide
() => {
  const {Link, BrowserRouter: Router, Route} = require('react-router-dom');
  const tabs = [
    {label: 'Header', to: '/components/ez-page-header/', as: Link},
    {label: 'Button', to: '/components/ez-button/', as: Link},
    {label: 'Link', to: '/components/ez-link/', as: Link},
  ];
  return (
    <Router>
      <Route
        render={({location}) => (
          <EzPageHeader
            title="Components"
            subnav={{tabs, selected: tabs.find(tab => tab.to === location.pathname)}}
          />
        )}
      />
      <EzPage>
        <EzCard>
          <Route exact path="/components/ez-page-header/" component={() => 'Page header content'} />
          <Route exact path="/components/ez-button/" component={() => 'Button content'} />
          <Route exact path="/components/ez-link/" component={() => 'Link content'} />
        </EzCard>
      </EzPage>
    </Router>
  );
};
```

#### Page with all header elements

Use for detail pages, which should have return links and may also often have related pages and page actions.

```jsxwide
() => {
  const [tabs] = React.useState([
    {label: 'All', accessibilityLabel: 'All orders'},
    {label: 'Accepted', accessibilityLabel: 'Accepted orders'},
    {label: 'Draft', accessibilityLabel: 'Draft orders'},
  ]);
  const [selected, onChange] = React.useState(tabs[0]);
  return (
    <>
      <EzPageHeader
        title="Order # XYZ-123"
        breadcrumb={{
          label: 'Back to Orders',
          onClick: () => {},
        }}
        status={<EzAlert headline="Verified" use="marketing" />}
        subnav={{tabs, selected, onChange}}
        actions={
          <EzLayout
            layout={{
              base: 'stack',
              medium: 'basic',
            }}
            className="responsive"
          >
            <EzButton use="secondary">Request Third Party Delivery</EzButton>
            <EzButton use="primary">Accept Order</EzButton>
          </EzLayout>
        }
      />
      <EzPage />
    </>
  );
};
```

---

## Related components

- [Button](/components/ez-button)
- [Layout](/components/ez-layout)
- [Link](/components/ez-link)
- [Page](/components/ez-page)
