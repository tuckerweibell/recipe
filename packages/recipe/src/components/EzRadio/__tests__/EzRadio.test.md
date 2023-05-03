### EzRadio Variants Unchecked

```jsx
<EzLayout>
  <EzRadio />
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzRadio variant="filled" />
  </EzLayout>
</EzLayout>
```

### EzRadio Variants Checked

```jsx
<EzLayout>
  <EzRadio checked />
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzRadio checked variant="filled" />
  </EzLayout>
</EzLayout>
```

### EzRadio Colors Unchecked

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzRadio color="primary" />
    <EzRadio color="secondary" />
    <EzRadio color="error" />
    <EzRadio color="warning" />
    <EzRadio color="info" />
    <EzRadio color="success" />
    <EzRadio color="alert" />
    <EzRadio color="neutral" />
    <EzRadio color="common.red100" />
    <EzRadio color="common.black" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzRadio color="primary" variant="filled" />
    <EzRadio color="secondary" variant="filled" />
    <EzRadio color="error" variant="filled" />
    <EzRadio color="warning" variant="filled" />
    <EzRadio color="info" variant="filled" />
    <EzRadio color="success" variant="filled" />
    <EzRadio color="alert" variant="filled" />
    <EzRadio color="neutral" variant="filled" />
    <EzRadio color="common.red100" variant="filled" />
    <EzRadio color="common.black" variant="filled" />
  </EzLayout>
</EzLayout>
```

### EzRadio Colors Checked

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzRadio checked color="primary" />
    <EzRadio checked color="secondary" />
    <EzRadio checked color="error" />
    <EzRadio checked color="warning" />
    <EzRadio checked color="info" />
    <EzRadio checked color="success" />
    <EzRadio checked color="alert" />
    <EzRadio checked color="neutral" />
    <EzRadio checked color="common.red100" />
    <EzRadio checked color="common.black" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzRadio checked color="primary" variant="filled" />
    <EzRadio checked color="secondary" variant="filled" />
    <EzRadio checked color="error" variant="filled" />
    <EzRadio checked color="warning" variant="filled" />
    <EzRadio checked color="info" variant="filled" />
    <EzRadio checked color="success" variant="filled" />
    <EzRadio checked color="alert" variant="filled" />
    <EzRadio checked color="neutral" variant="filled" />
    <EzRadio checked color="common.red100" variant="filled" />
    <EzRadio checked color="common.black" variant="filled" />
  </EzLayout>
</EzLayout>
```

### EzRadio Groups Unchecked with Colors

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzLayout layout="equal">
      <EzFormControl>
        <EzFormLabel id="radio-button-groups-unchecked-colors">Numbers</EzFormLabel>
        <EzRadioGroup
          ariaLabel="radio-button-groups-unchecked-colors"
          name="radio-button-groups-unchecked-colors"
          onChange={handleChange}
          value={selectedValue}
        >
          <EzFormControlLabel
            control={<EzRadio color="primary" />}
            label="one"
            value="outlined-one"
          />
          <EzFormControlLabel
            control={<EzRadio color="secondary" />}
            label="two"
            value="outlined-two"
          />
          <EzFormControlLabel
            control={<EzRadio color="error" />}
            label="three"
            value="outlined-three"
          />
          <EzFormControlLabel
            control={<EzRadio color="warning" />}
            label="four"
            value="outlined-four"
          />
          <EzFormControlLabel
            control={<EzRadio color="info" />}
            label="five"
            value="outlined-five"
          />
          <EzFormControlLabel
            control={<EzRadio color="success" />}
            label="six"
            value="outlined-six"
          />
          <EzFormControlLabel
            control={<EzRadio color="alert" />}
            label="seven"
            value="outlined-seven"
          />
          <EzFormControlLabel
            control={<EzRadio color="neutral" />}
            label="eight"
            value="outlined-eight"
          />
        </EzRadioGroup>
      </EzFormControl>

      <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}>
        <EzFormControl>
          <EzFormLabel id="radio-button-groups-unchecked-colors">Numbers</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-button-groups-unchecked-colors"
            name="radio-button-groups-unchecked-colors"
            onChange={handleChange}
            value={selectedValue}
          >
            <EzFormControlLabel
              control={<EzRadio color="primary" variant="filled" />}
              label="one"
              value="filled-one"
            />
            <EzFormControlLabel
              control={<EzRadio color="secondary" variant="filled" />}
              label="two"
              value="filled-two"
            />
            <EzFormControlLabel
              control={<EzRadio color="error" variant="filled" />}
              label="three"
              value="filled-three"
            />
            <EzFormControlLabel
              control={<EzRadio color="warning" variant="filled" />}
              label="four"
              value="filled-four"
            />
            <EzFormControlLabel
              control={<EzRadio color="info" variant="filled" />}
              label="five"
              value="filled-five"
            />
            <EzFormControlLabel
              control={<EzRadio color="success" variant="filled" />}
              label="six"
              value="filled-six"
            />
            <EzFormControlLabel
              control={<EzRadio color="alert" variant="filled" />}
              label="seven"
              value="filled-seven"
            />
            <EzFormControlLabel
              control={<EzRadio color="neutral" variant="filled" />}
              label="eight"
              value="filled-eight"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```

### EzRadio Groups Checked with Colors

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzLayout layout="equal">
      <EzFormControl>
        <EzFormLabel id="radio-button-groups-checked-colors">Numbers</EzFormLabel>
        <EzRadioGroup
          ariaLabel="radio-button-groups-checked-colors"
          name="radio-button-groups-checked-colors"
          onChange={handleChange}
          value={selectedValue}
        >
          <EzFormControlLabel
            control={<EzRadio checked color="primary" />}
            label="one"
            value="outlined-one"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="secondary" />}
            label="two"
            value="outlined-two"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="error" />}
            label="three"
            value="outlined-three"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="warning" />}
            label="four"
            value="outlined-four"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="info" />}
            label="five"
            value="outlined-five"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="success" />}
            label="six"
            value="outlined-six"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="alert" />}
            label="seven"
            value="outlined-seven"
          />
          <EzFormControlLabel
            control={<EzRadio checked color="neutral" />}
            label="eight"
            value="outlined-eight"
          />
        </EzRadioGroup>
      </EzFormControl>

      <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}>
        <EzFormControl>
          <EzFormLabel id="radio-button-groups-checked-colors">Numbers</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-button-groups-checked-colors"
            name="radio-button-groups-checked-colors"
          >
            <EzFormControlLabel
              control={<EzRadio checked color="primary" variant="filled" />}
              label="one"
              value="filled-one"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="secondary" variant="filled" />}
              label="two"
              value="filled-two"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="error" variant="filled" />}
              label="three"
              value="filled-three"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="warning" variant="filled" />}
              label="four"
              value="filled-four"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="info" variant="filled" />}
              label="five"
              value="filled-five"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="success" variant="filled" />}
              label="six"
              value="filled-six"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="alert" variant="filled" />}
              label="seven"
              value="filled-seven"
            />
            <EzFormControlLabel
              control={<EzRadio checked color="neutral" variant="filled" />}
              label="eight"
              value="filled-eight"
            />
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```

### EzRadio Groups Unchecked with Gaps

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  const RadioButton = ({value}) => (
    <EzFormControlLabel control={<EzRadio />} label={value} value={value} />
  );

  const RadioGroup = ({gap, title}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="radio-button-group"
          gap={gap}
          name="radio-button-group"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <RadioButton value="one" />
          <RadioButton value="two" />
          <RadioButton value="three" />
          <RadioButton value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <RadioGroup title="default gap unchecked" />
      <RadioGroup title="gap of 2 unchecked" gap={2} />
      <RadioGroup title="gap of 3 unchecked" gap={3} />
      <RadioGroup title="gap of 4 unchecked" gap={4} />
    </EzLayout>
  );
};
```

### EzRadio Groups Checked with Gaps

```jsx
() => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  const RadioButton = ({value}) => (
    <EzFormControlLabel control={<EzRadio checked />} label={value} value={value} />
  );

  const RadioGroup = ({gap, title}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="radio-button-group"
          gap={gap}
          name="radio-button-group"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <RadioButton value="one" />
          <RadioButton value="two" />
          <RadioButton value="three" />
          <RadioButton value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <RadioGroup title="default gap checked" />
      <RadioGroup title="gap of 2 checked" gap={2} />
      <RadioGroup title="gap of 3 checked" gap={3} />
      <RadioGroup title="gap of 4 checked" gap={4} />
    </EzLayout>
  );
};
```

### EzRadio Super Radio Buttons Variants

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('one');
  const handleChange = event => setSelectedValue(event.target.value);

  const SuperRadioButton = ({value}) => (
    <EzFormControlLabel
      control={<EzRadio />}
      label={value}
      icon={<EzIcon icon={Coffee} />}
      value={value}
    />
  );

  const SuperRadioGroup = ({title, theme}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="super-radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-button-group"
          name="super-radio-button-group"
          onChange={handleChange}
          row
          theme={theme}
          value={selectedValue}
        >
          <SuperRadioButton value="one" />
          <SuperRadioButton value="two" />
          <SuperRadioButton value="three" />
          <SuperRadioButton value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <SuperRadioGroup title="filled variant" theme={{variant: 'filled'}} />
      <SuperRadioGroup title="outlined variant" theme={{variant: 'outlined'}} />
      <SuperRadioGroup
        title="theme with color info and outlined variant"
        theme={{
          color: 'info',
          variant: 'outlined',
        }}
      />
      <SuperRadioGroup
        title="custom theme"
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
      />
    </EzLayout>
  );
};
```

### EzRadio Super Radio Buttons Icon Sizes

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('one');
  const handleChange = event => setSelectedValue(event.target.value);

  const SuperRadioButton = ({iconSize, label, value}) => (
    <EzFormControlLabel
      control={<EzRadio />}
      label={label}
      icon={<EzIcon icon={Coffee} size={iconSize} />}
      value={value}
    />
  );

  const SuperRadioGroup = ({label, title, iconSize}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="super-radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-button-group"
          name="super-radio-button-group"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <SuperRadioButton iconSize={iconSize} label={label} value="one" />
          <SuperRadioButton iconSize={iconSize} label={label} value="two" />
          <SuperRadioButton iconSize={iconSize} label={label} value="three" />
          <SuperRadioButton iconSize={iconSize} label={label} value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <SuperRadioGroup title="small icon, no label" iconSize="small" />
      <SuperRadioGroup title="medium icon, no label" iconSize="medium" />
      <SuperRadioGroup title="large icon, no label" iconSize="large" />
      <SuperRadioGroup title="xlarge icon, no label" iconSize="xlarge" />
      <SuperRadioGroup title="small icon, with label" iconSize="small" label="one" />
      <SuperRadioGroup title="medium icon, with label" iconSize="medium" label="one" />
      <SuperRadioGroup title="large icon, with label" iconSize="large" label="one" />
      <SuperRadioGroup title="xlarge icon, with label" iconSize="xlarge" label="one" />
    </EzLayout>
  );
};
```

### EzRadio Super Radio Buttons with labelWidth

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('one');
  const handleChange = event => setSelectedValue(event.target.value);

  const SuperRadioButton = ({value}) => (
    <EzFormControlLabel
      control={<EzRadio />}
      label={value}
      icon={<EzIcon icon={Coffee} />}
      value={value}
    />
  );

  const SuperRadioGroup = ({title, labelWidth}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="super-radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-button-group"
          labelWidth={labelWidth}
          name="super-radio-button-group"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <SuperRadioButton value="one" />
          <SuperRadioButton value="two" />
          <SuperRadioButton value="three" />
          <SuperRadioButton value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <SuperRadioGroup title="default labelWidth" />
      <SuperRadioGroup title="labelWidth of 100" labelWidth={100} />
      <SuperRadioGroup title="labelWidth of 200" labelWidth={200} />
    </EzLayout>
  );
};
```

### EzRadio Super Radio Buttons Labels

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState('one');
  const handleChange = event => setSelectedValue(event.target.value);

  const SuperRadioButton = ({label, value}) => (
    <EzFormControlLabel
      control={<EzRadio />}
      label={label}
      icon={<EzIcon icon={Coffee} />}
      value={value}
    />
  );

  const SuperRadioGroup = ({label, labelWidth, title}) => (
    <EzLayout>
      <EzFormControl>
        <EzFormLabel id="super-radio-button-group">{title}</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-button-group"
          labelWidth={labelWidth}
          name="super-radio-button-group"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <SuperRadioButton label={label} value="one" />
          <SuperRadioButton label={label} value="two" />
          <SuperRadioButton label={label} value="three" />
          <SuperRadioButton label={label} value="four" />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );

  return (
    <EzLayout layout="stack">
      <SuperRadioGroup title="no labels" />
      <SuperRadioGroup title="short labels" label="one" />
      <SuperRadioGroup title="long labels" label="one one one one one one one" />
      <SuperRadioGroup
        title="long labels with labelWidth of 100"
        label="one one one one one one one"
        labelWidth={100}
      />
      <SuperRadioGroup
        title="long labels with labelWidth of 150"
        label="one one one one one one one"
        labelWidth={150}
      />
      <SuperRadioGroup
        title="long labels with labelWidth of 200"
        label="one one one one one one one"
        labelWidth={200}
      />
    </EzLayout>
  );
};
```

### EzRadio Custom Colors Unchecked

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzLayout layout="equal">
      <style>{`
        .EzRadio-outlined .EzRadioIcon-unchecked,
        .EzRadio-outlined .EzRadioIcon-checked,
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzFormControlLabel:hover .EzRadioIcon-checked,
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadio:hover .EzRadioIcon-checked {
          border-color: orange;
        }
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadioIcon-checked-dot {
          background-color: orange;
        }
        .EzFormLabel.Mui-focused {
          color: orange;
        }
      `}</style>
      <EzLayout>
        <EzRadio
          checked={selectedValue === 'basic-radio'}
          onChange={handleChange}
          value="basic-radio"
        />
        <EzLayout style={{backgroundColor: '#034a34'}}>
          <EzRadio
            checked={selectedValue === 'basic-radio-filled'}
            onChange={handleChange}
            value="basic-radio-filled"
            variant="filled"
          />
        </EzLayout>
      </EzLayout>

      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="radio-group-numbers">radio group, unchecked</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-group-numbers"
            name="radio-group-numbers"
            onChange={handleChange}
            value={selectedValue}
          >
            <EzLayout style={{padding: '10px'}} layout="stack">
              <EzFormControlLabel control={<EzRadio />} label="one" value="group-one" />
              <EzFormControlLabel control={<EzRadio />} label="two" value="group-two" />
            </EzLayout>

            <EzLayout
              style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
              layout="stack"
            >
              <EzFormControlLabel
                control={<EzRadio variant="filled" />}
                label="three"
                value="group-three"
              />
              <EzFormControlLabel
                control={<EzRadio variant="filled" />}
                label="four"
                value="group-four"
              />
            </EzLayout>
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```

### EzRadio Custom Colors Checked

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzLayout layout="equal">
      <style>{`
        .EzRadio-outlined .EzRadioIcon-checked,
        .EzRadio-outlined .EzRadioIcon-checked-border,
        .EzRadio:hover .EzRadioIcon-unchecked {
          border-color: orange;
        }
        .EzRadio:focus-within {
          background-color: #fed8b150;
          border-color: #fed8b150;
        }
        .EzRadioIcon-checked-dot,
        .EzRadio:hover .EzRadioIcon-unchecked {
          background-color: orange;
        }
        .EzFormLabel.Mui-focused {
          color: orange;
        }
      `}</style>
      <EzLayout>
        <EzRadio checked onChange={handleChange} value="basic-radio" />
        <EzLayout style={{backgroundColor: '#034a34'}}>
          <EzRadio checked onChange={handleChange} value="basic-radio-filled" variant="filled" />
        </EzLayout>
      </EzLayout>

      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="radio-group-numbers">radio group, checked</EzFormLabel>
          <EzRadioGroup
            ariaLabel="radio-group-numbers"
            name="radio-group-numbers"
            onChange={handleChange}
            value={selectedValue}
          >
            <EzLayout style={{padding: '10px'}} layout="stack">
              <EzFormControlLabel control={<EzRadio checked />} label="one" value="group-one" />
              <EzFormControlLabel control={<EzRadio checked />} label="two" value="group-two" />
            </EzLayout>

            <EzLayout
              style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
              layout="stack"
            >
              <EzFormControlLabel
                control={<EzRadio checked variant="filled" />}
                label="three"
                value="group-three"
              />
              <EzFormControlLabel
                control={<EzRadio checked variant="filled" />}
                label="four"
                value="group-four"
              />
            </EzLayout>
          </EzRadioGroup>
        </EzFormControl>
      </EzLayout>
    </EzLayout>
  );
};
```
