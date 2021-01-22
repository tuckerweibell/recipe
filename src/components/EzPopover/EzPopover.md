---
name: EzPopover
title: Popover
category: Overlays
path: '/components/ez-popover'
---

Popover is a non-modal dialog that floats relative to another element. It's commonly used for displaying additional rich content on top of something. Popovers can alter their floating position to avoid overflowing the page.

---

## Examples

### Popover

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
