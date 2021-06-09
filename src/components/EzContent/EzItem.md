---
name: EzItem
title: Item
path: '/components/ez-item'
---

The Item component represents an item in a list or collection. It is a wrapper for the react-stately collection [Item](https://react-spectrum.adobe.com/react-stately/collections.html). In combination with [`useListState()`](https://react-spectrum.adobe.com/react-stately/useListState.html) from react-stately, `EzItem` provides state management for list components, like building a collection of items from props. This is particularly useful for list-like components with nested content.

See [Multiple choice input field with nested content](/components/ez-field#multiple-choice-input-field-with-nested-content) for examples of how to use the Item component in the context of a list.

## Example

### Item

```jsx
<EzCard>
  <EzItem key="a">
    <EzLabel>
      Choice A
    </EzLabel>
    <EzContent>Nested Content A</EzContent>
  </EzItem>
  <EzItem key="b">
    <EzLabel>
      Choice B
    </EzLabel>
    <EzContent>Nested Content B</EzContent>
  </EzItem>
</EzCard>
};
```

---

## Related components

- [EzField](/components/ez-field)
