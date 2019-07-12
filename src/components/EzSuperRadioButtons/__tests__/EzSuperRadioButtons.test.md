### Square choices

```jsx
<EzSuperRadioButtons
  label="Delivery issues"
  options={[
    {
      label: "Can't deliver",
      value: 'cant-deliver',
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
    },
    {
      label: 'Not enough notice',
      value: 'not-enough-notice',
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
    },
    {
      label: "Can't prepare food",
      value: 'cant-prepare-food',
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
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
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
    },
    {
      label: 'Not enough notice',
      value: 'not-enough-notice',
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
      disabled: true,
    },
    {
      label: "Can't prepare food",
      value: 'cant-prepare-food',
      imageSrc: 'https://image.flaticon.com/icons/svg/865/865149.svg',
    },
  ]}
  value="not-enough-notice"
/>
```
