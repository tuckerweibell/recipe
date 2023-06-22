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
  const [selectedOutlined, setSelectedOutlined] = useState('a');
  const [selectedFilled, setSelectedFilled] = useState('a');
  const handleChangeOutlined = event => setSelectedOutlined(event.target.value);
  const handleChangeFilled = event => setSelectedFilled(event.target.value);

  return (
    <EzLayout layout="stack">
      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout>
        <span style={{marginLeft: '16px', width: '60px'}}>Outlined:</span>
        <EzRadio
          checked={selectedOutlined === 'a'}
          name="outlined-radio"
          onChange={handleChangeOutlined}
          value="a"
        />
        <EzRadio
          checked={selectedOutlined === 'b'}
          name="outlined-radio"
          onChange={handleChangeOutlined}
          value="b"
        />
      </EzLayout>

      <EzLayout layout="basic" style={{backgroundColor: '#034a34', color: 'white'}}>
        <span style={{marginLeft: '16px', width: '60px'}}>Filled:</span>
        <EzRadio
          checked={selectedFilled === 'a'}
          name="filled-radio"
          variant="filled"
          onChange={handleChangeFilled}
          value="a"
        />
        <EzRadio
          checked={selectedFilled === 'b'}
          name="filled-radio"
          variant="filled"
          onChange={handleChangeFilled}
          value="b"
        />
      </EzLayout>
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
      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="stack" style={{paddingLeft: '16px'}}>
        <EzFormControlLabel control={<EzRadio {...radioProps('a')} />} label="Outlined" />

        <EzFormControlLabel
          control={<EzRadio {...radioProps('b')} />}
          label="Outlined with icons"
          labelIcons={[
            <EzIcon icon={Coffee} size="small" />,
            <EzIcon icon={WaterGlass} size="small" />,
            <EzIcon icon={WineGlass} size="small" />,
          ]}
        />
      </EzLayout>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout
        layout="basic"
        style={{backgroundColor: '#034a34', color: 'white', paddingLeft: '16px'}}
      >
        <EzFormControlLabel
          control={<EzRadio {...radioProps('c')} variant="filled" />}
          label="Filled"
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### Radio Colors

EzRadio supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

<EzAlert headline="Note" tagline="Only a select handful of available colors are shown below. All theme properties and colors are supported."></EzAlert>

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = event => setSelectedValue(event.target.value);
  const radioProps = item => ({
    checked: selectedValue === item,
    name: 'radio-button-colors',
    onChange: handleChange,
    value: item,
  });

  return (
    <EzLayout layout="stack">
      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="basic" style={{paddingLeft: '16px'}}>
        <EzRadio color="primary" {...radioProps('a')} />
        <EzRadio color="info" {...radioProps('b')} />
        <EzRadio color="neutral" {...radioProps('c')} />
        <EzRadio color="common.purple100" {...radioProps('d')} />
      </EzLayout>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="basic" style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
        <EzRadio color="primary" variant="filled" {...radioProps('a')} />
        <EzRadio color="info" variant="filled" {...radioProps('b')} />
        <EzRadio color="neutral" variant="filled" {...radioProps('c')} />
        <EzRadio color="common.purple100" variant="filled" {...radioProps('d')} />
      </EzLayout>
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
  const radioProps = item => ({
    checked: selectedValue === item,
    name: 'radio-button-sizes',
    onChange: handleChange,
    value: item,
  });

  return (
    <EzLayout layout="stack">
      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="basic" style={{paddingLeft: '16px'}}>
        <EzRadio size="small" {...radioProps('a')} />
        <EzRadio size="medium" {...radioProps('b')} />
        <EzRadio size="large" {...radioProps('c')} />
      </EzLayout>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="basic" style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
        <EzRadio size="small" variant="filled" {...radioProps('a')} />
        <EzRadio size="medium" variant="filled" {...radioProps('b')} />
        <EzRadio size="large" variant="filled" {...radioProps('c')} />
      </EzLayout>
    </EzLayout>
  );
};
```

### Radio Group

EzRadio components can be grouped using form controls (see below).

- To define the gap between radio labels, use the optional `gap` prop of type `number` on `EzRadioGroup`.
  - Recipe uses an `8px` scaling factor, so a gap of `x` (of type `number`) is equal to `x * 8px`.
  - The default gap for columns is `0` and rows is `2`.
- To lay out the buttons horizontally, use the optional `row` prop on `EzRadioGroup`.
- To add helper text to a radio label, use the optional `helperText` prop on `EzFormControlLabel`.

```jsx
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
        gap={3}
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
```

### Radio Controlled Group

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

### Radio Group with Conditional Content

Additional content can also be displayed depending on the selection.

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
            {value === 'coffee' && <EzField type="textarea" placeholder="Coffee details..." />}
            <EzFormControlLabel control={<EzRadio />} label="Wine" value="wine" />
            {value === 'wine' && <EzField type="textarea" placeholder="Wine details..." />}
            <EzFormControlLabel control={<EzRadio />} label="Water" value="water" />
            {value === 'water' && <EzField type="textarea" placeholder="Water details..." />}
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

### Radio Group with Error State

To display an error state in a checkbox group, pass an `error` boolean property to `EzFormControl`. Be sure to include an error alert or message to indicate what the error is.

```jsx
() => {
  const [value, setValue] = useState('coffee');
  const handleChange = event => setValue(event.target.value);
  const unavailableItems = ['coffee'];
  const error = unavailableItems.includes(value);

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl error>
          <EzFormLabel id="radio-buttons-drinks">
            <EzLayout layout="stack">
              Drinks
              {error && (
                <EzAlert
                  headline={`${value} is not available, please make another selection`}
                  use="error"
                />
              )}
            </EzLayout>
          </EzFormLabel>
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
  - `error` - if `true`, the label is displayed in an error state
  - `fullWidth` - if `true`, the component will take up the full width of its container
- `EzFormLabel` - used to provide a label for a group of radio buttons
  - `id` - should match the `ariaLabel` prop of `EzRadioGroup`
- `EzRadioGroup` - used to group radio buttons
  - `ariaLabel` - should match the `id` prop of `EzFormLabel`
  - `defaultValue` - sets the default value if not controlled
  - `gap` - the gap between radio labels (defaults to 0 for columns and 2 for rows)
  - `labelWidth` - the defined width of each super radio button in a radio group
  - `name` - used to reference the value of the control
  - `onChange` - if controlled, the callback fired when the radio button is selected
  - `row` - lays out the buttons horizontally
  - `theme` - a defined theme object with optional keys `color` and `variant` for super radio buttons
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

For larger, more visual radio buttons, provide an `icon` (`<EzIcon />`) along with an optional `label` to `EzFormControlLabel`.

- To define a set pixel width for the buttons, pass a `labelWidth` of type `number` to `EzRadioGroup`. Labels will wrap if needed, but should not be more than 2 lines.
- To define a theme for each button in a group, pass a `theme` property to `EzRadioGroup`.
  - `color` accepts either a color theme property (ex. `color: 'primary'`), or a custom defined values object (see example below)
  - `variant` accepts either `filled` (default) or `outlined`

```jsx
() => {
  const {Coffee, ThumbsDown, ThumbsUp, WaterGlass, WineGlass} = require('@ezcater/icons');

  return (
    <EzLayout layout="tile">
      <EzPage>
        <EzFormControl>
          <EzRadioGroup ariaLabel="radio-buttons-thumbs" defaultValue="thumbs-up" row>
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={ThumbsUp} size="large" />}
              value="thumbs-up"
            />

            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={ThumbsDown} size="large" />}
              value="thumbs-down"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzPage>

      <EzPage>
        <EzFormControl>
          <EzRadioGroup
            ariaLabel="radio-buttons-thumbs-outlined"
            defaultValue="thumbs-up"
            row
            theme={{
              color: 'info',
              variant: 'outlined',
            }}
          >
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={ThumbsUp} size="large" />}
              value="thumbs-up"
            />

            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={ThumbsDown} size="large" />}
              value="thumbs-down"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzPage>

      <EzPage>
        {/* Note: inline styles are discouraged and used here only for demo purposes */}
        <EzLayout layout="basic" style={{backgroundColor: '#034A34', padding: '20px'}}>
          <EzFormControl>
            <EzRadioGroup
              ariaLabel="super-radio-buttons-drinks"
              defaultValue="coffee"
              labelWidth={120}
              name="super-radio-buttons-drinks-group"
              row
              theme={{
                color: {
                  selected: {
                    backgroundColor: 'common.yellow100',
                    borderColor: 'common.yellow100',
                    iconColor: 'common.primary110',
                    textColor: 'common.primary110',
                  },
                  unselected: {
                    backgroundColor: 'common.green105',
                    borderColor: 'common.green105',
                    iconColor: 'common.white',
                    textColor: 'common.white',
                  },
                  hover: {
                    backgroundColor: 'common.yellow110',
                    borderColor: 'common.white',
                    iconColor: 'common.black',
                    textColor: 'common.green105',
                  },
                },
              }}
            >
              <EzFormControlLabel
                control={<EzRadio />}
                icon={<EzIcon icon={Coffee} size="xlarge" />}
                label="Coffee"
                value="coffee"
              />

              <EzFormControlLabel
                control={<EzRadio />}
                icon={<EzIcon icon={WineGlass} size="xlarge" />}
                label="Wine"
                value="wine"
              />

              <EzFormControlLabel
                control={<EzRadio />}
                icon={<EzIcon icon={WaterGlass} size="xlarge" />}
                label="Water"
                value="water"
              />
            </EzRadioGroup>
          </EzFormControl>
        </EzLayout>
      </EzPage>
    </EzLayout>
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
    <EzLayout layout="tile">
      <EzPage>
        <EzLayout>
          <EzRadio {...radioProps('a')} disabled />
          <EzRadio {...radioProps('b')} />
        </EzLayout>

        {/* Note: inline styles are discouraged and used here only for demo purposes */}
        <EzLayout style={{backgroundColor: '#034a34'}}>
          <EzRadio {...radioProps('a')} disabled variant="filled" />
          <EzRadio {...radioProps('b')} variant="filled" />
        </EzLayout>
      </EzPage>

      <EzPage>
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
      </EzPage>

      <EzPage>
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
              icon={<EzIcon icon={Coffee} size="xlarge" />}
              label="Coffee"
              value="coffee"
            />
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={WineGlass} size="xlarge" />}
              label="Wine"
              value="wine"
            />
            <EzFormControlLabel
              control={<EzRadio />}
              icon={<EzIcon icon={WaterGlass} size="xlarge" />}
              label="Water"
              value="water"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzPage>
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the radio, form label, form control label, or super form control label, you can do so using provided class names:

- `EzRadio`, `EzRadio-outlined`, `EzRadio-filled`, `EzRadio-checked`, `EzRadioIcon-checked`, `EzRadioIcon-checked-dot`, `EzRadio-disabled`, `EzRadio-input`, `EzRadioIcon-checked`, `EzRadioIcon-unchecked`
- `EzRadioGroup`
- `EzFormLabel`
- `EzFormControlLabel`, `EzFormControlLabel-label`, `EzFormControlLabel-helperText`
- `EzSuperFormControlLabel`, `EzSuperFormControlLabel-radio`, `EzSuperFormControlLabel-checked`, `EzSuperFormControlLabel-label`, `EzSuperFormControlLabel-icon`, `EzSuperFormControlLabel-text`

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/) for radio buttons.

All radio button form controls should have corresponding labels using `ariaLabel` (hidden) or `EzFormControlLabel`.

If a label isn't used (for example when using an icon-only super radio button), be sure to add an `ariaLabel` directly to `EzRadio`.

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
- [EzCheckbox](/components/ez-checkbox)
