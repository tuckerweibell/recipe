---
path: '/styles/style'
title: 'Styles'
---

Explore how we approach the visual elements of our user interface with purpose.

- [Colors](#colors)
- [Spacing](#spacing)
- [Typography](#typography)

---

## Colors

Recipe uses colors to communicate how things function in the user interface. With consistent usage of color, we help make our products more predictable and easier to understand for our users. Colors should be used to help draw attention to important content, supporting the hierarchy of the page.

<ColorVariables></ColorVariables>

---

## Spacing

You should only need to use these variables directly if you are creating new components. When you are using existing components Recipe will dictate the spacing for you. Spacing is implemented using rems, but we expose the pixel values here for convenience.

<SpacingVariables></SpacingVariables>

---

## Typography

### Recommended Combinations

You should only need to worry about typography if you are creating new components.

We strongly recommend sticking to the combinations outlined in this section. However, if you need a new combination of size and weight we expose those variables directly.

<FontCombinations></FontCombinations>

### Font Sizes

Full list of font size variables. Example usage:

`theme.fontSizes[400]`

<FontSizes></FontSizes>

### Font Weights

Full list of font weight variables. Example usage:

`theme.fontWeights.bold`

<FontWeights></FontWeights>
