---
name: EzField
title: Form fields
category: forms
path: '/components/ez-field'
---

Form fields provide inputs for form data, such as text, dates, emails and other data types. Fields have a range of options to support several value formats. Further customization of Fields can be achieved by providing a custom input component, such as an application-specific control.

---

<EzAlert
  headline="This component is under development"
  tagline="There will likely be breaking changes to the API. Proceeed with caution."
  use="warning"
/>

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

## Examples

### Standard text field

Allows users to provide short text input. Optionally, additional context can be given in the form of helper text to provide further instructional content.

```jsx
<EzField
  type="input"
  label="Character Name"
  value="Elmo"
  helperText="Provide the name of your favorite Sesame Street character."
/>
```

### Long text field

Allows user to provide text input that may span more than one line. Optionally, a character count can be used to indicate the restrictions on the maximum length of an input.

```jsx
<EzField
  type="textarea"
  label="Shipping address"
  maxLength={120}
  value={`
  123 Sesame St,
  New York
`}
/>
```

### Numeric input field

Allows the user to provide numeric input values.

```jsx
<EzField type="number" label="Count" value={2} />
```

### Custom input field

Allows the usage of application-specific input components while still providing standard field behaviors, such as validation. The custom component will have props forwarded from EzField.

```jsx
<EzField type={MyCustomInput} label="First name" />
```

### Text field with hidden label

Visually hide the fields label when the fields purpose is clear from context.

```jsx
<EzField type="input" label="Search" labelHidden />
```

### Text field with placeholder text

Provides the user with additional context hint about the expected input.

```jsx
<EzField type="input" label="Favorite color" placeholder="e.g. Red, Blue etc" />
```

### Disabled text field

Show users that a field is not available for interaction. Often used where a form field is not available due to the current state of the form.

```jsx
<EzField type="input" label="Value" value="empty" disabled />
```

### Field with validation error

Let the user know that there is a problem with the provided input.

```jsx
<EzField name="firstName" label="First name" error="First name is required" />
```

---

## Related components

- [EzFormLayout](/components/ez-form-layout)
- [EzLayout](/components/ez-layout)
