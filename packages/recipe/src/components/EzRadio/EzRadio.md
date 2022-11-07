---
name: EzRadio
title: Radio
category: Inputs
path: '/components/ez-radio'
tags: ['radio']
---

Radio buttons allow a user to select one option from a set.

---

## Best Practices

- Use radio buttons when the user needs to see all available options.
- If available options can be collapsed, consider using an `EzField` [select list]('/components/ez-field#select-list') which uses less space.
- Radio buttons should not be used to perform commands.
- Options should be structured in a logical order, such as from simplest to most complex, or most common to least common.
- Radio buttons should have the most commonly used option selected by default.

---

## Examples

### Basic Radio Buttons

EzRadio supports `outlined` (default) and `filled` (for darker backgrounds) variants.

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const radioProps = item => ({
    checked: selectedValue === item,
    name: 'basic-radio-button',
    onChange: handleChange,
    value: item,
  });

  return (
    <EzLayout>
      <EzRadio {...radioProps('a')} />

      <div style={{backgroundColor: '#034a34'}}>
        <EzRadio {...radioProps('b')} variant="filled" />
      </div>
    </EzLayout>
  );
};
```

### Radio Button Labels

To add a label to a radio button, use `EzFormControlLabel` and provide the `EzRadio` to its `control` prop along with the `label`.

You can optionally append a set of icons to the label by passing in an array of `EzIcon`s to `labelIcons` in `EzFormControlLabel`.

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const radioProps = item => ({
    checked: selectedValue === item,
    name: 'basic-radio-button',
    onChange: handleChange,
    value: item,
  });

  return (
    <EzLayout layout="stack">
      <div style={{paddingLeft: '16px'}}>
        <EzFormControlLabel control={<EzRadio {...radioProps('a')} />} label="Outlined" />
      </div>

      <div style={{paddingLeft: '16px'}}>
        <EzFormControlLabel
          control={<EzRadio {...radioProps('b')} />}
          label="With Icons"
          labelIcons={[
            <EzIcon icon={Coffee} size="small" />,
            <EzIcon icon={WaterGlass} size="small" />,
            <EzIcon icon={WineGlass} size="small" />,
          ]}
        />
      </div>

      <div style={{backgroundColor: '#034a34', color: 'white', paddingLeft: '16px'}}>
        <EzFormControlLabel
          control={<EzRadio {...radioProps('c')} variant="filled" />}
          label="Filled"
        />
      </div>
    </EzLayout>
  );
};
```

### Radio Colors

EzRadio supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const RadioButton = ({item, color, variant = 'outlined'}) => (
    <span style={{marginRight: '12px'}}>
      <EzRadio
        checked={selectedValue === item}
        color={color}
        name="radio-button-colors"
        onChange={handleChange}
        value={item}
        variant={variant}
      />
    </span>
  );

  return (
    <EzLayout layout="stack">
      <div style={{paddingLeft: '16px'}}>
        <RadioButton item="a" color="primary" />
        <RadioButton item="b" color="warning" />
        <RadioButton item="c" color="info" />
        <RadioButton item="d" color="neutral" />
        <RadioButton item="e" color="common.red100" />
        <RadioButton item="f" color="common.purple100" />
      </div>

      <div style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
        <RadioButton item="a" color="primary" variant="filled" />
        <RadioButton item="b" color="warning" variant="filled" />
        <RadioButton item="c" color="info" variant="filled" />
        <RadioButton item="d" color="neutral" variant="filled" />
        <RadioButton item="e" color="common.red100" variant="filled" />
        <RadioButton item="f" color="common.purple100" variant="filled" />
      </div>
    </EzLayout>
  );
};
```

### Radio Sizes

If you want to specify a size, use the `size` property. We currently support `small`, `medium` (default), and `large`.

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const RadioButton = ({item, size, variant = 'outlined'}) => (
    <span style={{marginRight: '12px'}}>
      <EzRadio
        checked={selectedValue === item}
        name="radio-button-sizes"
        onChange={handleChange}
        size={size}
        value={item}
        variant={variant}
      />
    </span>
  );

  return (
    <EzLayout layout="stack">
      <div style={{paddingLeft: '16px'}}>
        <RadioButton item="a" size="small" />
        <RadioButton item="b" size="medium" />
        <RadioButton item="c" size="large" />
      </div>

      <div style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
        <RadioButton item="a" size="small" variant="filled" />
        <RadioButton item="b" size="medium" variant="filled" />
        <RadioButton item="c" size="large" variant="filled" />
      </div>
    </EzLayout>
  );
};
```

### Radio Group

EzRadio components can be grouped using form controls (see below).

To lay out the buttons horizontally, use the `row` prop on `EzRadioGroup`.

To add helper text to a radio group label, use the optional `helperText` prop on `EzFormControlLabel`.

```jsx
() => {
  return (
    <EzPage>
      <EzLayout layout="stack">
        <EzFormControl>
          <EzFormLabel id="radio-buttons-drinks">Drinks</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-buttons-drinks"
            defaultValue="coffee"
            name="radio-buttons-drinks-group"
          >
            <EzFormControlLabel
              control={<EzRadio />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            <EzFormControlLabel control={<EzRadio />} label="Wine" value="wine" />
            <EzFormControlLabel control={<EzRadio />} label="Water" value="water" />
          </EzRadioGroup>
        </EzFormControl>

        <EzFormControl>
          <EzFormLabel id="radio-buttons-drinks-row">Drinks In A Row</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-buttons-drinks-row"
            defaultValue="coffee"
            name="radio-buttons-drinks-row-group"
            row
          >
            <EzFormControlLabel
              control={<EzRadio />}
              helperText="Caffineated"
              label="Coffee"
              value="coffee"
            />
            <EzFormControlLabel control={<EzRadio />} label="Wine" value="wine" />
            <EzFormControlLabel control={<EzRadio />} label="Water" value="water" />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

You can also control the radio with the `value` and `onChange` props on `EzRadioGroup`.

```jsx
() => {
  const [value, setValue] = useState('coffee');
  const handleChange = event => setValue(event.target.value);

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl>
          <EzFormLabel id="radio-buttons-drinks">Drinks</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-buttons-drinks"
            name="radio-buttons-drinks-group"
            onChange={handleChange}
            value={value}
          >
            <EzFormControlLabel
              control={<EzRadio />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            <EzFormControlLabel control={<EzRadio />} label="Wine" value="wine" />
            <EzFormControlLabel control={<EzRadio />} label="Water" value="water" />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

To provide proper keyboard accessibility when using grouped radio buttons, use `EzRadio` with the following components and their props:

- `EzFormControl` - used to provide context and ensure a consistent state
- `EzFormLabel` - used to provide a label for a group of radio buttons
  - `id` - should match the `ariaLabel` prop of `EzRadioGroup`
- `EzRadioGroup` - used to group radio buttons
  - `ariaLabel` - should match the `id` prop of `EzFormLabel`
  - `defaultValue` - sets the default value if not controlled
  - `name` - used to reference the value of the control
  - `onChange` - if controlled, the callback fired when the radio button is selected
  - `row` - lays out the buttons horizontally
  - `value` - if controlled, the value of the selected radio button
- `EzFormControlLabel` - used to provide a label for a radio button
  - `control` - the required control element (`<EzRadio />`)
  - `disabled` - if `true`, the component is disabled
  - `helperText` - the helper text content
  - `icon` - the icon for the radio button when using a super radio button
  - `label` - the label for the radio button
  - `labelIcons` - an optional array of `EzIcon`s to display after the label
  - `value` - the value of the form control label

### Super Radio Buttons

For larger, more visual radio buttons, you can provide an `icon` (`<EzIcon />`) and a `label` to `EzFormControlLabel`.

- The label for a super radio button should not be more than 2 lines.
- To lay out the buttons horizontally, use the `row` prop on `EzRadioGroup`.
- Supports theme colors by passing a `color` prop to `EzRadio` (defaults to `primary`).

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');

  return (
    <EzFormControl>
      <EzFormLabel id="radio-buttons-drinks">Drinks</EzFormLabel>
      <EzRadioGroup
        ariaLabel="radio-buttons-drinks"
        defaultValue="coffee"
        name="radio-buttons-drinks-group"
        row
      >
        <EzFormControlLabel
          control={<EzRadio />}
          icon={<EzIcon icon={Coffee} />}
          label="Coffee"
          value="coffee"
        />
        <EzFormControlLabel
          control={<EzRadio />}
          icon={<EzIcon icon={WineGlass} />}
          label="Wine"
          value="wine"
        />
        <EzFormControlLabel
          control={<EzRadio />}
          icon={<EzIcon icon={WaterGlass} />}
          label="Water"
          value="water"
        />
      </EzRadioGroup>
    </EzFormControl>
  );
};
```

### Disabled Radio Buttons

A radio button can be made disabled by adding the optional `disabled` prop on either `EzRadio` (if standalone) or `EzFormControlLabel` (if in a group).

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const radioProps = item => ({
    checked: selectedValue === item,
    name: 'radio-button-disabled',
    onChange: handleChange,
    value: item,
  });

  return (
    <EzLayout layout="stack">
      <EzLayout layout="equal">
        <EzLayout layout="stack">
          <div style={{padding: '5px'}}>
            <span style={{marginRight: '12px'}}>
              <EzRadio {...radioProps('a')} disabled />
            </span>

            <span style={{marginRight: '12px'}}>
              <EzRadio {...radioProps('b')} />
            </span>
          </div>

          <div style={{backgroundColor: '#034a34', padding: '5px'}}>
            <span style={{marginRight: '12px'}}>
              <EzRadio {...radioProps('a')} disabled variant="filled" />
            </span>

            <span style={{marginRight: '12px'}}>
              <EzRadio {...radioProps('b')} variant="filled" />
            </span>
          </div>
        </EzLayout>

        <EzFormControl>
          <EzFormLabel id="radio-buttons-drinks">Drinks</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-buttons-drinks"
            defaultValue="coffee"
            name="radio-buttons-drinks-group"
          >
            <EzFormControlLabel control={<EzRadio />} disabled label="Coffee" value="coffee" />
            <EzFormControlLabel control={<EzRadio />} label="Wine" value="wine" />
            <EzFormControlLabel control={<EzRadio />} label="Water" value="water" />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>

      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="super-radio-buttons-drinks">Drinks</EzFormLabel>
          <EzRadioGroup
            ariaLabel="super-radio-buttons-drinks"
            defaultValue="coffee"
            name="super-radio-buttons-drinks-group"
            row
          >
            <EzFormControlLabel
              control={<EzRadio />}
              disabled
              icon={<EzIcon icon={Coffee} />}
              label="Coffee"
              value="coffee"
            />
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={WineGlass} />}
              label="Wine"
              value="wine"
            />
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={WaterGlass} />}
              label="Water"
              value="water"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the radio, form label, form control label, or super form control label, you can do so using provided class names:

- `EzRadio`, `EzRadio-outlined`, `EzRadio-filled`, `EzRadio-checked`, `EzRadioIcon-checked-border`, `EzRadioIcon-checked-dot`, `EzRadio-disabled`, `EzRadio-input`, `EzRadioIcon-checked`, `EzRadioIcon-unchecked`
- `EzFormLabel`
- `EzFormControlLabel`, `EzFormControlLabel-label`, `EzFormControlLabel-helperText`
- `EzSuperFormControlLabel`, `EzSuperFormControlLabel-checked`, `EzSuperFormControlLabel-label`,`EzSuperFormControlLabel-icon`, `EzSuperFormControlLabel-text`

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/) for radio buttons.

All radio button form controls should have corresponding labels using `ariaLabel` (hidden) or `EzFormControlLabel`.

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'ariaLabel',
      types: ['string'],
      defaultValue: 'radio-button',
      description: 'The aria-label of the radio element.',
    },
    {
      name: 'checked',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is checked.',
    },
    {
      name: 'color',
      types: ['EzThemeColors'],
      defaultValue: 'primary',
      description: 'The color of the component. Supports theme palette properties and colors.'
    },
    {
      name: 'disabled',
      types: ['boolean'],
      defaultValue: 'false',
      description: 'If true, the component is disabled.'
    },
    {
      name: 'name',
      types: ['string'],
      description: 'Name attribute of the input element.'
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
