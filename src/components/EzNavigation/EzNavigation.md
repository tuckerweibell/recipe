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

Normally links render an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), but in order to support client-side routing implementations, you can instead provide a Link component, such as [react-router's Link](https://reacttraining.com/react-router/web/api/Link) to render via the optional `as` property. When using the `as` property, you must use the `to` prop in place of `href` to provide the destination url for the link.

```jsx
<EzNavigation
  home={{href: '#', label: 'Homepage'}}
  links={[
    {href: '#', label: 'Orders'},
    {href: '#', label: 'Customers'},
    {href: '#', label: 'Reports'},
  ]}
/>
```

### Utility Navigation

Use utility links to offer navigation paths to sections of the application that offer content to support the primary purpose of the application, e.g. managing user account settings.

Utility links can only be used in conjunction with the main navigation links. On larger screens, the main navigation will expand to fill the available vertical space, such that the utility links are presented at the bottom of the screen.

```jsx
<EzNavigation
  home={{href: '#', label: 'Homepage'}}
  links={[
    {href: '#', label: 'Orders'},
    {href: '#', label: 'Customers'},
    {href: '#', label: 'Reports'},
  ]}
  utilityLinks={[{href: '#', label: 'Chat'}, {href: '#', label: '24/7 Support'}]}
/>
```

### Navigation links with notifications

Notifications can be used to present supporting context next to the navigation items, and typically represent a indication that new content is available.

On larger screens, notifications can be viewed to provide at-a-glance context that a particular navigation link has available content to interact with. When presented on smaller screens, the total number of notifications is summed and displayed on the navigation top-bar allowing the user to be notified of important content even when the navigation menu is collapsed.

```jsx
<EzNavigation
  home={{href: '#', label: 'Homepage'}}
  links={[
    {href: '#', label: 'Orders', notifications: 15},
    {href: '#', label: 'Customers', notifications: 5},
    {href: '#', label: 'Reports'},
  ]}
/>
```

### Navigation user menu

The user menu displays the user's name and actions that are related to the current user.

```jsx
() => {
  const menuOpen = React.useState(false);
  return (
    <EzNavigation
      home={{href: '#', label: 'Homepage'}}
      links={[
        {href: '#', label: 'Orders'},
        {href: '#', label: 'Customers'},
        {href: '#', label: 'Reports'},
      ]}
      userMenu={{
        links: [{href: '#', label: 'Settings'}, {href: '#', label: 'Sign out'}],
        name: 'Ben Kenobi',
      }}
    />
  );
};
```

---

## Related components

- [Page](/components/ez-page)
- [Page header](/components/ez-page-header)
- [Link](/components/ez-link)
