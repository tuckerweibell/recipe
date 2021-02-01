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

### Popover

- Use `targetRef` to tell EzPopover about the element that the popover should position next to. 
- Use `showArrow` (optional) to show triangle or caret that points towards the reference element.
- Use `matchWidth` (optional) to size the popover relative to the width of the target element.
- Use `placement` (optional) to position the popover relative to the target element. Defaults to `"bottom"`, accepts: `"top-start"` | `"top-end"` | `"bottom-start"` | `"bottom-end"` | `"right-start"` | `"right-end"` | `"left-start"` | `"left-end"` |  `"top"` | `"bottom"` | `"right"` | `"left"`.
- Use `onClose` (optional) to be notified when the popover closes.
- Use `shouldCloseOnBlur` (optional) to automatically close the popover when the user clicks away. 

```jsx
() => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  return (
    <div style={{height: 150}}>
      <button ref={ref} onClick={() => setVisible(!visible)}>
        Open popover
      </button>

      {visible && (
        <EzPopover targetRef={ref}>
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

- [Related](/components/ez-related)
