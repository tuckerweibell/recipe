---
name: EzBaseFontSizeCompatibility
title: Base Font Size
category: Typography
path: '/components/ez-base-font-size-compatibility'
tags: ['compatibility', 'font', 'text']
---

Base Font Size Compatibility is a component that enables applications that are not yet using Recipe's base font size to run in compatibility mode with a base font size of 14px.

<EzAlert
  headline="Out-of-the-box Recipe uses the correct base font size"
  tagline="Direct usage of this component is typically unnecessary except to support backwards-compatibility."
  use="info"
/>

<EzAlert
  headline="Browser support"
  tagline="A polyfill may be required when migrating from previous versions of Recipe. More information about browser support can be found below."
  use="warning"
/>

---

## Best Practices

Base Font Size Compatibility should:

- Only be used directly to support backwards-compatibility or testing scenarios. Most applications should use the default font size.

---

## Examples

### Compatibility Mode

Allows applications that are not yet using Recipe's base font size to run in compatibility mode with a base font size of 14px.

```jsx
() => {
  return (
    <>
      <EzBaseFontSizeCompatibility />
      <EzPage>
        <EzCard title="Card Heading">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
            in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
          </p>
        </EzCard>
      </EzPage>
    </>
  );
};
```

---

## Browser support

Recipe internally uses [`CSS custom properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and may require a polyfill to provide [browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Browser_compatibility) depending on the specific requirements for your application. We recommend using [the css-vars-ponyfill by jhildenbiddle](https://github.com/jhildenbiddle/css-vars-ponyfill) in your application if you need to support IE11.

---

## Related components

- [App Layout](/components/ez-app-layout)
- [Global Styles](/components/ez-global-styles)
