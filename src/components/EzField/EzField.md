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

### Field with validation error

Lets the user know that there is a problem with the provided input.

Whenever possible, validate the input after the user has finished their interaction with a field (but not before). If the user does not interact with the field before the form is submitted, the input should be validated on submission of the form. Error messages should be removed as early as possible, ideally as the user is typing, so that the user can see when an error has been addressed.

- use the `error` prop to provide a validation message to display to the user. The presence of a value indicates that the field is currently in an invalid state.
- use the `touched` prop to indicate that the user has interacted with or has visited the field. This value is used to determine whether or not to show an error and helps to avoid overwhelming users with error messages for fields they have not interacted with.

Note: Recipe doesn't maintain the value of `touched`, and instead expects the `touched` state to be managed within the application, typically via [formik](https://jaredpalmer.com/formik/) or another form validation library.

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

Allows the user to choose between a fixed set of options by offering a list of grouped radio buttons or check boxes. Use `type="checkbox"` to allow multiple choices to be selected, or `type="radio"` to allow only a single selection.

Use the `options` prop to provide an array of options for selection. Each option requires a `label` and a `value`. Options may optionally be `disabled` where necessary.

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

### Bordered multiple choice input

Bordered multiple choice inputs should be used to present side-by-side options, typically used when a form requires the user to choose from a short list of options.

Unlike super-radio buttons, toggles, or segmented controls, bordered multiple choice inputs should typically be used within forms and require a submit action for changes to take effect. One exception to this guideline is that bordered multiple choice inputs may also be used as page-level filters that take effect immediately.

Option labels for bordered multiple choice inputs should be kept short. Unlike the non-bordered options, the label will not wrap onto multiple lines.

```jsx
() => {
  const [selectedChoice, setSelectedChoice] = React.useState(null);
  const [selectedChoices, setSelectedChoices] = React.useState([]);
  return (
    <EzFormLayout>
      <EzField
        type="radio"
        bordered
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
        bordered
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

### Date input within range

Allows the user to pick a restricted range of available dates from a popup calendar or enter their own date directly into the input field.

While the `minDate` and `maxDate` options will prevent the selection of unavailable dates from the calendar, additional validation is required to prevent invalid values from being entered directly into the input.

- Use `type="date"` to enable the user to pick a date from a popup calendar.
- Use the optional `minDate={dateValue}` prop to disallow the selection of dates prior to `dateValue`.
- Use the optional `maxDate={dateValue}` prop to disallow the selection of dates after `dateValue`.

```jsx
() => {
  const [date, setDate] = React.useState('01/20/2020');
  const minDate = '01/20/2020';
  const maxDate = '01/24/2020';
  const invalidDate = new Date(date) < new Date(minDate) || new Date(date) > new Date(maxDate);

  return (
    <EzFormLayout>
      <EzField
        type="date"
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        touched
        error={invalidDate && 'This date is unavailable'}
        label="Select delivery date"
        helperText="This is the date your food will be delivered."
        onChange={value => setDate(value)}
      />
    </EzFormLayout>
  );
};
```

### Date input with filtered range

Allows the user to pick from an arbitrary selection available dates from a popup calendar or enter their own date directly into the input field.

While the `filterDate` option will prevent the selection of unavailable dates from the calendar, additional validation is required to prevent invalid values from being entered directly into the input.

- Use `type="date"` to enable the user to pick a date from a popup calendar.
- Use the optional `filterDate={fn}` prop to restrict the range of dates presented to only the set that are returned by the filter.

The below example demonstrates using the `filterDate` prop to restrict the calendar selection to only allow weekdays.

```jsx
() => {
  const [date, setDate] = React.useState('01/20/2020');

  const isWeekday = date => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  const invalidDate = !isWeekday(date);

  return (
    <EzFormLayout>
      <EzField
        type="date"
        value={date}
        filterDate={isWeekday}
        touched
        error={invalidDate && 'This date is unavailable'}
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

- Label text should still be provided to provide context for users of assistive technology.

```jsx
<EzField type="text" label="Search" labelHidden />
```

### Text field with small label

This is alternative style of label for fields, reserved for fields where the intent of the field is otherwise clear from the context of the page, such as filter controls inside the page header or subheader.

This label style should be used to provide additional context in an understated way, as not to draw the focus away from the primary actions on the page.

- It is recommended that small labels are NOT used in conjunction with `helperText`.

```jsx
<EzField type="date" labelSize="small" value="1/15/2020" label="Event date" />
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

---

## Related components

- [EzFormLayout](/components/ez-form-layout)
- [EzLayout](/components/ez-layout)
