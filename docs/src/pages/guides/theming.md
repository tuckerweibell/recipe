---
path: '/guides/theming'
title: 'Theming'
order: 25
---

As of [Recipe v14](/support/migrating-to-recipe-14/), emotion themes are now supported, making Recipe more flexible and adaptable, allowing downstream apps to use themes to utilize Recipe components more effectively.

Recipe themes are extended from the [MUI default theme](https://mui.com/customization/default-theme/) and represent a single source of truth for supported theme properties. If there is a specific use case for doing so, these themes can be further extended.

<EzAlert headline="Warning" tagline="Extending themes can make future upgrade paths more difficult and should only be done when there is a valid use case to do so. If you'd like to suggest a change to a supported theme, please reach out to the Recipe team." use="warning" ></EzAlert>

---

### Supported Themes

Recipe defines and makes accessible the following supported themes:

- `ezTheme`
- `ezMarketplaceTheme` - extends `ezTheme`
- `ezFulfillmentTheme` - extends `ezTheme`

To learn more about how to use and extend these themes, read our Getting Started section on [Recipe Themes](/guides/getting-started/#recipe-themes).

---

## Colors

Recipe supports the following set of design tokens for colors:

### Neutral

```jsx-hide-controls
  <ColorTokens category="neutral" />
```

### Primary

```jsx-hide-controls
  <ColorTokens category="primary" />
```

### Alternative

```jsx-hide-controls
  <ColorTokens category="alternative" />
```

### Success

```jsx-hide-controls
  <ColorTokens category="success" />
```

### Alert

```jsx-hide-controls
  <ColorTokens category="alert" />
```

### Warning

```jsx-hide-controls
  <ColorTokens category="warning" />
```

---

## Typography

Recipe supports the following set of design tokens for typography:

### Fonts

`ezTheme` uses the Lato font, which also extends to `ezMarketplaceTheme`.

```jsx-hide-controls
  <pre>fontFamily: 'Lato', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif';</pre>
```

`ezFulfillmentTheme` uses the Montserrat font.

```jsx-hide-controls
  <pre>fontFamily: 'Montserrat', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif';</pre>
```

### Icons

`ezTheme` icons support the following sizes:

```jsx-hide-controls
  <>
    <pre>small: 16px</pre>
    <pre>medium: 24px</pre>
    <pre>large: 32px</pre>
  </>
```

## Layering

Recipe uses z-indices sparingly, as this can cause maintenance issues with [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) within Recipe and in downstream applications. In some cases, we carefully use z-index values to properly layer components like modals. Recipe mirrors the [MUI z-index values](https://mui.com/material-ui/customization/z-index/) to avoid conflicts with components that were implemented with MUI. While you can override the z-indices, it is discouraged because it will likely have cascading effects.

Our currently specified z-indices:

```jsx-hide-controls
  <>
    <pre>EzModal: 1300</pre>
    <pre>EzAutosuggest: 1350</pre>
    <pre>EzDateInput: 1350</pre>
    <pre>EzPopover: 1350</pre>
    <pre>EzSelect: 1350</pre>
    <pre>EzTimeInput: 1350</pre>
    <pre>EzTooltip: 1500</pre>
  </>
```
