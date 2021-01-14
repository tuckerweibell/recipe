---
name: EzLink
title: Links
category: Navigation
path: '/components/ez-link'
---

Links allow users to navigate to other pages in an application. Links can be presented as standalone text or inline inside a paragraph, or used to enhance other elements, like headings or images, with navigation behavior.

---

## Best Practices

Link should:

- Clearly indicate the destination of the navigation using text or images with assistive text.

Links should not:

- Be used for embedding actions or submitting data. Consider [buttons](/components/ez-button) for this usage.

---

## Examples

### Text link

Used for either stand-alone navigational actions or links within larger spans of text.

Links accept any [ReactElement](https://flow.org/en/docs/react/types/#toc-react-element) as children. The link component will add Recipe's styles and event handlers to that element. Actual navigation will be handled by the wrapped element.

```jsx
<EzLink>
  <a href="/orders">View Orders</a>
</EzLink>
```

To use with React Router

```tsx
import {EzLink} from '@ezcater/recipe';
import {Link as RouterLink} from 'react-router-dom';

<EzLink>
  <RouterLink to="/next-page">Next Page</RouterLink>
</EzLink>;
```

If the ReactNode provided to the link component is plain text, it will be styled and exposed to assistive technologies as a link. Interaction will need to be handled in JavaScript with the `onClick` prop. Note: this will not behave like a native link. Browser features like context menus and open in new tab will not be available.

### Secondary links

The `secondary` link variant matches the current color of the containing paragraph text. Its subdued appearance is suitable when the primary variant is too overwhelming, such as in blocks of text with several references linked throughout.

```jsx
<p>
  These earnings roll into your total <EzLink use="secondary">ezRewards</EzLink>. Use as payment on
  any order at checkout.
</p>
```

### Reset links

The `reset` link variant removes the browser default text decoration and color from the wrapped navigation element. This variant can be used to provide navigation semantics to other elements, such as headings or charts, without impacting their default appearance.

```jsx
<EzLink use="reset">
  <a href="/" target="_blank">
    <Placeholder>This placeholder is a link</Placeholder>
  </a>
</EzLink>
```

---

## Related components

- [Button](/components/ez-button)
