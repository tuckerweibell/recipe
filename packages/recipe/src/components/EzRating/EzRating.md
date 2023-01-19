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

- `emptyIcon`: empty icon
- `fullIcon`: fully-filled icon
- `halfIcon`: half-filled icon
- `label`: accessible label
- `max`: naximum rating value
- `value`: the rating value

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
        emptyIcon={emptyStar}
        fullIcon={fullStar}
        halfIcon={halfStar}
        label={`${value} stars`}
        max={5}
        value={value}
      />
    </EzPage>
  );
};
```

### Color

The same values available for the [EzIcon's](https://ezcater.github.io/recipe/components/ez-icon/#icon-color) `color` can be provided as an optional prop.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');
  const {halfStar} = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke');
  const {emptyStar} = require('@fortawesome/free-regular-svg-icons/faStar');
  const value = 3.76;
  return (
    <EzPage>
      <EzLayout layout="stack">
        <EzRating
          color="primary"
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          value={value}
        />
        <EzRating
          color="secondary"
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          value={value}
        />
        <EzRating
          color="common.purple100"
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          value={value}
        />
      </EzLayout>
    </EzPage>
  );
};
```

### Size

If you want to specify a size, use the `size` prop. We currently support `small`, `medium` (default), `large`, and `inherit`.

```jsx
() => {
  const {fullStar} = require('@fortawesome/free-solid-svg-icons/faStar');
  const {halfStar} = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke');
  const {emptyStar} = require('@fortawesome/free-regular-svg-icons/faStar');
  const value = 2.74;
  
  return (
    <EzPage>
      <EzLayout layout="stack">
        <EzRating
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          size="small"
          value={value}
        />

        <EzRating
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          size="medium"
          value={value}
        />

        <EzRating
          emptyIcon={emptyStar}
          fullIcon={fullStar}
          halfIcon={halfStar}
          label={`${value} stars`}
          max={5}
          size="large"
          value={value}
        />

        {/* Note: inline styles are discouraged and used here only for demo purposes */}
        <div style={{fontSize: '14px'}}>
          <EzRating
            emptyIcon={emptyStar}
            fullIcon={fullStar}
            halfIcon={halfStar}
            label={`${value} stars`}
            max={5}
            size="inherit"
            value={value}
          />
        </div>
      </EzLayout>
    </EzPage>
  );
};
```
