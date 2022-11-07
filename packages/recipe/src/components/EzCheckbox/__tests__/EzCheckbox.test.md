### EzCheckbox Variants Unchecked

```jsx
<EzLayout>
  <EzCheckbox />
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox variant="filled" />
  </EzLayout>
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox variant="filled-inverse" />
  </EzLayout>
</EzLayout>
```

### EzCheckbox Variants Checked

```jsx
<EzLayout>
  <EzCheckbox checked />
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox checked variant="filled" />
  </EzLayout>
  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox checked variant="filled-inverse" />
  </EzLayout>
</EzLayout>
```

### EzCheckbox Colors Unchecked

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzCheckbox color="primary" />
    <EzCheckbox color="secondary" />
    <EzCheckbox color="error" />
    <EzCheckbox color="warning" />
    <EzCheckbox color="info" />
    <EzCheckbox color="success" />
    <EzCheckbox color="alert" />
    <EzCheckbox color="neutral" />
    <EzCheckbox color="common.red100" />
    <EzCheckbox color="common.black" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox color="primary" variant="filled" />
    <EzCheckbox color="secondary" variant="filled" />
    <EzCheckbox color="error" variant="filled" />
    <EzCheckbox color="warning" variant="filled" />
    <EzCheckbox color="info" variant="filled" />
    <EzCheckbox color="success" variant="filled" />
    <EzCheckbox color="alert" variant="filled" />
    <EzCheckbox color="neutral" variant="filled" />
    <EzCheckbox color="common.red100" variant="filled" />
    <EzCheckbox color="common.black" variant="filled" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox color="primary" variant="filled-inverse" />
    <EzCheckbox color="secondary" variant="filled-inverse" />
    <EzCheckbox color="error" variant="filled-inverse" />
    <EzCheckbox color="warning" variant="filled-inverse" />
    <EzCheckbox color="info" variant="filled-inverse" />
    <EzCheckbox color="success" variant="filled-inverse" />
    <EzCheckbox color="alert" variant="filled-inverse" />
    <EzCheckbox color="neutral" variant="filled-inverse" />
    <EzCheckbox color="common.red100" variant="filled-inverse" />
    <EzCheckbox color="common.black" variant="filled-inverse" />
  </EzLayout>
</EzLayout>
```

### EzCheckbox Colors Checked

```jsx
<EzLayout layout="stack">
  <EzLayout>
    <EzCheckbox checked color="primary" />
    <EzCheckbox checked color="secondary" />
    <EzCheckbox checked color="error" />
    <EzCheckbox checked color="warning" />
    <EzCheckbox checked color="info" />
    <EzCheckbox checked color="success" />
    <EzCheckbox checked color="alert" />
    <EzCheckbox checked color="neutral" />
    <EzCheckbox checked color="common.red100" />
    <EzCheckbox checked color="common.black" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox checked color="primary" variant="filled" />
    <EzCheckbox checked color="secondary" variant="filled" />
    <EzCheckbox checked color="error" variant="filled" />
    <EzCheckbox checked color="warning" variant="filled" />
    <EzCheckbox checked color="info" variant="filled" />
    <EzCheckbox checked color="success" variant="filled" />
    <EzCheckbox checked color="alert" variant="filled" />
    <EzCheckbox checked color="neutral" variant="filled" />
    <EzCheckbox checked color="common.red100" variant="filled" />
    <EzCheckbox checked color="common.black" variant="filled" />
  </EzLayout>

  <EzLayout style={{backgroundColor: '#034a34'}}>
    <EzCheckbox checked color="primary" variant="filled-inverse" />
    <EzCheckbox checked color="secondary" variant="filled-inverse" />
    <EzCheckbox checked color="error" variant="filled-inverse" />
    <EzCheckbox checked color="warning" variant="filled-inverse" />
    <EzCheckbox checked color="info" variant="filled-inverse" />
    <EzCheckbox checked color="success" variant="filled-inverse" />
    <EzCheckbox checked color="alert" variant="filled-inverse" />
    <EzCheckbox checked color="neutral" variant="filled-inverse" />
    <EzCheckbox checked color="common.red100" variant="filled-inverse" />
    <EzCheckbox checked color="common.black" variant="filled-inverse" />
  </EzLayout>
</EzLayout>
```

### EzCheckbox Groups Unchecked with Colors

```jsx
<EzLayout>
  <EzFormControl>
    <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
    <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
      <EzFormControlLabel control={<EzCheckbox color="primary" />} label="one" />
      <EzFormControlLabel control={<EzCheckbox color="secondary" />} label="two" />
      <EzFormControlLabel control={<EzCheckbox color="error" />} label="three" />
      <EzFormControlLabel control={<EzCheckbox color="warning" />} label="four" />
      <EzFormControlLabel control={<EzCheckbox color="info" />} label="five" />
      <EzFormControlLabel control={<EzCheckbox color="success" />} label="six" />
      <EzFormControlLabel control={<EzCheckbox color="alert" />} label="seven" />
      <EzFormControlLabel control={<EzCheckbox color="neutral" />} label="eight" />
    </EzFormGroup>
  </EzFormControl>

  <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}>
    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel control={<EzCheckbox color="primary" variant="filled" />} label="one" />
        <EzFormControlLabel
          control={<EzCheckbox color="secondary" variant="filled" />}
          label="two"
        />
        <EzFormControlLabel control={<EzCheckbox color="error" variant="filled" />} label="three" />
        <EzFormControlLabel
          control={<EzCheckbox color="warning" variant="filled" />}
          label="four"
        />
        <EzFormControlLabel control={<EzCheckbox color="info" variant="filled" />} label="five" />
        <EzFormControlLabel control={<EzCheckbox color="success" variant="filled" />} label="six" />
        <EzFormControlLabel control={<EzCheckbox color="alert" variant="filled" />} label="seven" />
        <EzFormControlLabel
          control={<EzCheckbox color="neutral" variant="filled" />}
          label="eight"
        />
      </EzFormGroup>
    </EzFormControl>

    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel
          control={<EzCheckbox color="primary" variant="filled-inverse" />}
          label="one"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="secondary" variant="filled-inverse" />}
          label="two"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="error" variant="filled-inverse" />}
          label="three"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="warning" variant="filled-inverse" />}
          label="four"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="info" variant="filled-inverse" />}
          label="five"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="success" variant="filled-inverse" />}
          label="six"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="alert" variant="filled-inverse" />}
          label="seven"
        />
        <EzFormControlLabel
          control={<EzCheckbox color="neutral" variant="filled-inverse" />}
          label="eight"
        />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzLayout>
```

### EzCheckbox Groups Checked with Colors

```jsx
<EzLayout>
  <EzFormControl>
    <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
    <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
      <EzFormControlLabel control={<EzCheckbox checked color="primary" />} label="one" />
      <EzFormControlLabel control={<EzCheckbox checked color="secondary" />} label="two" />
      <EzFormControlLabel control={<EzCheckbox checked color="error" />} label="three" />
      <EzFormControlLabel control={<EzCheckbox checked color="warning" />} label="four" />
      <EzFormControlLabel control={<EzCheckbox checked color="info" />} label="five" />
      <EzFormControlLabel control={<EzCheckbox checked color="success" />} label="six" />
      <EzFormControlLabel control={<EzCheckbox checked color="alert" />} label="seven" />
      <EzFormControlLabel control={<EzCheckbox checked color="neutral" />} label="eight" />
    </EzFormGroup>
  </EzFormControl>

  <EzLayout style={{backgroundColor: '#034a34', color: 'white', padding: '1em'}}>
    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel
          control={<EzCheckbox checked color="primary" variant="filled" />}
          label="one"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="secondary" variant="filled" />}
          label="two"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="error" variant="filled" />}
          label="three"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="warning" variant="filled" />}
          label="four"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="info" variant="filled" />}
          label="five"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="success" variant="filled" />}
          label="six"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="alert" variant="filled" />}
          label="seven"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="neutral" variant="filled" />}
          label="eight"
        />
      </EzFormGroup>
    </EzFormControl>

    <EzFormControl>
      <EzFormLabel id="checkbox-groups-unchecked-colors">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-groups-unchecked-colors">
        <EzFormControlLabel
          control={<EzCheckbox checked color="primary" variant="filled-inverse" />}
          label="one"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="secondary" variant="filled-inverse" />}
          label="two"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="error" variant="filled-inverse" />}
          label="three"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="warning" variant="filled-inverse" />}
          label="four"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="info" variant="filled-inverse" />}
          label="five"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="success" variant="filled-inverse" />}
          label="six"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="alert" variant="filled-inverse" />}
          label="seven"
        />
        <EzFormControlLabel
          control={<EzCheckbox checked color="neutral" variant="filled-inverse" />}
          label="eight"
        />
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzLayout>
```

### EzCheckbox Custom Colors Unchecked

```jsx
<EzLayout layout="equal">
  <style>{`
        .EzCheckbox-outlined .EzCheckbox-unchecked,
        .EzCheckbox-outlined .EzCheckbox-checked,
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          border-color: orange;
        }
        .EzCheckbox:focus-within {
          background-color: #FED8B150;
        }
        .EzCheckbox-outlined .EzCheckbox-icon,
        .EzCheckbox-filled .EzCheckbox-icon {
          fill: orange;
        }
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          background-color: orange;
        }
      `}</style>
  <EzLayout>
    <EzCheckbox />
    <EzLayout style={{backgroundColor: '#034a34'}}>
      <EzCheckbox variant="filled" />
    </EzLayout>
    <EzLayout style={{backgroundColor: '#034a34'}}>
      <EzCheckbox variant="filled-inverse" />
    </EzLayout>
  </EzLayout>

  <EzLayout>
    <EzFormControl>
      <EzFormLabel id="checkbox-numbers">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-numbers">
        <EzLayout style={{padding: '10px'}} layout="stack">
          <EzFormControlLabel control={<EzCheckbox />} label="one" />
          <EzFormControlLabel control={<EzCheckbox />} label="two" />
        </EzLayout>

        <EzLayout
          style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
          layout="stack"
        >
          <EzFormControlLabel control={<EzCheckbox variant="filled" />} label="three" />
          <EzFormControlLabel control={<EzCheckbox variant="filled" />} label="four" />
        </EzLayout>

        <EzLayout
          style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
          layout="stack"
        >
          <EzFormControlLabel control={<EzCheckbox variant="filled-inverse" />} label="five" />
          <EzFormControlLabel control={<EzCheckbox variant="filled-inverse" />} label="six" />
        </EzLayout>
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzLayout>
```

### EzCheckbox Custom Colors Checked

```jsx
<EzLayout layout="equal">
  <style>{`
        .EzCheckbox-outlined .EzCheckbox-unchecked,
        .EzCheckbox-outlined .EzCheckbox-checked,
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          border-color: orange;
        }
        .EzCheckbox:focus-within {
          background-color: #FED8B150;
        }
        .EzCheckbox-outlined .EzCheckbox-icon,
        .EzCheckbox-filled .EzCheckbox-icon {
          fill: orange;
        }
        .EzCheckbox-filled-inverse .EzCheckbox-checked {
          background-color: orange;
        }
      `}</style>
  <EzLayout>
    <EzCheckbox checked />
    <EzLayout style={{backgroundColor: '#034a34'}}>
      <EzCheckbox checked variant="filled" />
    </EzLayout>
    <EzLayout style={{backgroundColor: '#034a34'}}>
      <EzCheckbox checked variant="filled-inverse" />
    </EzLayout>
  </EzLayout>

  <EzLayout>
    <EzFormControl>
      <EzFormLabel id="checkbox-numbers">Numbers</EzFormLabel>
      <EzFormGroup ariaLabel="checkbox-numbers">
        <EzLayout style={{padding: '10px'}} layout="stack">
          <EzFormControlLabel control={<EzCheckbox checked />} label="one" />
          <EzFormControlLabel control={<EzCheckbox checked />} label="two" />
        </EzLayout>

        <EzLayout
          style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
          layout="stack"
        >
          <EzFormControlLabel control={<EzCheckbox checked variant="filled" />} label="three" />
          <EzFormControlLabel control={<EzCheckbox checked variant="filled" />} label="four" />
        </EzLayout>

        <EzLayout
          style={{backgroundColor: '#034a34', color: 'white', padding: '10px'}}
          layout="stack"
        >
          <EzFormControlLabel
            control={<EzCheckbox checked variant="filled-inverse" />}
            label="five"
          />
          <EzFormControlLabel
            control={<EzCheckbox checked variant="filled-inverse" />}
            label="six"
          />
        </EzLayout>
      </EzFormGroup>
    </EzFormControl>
  </EzLayout>
</EzLayout>
```

### EzCheckbox Legacy Unchecked

```jsx
<EzCheckbox legacy />
```

### EzCheckbox Legacy Checked

```jsx
<EzCheckbox legacy checked />
```

### EzCheckbox Acknowledgement Unchecked

```jsx
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
/>
```

### EzCheckbox Acknowledgement Checked

```jsx
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
  checked
/>
```
