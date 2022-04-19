### hover buttons and links

```jsx
() => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    // we can't trigger :hover pseudo class, so instead, add  `.__hover` custom class name to interactive elements
    const mountNode = ref.current;
    const interactiveElements = Array.from(mountNode.querySelectorAll('button,a'));
    interactiveElements.forEach(el => el.classList.add('__hover'));
  }, [ref]);

  return (
    <div ref={ref}>
      <EzPage>
        <EzBanner
          title="More orders, lower commission."
          message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
          link={{
            label: 'Learn more',
            href: '#',
          }}
          use="marketing"
          onDismiss={() => {}}
        />
        <EzBanner
          title="More orders, lower commission."
          message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
          link={{
            label: 'Learn more',
            onClick: () => {},
          }}
          use="ezOrdering"
          onDismiss={() => {}}
        />
      </EzPage>
    </div>
  );
};
```
