Portal is an abstract wrapper component that creates and appends a DOM node to the end of `document.body` and renders a React tree into it.

---

## Examples

### Using portal to avoid clipping

Useful for rendering a natural React element hierarchy with a different DOM hierarchy to prevent parent styles from clipping or hiding content (for popovers, dropdowns, and modals).

```jsx
<div style={{height: 50, overflow: 'auto'}}>
  <div style={{border: 'solid 5px', padding: 20, marginLeft: 170}}>
    This is the React Root where the portal is rendered. You can see it has clipped overflow, but
    the portal's styles are just fine.
  </div>
  <EzPortal>
    <div
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        width: 200,
        border: 'solid 1px hsla(0, 0%, 0%, 0.25)',
        boxShadow: '0px 2px 10px hsla(0, 0%, 0%, 0.25)',
        padding: 20,
        background: '#f0f0f0',
        textAlign: 'center',
      }}
    >
      This is in the portal
    </div>
  </EzPortal>
</div>
```
