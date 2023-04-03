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
  <EzCheckbox defaultChecked name="checkbox" />

  {/* Note: inline styles are discouraged and used here only for demo purposes */}
  <EzLayout layout="basic" style={{backgroundColor: '#034a34'}}>
    <EzCheckbox defaultChecked name="filledCheckbox" variant="filled" />
    <EzCheckbox defaultChecked name="filledInverseCheckbox" variant="filled-inverse" />
  </EzLayout>
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
      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="stack" style={{paddingLeft: '16px'}}>
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="outlined" />}
          label="Outlined"
        />

        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="withIcons" />}
          label="With Icons"
          labelIcons={[
            <EzIcon icon={Coffee} size="small" />,
            <EzIcon icon={WaterGlass} size="small" />,
            <EzIcon icon={WineGlass} size="small" />,
          ]}
        />
      </EzLayout>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout
        layout="stack"
        style={{backgroundColor: '#034a34', color: 'white', paddingLeft: '16px'}}
      >
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="filled" variant="filled" />}
          label="Filled"
        />

        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="filledInverse" variant="filled-inverse" />}
          label="Filled-Inverse"
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### Checkbox Colors

EzCheckbox supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

```jsx
<EzLayout layout="stack">
  {/* Note: inline styles are discouraged and used here only for demo purposes */}
  <EzLayout layout="basic" style={{paddingLeft: '16px'}}>
    <EzCheckbox defaultChecked color="primary" name="primary" />
    <EzCheckbox defaultChecked color="warning" name="warning" />
    <EzCheckbox defaultChecked color="info" name="info" />
    <EzCheckbox defaultChecked color="neutral" name="neutral" />
    <EzCheckbox defaultChecked color="common.red100" name="commonRed100" />
    <EzCheckbox defaultChecked color="common.purple100" name="commonPurple100" />
  </EzLayout>

  {/* Note: inline styles are discouraged and used here only for demo purposes */}
  <EzLayout layout="stack" style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
    <EzLayout layout="basic">
      <EzCheckbox color="primary" defaultChecked name="filledPrimary" variant="filled" />
      <EzCheckbox color="warning" defaultChecked name="filledWarning" variant="filled" />
      <EzCheckbox color="info" defaultChecked name="filledInfo" variant="filled" />
      <EzCheckbox color="neutral" defaultChecked name="filledNeutral" variant="filled" />
      <EzCheckbox color="common.red100" defaultChecked name="filledCommonRed100" variant="filled" />
      <EzCheckbox
        color="common.purple100"
        defaultChecked
        name="filledCommonPurple100"
        variant="filled"
      />
    </EzLayout>

    <EzLayout layout="basic">
      <EzCheckbox
        color="primary"
        defaultChecked
        name="filledInversePrimary"
        variant="filled-inverse"
      />
      <EzCheckbox
        color="warning"
        defaultChecked
        name="filledInverseWarning"
        variant="filled-inverse"
      />
      <EzCheckbox color="info" defaultChecked name="filledInverseInfo" variant="filled-inverse" />
      <EzCheckbox
        color="neutral"
        defaultChecked
        name="filledInverseNeutral"
        variant="filled-inverse"
      />
      <EzCheckbox
        color="common.red100"
        defaultChecked
        name="filledInverseCommonRed100"
        variant="filled-inverse"
      />
      <EzCheckbox
        color="common.purple100"
        defaultChecked
        name="filledInverseCommonPurple100"
        variant="filled-inverse"
      />
    </EzLayout>
  </EzLayout>
</EzLayout>
```

### Checkbox Sizes

If you want to specify a size, use the `size` property. We currently support `small`, `medium` (default), and `large`.

```jsx
<EzLayout layout="stack">
  {/* Note: inline styles are discouraged and used here only for demo purposes */}
  <EzLayout layout="basic" style={{paddingLeft: '16px'}}>
    <EzCheckbox defaultChecked name="small" size="small" />
    <EzCheckbox defaultChecked name="medium" size="medium" />
    <EzCheckbox defaultChecked name="large" size="large" />
  </EzLayout>

  {/* Note: inline styles are discouraged and used here only for demo purposes */}
  <EzLayout layout="stack" style={{backgroundColor: '#034a34', paddingLeft: '16px'}}>
    <EzLayout layout="basic">
      <EzCheckbox defaultChecked name="filledSmall" size="small" variant="filled" />
      <EzCheckbox defaultChecked name="filledMedium" size="medium" variant="filled" />
      <EzCheckbox defaultChecked name="filledLarge" size="large" variant="filled" />
    </EzLayout>

    <EzLayout layout="basic">
      <EzCheckbox defaultChecked name="filledInverseSmall" size="small" variant="filled-inverse" />
      <EzCheckbox
        defaultChecked
        name="filledInverseMedium"
        size="medium"
        variant="filled-inverse"
      />
      <EzCheckbox defaultChecked name="filledInverseLarge" size="large" variant="filled-inverse" />
    </EzLayout>
  </EzLayout>
</EzLayout>
```

### Checkbox Indeterminate State

A checkbox input has only one of two states: checked or unchecked. However, visually, a checkbox can also have an indeterminate state by using the `indeterminate` property on `EzCheckbox`.

```jsx
() => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = event => setChecked([event.target.checked, event.target.checked]);
  const handleChange2 = event => setChecked([event.target.checked, checked[1]]);
  const handleChange3 = event => setChecked([checked[0], event.target.checked]);

  return (
    <EzLayout layout="stack">
      <EzFormControlLabel
        label="Parent"
        control={
          <EzCheckbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            name="parent"
            onChange={handleChange1}
          />
        }
      />

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout layout="stack" style={{marginLeft: '32px'}}>
        <EzFormControlLabel
          label="Child 1"
          control={<EzCheckbox checked={checked[0]} name="child1" onChange={handleChange2} />}
        />

        <EzFormControlLabel
          label="Child 2"
          control={<EzCheckbox checked={checked[1]} name="child2" onChange={handleChange3} />}
        />
      </EzLayout>
    </EzLayout>
  );
};
```

### Checkbox Group

EzCheckbox components can be grouped using form controls (see below).

- To define the gap between checkbox labels, use the optional `gap` prop of type `number` on `EzFormGroup`.
  - Recipe uses an `8px` scaling factor, so a gap of `x` (of type `number`) is equal to `x * 8px`.
  - The default gap for columns is `0` and rows is `2`.
- To lay out the buttons horizontally, use the optional `row` prop on `EzFormGroup`.
- To add helper text to a checkbox label, use the optional `helperText` prop on `EzFormControlLabel`.

```jsx
<EzPage>
  <EzLayout layout="stack">
    <EzFormControl>
      <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-drinks">
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="coffee" />}
          helperText="Caffineated"
          label="Coffee"
          value="coffee"
        />
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="water" />}
          label="Water"
          value="water"
        />
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="wine" />}
          label="Wine"
          value="wine"
        />
      </EzFormGroup>
    </EzFormControl>

    <EzFormControl>
      <EzFormLabel id="checkbox-drinks-row">Drinks In A Row</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-drinks-row" row>
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="rowCoffee" />}
          helperText="Caffineated"
          label="Coffee"
          value="coffee"
        />
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="rowWater" />}
          label="Water"
          value="water"
        />
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="rowWine" />}
          label="Wine"
          value="wine"
        />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzPage>
```

### Checkbox Controlled Group

You can also control the checkbox with the `checked` prop on `EzFormControlLabel` and `onChange` on `EzCheckbox`.

```jsx
() => {
  const [state, setState] = useState({
    coffee: true,
    water: false,
    wine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl>
          <EzFormLabel id="checkbox-buttons-drinks">Drinks</EzFormLabel>
          <EzFormGroup ariaLabel="checkbox-buttons-drinks">
            <EzFormControlLabel
              checked={state.coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            <EzFormControlLabel
              checked={state.water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              label="Water"
              value="water"
            />
            <EzFormControlLabel
              checked={state.wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

### Checkbox Group with Conditional Content

Additional content can also be displayed depending on the selection.

```jsx
() => {
  const [state, setState] = useState({
    coffee: true,
    water: false,
    wine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl>
          <EzFormLabel id="checkbox-buttons-drinks">Drinks</EzFormLabel>
          <EzFormGroup ariaLabel="checkbox-buttons-drinks">
            <EzFormControlLabel
              checked={state.coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            {state.coffee && <EzField type="textarea" placeholder="Coffee details..." />}
            <EzFormControlLabel
              checked={state.water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              label="Water"
              value="water"
            />
            {state.water && <EzField type="textarea" placeholder="Wine details..." />}
            <EzFormControlLabel
              checked={state.wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              label="Wine"
              value="wine"
            />
            {state.wine && <EzField type="textarea" placeholder="Water details..." />}
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

### Checkbox Group with Error State

To display an error state in a checkbox group, pass an `error` boolean property to `EzFormControl`. Be sure to include an error alert or message to indicate what the error is.

```jsx
() => {
  const [state, setState] = useState({
    coffee: false,
    water: false,
    wine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {coffee, water, wine} = state;
  const error = [coffee, water, wine].filter(v => v).length < 1;

  return (
    <EzPage>
      <EzLayout layout="equal">
        <EzFormControl error={error}>
          <EzFormLabel id="checkbox-buttons-drinks">
            <EzLayout layout="stack">
              Drinks
              {error && (
                <EzAlert headline="Please choose one or more options" use="error" />
              )}
            </EzLayout>
          </EzFormLabel>
          <EzFormGroup ariaLabel="checkbox-buttons-drinks">
            <EzFormControlLabel
              checked={coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              label="Coffee"
              helperText="Caffineated"
              value="coffee"
            />
            <EzFormControlLabel
              checked={water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              label="Water"
              value="water"
            />
            <EzFormControlLabel
              checked={wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzPage>
  );
};
```

To provide proper keyboard accessibility when using checkboxes, use `EzCheckbox` with the following components and their props:

- `EzFormControl` - used to provide context and ensure a consistent state
  - `error` - if `true`, the label is displayed in an error state 
- `EzFormLabel` - used to provide a label for a group of checkboxes
  - `id` - should match the `ariaLabel` prop of `EzFormGroup`
- `EzFormGroup` - used to group checkboxes
  - `ariaLabel` - should match the `id` prop of `EzFormLabel`
  - `gap` - the gap between form labels (defaults to 0 for columns and 2 for rows)
  - `row` - lays out the checkboxes horizontally
  - `labelWidth` - the defined width of each super checkbox button in a form group
  - `theme` - a defined theme object with optional keys `color` and `variant` for super checkbox buttons
- `EzFormControlLabel` - used to provide a label for a checkbox
  - `control` - the required control element (`<EzCheckbox />`)
  - `disabled` - if `true`, the component is disabled
  - `helperText` - the helper text content
  - `icon` - the icon for the checkbox when using a super checkbox
  - `label` - the label for the checkbox
  - `labelIcons` - an optional array of `EzIcon`s to display after the label
  - `value` - the value of the form control label

### Super Checkbox Buttons

For larger, more visual checkbox buttons, provide an `icon` (`<EzIcon />`) along with an optional `label` to `EzFormControlLabel`.

- To define a set pixel width for the buttons, pass a `labelWidth` of type `number` to `EzFormGroup`. Labels will wrap if needed, but should not be more than 2 lines.
- To define a theme for each button in a group, pass a `theme` property to `EzFormGroup` (see example below).
  - `color` accepts either a color theme property (ex. `color: 'primary'`), or a custom defined values object
  - `variant` accepts either `filled` (default), or `outlined` (`filled-inverse` is not supported - use custom defined values)
- Super checkbox buttons must be controlled, so be sure to pass `checked` and `value` properties to `EzFormControlLabel` as well as `onChange` to `EzCheckbox`.

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');
  const [state, setState] = useState({
    noLabelCoffee: true,
    noLabelWater: false,
    noLabelWine: false,
    noLabelOutlinedCoffee: true,
    noLabelOutlinedWater: false,
    noLabelOutlinedWine: false,
    labelCoffee: true,
    labelWater: false,
    labelWine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzLayout layout="tile">
      <EzPage>
        <EzFormControl>
          <EzFormGroup ariaLabel="super-checkbox-buttons-no-label" row>
            <EzFormControlLabel
              checked={state.noLabelCoffee}
              control={<EzCheckbox name="noLabelCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="large" />}
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.noLabelWater}
              control={<EzCheckbox name="noLabelWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="large" />}
              value="water"
            />

            <EzFormControlLabel
              checked={state.noLabelWine}
              control={<EzCheckbox name="noLabelWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="large" />}
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>

      <EzPage>
        <EzFormControl>
          <EzFormGroup
            ariaLabel="super-checkbox-buttons-no-label-outlined"
            row
            theme={{
              color: 'info',
              variant: 'outlined',
            }}
          >
            <EzFormControlLabel
              checked={state.noLabelOutlinedCoffee}
              control={<EzCheckbox name="noLabelOutlinedCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="large" />}
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.noLabelOutlinedWater}
              control={<EzCheckbox name="noLabelOutlinedWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="large" />}
              value="water"
            />

            <EzFormControlLabel
              checked={state.noLabelOutlinedWine}
              control={<EzCheckbox name="noLabelOutlinedWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="large" />}
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>

      {/* Note: inline styles are discouraged and used here only for demo purposes */}
      <EzLayout style={{backgroundColor: '#034A34', padding: '20px'}}>
        <EzFormControl>
          <EzFormGroup
            ariaLabel="super-checkbox-buttons-label"
            labelWidth={120}
            row
            theme={{
              color: {
                selected: {
                  backgroundColor: 'common.yellow100',
                  borderColor: 'common.yellow100',
                  textColor: 'common.primary110',
                },
                unselected: {
                  backgroundColor: 'common.green105',
                  borderColor: 'common.green105',
                  textColor: 'common.white',
                },
              },
            }}
          >
            <EzFormControlLabel
              checked={state.labelCoffee}
              control={<EzCheckbox name="labelCoffee" onChange={handleChange} />}
              icon={<EzIcon icon={Coffee} size="xlarge" />}
              label="Coffee"
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.labelWater}
              control={<EzCheckbox name="labelWater" onChange={handleChange} />}
              icon={<EzIcon icon={WaterGlass} size="xlarge" />}
              label="Water"
              value="water"
            />

            <EzFormControlLabel
              checked={state.labelWine}
              control={<EzCheckbox name="labelWine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="xlarge" />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```

### Disabled Checkboxes

A checkbox can be made disabled by adding the optional `disabled` prop on either `EzCheckbox` (if standalone) or `EzFormControlLabel` (if in a group).

```jsx
() => {
  const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');
  const [state, setState] = useState({
    coffee: true,
    water: false,
    wine: false,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <EzLayout layout="stack">
      <EzLayout layout="equal">
        <EzLayout layout="stack">
          <EzLayout layout="basic">
            <EzCheckbox disabled name="disabledA" />
            <EzCheckbox defaultChecked disabled name="disabledB" />
            <EzCheckbox defaultChecked name="enabled" />
          </EzLayout>

          {/* Note: inline styles are discouraged and used here only for demo purposes */}
          <EzLayout layout="stack" style={{backgroundColor: '#034a34'}}>
            <EzLayout layout="basic">
              <EzCheckbox disabled name="filledDisabledA" variant="filled" />
              <EzCheckbox defaultChecked disabled name="filledDisabledB" variant="filled" />
              <EzCheckbox defaultChecked name="filledEnabled" variant="filled" />
            </EzLayout>

            <EzLayout layout="basic">
              <EzCheckbox disabled name="filledInverseDisabledA" variant="filled-inverse" />
              <EzCheckbox
                defaultChecked
                disabled
                name="filledInverseDisabledB"
                variant="filled-inverse"
              />
              <EzCheckbox defaultChecked name="filledInverseEnabled" variant="filled-inverse" />
            </EzLayout>
          </EzLayout>
        </EzLayout>

        <EzPage>
          <EzFormControl>
            <EzFormLabel id="checkbox-drinks">Drinks</EzFormLabel>
            <EzFormControlLabel
              control={<EzCheckbox name="coffeeDisabled" />}
              disabled
              label="Coffee"
            />
            <EzFormControlLabel
              control={<EzCheckbox defaultChecked name="waterDisabled" />}
              disabled
              label="Water"
            />
            <EzFormControlLabel
              control={<EzCheckbox defaultChecked name="wineEnabled" />}
              label="Wine"
            />
          </EzFormControl>
        </EzPage>
      </EzLayout>

      <EzPage>
        <EzFormControl>
          <EzFormGroup ariaLabel="super-checkbox-buttons" labelWidth={120} row>
            <EzFormControlLabel
              checked={state.coffee}
              control={<EzCheckbox name="coffee" onChange={handleChange} />}
              disabled
              icon={<EzIcon icon={Coffee} size="xlarge" />}
              label="Coffee"
              value="coffee"
            />

            <EzFormControlLabel
              checked={state.water}
              control={<EzCheckbox name="water" onChange={handleChange} />}
              disabled
              icon={<EzIcon icon={WaterGlass} size="xlarge" />}
              label="Water"
              value="water"
            />

            <EzFormControlLabel
              checked={state.wine}
              control={<EzCheckbox name="wine" onChange={handleChange} />}
              icon={<EzIcon icon={WineGlass} size="xlarge" />}
              label="Wine"
              value="wine"
            />
          </EzFormGroup>
        </EzFormControl>
      </EzPage>
    </EzLayout>
  );
};
```

---

## Custom Styles

Supported styles should be used, but if you need to overwrite styles for the checkbox, form label, or form control label, you can do so using provided class names:

- `EzCheckbox`, `EzCheckbox-outlined`, `EzCheckbox-filled`, `EzCheckbox-filled-inverse`, `EzCheckbox-checked`, `EzCheckbox-unchecked`, `EzCheckbox-indeterminate`, `EzCheckbox-icon`, `EzCheckbox-disabled`, `EzCheckbox-input`
- `EzFormGroup`
- `EzFormLabel`
- `EzFormControlLabel`, `EzFormControlLabel-label`, `EzFormControlLabel-helperText`
- `EzSuperFormControlLabel`, `EzSuperFormControlLabel-checkbox`, `EzSuperFormControlLabel-checked`, `EzSuperFormControlLabel-label`,`EzSuperFormControlLabel-icon`, `EzSuperFormControlLabel-text`

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) for checkboxes.

All checkbox form controls should have corresponding labels using `ariaLabel` (hidden) or `EzFormControlLabel`.

Checkboxes should also have a `name` property, which is used to set or return the value of the named attribute of the checkbox field.

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
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
      name: 'name',
      types: ['string'],
      description: 'The name of the checkbox input.',
    },
    {
      name: 'onBlur',
      types: ['func'],
      description: 'Callback fired when the state is blurred for controlled components.',
    },
    {
      name: 'onChange',
      types: ['func'],
      description: 'Callback fired when the state is changed for controlled components.',
    },
    {
      name: 'onFocus',
      types: ['func'],
      description: 'Callback fired when the state is focused for controlled components.',
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
      types: ['outlined', 'filled', 'filled-inverse'],
      defaultValue: 'outlined',
      description: 'The variant of the component.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [EzField](/components/ez-field)
- [EzRadio](/components/ez-radio)
- [EzToggle](/components/ez-toggle)
