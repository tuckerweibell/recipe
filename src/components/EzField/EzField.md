---
name: EzField
title: Input Fields
category: Inputs
path: '/components/ez-field'
---

Form input fields provide a structured format for capturing form data, such as text, dates, emails and other data types. Further customization of input fields can be achieved by providing a custom input component, such as an application-specific control.

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceed with caution."
  use="warning"
/>

<br />
<br />

Features still in consideration include:

- Optional field flag
- Async validation hooks
- Non-error validation states

---

## Best Practices

Form fields should:

- Be clearly labelled. When the field's purpose is clear from context, a label should be visually hidden to ensure the label is available for screen readers.
- Validate input as soon as possible, usually when users have finished interacting with the field. For validation that may take some time to evaluate, defer validation until form submission.

---

## Content guidelines

- Use placeholder text with example input values where additional context is valuable
- Provide helper text to assist with filling out a form field, or clarify the purpose of the information being captured. Form helper text should be succinct.
- Provide short and concise error messages, explaining what went wrong and how to fix it.
- Mark fields as optional where the information provided isn't essential for the purpose of the form. Don't mark required fields with asterisks.

---

## Examples

### Standard text field

Allows users to provide short text input. Optionally, additional context can be given in the form of helper text to provide further instructional content.

```jsx
<EzField
  type="text"
  label="Character Name"
  helperText="Provide the name of your favorite Sesame Street character."
/>
```

### Long text field

Allows user to provide text input that may span more than one line. Optionally, a character count can be used to indicate the restrictions on the maximum length of an input. Use `size` to specify how tall the field should be with the options: `small`, `medium`, `large`.

```jsx
<EzField
  type="textarea"
  label="Shipping address"
  size="medium"
  maxLength={120}
  value={`123 Sesame St,
New York`}
  onChange={() => null}
/>
```

### Numeric input field

Allows the user to provide numeric input values.

```jsx
<EzField type="number" label="Count" />
```

### Multiple choice input field

Allows the user to choose between a fixed set of options by offering a list of grouped radio buttons or check boxes. Use `type="checkbox"` to enable the user to select multiple choices, or `type="radio"` to enable the user to select only one choice.

```jsx
() => {
  const [selectedChoice, setSelectedChoice] = React.useState(null);
  const [selectedChoices, setSelectedChoices] = React.useState([]);
  return (
    <EzFormLayout>
      <EzField
        type="radio"
        label="Single choice list"
        options={[
          {label: 'Choice A', value: 'a'},
          {label: 'Choice B', value: 'b'},
          {label: 'Choice C', value: 'c'},
        ]}
        value={selectedChoice}
        onChange={e => setSelectedChoice(e.target.value)}
      />
      <EzField
        type="checkbox"
        label="Multiple choice list"
        options={[
          {label: 'Choice A', value: 'a'},
          {label: 'Choice B', value: 'b'},
          {label: 'Choice C', value: 'c'},
        ]}
        value={selectedChoices}
        onChange={e => setSelectedChoices(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

Note: e.target.selected has been deprecated in favor of e.target.value

### Select list

Allows the user to choose between a larger set of options than would be appropriate for radio buttons. Use `type="select"` to enable the user to pick from a dropdown list of available options.

```jsx
() => {
  const [choice, setChoice] = React.useState(null);
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown"
        placeholder="Choose..."
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Select list with grouping

Allows the user to choose from smaller lists of logically related options. Use a select list grouping to make the list of options easier to navigate to assist the user in finding the option they are looking for. The `group` prop should be applied to each option that belongs to a group, and represents the label that wil be used to group the items.

Options are presented in the order in which they are grouped, and then by the order in which they are provided. To avoid options rendering options out of sequence, provide the options `prop` a list pre-sorted by group.

```jsx
() => {
  const [choice, setChoice] = React.useState('upcoming');
  return (
    <EzFormLayout>
      <EzField
        type="select"
        label="Select dropdown with <optgroup>"
        options={[
          {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
          {label: 'Today', value: 'today', group: 'Upcoming'},
          {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
          {label: 'All Time', value: 'all', group: 'Past'},
          {label: 'Yesterday', value: 'yesterday', group: 'Past'},
          {label: 'Last 7 Days', value: 'week', group: 'Past'},
          {label: 'This Month', value: 'month', group: 'Past'},
        ]}
        value={choice}
        onChange={e => setChoice(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

### Date input field

Allows the user to pick a date from a popup calendar or enter their own date directly into the input field. Use `type="date"` to enable the user to pick a date from a popup calendar.

```jsx
() => {
  const [date, setDate] = React.useState('01/01/2020');
  return (
    <EzFormLayout>
      <EzField
        type="date"
        value={date}
        label="Select delivery date"
        helperText="This is the date your food will be delivered."
        onChange={value => setDate(value)}
      />
    </EzFormLayout>
  );
};
```

Times in this component are displayed with the format h:mma, for example, `9:45am`.

### Time input field

Allows the user to pick a time from a select dropdown. Use `type="time"` to enable the user to pick a time from a select dropdown. An optional range can be used to limit the number of options in the select dropdown. Use `start="9:00am"` to specify the start of the range, and `end="5:00pm"` to specify the end of the range. An optional step can change the interval in which the times are generated. By default the step is `60` minutes. You can change it by adding `step={15}`.

The steps that are supported are: `5`, `10`, `15`, `20`, `30`, `60`

```jsx
() => {
  const [time, setTime] = React.useState('12:00 pm');
  return (
    <EzFormLayout>
      <EzField
        type="time"
        value={time}
        start="9:00 am"
        end="5:00 pm"
        step={30}
        label="Select delivery time"
        placeholder="Choose..."
        helperText="This is the time your food will be delivered."
        onChange={e => setTime(e.target.value)}
      />
    </EzFormLayout>
  );
};
```

Dates in this component are displayed with the format `MM/DD/YYYY`.

### Custom input field

Allows the usage of application-specific input components while still providing standard field behaviors, such as validation. The custom component will have props forwarded from EzField.

```jsx
<EzField
  type={({value, onChange}) => <input value={value} onChange={onChange} />}
  label="First name"
  value="Big Bird"
  onChange={() => null}
/>
```

### Text field with hidden label

Visually hide the fields label when the fields purpose is clear from context.

```jsx
<EzField type="text" label="Search" labelHidden />
```

### Text field with placeholder text

Provides the user with additional context hint about the expected input.

```jsx
<EzField type="text" label="Favorite color" placeholder="e.g. Red, Blue etc" />
```

### Disabled text field

Show users that a field is not available for interaction. Often used where a form field is not available due to the current state of the form.

```jsx
<EzField type="text" label="Value" value="Empty" disabled />
```

### Field with validation error

Let the user know that there is a problem with the provided input. Note that errors are not displayed until the input has been interacted with, represented by the `touched` prop.

```jsx
<EzFormLayout>
  <EzField
    label="First name"
    helperText="This is a hint about how this field works"
    maxLength={120}
    placeholder="Examples of what type of stuff to put here"
    touched
    error="First name is required"
  />
  <EzField
    type="checkbox"
    label="Multiple choice list"
    touched
    error="Please choose one or more option"
    options={[
      {label: 'Choice A', value: 'a'},
      {label: 'Choice B', value: 'b'},
      {label: 'Choice C', value: 'c'},
    ]}
  />
</EzFormLayout>
```

---

## Related components

- [EzFormLayout](/components/ez-form-layout)
- [EzLayout](/components/ez-layout)
