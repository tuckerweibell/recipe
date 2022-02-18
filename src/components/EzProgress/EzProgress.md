---
name: EzProgress
title: Progress
category: Data
path: '/components/ez-progress'
tags: ['progress']
---

The `EzProgress` component charts circular progress towards a percentage goal from 0 to 100.

---

## Best Practices

Provide a `value` for progress. If no `value` is provided, the display value will default to `--%`.
Provide an accessible `label`. If there's a chance your `value` could be undefined, account for that in your label.

## Examples

### Goal progress

When using a `goal` and `subgoal`:

- If the goal is met or exceeded, the progress color will be `green`.
- If the value falls between the `goal` and `subgoal`, the progress color will be `yellow`.
- If the value is below the `subgoal`, the progress color will be `red`, and the display value will be bold.

Provide _either_ `goal` with `subgoal` _or_ `color`. Don't provide `color` _and_ `goal` with `subgoal`.

```jsx
<EzPage>
  <EzCard isQuiet>
    <EzProgress value={91} goal={90} subgoal={49} label="Q1 on-time delivery goal progress - 91%" />
  </EzCard>
  <EzCard isQuiet>
    <EzProgress value={52} goal={90} subgoal={49} label="Q1 on-time delivery goal progress - 52%" />
  </EzCard>
  <EzCard isQuiet>
    <EzProgress value={44} goal={90} subgoal={49} label="Q1 on-time delivery goal progress - 44%" />
  </EzCard>
</EzPage>
```

### Custom progress

When using a `color` from the supported colors list: `red`, `yellow`, `green`, `blue`.

Provide _either_ `goal` with `subgoal` _or_ `color`. Don't provide `color` _and_ `goal` with `subgoal`.

```jsx
<EzPage>
  <EzCard isQuiet>
    <EzProgress value={44} color="blue" label="Q1 on-time delivery goal progress - 44%" />
  </EzCard>
</EzPage>
```

### Empty progress

Provide a `value` for progress. If no `value` is provided, the display value will default to `--%`.
Provide an accessible `label`. If there's a chance your `value` could be undefined, account for that in your label.

```jsx
<EzPage>
  <EzCard isQuiet>
    <EzProgress color="blue" label="Q1 on-time delivery goal progress - empty value" />
  </EzCard>
</EzPage>
```
