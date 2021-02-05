---
name: EzFooter
title: Footer
path: '/components/ez-footer'
---

The Footer component represents a footer for the closest ancestor Recipe container component, such as a Dialog or Card. A footer may contains related metadata about a section, such as a total or contact information, but may also contain links to related documents or a call to action.

Footer provides no specific styling by itself, but receives styling from the parent container. In addition, Footer will be automatically placed within the container's layout, according to the parent container's positioning guidelines.

See [Card](/components/ez-card) for examples of how to use the Footer component in the context of a Recipe container. See MDN for more information about the semantics of the [footer element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer), which is used internally by the Footer component.

---

## Examples

### Content

```jsx
<EzFooter>This content should be used as footer content by its parent container component</EzFooter>
```

---

## Related components

- [Card](/components/ez-card)
