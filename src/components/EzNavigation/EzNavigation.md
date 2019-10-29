---
name: EzNavigation
title: Navigation
path: '/components/ez-navigation'
---

The navigation component provides the primary means for users to move between sections of the application. On small screens, the Navigation menu is presented as a top-bar, while on larger screens the Navigation menu is presented as a left side-bar.

---

## Best Practices

The Navigation component should:

- Be paired as sibling of the [Page](/components/ez-page) and [Page header](/components/ez-page-header) components
- Contain primary navigation links that either immediately navigate to a URL, or expand with additional navigation menu content.
- Group utility navigation links

---

## Examples

### Basic Navigation

Use the Navigation component to offer a menu containing navigation links, either as a top-bar on smaller screens or as a left side-bar on larger screens.

```jsx
() => {
  const [active, setActive] = React.useState('Customers');
  const onClick = e => {
    e.preventDefault();
    setActive(e.target.text);
  };
  return (
    <EzAppLayout>
      <EzNavigation
        home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
        links={[
          {href: '#', label: 'Orders', active: active === 'Orders', onClick},
          {href: '#', label: 'Customers', active: active === 'Customers', onClick},
          {href: '#', label: 'Reports', active: active === 'Reports', onClick},
        ]}
      >
        <EzPage>
          <EzCard>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
              purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
            </p>
          </EzCard>
        </EzPage>
      </EzNavigation>
    </EzAppLayout>
  );
};
```

### Navigation using Link components

Normally links render an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), but in order to support client-side routing implementations, you can provide a Link component, such as [react-router's link component](https://reacttraining.com/react-router/web/api/Link), to render via the optional `as` property. EzLink will forward its props to the provided component.

When using the `as` prop, you must use the `to` prop in place of `href` to provide the destination url for the link.

```jsx
() => {
  const {Link, NavLink, BrowserRouter: Router, Route} = require('react-router-dom');
  return (
    <Router>
      <EzAppLayout>
        <EzNavigation
          home={{
            to: '/components',
            label: 'Homepage',
            logo: {src: ezCaterLogoPath, width: 100},
            as: Link,
          }}
          links={[
            {to: '/components/ez-navigation/', label: 'Orders', as: NavLink},
            {to: '/customers', label: 'Customers', as: NavLink},
            {to: '/reports', label: 'Reports', as: NavLink},
          ]}
        >
          <EzPage>
            <EzCard>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
                purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
              </p>
            </EzCard>
          </EzPage>
        </EzNavigation>
      </EzAppLayout>
    </Router>
  );
};
```

### Utility Navigation

Use utility links to offer navigation paths to sections of the application that offer content to support the primary purpose of the application, e.g. managing user account settings.

Utility links can only be used in conjunction with the main navigation links. On larger screens, the main navigation will expand to fill the available vertical space, such that the utility links are presented at the bottom of the screen.

```jsx
() => {
  const {Link, NavLink, BrowserRouter: Router, Route} = require('react-router-dom');
  return (
    <Router>
      <EzAppLayout>
        <EzNavigation
          home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
          links={[
            {href: '/orders', onClick: e => e.preventDefault(), label: 'Orders'},
            {href: '/customers', onClick: e => e.preventDefault(), label: 'Customers'},
            {href: '/reports', onClick: e => e.preventDefault(), label: 'Reports'},
          ]}
          utilityLinks={[
            {href: '/chat', onClick: e => e.preventDefault(), label: 'Chat'},
            {href: '/support', onClick: e => e.preventDefault(), label: '24/7 Support'},
          ]}
        >
          <EzPage>
            <EzCard>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
                purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
              </p>
            </EzCard>
          </EzPage>
        </EzNavigation>
      </EzAppLayout>
    </Router>
  );
};
```

### Navigation links with notifications

Notifications can be used to present supporting context next to the navigation items, and typically represent a indication that new content is available.

On larger screens, notifications can be viewed to provide at-a-glance context that a particular navigation link has available content to interact with. When presented on smaller screens, the total number of notifications is summed and displayed on the navigation top-bar allowing the user to be notified of important content even when the navigation menu is collapsed.

Note: a special notification value `★` can be used to highlight the link for ezOrdering marketing.

```jsx
<EzAppLayout>
  <EzNavigation
    home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
    links={[
      {
        href: '/orders',
        onClick: e => e.preventDefault(),
        label: 'Orders',
        active: true,
        notifications: 15,
      },
      {
        href: '/ezo',
        onClick: e => e.preventDefault(),
        label: 'Get More Orders',
        notifications: '★',
      },
      {href: '/customers', onClick: e => e.preventDefault(), label: 'Customers', notifications: 5},
      {href: '/reports', onClick: e => e.preventDefault(), label: 'Reports'},
    ]}
  >
    <EzPage>
      <EzCard>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
          in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
        </p>
      </EzCard>
    </EzPage>
  </EzNavigation>
</EzAppLayout>
```

### Navigation user menu

The user menu displays the user's name and actions that are related to the current user.

```jsx
() => {
  const menuOpen = React.useState(false);
  return (
    <EzAppLayout>
      <EzNavigation
        home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
        links={[
          {href: '#', onClick: e => e.preventDefault(), label: 'Orders'},
          {href: '#', onClick: e => e.preventDefault(), label: 'Customers'},
          {href: '#', onClick: e => e.preventDefault(), label: 'Reports'},
        ]}
        userMenu={{
          links: [
            {href: '#', onClick: e => e.preventDefault(), label: 'Settings'},
            {href: '#', onClick: e => e.preventDefault(), label: 'Sign out'},
          ],
          name: 'Stefania Mallett',
        }}
      >
        <EzPage>
          <EzCard>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus
              purus, in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
            </p>
          </EzCard>
        </EzPage>
      </EzNavigation>
    </EzAppLayout>
  );
};
```

---

## Browser support

The Navigation component internally uses [`Element.prototype.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) and may require a polyfill to provide [browser support](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Browser_compatibility) depending on the specific requirements for your application. We recommend using [Polyfill.io](https://polyfill.io/v3/) in your application to apply necessary polyfills only when they are needed for the requesting browser.

---

## Related components

- [Page](/components/ez-page)
- [Page header](/components/ez-page-header)
- [Link](/components/ez-link)
