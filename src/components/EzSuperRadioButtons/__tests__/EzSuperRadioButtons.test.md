### Square choices

```jsx
<EzSuperRadioButtons
  label="Delivery issues"
  options={[
    {
      label: "Can't deliver",
      value: 'cant-deliver',
      imageSrc: deliveryImg,
    },
    {
      label: 'Not enough notice',
      value: 'not-enough-notice',
      imageSrc: clockImg,
    },
    {
      label: "Can't prepare food",
      value: 'cant-prepare-food',
      imageSrc: potImg,
    },
  ]}
  value="cant-deliver"
/>
```

### Disabled choice

```jsx
<EzSuperRadioButtons
  label="Delivery issues"
  options={[
    {
      label: "Can't deliver",
      value: 'cant-deliver',
      imageSrc: deliveryImg,
      disabled: true,
    },
    {
      label: 'Not enough notice',
      value: 'not-enough-notice',
      imageSrc: clockImg,
      disabled: true,
    },
    {
      label: "Can't prepare food",
      value: 'cant-prepare-food',
      imageSrc: potImg,
      disabled: true,
    },
  ]}
  value="not-enough-notice"
/>
```
