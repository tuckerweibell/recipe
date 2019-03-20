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

- Sub Navigation (tabs)

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

Used when a page belongs to a parent page or collection. The `breadcrumb` prop must include a label and an `onClick` action.

```jsxwide
<EzPageHeader
  title="Order # XYZ-123"
  breadcrumb={{
    label: 'Back to Orders',
    onClick: () => alert('Clicked back'),
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

#### Page with all header elements

Use for detail pages, which should have return links and may also often have page actions.

```jsxwide
<>
  <EzPageHeader
    title="Order # XYZ-123"
    breadcrumb={{
      label: 'Back to Orders',
      onClick: () => alert('Clicked back'),
    }}
    status={<EzAlert headline="Verified" use="marketing" />}
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
        <EzButton use="secondary">Request Third Party Delivery</EzButton>
        <EzButton use="primary">Accept Order</EzButton>
      </EzLayout>
    }
  />
  <EzPage>
    <EzCard>Page Content</EzCard>
  </EzPage>
</>
```

---

## Related components

- [Page](/components/ez-page)
- [Button](/components/ez-button)
- [Layout](/components/ez-layout)
