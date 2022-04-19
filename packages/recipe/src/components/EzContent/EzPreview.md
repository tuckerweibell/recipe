---
name: EzPreview
title: Preview
path: '/components/ez-preview'
---

The Preview component represents self-contained content, such as an image or illustration, within a Recipe container such as a Dialog or Card. Preview provides no specific styling by itself, but receives styling from the parent container. In addition, Content will be automatically placed within the container's layout, according to the parent container's positioning guidelines.

See [Card](/components/ez-card) for examples of how to use the Preview component in the context of a Recipe container. See MDN for more information about the semantics of the [figure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), which is used internally by the Preview component.

## Example

### Content

```jsx
<EzPreview>
  <img
    src={withPrefix('/images/tacos.jpg')}
    alt="Selection of Baja Fish tacos and Beef Barbacoa Tacos"
  />
</EzPreview>
```

---

## Related components

- [EzCard](/components/ez-card)
