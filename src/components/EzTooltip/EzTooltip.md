---
name: EzTooltip
title: Tooltip
path: '/components/ez-tooltip'
---

A tooltip is a floating label for displaying helpful contextual messages. When the user's mouse or focus rests on an element, a non-interactive popup is displayed near it.

---

## Best Practices

Tooltips should:

- Provide succinct contextual information about the element they point to.
- Be used with components to provide additional information that would otherwise not be available. For example, providing icon-only buttons with a contextual description.

Tooltips should not:

- Contain important information, or information vital to task completion. Use a [`EzFlashMessage`](/components/ez-flash-message) for important contextual information.
- Be used sparingly, and should contain minimal content.
- For interactive content, use [`EzModal`](/components/ez-modal) instead.

---

### Examples

#### Basic tooltip

Allows a single component to become a trigger for a tooltip to provide additional information for the user.

When adding a tooltip to a user interface element other than [another Recipe component](#tooltip-wrapping-another-recipe-component), the target element must accept [`refs`](https://reactjs.org/docs/forwarding-refs.html), as well as both [mouse events](https://reactjs.org/docs/events.html#mouse-events) and [focus events](https://reactjs.org/docs/events.html#focus-events). This allows Recipe to position the tooltip relative to the target element, and react to the user's mouse or focus resting on the target element.

When adding a tooltip to a custom react component, you may need to implement [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) inside your component. This will allow you to target a specific html element (or Recipe component) to act as the trigger for your tooltip.

```jsx
<EzTooltip message="Single-line informational tooltip">
  <input />
</EzTooltip>
```

#### Tooltip wrapping another Recipe component

Allows a single Recipe component to become a trigger for a tooltip to provide additional information for the user.

```jsx
<EzFormLayout>
  <EzTooltip message="The users first name">
    <EzField type="input" label="First name" />
  </EzTooltip>
  <EzTooltip message="The users last name">
    <EzField type="input" label="Last name" />
  </EzTooltip>
</EzFormLayout>
```

## Positioning

A tooltip can be positioned either vertically or horizontally around an element by setting `position` to either `vertical` or `horizontal.` Usually, this will mean the tooltip will appear below or to the right of an element, but if there is not enough room, the tooltip will appear on the opposite side. The default position is `vertical`.

### Examples

#### Positioned Vertically

```jsx
<EzTooltip message="Vertically aligned tooltip" position="vertical">
  <input />
</EzTooltip>
```

#### Positioned Horizontally

```jsx
<EzTooltip message="Horizontally aligned tooltip" position="horizontal">
  <input />
</EzTooltip>
```
