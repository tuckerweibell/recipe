---
name: EzLink
title: Links
path: '/components/ez-link'
---

Links are used to embed navigation paths to related content from within a page. Typically links will be used to trigger navigation to other pages in an application.

---

## Best Practices

Link should:

- Clearly indicate the destination of the navigation using text or images with assistive text.

Links should not:

- Be used for embedding actions or submitting data. Consider [buttons](/components/ez-button) for this usage.

---

## Examples

### Basic link

Used for either stand-alone navigational actions or links within larger spans of text. Use the `href` prop to provide the destination url for the link.

```jsx
<EzLink href="/orders">View Orders</EzLink>
```

### Link component

Normally links render an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), but in order to support client-side routing implementations, you can provide a Link component, such as [react-router's link component](https://reacttraining.com/react-router/web/api/Link), to render via the optional `as` property. EzLink will forward its props to the provided component.

When using the `as` prop, you must use the `to` prop in place of `href` to provide the destination url for the link.

```jsx
() => {
  const {Link, BrowserRouter: Router, Route} = require('react-router-dom');
  return (
    <Router>
      <EzLayout layout="basic">
        <EzLink to="/orders" as={Link}>
          View Orders
        </EzLink>
        <EzLink to="/accounts" as={Link}>
          View Accounts
        </EzLink>
      </EzLayout>
      <Route exact path="/orders" component={() => 'Orders'} />
      <Route exact path="/accounts" component={() => 'Accounts'} />
    </Router>
  );
};
```

---

## Related components

- [Button](/components/ez-button)
