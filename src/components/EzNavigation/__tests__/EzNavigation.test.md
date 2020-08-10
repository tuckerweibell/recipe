### Navigation without logo

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

### hover links

```jsx
() => {
  const {NavLink, BrowserRouter: Router} = require('react-router-dom');

  const ref = React.useRef(null);

  React.useEffect(() => {
    const mountNode = ref.current;
    const elsToHover = Array.from(mountNode.querySelectorAll('a[href="/link-hover"]'));
    elsToHover.forEach(el => el.classList.add('__hover'));
  }, [ref]);

  return (
    <ThemeProvider theme={{...themes.standard, breakpoints: {medium: '768px', large: '800px'}}}>
      <Router>
        <div ref={ref}>
          <EzNavigation
            home={{href: '#', label: 'Logo'}}
            links={[
              {to: '/link-1', label: 'link 1', as: NavLink},
              {to: '/link-hover', label: 'hovered link', as: NavLink},
              {to: '/link-3', label: 'link 3', as: NavLink},
            ]}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};
```

### Navigation without logo small screen

```jsx
<Media size="small">
  <EzNavigation
    home={{href: '#', label: 'Homepage'}}
    links={[
      {href: '#', label: 'Orders'},
      {href: '#', label: 'Customers'},
      {href: '#', label: 'Reports'},
    ]}
  />
</Media>
```

### Navigation with notifications small screen

```jsx
<Media size="small">
  <EzAppLayout>
    <EzNavigation
      home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
      links={[
        {href: '/orders', label: 'Orders', active: true, notifications: 15},
        {href: '/ezo', label: 'Get More Orders', notifications: '★'},
        {href: '/customers', label: 'Customers', notifications: 5},
        {href: '/reports', label: 'Reports'},
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
</Media>
```
