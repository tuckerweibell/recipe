---
name: EzButton
title: Button
category: Inputs
path: '/components/ez-button'
---

Buttons can be used in forms, modals, cards, toolbars, or in other locations on a page to communicate that a one-click action is available.

---

## Best Practices

Buttons should:

- Be clearly labeled and explicitly state what they do.
- Be labeled with actionable verbs, following the Verb + Noun format except in the case of common actions like Save, Edit, Close, or Cancel.
- Be positioned in consistent locations and in a sensible order.
- Use spacing to separate them from other interactive content.
- Not wrap text. For maximum legibility, a label should remain on a single line.

Buttons should not:

- Be used in place of a more semantic element.
  - For navigation or actions that do not affect the state of the app, use [`EzLink`](/components/ez-link). A button does something. A link goes somewhere. Ex. breadcrumbs, redirects, "forgot password", and "learn more" all go somewhere rather than do something, so should be links.
  - For status chips, use [`EzChip`](/components/ez-chip). Chips are reactive and contextual, whereas buttons are static and predetermined. Ex. a delivery status of "confirmed" is contextual and not a static action, so should be a status chip.
- Provide too many options at once with too many buttons.

---

## Examples

### Basic Buttons

EzButton supports `filled` (default), `outlined`, `text`, and `inline` variants.

`filled` buttons are high-emphasis and contain actions that are primary. There should not be more than one primary button in a section of a page.

`outlined` buttons are medium-emphasis and contain actions that are secondary, which are important but aren't the primary action. A page or section should not have more than two secondary buttons.

`text` buttons are typically used for less-pronounced actions than primary or secondary actions. They may also be used when space is a constraint or when content is repeated many times on a page.

`inline` buttons are `text` buttons that align with surrounding text.

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzButton>Filled</EzButton>
    <EzButton variant="outlined">Outlined</EzButton>
    <EzButton variant="text">Text</EzButton>
  </EzLayout>
  <div>
    This <EzButton variant="inline">Inline</EzButton> button is between text.
  </div>
</EzLayout>
```

### Button Actions

Buttons accept an `onClick` prop for performing actions on click and `onKeyDown` for performing actions on a key down.

For destructive actions, set the button's `color` to `destructive`.

```jsx
<EzLayout>
  <EzButton onClick={() => alert('Saved.')}>Save</EzButton>

  <EzButton onClick={() => alert('Deleted.')} color="destructive">
    Delete
  </EzButton>

  <EzButton onKeyDown={event => event.key === 'Enter' && alert('Enter pressed.')}>
    Press Enter
  </EzButton>
</EzLayout>
```

### Button Colors

EzButton supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.grey160`). Text and background colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

<EzAlert headline="Note" tagline="Only a select handful of available colors are shown below. All theme properties and colors are supported."></EzAlert>

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzButton color="info">Info</EzButton>
    <EzButton color="error">Error</EzButton>
    <EzButton color="common.grey60">common.grey60</EzButton>
    <EzButton color="common.purple100">common.purple100</EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton color="info" variant="outlined">
      Info
    </EzButton>
    <EzButton color="error" variant="outlined">
      Error
    </EzButton>
    <EzButton color="common.grey60" variant="outlined">
      common.grey60
    </EzButton>
    <EzButton color="common.purple100" variant="outlined">
      common.purple100
    </EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton color="info" variant="text">
      Info
    </EzButton>
    <EzButton color="error" variant="text">
      Error
    </EzButton>
    <EzButton color="common.grey160" variant="text">
      common.grey160
    </EzButton>
    <EzButton color="common.purple100" variant="text">
      common.purple100
    </EzButton>
  </EzLayout>
</EzLayout>
```

### Button and Font Sizes

If you want to specify a button size, use the `size` property. We currently support `small`, `medium` (default), and `large`.

If you want to specify a font size, use the `fontSize` property, which uses theme supported font sizes. We currently support `small`, `medium` (default), `large`, and `inherit`.

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzButton size="small">Small</EzButton>
    <EzButton size="medium">Medium</EzButton>
    <EzButton size="large">Large</EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton size="small" variant="outlined">
      Small
    </EzButton>
    <EzButton size="medium" variant="outlined">
      Medium
    </EzButton>
    <EzButton size="large" variant="outlined">
      Large
    </EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton size="small" variant="text">
      Small
    </EzButton>
    <EzButton size="medium" variant="text">
      Medium
    </EzButton>
    <EzButton size="large" variant="text">
      Large
    </EzButton>
  </EzLayout>

  <EzLayout>
    <EzButton fontSize="small">Small Font</EzButton>
    <EzButton fontSize="medium">Medium Font</EzButton>
    <EzButton fontSize="large">Large Font</EzButton>
    <div style={{fontSize: '20px'}}>
      <EzButton fontSize="inherit">Inherit Font</EzButton>
    </div>
  </EzLayout>
</EzLayout>
```

### Button Icons

You can add an icon to the beginning or the end of a button by passing an `EzIcon` to the optional `startIcon` or `endIcon` property.

Icon sizes will default to the font size of the text. If you need a different icon size, use `size="inherit"` on the `EzIcon` and wrap it in an element with the desired size.

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack">
      <EzLayout>
        <EzButton startIcon={<EzIcon icon={faCoffee} />}>Start Icon</EzButton>
        <EzButton endIcon={<EzIcon icon={faCoffee} />}>End Icon</EzButton>
      </EzLayout>

      <EzLayout>
        <EzButton startIcon={<EzIcon icon={faCoffee} />} variant="outlined">
          Start Icon
        </EzButton>
        <EzButton endIcon={<EzIcon icon={faCoffee} />} variant="outlined">
          End Icon
        </EzButton>
      </EzLayout>

      <EzLayout>
        <EzButton startIcon={<EzIcon icon={faCoffee} />} variant="text">
          Start Icon
        </EzButton>
        <EzButton endIcon={<EzIcon icon={faCoffee} />} variant="text">
          End Icon
        </EzButton>
      </EzLayout>

      <EzLayout>
        <EzButton
          startIcon={
            <div style={{fontSize: '14px', display: 'flex'}}>
              <EzIcon icon={faCoffee} size="inherit" />
            </div>
          }
        >
          Inherited Icon Size
        </EzButton>
      </EzLayout>
    </EzLayout>
  );
};
```

### Disabled and Loading Buttons

Disabled buttons can be used to prevent users from doing an invalid or unavailable action.

In general, you should consider removing options that are not available or not applicable, but in some cases showing a disabled button may be necessary. In these cases, be sure to provide context for why the action is unavailable either with a message, or tooltip.

A button can be made disabled by adding the optional `disabled` prop. Disabled buttons do not respond to user input and therefore will not trigger `onClick` behavior.

A button can also display a loading spinner by adding the optional `loading` prop. A loading button will always be disabled.

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack">
      <EzLayout>
        <EzButton disabled>Filled</EzButton>
        <EzButton disabled startIcon={<EzIcon icon={faCoffee} />}>
          With Icon
        </EzButton>
        <EzButton disabled variant="outlined">
          Outlined
        </EzButton>
        <EzButton disabled variant="text">
          Text
        </EzButton>
      </EzLayout>

      <EzLayout>
        <EzButton loading>Filled</EzButton>
        <EzButton loading startIcon={<EzIcon icon={faCoffee} />}>
          With Icon
        </EzButton>
        <EzButton loading variant="outlined">
          Outlined
        </EzButton>
        <EzButton loading variant="text">
          Text
        </EzButton>
      </EzLayout>
    </EzLayout>
  );
};
```

### Complex Buttons

EzButton can be used with other Recipe components to create more complex buttons.

```jsx
<EzLayout>
  <EzButton color="info">
    <EzLayout layout="split" style={{width: '250px'}}>
      View Cart
      <EzLayout layout="stack">
        <div style={{textAlign: 'right'}}>$13.45</div>

        <div style={{fontSize: '0.8em', fontWeight: 'normal', marginTop: '-20px'}}>
          $13.45/person
        </div>
      </EzLayout>
    </EzLayout>
  </EzButton>

  <EzTooltip message="This button is disabled">
    <span>
      <EzButton disabled>Disabled With Tooltip</EzButton>
    </span>
  </EzTooltip>
</EzLayout>
```

### Legacy Buttons (Deprecated)

To aid users in migrating to Recipe's current version, a temporarily supported legacy implementation for EzButton is available. To use Recipe's deprecated button style, add the `legacy` prop.

<EzAlert use="warning" headline="Legacy buttons are deprecated as of v17 and will be removed in v18."></EzAlert>

```jsx
() => {
  const {faCoffee} = require('@fortawesome/free-solid-svg-icons/faCoffee');

  return (
    <EzLayout layout="stack">
      <EzLayout>
        Primary:
        <EzButton legacy use="primary">
          Create Order
        </EzButton>
      </EzLayout>

      <EzLayout>
        Secondary:
        <EzButton legacy use="secondary">
          Edit
        </EzButton>
      </EzLayout>

      <EzLayout>
        Tertiary:
        <EzButton legacy use="tertiary">
          Save as PDF
        </EzButton>
      </EzLayout>

      <EzLayout>
        Tertiary with icon:
        <EzButton legacy use="tertiary" icon={<EzIcon icon={faCoffee} />}>
          Print Order
        </EzButton>
      </EzLayout>

      <EzLayout>
        Destructive:
        <EzButton legacy use="primary" destructive>
          Confirm Deletion
        </EzButton>
      </EzLayout>

      <EzLayout>
        Disabled:
        <EzButton legacy use="primary" disabled>
          Save Changes
        </EzButton>
      </EzLayout>

      <EzLayout>
        Disabled with tooltip:
        <EzButton legacy use="primary" disabled disabledMessage="Disabled message">
          Submit
        </EzButton>
      </EzLayout>

      <EzLayout>
        Loading:
        <EzButton legacy use="primary" loading>
          Save Changes
        </EzButton>
      </EzLayout>
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the background, text, icon, or border, you can do so using provided class names (`EzButton`, `EzButton-[variant]`, `EzButton-startIcon`, `EzButton-endIcon`, and `EzButton-disabled`).

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/button/) for buttons.

All buttons have an accessible label. By default, the accessible name is computed from any text content inside the button element. However, it can also be provided with `ariaLabel`.

If you need to hide a button from all accessibility APIs, for example to avoid confusion when using a call-to-action button inside an interactive card, add the `ariaHidden` prop to the button.

---

## Data Attributes

EzButton is very explicit about the properties it accepts, which makes providing arbitrary data attributes not possible. Instead, EzButton accept a data prop, allowing a single collection of data attributes to be provided.

```jsx
<EzButton
  data={{
    testid: 'my-test-id',
    trackingid: 'my-tracking-id',
  }}
  // => data-testid="my-test-id" data-trackingid="my-tracking-id"
>
  Button
</EzButton>
```

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'children*',
      types: ['node'],
      description: 'The content that the button wraps.',
    },
    {
      name: 'ariaHidden',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is hidden from accessibility APIs.',
    },
    {
      name: 'ariaLabel',
      types: ['string'],
      description: 'The aria-label of the element.',
    },
    {
      name: 'color',
      types: ['EzThemeColors', 'destructive'],
      defaultValue: 'primary',
      description: 'The color of the component. Supports theme palette properties and colors.'
    },
    {
      name: 'data',
      types: ['object'],
      description: 'The data attributes to be applied to the component.',
    },
    {
      name: 'destructive',
      types: ['boolean'],
      defaultValue: 'false',
      description: '**Deprecated** If true, the color of the button is red.'
    },
    {
      name: 'disabled',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is disabled.'
    },
    {
      name: 'disabledMessage',
      types: ['string'],
      description: '**Deprecated** The tooltip message for a disabled button.'
    },
    {
      name: 'endIcon',
      types: ['element'],
      description: 'End icon element.'
    },
    {
      name: 'fontSize',
      types: ['small', 'medium', 'large', 'inherit'],
      defaultValue: 'medium',
      description: 'The font size of the component.',
    },
    {
      name: 'icon',
      types: ['element'],
      description: '**Deprecated** Icon element.'
    },
    {
      name: 'legacy',
      types: ['boolean'],
      defaultValue: 'false',
      description: '**Deprecated** If true, the component is a legacy button.'
    },
    {
      name: 'loading',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the button displays a spinning loading icon in place of its label.'
    },
    {
      name: 'onClick',
      types: ['func'],
      description: 'Callback fired when the button is clicked.'
    },
    {
      name: 'onKeyDown',
      types: ['func'],
      description: 'Callback fired when the button is focused and an event key is pressed.'
    },
    {
      name: 'size',
      types: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'The size of the component.',
    },
    {name: 'startIcon', types: ['element'], description: 'Start icon element.'},
    {
      name: 'type',
      types: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      description: 'The type of the button.'},
    {
      name: 'use',
      types: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'secondary',
      description: '**Deprecated** The use of the component.',
    },
    {
      name: 'variant',
      types: ['filled', 'outlined', 'text', 'inline'],
      defaultValue: 'filled',
      description: 'The variant of the component.',
    },
  ]}>
  </PropsTable>
```

## Related components

- [EzChip](/components/ez-chip)
- [EzIcon](/components/ez-icon)
- [EzLink](/components/ez-link)
