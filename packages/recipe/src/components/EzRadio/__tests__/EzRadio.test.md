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

      <EzLayout
        style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}
      >
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

      <EzLayout
        style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}
      >
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

### EzRadio Super Radio Buttons Unchecked with Colors

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzFormControl>
      <EzFormLabel id="super-radio-button-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzRadioGroup
        ariaLabel="super-radio-button-groups-unchecked-colors"
        name="super-radio-button-groups-unchecked-colors"
        onChange={handleChange}
        row
        value={selectedValue}
      >
        <EzFormControlLabel
          control={<EzRadio color="primary" />}
          label="one"
          icon={<EzIcon icon={Coffee} />}
          value="one"
        />
        <EzFormControlLabel
          control={<EzRadio color="secondary" />}
          label="two"
          icon={<EzIcon icon={Coffee} />}
          value="two"
        />
        <EzFormControlLabel
          control={<EzRadio color="error" />}
          label="three"
          icon={<EzIcon icon={Coffee} />}
          value="three"
        />
        <EzFormControlLabel
          control={<EzRadio color="warning" />}
          label="four"
          icon={<EzIcon icon={Coffee} />}
          value="four"
        />
        <EzFormControlLabel
          control={<EzRadio color="info" />}
          label="five"
          icon={<EzIcon icon={Coffee} />}
          value="five"
        />
        <EzFormControlLabel
          control={<EzRadio color="success" />}
          label="six"
          icon={<EzIcon icon={Coffee} />}
          value="six"
        />
        <EzFormControlLabel
          control={<EzRadio color="alert" />}
          label="seven"
          icon={<EzIcon icon={Coffee} />}
          value="seven"
        />
        <EzFormControlLabel
          control={<EzRadio color="neutral" />}
          label="eight"
          icon={<EzIcon icon={Coffee} />}
          value="eight"
        />
      </EzRadioGroup>
    </EzFormControl>
  );
};
```

### EzRadio Super Radio Buttons Checked with Colors

```jsx
() => {
  const {Coffee} = require('@ezcater/icons');
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => setSelectedValue(event.target.value);

  return (
    <EzFormControl>
      <EzFormLabel id="super-radio-button-groups-checked-colors">Numbers</EzFormLabel>
      <EzRadioGroup
        ariaLabel="super-radio-button-groups-checked-colors"
        name="super-radio-button-groups-checked-colors"
        onChange={handleChange}
        row
        value={selectedValue}
      >
        <EzFormControlLabel
          control={<EzRadio checked color="primary" />}
          label="one"
          icon={<EzIcon icon={Coffee} />}
          value="one"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="secondary" />}
          label="two"
          icon={<EzIcon icon={Coffee} />}
          value="two"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="error" />}
          label="three"
          icon={<EzIcon icon={Coffee} />}
          value="three"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="warning" />}
          label="four"
          icon={<EzIcon icon={Coffee} />}
          value="four"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="info" />}
          label="five"
          icon={<EzIcon icon={Coffee} />}
          value="five"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="success" />}
          label="six"
          icon={<EzIcon icon={Coffee} />}
          value="six"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="alert" />}
          label="seven"
          icon={<EzIcon icon={Coffee} />}
          value="seven"
        />
        <EzFormControlLabel
          control={<EzRadio checked color="neutral" />}
          label="eight"
          icon={<EzIcon icon={Coffee} />}
          value="eight"
        />
      </EzRadioGroup>
    </EzFormControl>
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
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadioIcon-checked-dot,
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzSuperFormControlLabel:hover .EzRadioIcon-unchecked {
          background-color: orange;
        }
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadio-outlined .EzRadioIcon-unchecked,
        .EzRadio-outlined .EzRadioIcon-checked-border,
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzSuperFormControlLabel:hover,
        .EzSuperFormControlLabel-checked {
          border-color: orange;
        }
        .EzRadio:focus-within,
        .EzSuperFormControlLabel:hover,
        .EzSuperFormControlLabel-checked {
          background-color: #FED8B150;
        }
        .EzSuperFormControlLabel:hover .EzSuperFormControlLabel-text,
        .EzSuperFormControlLabel-checked .EzSuperFormControlLabel-text,
        .EzFormLabel.Mui-focused {
          color: orange;
        }
        .EzSuperFormControlLabel-icon,
        .EzSuperFormControlLabel-text {
          color: #b36200;
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
          <EzFormLabel id="radio-group-numbers">Numbers</EzFormLabel>
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

      <EzFormControl>
        <EzFormLabel id="super-radio-numbers">Numbers</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-numbers"
          name="super-radio-numbers"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <EzFormControlLabel
            control={<EzRadio />}
            label="one"
            icon={<EzIcon icon={Coffee} />}
            value="super-one"
          />
          <EzFormControlLabel
            control={<EzRadio />}
            label="two"
            icon={<EzIcon icon={Coffee} />}
            value="super-two"
          />
        </EzRadioGroup>
      </EzFormControl>
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
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadioIcon-checked-dot,
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzSuperFormControlLabel:hover .EzRadioIcon-unchecked {
          background-color: orange;
        }
        .EzRadio:hover .EzRadioIcon-unchecked,
        .EzRadio-outlined .EzRadioIcon-unchecked,
        .EzRadio-outlined .EzRadioIcon-checked-border,
        .EzFormControlLabel:hover .EzRadioIcon-unchecked,
        .EzSuperFormControlLabel:hover,
        .EzSuperFormControlLabel-checked {
          border-color: orange;
        }
        .EzRadio:focus-within,
        .EzSuperFormControlLabel:hover,
        .EzSuperFormControlLabel-checked {
          background-color: #FED8B150;
        }
        .EzSuperFormControlLabel:hover .EzSuperFormControlLabel-text,
        .EzSuperFormControlLabel-checked .EzSuperFormControlLabel-text,
        .EzFormLabel.Mui-focused {
          color: orange;
        }
        .EzSuperFormControlLabel-icon,
        .EzSuperFormControlLabel-text {
          color: #b36200;
        }
      `}</style>
      <EzLayout>
        <EzRadio
          checked
          onChange={handleChange}
          value="basic-radio"
        />
        <EzLayout style={{backgroundColor: '#034a34'}}>
          <EzRadio
            checked
            onChange={handleChange}
            value="basic-radio-filled"
            variant="filled"
          />
        </EzLayout>
      </EzLayout>

      <EzLayout>
        <EzFormControl>
          <EzFormLabel id="radio-group-numbers">Numbers</EzFormLabel>
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

      <EzFormControl>
        <EzFormLabel id="super-radio-numbers">Numbers</EzFormLabel>
        <EzRadioGroup
          ariaLabel="super-radio-numbers"
          name="super-radio-numbers"
          onChange={handleChange}
          row
          value={selectedValue}
        >
          <EzFormControlLabel
            control={<EzRadio checked />}
            label="one"
            icon={<EzIcon icon={Coffee} />}
            value="super-one"
          />
          <EzFormControlLabel
            control={<EzRadio checked />}
            label="two"
            icon={<EzIcon icon={Coffee} />}
            value="super-two"
          />
        </EzRadioGroup>
      </EzFormControl>
    </EzLayout>
  );
};
```