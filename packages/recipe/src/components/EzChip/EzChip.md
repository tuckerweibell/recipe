---
name: EzChip
title: Chip
category: Inputs
path: '/components/ez-chip'
tags: ['chip']
---

Chips are compact elements that represent an input, attribute, or action. They allow users to enter information, make selections, filter content, or trigger actions.

---

## Best Practices

- Chips are handy components that quickly convey information. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple interactive elements.
- Chips are compact components that represent discrete information.
- Chips should have a clear and helpful relationship to the content or task they represent.
- Chips should make tasks easier to complete, or content easier to sort.

---

## Examples

### Basic Chips

EzChip supports `filled` (default) and `outlined` variants.

```jsx
<EzLayout>
  <EzChip label="chip filled" />
  <EzChip label="chip outline" variant="outlined" color="common.black" />
</EzLayout>
```

### Status

EzChip also support status variants, which are used to call attention to an individual item in a set.

Use a basic status (`neutral`, `success`, or `informational`) when an action is not required of the user or there’s not a compelling reason to draw their attention to an item.

Use an action status (`attention`, `warning`, `error`, or `alert`) when an action is required, or it needs attention. A dot icon is displayed.

<EzAlert use="info" headline="Status variant colors are defined in ezTheme and should not be used with the color or icon props."></EzAlert>

```jsx
<EzLayout layout="stack" alignX="left">
  <EzChip label="Neutral" variant="neutral" />
  <EzChip label="Success/Complete" variant="success" />
  <EzChip label="Informational" variant="informational" />
  <EzChip label="Needs Attention" variant="attention" />
  <EzChip label="Warning/Concern" variant="warning" />
  <EzChip label="Error/Destructive" variant="error" />
  <EzChip label="Alert/Reconfirm" variant="alert" />
</EzLayout>
```

### Chip Actions

Chips with an `onClick` prop defined will change appearance on focus, hover, and click.

Chips with an `onDelete` prop defined will display a delete icon which changes appearance on hover.

```jsx
<EzLayout>
  <EzChip label="Clickable" onClick={() => alert('You clicked the Chip.')} />
  <EzChip label="Deletable" onDelete={() => alert('You deleted the Chip.')} />
  <EzChip
    label="Clickable and Deletable"
    onClick={() => alert('You clicked the Chip.')}
    onDelete={() => alert('You deleted the Chip.')}
  />
</EzLayout>
```

### Chip Colors

EzChip supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.neutral130`). Text and background colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

```jsx
<EzLayout>
  <EzChip label="primary" color="primary" />
  <EzChip label="secondary" color="secondary" />
  <EzChip label="neutral130" color="common.neutral130" />
  <EzChip label="primary" color="primary" variant="outlined" />
  <EzChip label="purple100" color="common.purple100" variant="outlined" />
</EzLayout>
```

### Chip Sizes

If you want to specify a size, use the `size` property. We currently support `small`, and `medium` (default).

```jsx
<EzLayout>
  <EzChip label="medium" size="medium" />
  <EzChip label="small" size="small" />
</EzLayout>
```

### Chip Icons

You can add an icon to the beginning of a chip by passing an `EzIcon` to the optional `icon` property.

Icon sizes will default to the font size of the text. If you need a different icon size, use `size="inherit"` on the `EzIcon` and wrap it in an element with the desired size.

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout>
      <EzChip label="icon" icon={<EzIcon icon={faCoffee} />} />
      <EzChip
        label="inherited icon size"
        icon={
          <div style={{fontSize: '10px', display: 'flex'}}>
            <EzIcon icon={faCoffee} size="inherit" />
          </div>
        }
      />
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the background, text, icon, or border, you can do so using provided class names (`EzChip`, `EzChip-[variant]`, `EzChip-clickable`, `EzChip-deletable`, `EzChip-deleteIcon`, `EzChip-disabled`, `EzChip-icon`, and `EzChip-label`).

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'label*',
      types: ['node'],
      description: 'The content of the component.',
    },
    {
      name: 'color',
      types: ['EzThemeColors'],
      defaultValue: 'common.neutral130',
      description: 'The color of the component. Supports theme palette properties and colors.',
    },
    {name: 'icon', types: ['element'], description: 'Icon element.'},
    {name: 'onClick', types: ['func'], description: 'Callback fired when the chip is clicked.'},
    {name: 'onDelete', types: ['func'], description: 'Callback fired when the delete icon is clicked. If set, the delete icon will be shown.'},
    {
      name: 'size',
      types: ['small', 'medium', 'inherit'],
      defaultValue: 'medium',
      description: 'The size of the component, or if inherit, the font size.',
    },
    {
      name: 'variant',
      types: ['filled', 'outlined', 'neutral', 'success', 'informational', 'attention', 'warning', 'error', 'alert'],
      defaultValue: 'filled',
      description: 'The variant to use.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [Button](/components/ez-button)
- [Icon](/components/ez-icon)
