---
name: EzSuperRadioButtons
title: Super radio buttons
category: Inputs
path: '/components/ez-super-radio-buttons'
---

Super radio buttons can be used to highlight an important choice between multiple options that the user needs to make. This control lives outside of a form

---

## Best Practices

Super radio buttons should:

- Have a label with a concise description of the choice.
- Include an image relevant to each choice to help the user quickly identify the option they're looking for.
- Have images roughly the same visual wieght, and labels that are roughly the same length, to avoid giving one item more prominence than the others.

Super radio buttons should not:

- Be placed in a form. Use `EzField` width a type of `radio` if you are looking for a form component.

## Content guidelines

Images will be automatically sized to fit into a 60x60 pixel box. Because of this, it's recommended you keep images as close to square as possible. If you need to change the aspect ratio, keeping the same ratio and orientation across all images produces the best results.

Make sure the images you use for each choice are visually similar in style. Images should feel like they belong to the same family, and none of them should stand out over the others (unless drawing attention to a particular option is essential to the design).

---

## Examples

### Default

```jsx
() => {
  const [selected, setSelected] = React.useState('cant-deliver');

  return (
    <EzSuperRadioButtons
      label="Delivery issues"
      options={[
        {
          label: "Can't deliver",
          value: 'cant-deliver',
          imageSrc: withPrefix('/images/delivery.svg'),
        },
        {
          label: 'Not enough notice',
          value: 'not-enough-notice',
          imageSrc: withPrefix('/images/clock.svg'),
        },
        {
          label: "Can't prepare food",
          value: 'cant-prepare-food',
          imageSrc: withPrefix('/images/pot.svg'),
        },
      ]}
      value={selected}
      onChange={setSelected}
    />
  );
};
```

### Disabled choice

Used when a choice isn't available at the moment. Because the choices this pattern will highlight are important, it's best to avoid disabling items unless absolutely necessary.

```jsx
() => {
  const [selected, setSelected] = React.useState('cant-deliver');

  return (
    <EzSuperRadioButtons
      label="Delivery issues"
      options={[
        {
          label: "Can't deliver",
          value: 'cant-deliver',
          imageSrc: withPrefix('/images/delivery.svg'),
        },
        {
          label: 'Not enough notice',
          value: 'not-enough-notice',
          imageSrc: withPrefix('/images/clock.svg'),
          disabled: true,
        },
        {
          label: "Can't prepare food",
          value: 'cant-prepare-food',
          imageSrc: withPrefix('/images/pot.svg'),
        },
      ]}
      value={selected}
      onChange={setSelected}
    />
  );
};
```
