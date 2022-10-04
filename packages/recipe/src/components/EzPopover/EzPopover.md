---
name: EzPopover
title: Popover
category: Overlays
path: '/components/ez-popover'
---

Popover is a non-modal dialog that floats relative to another element. It's commonly used for displaying additional rich content on top of something. Popovers can alter their floating position to avoid overflowing the page.

---

<EzAlert
  headline="Heads up!"
  tagline="EzPopover is a low-level building block for building more complex interactions like context menus, custom dialogs and information overlays. Additional care should be taken to ensure the interactions you are building are accessible, in particular, when handling user events, key presses and focus."
  use="info"
/>

<br/>
<br/>

## Best Practices

Popovers should:

- Be used to build custom overlay experiences, like context menus, custom dialogs and information overlays.
- Follow implementation guidelines of specific accessibility patterns, such as the [WAI-ARIA Disclosure Pattern](https://www.w3.org/TR/wai-aria-practices/#disclosure) or the [WAI-ARIA Menu or Menu bar Pattern](https://www.w3.org/TR/wai-aria-practices/#menu).
- Be paired with appropriate keyboard event handlers to support common interactions. For example, in some pattern like dialogs and menus, pressing the `Escape` key should dismisses the popover if it is visible and restore focus to the trigger element.

Popovers should not:

- Be used when a more specific overlay component is available, such as [modal dialogs](/components/ez-modal) or [Tooltips](/components/components/ez-tooltip).
- Use custom z-indices. See more about layering in our [theming guide](/guides/theming/#layering).

### Popover

- Use `targetRef` to tell EzPopover about the element that the popover should position next to.
- Use `showArrow` (optional) to positions an inner element of the popover so it appears centered relative to the reference element, usually the triangle or caret that points toward the reference element. EzPopover will automatically pick up an element decorated with `the data-popper-arrow attribute` and position it within the popover.
- Use `matchWidth` (optional) to size the popover relative to the width of the target element.
- Use `placement` (optional) to position the popover relative to the target element. Defaults to `"bottom"`, accepts: `"top-start"` | `"top-end"` | `"bottom-start"` | `"bottom-end"` | `"right-start"` | `"right-end"` | `"left-start"` | `"left-end"` | `"top"` | `"bottom"` | `"right"` | `"left"`.
- Use `shouldCloseOnBlur` (optional) to automatically call `onClose` when the user clicks away from the popover.
- Use `onClose` (optional) to be notified when the popover closes.

```jsx
() => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  return (
    <div style={{height: 150}}>
      <EzButton
        use="secondary"
        ref={ref}
        onClick={() => setVisible(!visible)}
        onKeyDown={e => e.key === 'Escape' && setVisible(false)}
      >
        Open popover
      </EzButton>

      {visible && (
        <EzPopover targetRef={ref} shouldCloseOnBlur onClose={() => setVisible(false)}>
          <div
            style={{
              border: 'solid 1px hsla(0, 0%, 0%, 0.25)',
              boxShadow: '0px 2px 10px hsla(0, 0%, 0%, 0.25)',
              padding: 20,
              background: '#f0f0f0',
            }}
          >
            Hi!
          </div>
        </EzPopover>
      )}
    </div>
  );
};
```

---

## Related components

- [Modal](/components/ez-modal)
- [Tooltip](/components/components/ez-tooltip)
