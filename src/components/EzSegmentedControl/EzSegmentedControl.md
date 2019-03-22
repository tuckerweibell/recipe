---
name: EzSegmentedControl
title: Segmented Control
path: '/components/ez-segmented-control'
---

A segmented control is a group of two or more options which function as mutually exclusive buttons. Within the control, all segments are equal width.

---

## Best Practices

Segmented controls should:

- Have a limited number of options
- Try to keep segment content size consistent
- Avoid mixing text and icons inside a Segmented Control

---

## Content guidelines

Follow the [content guidelines](/components/ez-button) outlined in the button component.

## Examples

### Segmented control

Used to present mutually exclusive options as buttons.

```jsx
<EzSegmentedControl
  name="view-map-options"
  label="Map View"
  options={[
    {label: 'Map', value: 'map'},
    {label: 'Transit', value: 'transit'},
    {label: 'Satellite', value: 'satellite'},
  ]}
  active="map"
/>
```

### Label Positioning

Positioning of the label for the segmented control can be varied. Using the option `"hidden"` will visually hide the label while still providing an accessible way for screen reader users to identify the related options.

```jsx
<div>
  <h3>Left</h3>
  <EzSegmentedControl
    name="view-map-options-label-positioning"
    label="Map View"
    labelPosition="left"
    options={[
      {label: 'Map', value: 'map'},
      {label: 'Transit', value: 'transit'},
      {label: 'Satellite', value: 'satellite'},
    ]}
    active="map"
  />
  <br />
  <h3>Hidden</h3>
  <EzSegmentedControl
    name="view-map-options-label-hidden"
    label="Map View"
    labelPosition="hidden"
    options={[
      {label: 'Map', value: 'map'},
      {label: 'Transit', value: 'transit'},
      {label: 'Satellite', value: 'satellite'},
    ]}
    active="map"
  />
</div>
```

### Disabled Option State

Used to indicate to the user that an action is not currently available. Disabled buttons do not respond to user input (and therefore will not trigger onClick behavior).

```jsx
<EzSegmentedControl
  name="view-map-options-with-disabled-option"
  label="Map View"
  options={[
    {label: 'Map', value: 'map'},
    {label: 'Transit', value: 'transit'},
    {label: 'Satellite', value: 'satellite', disabled: true},
  ]}
  active="map"
/>
```

---

## Related components

- For individual buttons, [use the button component](/components/ez-button)
