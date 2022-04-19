---
name: EzRating
title: Rating
category: Data
path: '/components/ez-rating'
tags: ['rating']
---

The rating component is used to indicate how something has been assessed based on quality, standards, or performance.

---

## Examples

### Basic Rating

For a rating, you must minimally provide:

- Maximum rating value `max`
- The rating value `value`
- Accessible label `label`
- Empty icon `emptyIcon`
- Half-filled icon `halfIcon`
- Fully-filled icon `fullIcon`

The rating component uses `EzIcon`. For more information about how to provide an icon to Recipe from your application, see [EzIcon](https://ezcater.github.io/recipe/components/ez-icon).

For accessibility purposes, Recipe provides the rating component `role="img"` and `aria-label`, based on the `label` provided.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');
  const {halfStar} = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke');
  const {emptyStar} = require('@fortawesome/free-regular-svg-icons/faStar');
  const value = 2.24;
  return (
    <EzPage>
      <EzRating
        max={5}
        value={value}
        label={`${value} stars`}
        emptyIcon={emptyStar}
        halfIcon={halfStar}
        fullIcon={fullStar}
      />
    </EzPage>
  );
};
```

### Color

The same values available for the [EzIcon's](https://ezcater.github.io/recipe/components/ez-icon) `color` can be provided as an optional prop.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');
  const {halfStar} = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke');
  const {emptyStar} = require('@fortawesome/free-regular-svg-icons/faStar');
  const value = 3.76;
  return (
    <EzPage>
      <EzRating
        max={5}
        value={value}
        label={`${value} stars`}
        color="green"
        emptyIcon={emptyStar}
        halfIcon={halfStar}
        fullIcon={fullStar}
      />
    </EzPage>
  );
};
```

### Size

The same values available for the [EzIcon's](https://ezcater.github.io/recipe/components/ez-icon) `size` can be provided as an optional prop.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');
  const {halfStar} = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke');
  const {emptyStar} = require('@fortawesome/free-regular-svg-icons/faStar');
  const value = 2.74;
  return (
    <EzPage>
      <EzRating
        max={5}
        value={value}
        label={`${value} stars`}
        size="xlarge"
        emptyIcon={emptyStar}
        halfIcon={halfStar}
        fullIcon={fullStar}
      />
    </EzPage>
  );
};
```
