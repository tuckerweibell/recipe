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

- Badges convey information about notifications or events
- Badges appear very close to, often overlapping, the element that they are describing
- Badges should make it easy to understand the presence of notifications or events, encouraging action to be taken on the element the badge describes
- Badges should always be wrapped in accessible element with a proper `aria-label` to be read by screenreaders, the wrapping element will depend on the context with which you use the badge (see below for examples)

---

## Examples

### Basic Badges

Badges always require a `value`.

Out of the box, badges have a background color of `common.alert100` and font color of `common.neutral100`. Available theme variants: `default`, `primary`, `secondary`, `error`, `info`, `success`, and `warning`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" variant="primary">
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Badge Colors

To use colors outside the variant options, provide a theme color to `backgroundColor` and `fontColor`. Ensure the contrast between the two is appropriate, consult with a designer if needed. Do not provide `variant` with `backgroundColor` and `fontColor`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" backgroundColor="common.blue100" fontColor="common.neutral100">
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Hidden Badges

Badges can optionally be hidden with `hide`. The default is `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" hide>
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Minimizing Badges (Dot Badge)

Badges can optionally be minimized with `minimize`, and will appear as a dot. The default is `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" minimize>
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Zero-value Badges

To show a badge when the value is zero, use `showZero`. The default is `false`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="0" showZero>
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Maximum-value Badges

To cap the value of a badge, provide a numerical `max` value. The default is `99`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="100">
      <EzIcon icon={shoppingCart} max={99} />
    </EzBadge>
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
    <EzBadge value="3" alignX="left">
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

#### Bottom

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" alignY="bottom">
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

#### Circular

```jsx
() => {
  const {fullCircle} = require('@fortawesome/free-solid-svg-icons/faCircle');

  return (
    <EzBadge value="3" overlap="circular">
      <EzIcon icon={fullCircle} />
    </EzBadge>
  );
};
```

```jsx
() => {
  const {fullCircle} = require('@fortawesome/free-solid-svg-icons/faCircle');

  return (
    <EzBadge value="3" overlap="circular" minimize>
      <EzIcon icon={fullCircle} />
    </EzBadge>
  );
};
```

#### Rectangular

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" overlap="rectangular">
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <EzBadge value="3" overlap="rectangular" minimize>
      <EzIcon icon={shoppingCart} />
    </EzBadge>
  );
};
```

### Accessibility

Badges should be wrapped in accessible element with a proper `aria-label` to be read by screenreaders, the wrapping element will depend on the context with which you use the badge.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <span aria-label="3 items in cart">
      <EzBadge value="3">
        <EzIcon icon={shoppingCart} />
      </EzBadge>
    </span>
  );
};
```

### Standalone Badges

Standalone badges can be used next to other elements, instead of wrapping them. Ensure they are still accessible by wrapping both elements with an element that has an `aria-label`.

```jsx
() => {
  const {shoppingCart} = require('@fortawesome/free-solid-svg-icons/faCartShopping');

  return (
    <div aria-label="View orders - 3 items in cart">
      <EzLayout layout="split">
        <EzLink>
          <a href="/orders">View Orders</a>
        </EzLink>
        <EzBadge value="3" color="primary" />
      </EzLayout>
    </div>
  );
};
```

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
      name: 'variant',
      types: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The background and font color variant of the component. Supports theme palette properties. Do not use with backgroundColor or fontColor.',
    },
    {
      name: 'backgroundColor',
      types: ['EzThemeColors'],
      defaultValue: 'common.alert100',
      description: 'The background of the component. Supports theme palette colors. Do not use with variant',
    },
    {
      name: 'fontColor',
      types: ['EzThemeColors'],
      defaultValue: 'common.neutral100',
      description: 'The font color of the component. Supports theme palette colors. Do not use with variant.',
    },
    {
      name: 'hide',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'Optionally hide the badge.',
    },
    {
      name: 'showZero',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'Optionally show the badge when value is 0.',
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
      name: 'overlap',
      types: ['circular', 'rectangular'],
      defaultValue: 'rectangular',
      description: 'The wrapped shape the badge overlaps.',
    },
     {
      name: 'children',
      types: ['node'],
      description: 'The content that the badge wraps.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [Button](/components/ez-button)
- [Icon](/components/ez-icon)
- [Status](/components/ez-status) (deprecated)
