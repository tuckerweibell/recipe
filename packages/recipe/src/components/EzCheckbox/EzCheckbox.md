---
name: EzCheckbox
title: Checkbox
category: Inputs
path: '/components/ez-checkbox'
tags: ['checkbox']
---

Checkboxes allow the user to select one or more items from a set.

---

## Best Practices

- Use checkboxes to turn an option on or off for multiple options appearing in a list.
- If you have a single option, avoid using a checkbox and use [EzToggle](/components/ez-toggle) instead.
- Checkboxes should be clearly labelled, or provided an accessible name.
- Checkboxes should not be used to perform actions.
- Clicking a checkbox should not persist until a separate action button is clicked (ex. form submission).
- Options should be structured in a logical order, such as from simplest to most complex, or most common to least common.

---

## Examples

### Basic Checkboxes

EzCheckbox supports `outlined` (default), `filled` (for darker backgrounds), and `filled-inverse` variants.

To mark the checkbox as checked by default, use the `defaultChecked` prop.

```jsx
<EzLayout>
  <EzCheckbox defaultChecked />

  <div style={{backgroundColor: '#034a34'}}>
    <EzCheckbox defaultChecked variant="filled" />
  </div>

  <div style={{backgroundColor: '#034a34'}}>
    <EzCheckbox defaultChecked variant="filled-inverse" />
  </div>
</EzLayout>
```

### Checkbox Labels

To add a label to a checkbox, use `EzFormControlLabel` and provide the `EzCheckbox` to its `control` prop along with the `label`.

You can optionally append a set of icons to the label by passing in an array of `EzIcon`s to `labelIcons` in `EzFormControlLabel`.

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');

  return (
    <EzLayout layout="stack">
      <EzLayout layout="stack">
        <div style={{paddingLeft: '16px'}}>
          <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Outlined" />
        </div>

        <div style={{paddingLeft: '16px'}}>
          <EzFormControlLabel
            control={<EzCheckbox defaultChecked />}
            label="With Icons"
            labelIcons={[
              <EzIcon icon={Coffee} size="small" />,
              <EzIcon icon={WaterGlass} size="small" />,
              <EzIcon icon={WineGlass} size="small" />,
            ]}
          />
        </div>
      </EzLayout>

      <div style={{backgroundColor: '#034a34', color: 'white', paddingLeft: '16px'}}>
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked variant="filled" />}
          label="Filled"
        />
      </div>

      <div style={{backgroundColor: '#034a34', color: 'white', paddingLeft: '16px'}}>
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked variant="filled-inverse" />}
          label="Filled-Inverse"
        />
      </div>
    </EzLayout>
  );
};
```

### Checkbox Colors

EzCheckbox supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

```jsx
<EzLayout layout="stack">
  <div style={{padding: '0 16px'}}>
    <EzCheckbox defaultChecked color="primary" />
    <EzCheckbox defaultChecked color="warning" />
    <EzCheckbox defaultChecked color="info" />
    <EzCheckbox defaultChecked color="neutral" />
    <EzCheckbox defaultChecked color="common.red100" />
    <EzCheckbox defaultChecked color="common.purple100" />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox defaultChecked color="primary" variant="filled" />
    <EzCheckbox defaultChecked color="warning" variant="filled" />
    <EzCheckbox defaultChecked color="info" variant="filled" />
    <EzCheckbox defaultChecked color="neutral" variant="filled" />
    <EzCheckbox defaultChecked color="common.red100" variant="filled" />
    <EzCheckbox defaultChecked color="common.purple100" variant="filled" />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox defaultChecked color="primary" variant="filled-inverse" />
    <EzCheckbox defaultChecked color="warning" variant="filled-inverse" />
    <EzCheckbox defaultChecked color="info" variant="filled-inverse" />
    <EzCheckbox defaultChecked color="neutral" variant="filled-inverse" />
    <EzCheckbox defaultChecked color="common.red100" variant="filled-inverse" />
    <EzCheckbox defaultChecked color="common.purple100" variant="filled-inverse" />
  </div>
</EzLayout>
```

### Checkbox Sizes

If you want to specify a size, use the `size` property. We currently support `small`, `medium` (default), and `large`.

```jsx
<EzLayout layout="stack">
  <div style={{padding: '0 16px'}}>
    <EzCheckbox defaultChecked size="small" />
    <EzCheckbox defaultChecked size="medium" />
    <EzCheckbox defaultChecked size="large" />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox defaultChecked variant="filled" size="small" />
    <EzCheckbox defaultChecked variant="filled" size="medium" />
    <EzCheckbox defaultChecked variant="filled" size="large" />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox defaultChecked variant="filled-inverse" size="small" />
    <EzCheckbox defaultChecked variant="filled-inverse" size="medium" />
    <EzCheckbox defaultChecked variant="filled-inverse" size="large" />
  </div>
</EzLayout>
```

### Checkbox Group

EzCheckbox components can be grouped using form controls (see below).

To lay out the buttons horizontally, use the `row` prop on `EzFormGroup`.

To add helper text to a checkbox label, use the optional `helperText` prop on `EzFormControlLabel`.

```jsx
<EzPage>
  <EzLayout layout="stack">
    <EzFormControl>
      <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-drinks">
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked />}
          label="Coffee"
          helperText="Caffineated"
        />
        <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Wine" />
        <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Water" />
      </EzFormGroup>
    </EzFormControl>

    <EzFormControl>
      <EzFormLabel id="checkbox-drinks-row">Drinks In A Row</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-drinks-row" row>
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked />}
          helperText="Caffineated"
          label="Coffee"
        />
        <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Wine" />
        <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Water" />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzPage>
```

To provide proper keyboard accessibility when using checkboxes, use `EzCheckbox` with the following components and their props:

- `EzFormControl` - used to provide context and ensure a consistent state
- `EzFormLabel` - used to provide a label for a group of checkboxes
  - `id` - should match the `ariaLabel` prop of `EzFormGroup`
- `EzFormGroup` - used to group checkboxes
  - `ariaLabel` - should match the `id` prop of `EzFormLabel`
  - `row` - lays out the checkboxes horizontally
- `EzFormControlLabel` - used to provide a label for a checkbox
  - `control` - the required control element (`<EzCheckbox />`)
  - `disabled` - if `true`, the component is disabled
  - `helperText` - the helper text content
  - `icon` - the icon for the checkbox when using a super checkbox
  - `label` - the label for the checkbox
  - `labelIcons` - an optional array of `EzIcon`s to display after the label
  - `value` - the value of the form control label

### Disabled Checkboxes

A checkbox can be made disabled by adding the optional `disabled` prop on either `EzCheckbox` (if standalone) or `EzFormControlLabel` (if in a group).

```jsx
<EzLayout layout="stack">
  <div style={{padding: '0 16px'}}>
    <EzCheckbox disabled />
    <EzCheckbox defaultChecked disabled />
    <EzCheckbox defaultChecked />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox disabled variant="filled" />
    <EzCheckbox defaultChecked disabled variant="filled" />
    <EzCheckbox defaultChecked variant="filled" />
  </div>

  <div style={{backgroundColor: '#034a34', padding: '0 16px'}}>
    <EzCheckbox disabled variant="filled-inverse" />
    <EzCheckbox defaultChecked disabled variant="filled-inverse" />
    <EzCheckbox defaultChecked variant="filled-inverse" />
  </div>

  <div style={{padding: '0 22px'}}>
    <EzFormControl>
      <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
      <EzFormControlLabel control={<EzCheckbox />} disabled label="Coffee" />
      <EzFormControlLabel control={<EzCheckbox defaultChecked />} disabled label="Wine" />
      <EzFormControlLabel control={<EzCheckbox defaultChecked />} label="Water" />
    </EzFormControl>
  </div>
</EzLayout>
```

### Legacy Checkboxes (Deprecated)

To use Recipe's deprecated checkbox style, add the `legacy` prop.

<EzAlert use="warning" headline="Legacy checkboxes are deprecated as of v16 and will be removed in v17."></EzAlert>

```jsx
() => {
  const [basicChecked, setBasicChecked] = useState(true);
  const [acknowledgementChecked, setAcknowledgementChecked] = useState(true);

  return (
    <EzLayout layout="stack">
      <EzCheckbox
        legacy
        label="Basic checkbox"
        onChange={() => setBasicChecked(!basicChecked)}
        checked={basicChecked}
      />

      <EzCheckbox legacy label="Disabled checkbox" disabled />

      <EzCheckbox
        legacy
        acknowledgement
        label="I accept the new terms of service"
        terms={
          <span>
            I have read and agree to the{' '}
            <EzLink>
              <a href="/" target="_blank" rel="noreferrer noopener">
                terms of service
              </a>
            </EzLink>{' '}
            and{' '}
            <EzLink>
              <a href="/" target="_blank" rel="noreferrer noopener">
                privacy policy
              </a>
            </EzLink>
            .
          </span>
        }
        onChange={() => setAcknowledgementChecked(!acknowledgementChecked)}
        checked={acknowledgementChecked}
      />
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the checkbox, form label, or form control label, you can do so using provided class names:

- `EzCheckbox`, `EzCheckbox-outlined`, `EzCheckbox-filled`, `EzCheckbox-checked`, `EzCheckbox-unchecked`, `EzCheckbox-icon`, `EzCheckbox-disabled`, `EzCheckbox-input`
- `EzFormLabel`
- `EzFormControlLabel`, `EzFormControlLabel-label`, `EzFormControlLabel-helperText`

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) for checkboxes.

All checkbox form controls should have corresponding labels using `ariaLabel` (hidden) or `EzFormControlLabel`.

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'acknowledgement',
      types: ['boolean'],
      defaultValue: 'false',
      description: '**Deprecated** If true, the legacy checkbox is an acknowlegement.',
    },
    {
      name: 'ariaLabel',
      types: ['string'],
      defaultValue: 'checkbox',
      description: 'The aria-label of the checkbox element.',
    },
    {
      name: 'checked',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is checked.',
    },
    {
      name: 'className',
      types: ['string'],
      description: '**Deprecated** The class name of the component.',
    },
    {
      name: 'color',
      types: ['EzThemeColors'],
      defaultValue: 'primary',
      description: 'The color of the component. Supports theme palette properties and colors.'
    },
    {
      name: 'defaultChecked',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'The default checked state for uncontrolled components.'
    },
    {
      name: 'disabled',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is disabled.'
    },
    {
      name: 'label',
      types: ['string'],
      description: '**Deprecated** The label of the legacy checkbox.'
    },
    {
      name: 'legacy',
      types: ['boolean'],
      defaultValue: 'false',
      description: '**Deprecated** If true, the component is a legacy checkbox.'
    },
    {
      name: 'onChange',
      types: ['func'],
      description: 'Callback fired when the state is changed for controlled components.',
    },
    {
      name: 'size',
      types: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'The size of the component.',
    },
    {
      name: 'terms',
      types: ['string'],
      description: '**Deprecated** The terms of the legacy component.',
    },
    {
      name: 'value',
      types: ['any'],
      description: 'The value of the controlled component.',
    },
    {
      name: 'variant',
      types: ['outlined', 'filled'],
      defaultValue: 'outlined',
      description: 'The variant of the component.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [EzField](/components/ez-field)
- [EzToggle](/components/ez-toggle)
