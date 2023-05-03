---
name: EzBadge
title: Badge
category: Feedback
path: '/components/ez-badge'
tags: ['badge', 'notification', 'dot']
---

Badges indicate notifications or events that are relevant and relatively close to or overlapping another element, like a button or an icon.

---

## Best Practices

- Badges convey information about notifications or events.
- Badges appear very close to, often overlapping, the element that they are describing.
- Badges should make it easy to understand the presence of notifications or events, encouraging action to be taken on the element the badge describes.
- Badges should always be wrapped in an accessible element with a proper `aria-label` to be read by screenreaders. The wrapping element will depend on the context with which you use the badge (see below for examples).

---

## Examples

### Basic Badges

Badges always require a `value`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={3}>
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

### Badge Colors

EzBadge supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `alert`, `info`, and `success`) as well as all supported [theme colors](http://localhost:8000/guides/theming/#colors) (ex. `common.red100`).

Out of the box, badges have a background color of `common.alert100` and font color of `common.neutral100`. Text and background colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

<EzAlert headline="Note" tagline="Only a select handful of available colors are shown below. All theme properties and colors are supported."></EzAlert>

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzLayout>
        <EzBadge value={3} color="primary">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="secondary">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="error">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="warning">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="alert">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="info">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="success">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} color="common.red100">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
      </EzLayout>
    </EzPage>
  );
};
```

### Hidden Badges

Badges can optionally be hidden with `hide`. The default is `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={3} hide>
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

### Minimizing Badges (Dot Badge)

Badges can optionally be minimized with `minimize`, and will appear as a dot. The default is `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={3} minimize>
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

### Zero-value Badges

By default, badges will automatically hide when the value is `0`. You can override this with the `showZero` prop, which defaults to `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={0} showZero>
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

### Maximum-value Badges

To cap the value of a badge, provide a numerical `max` value. The default is `99`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={100} max={99}>
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

### Aligning Badges

The default alignment for a badge is top right. To align a badge with its wrapped element, use `alignX` with `left` or `right` and `alignY` with `top` or `bottom`.

To align the badge relative to the corner of the wrapped element, use `overlap` with a value of `circular` or `rectangular`, depending on the shape of the wrapped element. The default is `rectangular`.

#### Left

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={3} alignX="left">
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

#### Bottom

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzBadge value={3} alignY="bottom">
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </EzPage>
  );
};
```

#### Circular

```jsx
() => {
  const {faCircle} = require('@fortawesome/free-solid-svg-icons/faCircle');

  return (
    <EzPage>
      <EzLayout>
        <EzBadge value={3} overlap="circular">
          <EzIcon icon={faCircle} />
        </EzBadge>
        <EzBadge value={3} overlap="circular" minimize>
          <EzIcon icon={faCircle} />
        </EzBadge>
      </EzLayout>
    </EzPage>
  );
};
```

#### Rectangular

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <EzLayout>
        <EzBadge value={3} overlap="rectangular">
          <EzIcon icon={shoppingCart} />
        </EzBadge>
        <EzBadge value={3} overlap="rectangular" minimize>
          <EzIcon icon={shoppingCart} />
        </EzBadge>
      </EzLayout>
    </EzPage>
  );
};
```

### Standalone Badges

Standalone badges can be used next to other elements, instead of wrapping them. Ensure they are still accessible by wrapping both elements with an element that has an `aria-label`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <div aria-label="View orders - 3 items in cart">
        <EzLayout layout="split">
          <EzLink>
            <a href="/orders">View Orders</a>
          </EzLink>
          <EzBadge value={3} />
        </EzLayout>
      </div>
    </EzPage>
  );
};
```

### Accessibility

Badges should be wrapped in an accessible element with a proper `aria-label` to be read by screenreaders. The wrapping element will depend on the context with which you use the badge.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzPage>
      <span aria-label="3 items in cart">
        <EzBadge value={3}>
          <EzIcon icon={shoppingCart} />
        </EzBadge>
      </span>
    </EzPage>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the badge or dot, you can do so using provided class names (`EzBadge`, `EzBadge-badge`, and `EzBadge-dot`).

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'value*',
      types: ['node'],
      description: 'The content inside the badge.',
    },
    {
      name: 'alignX',
      types: ['left', 'right'],
      defaultValue: 'right',
      description: 'Horizontal alignment of the badge relative to its wrapped element.',
    },
    {
      name: 'alignY',
      types: ['top', 'bottom'],
      defaultValue: 'top',
      description: 'Vertical alignment of the badge relative to its wrapped element.',
    },
    {
      name: 'children',
      types: ['node'],
      description: 'The content that the badge wraps.',
    },
    {
      name: 'color',
      types: ['EzThemeColors'],
      defaultValue: 'error',
      description: 'The color of the component. Supports theme palette properties and colors.',
    },
    {
      name: 'hide',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'Optionally hide the badge.',
    },
    {
      name: 'max',
      types: ['number'],
      defaultValue: '99',
      description: 'Cap the badge content value at the max value. For example, if the value is 100 and the max is 99, the display value will be 99+.',
    },
    {
      name: 'minimize',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'Minimize the badge. The badge will appear as a smaller dot, without interior content.',
    },
    {
      name: 'overlap',
      types: ['circular', 'rectangular'],
      defaultValue: 'rectangular',
      description: 'The wrapped shape the badge overlaps.',
    },
    {
      name: 'showZero',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'Optionally show the badge when value is 0.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [Button](/components/ez-button)
- [Icon](/components/ez-icon)
