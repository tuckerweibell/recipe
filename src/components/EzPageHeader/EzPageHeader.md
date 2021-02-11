---
name: EzPageHeader
title: Page Header
category: Layout
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

---

## Examples

### Basic Page header

Used for summary or detail pages with no further action to take.

```jsx
<EzPageHeader title="Reviews" />
```

### Page header with breadcrumb

Used when a page belongs to a parent page or collection. The `breadcrumb` prop must include a label. Optionally, the breadcrumb may include an `onClick` to trigger navigation or support the handling side effects (such as logging page views).

Optionally, an `accessibilityLabel` to render a visibly hidden label for providing additional context to improve accessibility.

```jsx
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

```jsx
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

```jsx
<EzPageHeader title="Order # XYZ-123" status={<EzStatus text="Verified" use="success" />} />
```

### Page header with actions

While call to actions are typically found at the bottom of cards within the page content, the space in the top-right of a page header is ideal for common actions associated for the page as a whole.

Consider wrapping actions in an EzLayout to manage how they stack at smaller breakpoints.

```jsx
<EzPageHeader
  title="Order # XYZ-123"
  actions={
    <EzLayout
      layout={{
        base: 'stack',
        medium: 'basic',
      }}
    >
      <EzButton use="secondary" destructive>
        Reject Order
      </EzButton>
      <EzButton use="secondary">Request Third Party Delivery</EzButton>
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

```jsx
() => {
  const [tabs] = React.useState([
    {label: 'All', accessibilityLabel: 'All orders'},
    {label: 'Accepted', accessibilityLabel: 'Accepted orders'},
    {label: 'Draft', accessibilityLabel: 'Draft orders'},
  ]);
  const [selected, onChange] = React.useState(tabs[0]);
  return (
    <>
      <EzPageHeader title="Order # XYZ-123" subnav={{tabs, selected, onChange}} />
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

```jsx
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

### Page header with subheader

Use this pattern to present filters, related links or tertiary actions relating to the page-level content. Use the subheader pattern in favor of Page header actions in order to utilize the additional space provided by the subheader.

Subheader content is reserved for actions associated for the page as a whole. For actions that apply only to a single card, it’s best to use card actions instead.

- Use the `subheader` prop to provide filters, related links or actions to display within the subheader.
- One or more `EzLayout` components should be used to layout subheader content and manage how content should stack at smaller breakpoints.

```jsx
<>
  <EzPageHeader
    title="Order # XYZ-123"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: e => e.preventDefault(),
    }}
    actions={
      <EzLayout layout={{base: 'stack', medium: 'basic'}}>
        <EzButton use="primary">Order Support</EzButton>
      </EzLayout>
    }
    subheader={
      <EzLayout
        layout={{
          base: 'equal',
          medium: 'right',
        }}
      >
        <EzButton
          use="tertiary"
          icon={
            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.06295 4.07865C2.06295 3.87385 2.21417 3.70787 2.40075 3.70787H3.46066C3.64712 3.70787 3.79846 3.87385 3.79846 4.07865C3.79846 4.28345 3.64712 4.44944 3.46066 4.44944H2.40075C2.21417 4.44944 2.06295 4.28345 2.06295 4.07865ZM9.45842 7.53933H8.12197L7.98009 6.53178C7.95093 6.32043 7.78529 6.17978 7.5905 6.17978H2.76884C2.57404 6.17978 2.40841 6.32043 2.37924 6.53178L2.23737 7.53933H0.900802V2.8427H9.45842V7.53933ZM2.68 10.1348L3.10743 7.04494H7.25191L7.67934 10.1348H2.68ZM3.37801 1.85393H6.98122V0.741573H3.37801V1.85393ZM9.90882 1.85393H7.65682V0.370787C7.65682 0.165989 7.55818 0 7.3716 0H2.98774C2.80127 0 2.70241 0.165989 2.70241 0.370787V1.85393H0.450401C0.201667 1.85393 0 2.06627 0 2.33929V8.00961C0 8.28263 0.201667 8.52809 0.450401 8.52809H2.10033L1.83189 10.4526C1.81455 10.5773 1.84766 10.7288 1.92254 10.8245C1.99742 10.9202 2.10664 11 2.22149 11H8.13796C8.25281 11 8.36192 10.9141 8.4368 10.8184C8.51168 10.7228 8.54478 10.5928 8.52755 10.468L8.259 8.52809H9.90882C10.1576 8.52809 10.3592 8.28263 10.3592 8.00961V2.33929C10.3592 2.06627 10.1576 1.85393 9.90882 1.85393Z"
                fill="#8B99A6"
              />
            </svg>
          }
        >
          Print Order
        </EzButton>
        <EzButton
          use="tertiary"
          icon={
            <svg viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.0922 6.4042C4.18006 6.5002 4.30045 6.5543 4.42607 6.5543C4.55178 6.5543 4.67207 6.5002 4.76002 6.4042L6.62441 4.3676C6.80499 4.1704 6.80191 3.8538 6.6175 3.6605C6.43308 3.4674 6.13717 3.4706 5.95659 3.6679L4.8934 4.8293V0.5C4.8934 0.2239 4.68413 0 4.42607 0C4.168 0 3.95873 0.2239 3.95873 0.5V4.8292L2.89573 3.6679C2.71515 3.4706 2.41942 3.4674 2.23482 3.6605C2.05051 3.8538 2.04742 4.1703 2.228 4.3676L4.0922 6.4042ZM8.44515 5.7771V8.5C8.44515 8.7761 8.23588 9 7.97782 9H0.874318C0.616255 9 0.406982 8.7761 0.406982 8.5V5.7771C0.406982 5.501 0.616255 5.2771 0.874318 5.2771C1.13238 5.2771 1.34165 5.501 1.34165 5.7771V8H7.51048V5.7771C7.51048 5.501 7.71975 5.2771 7.97782 5.2771C8.23588 5.2771 8.44515 5.501 8.44515 5.7771V5.7771Z"
                fill="#8B99A6"
              />
            </svg>
          }
        >
          Download PDF
        </EzButton>
      </EzLayout>
    }
  />
  <EzPage>
    <EzCard title="Order details">
      <div>Order content</div>
    </EzCard>
  </EzPage>
</>
```

### Page header with subheader and tabs

Use this pattern to present filters, related links or tertiary actions relating to the tab-level content.

For filters or actions that apply only to a single card, it’s best to use card actions instead.

- Use the `subheader` prop to provide filters, related links or actions to display within the subheader.
- One or more `EzLayout` components should be used to layout subheader content and manage how content should stack at smaller breakpoints.
- Filters should be wrapped with `EzLabelledItem[size=small]` to provide appropriate labels to describe the filter.

```jsx
() => {
  const tabs = [{label: 'Customers'}, {label: 'Leads'}, {label: 'House Accounts'}];
  return (
    <>
      <EzPageHeader
        title="Customer Management"
        subnav={{tabs, selected: tabs[0]}}
        subheader={
          <EzLayout
            layout={{
              base: 'stack',
              medium: 'basic',
            }}
          >
            <EzField
              type="select"
              label="List"
              labelSize="small"
              options={[
                {label: 'Active Customers', value: 'active'},
                {label: 'All', value: 'all'},
              ]}
              value="active"
              onChange={() => {}}
            />
            <EzLabelledItem position="top" size="small" title="Search" htmlFor="customer-search">
              <EzSearchInput id="customer-search" placeholder="Search" />
            </EzLabelledItem>
          </EzLayout>
        }
      />
      <EzPage>
        <EzCard title="Customer List">
          <div>List content</div>
        </EzCard>
      </EzPage>
    </>
  );
};
```

#### Page with all header elements

Use for detail pages, which should have return links and may also often have related pages and page actions.

```jsx
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
        status={<EzStatus text="Verified" use="success" />}
        subnav={{tabs, selected, onChange}}
        actions={
          <EzLayout
            layout={{
              base: 'stack',
              medium: 'basic',
            }}
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

## Browser support

The Page Header component internally uses [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) and may require a polyfill to provide [browser support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#browser_compatibility) depending on the specific requirements for your application. We recommend using [Polyfill.io](https://polyfill.io/v3/) in your application to apply necessary polyfills only when they are needed for the requesting browser.

---

## Related components

- [Button](/components/ez-button)
- [Layout](/components/ez-layout)
- [Link](/components/ez-link)
- [Page](/components/ez-page)
