---
name: EzThemeProvider
title: Theme Provider
path: '/components/ez-theme-provider'
---

To use Recipe's emotion themes, wrap your Recipe components in the `EzThemeProvider` component and pass in the appropriate theme. This is usually done at the app level, but can be nested if needed.

### Example

```tsx
import {EzThemeProvider, EzButton, themes} from  '@ezcater/recipe';

const App = () => (
  <EzThemeProvider theme={themes.ezMarketplaceTheme}>
    <EzButton use="primary">Click me</EzButton>
  </EzProvider>
);
```

### Extending themes

<EzAlert headline="Warning" tagline="Extending themes can make future upgrade paths more difficult and should only be done when there is a valid use case to do so. If you'd like to suggest a change to a supported theme, please reach out to the Recipe team." use="warning" ></EzAlert>

We recognize there may be instances where extending a theme is necessary. For example, your app may require context-specific styles that are not supported by Recipe. In these cases, you can create a new customized emotion theme by extending a supported theme.

```tsx
import {EzThemeProvider, EzButton, themes} from '@ezcater/recipe';

const customTheme = themes.createTheme(themes.ezTheme, {
  // theme overrides here
});

const App = () => (
  <EzThemeProvider theme={customTheme}>
    <EzButton use="primary">Click me</EzButton>
  </EzProvider>
);
```

### Importing theme properties

Recipe themes act as a source of truth for all supported theme properties, such as color, fonts, spacing, and other theme-related styles. You can import these theme properties for use in other parts of your app.

```tsx
import {themes} from '@ezcater/recipe';
import {styled} from '@emotion/react';

const {ezTheme} = themes;

const MyComponent = styled.div`
  color: ${ezTheme.palette.common.primary100};
`;

// Also available as an emotion theme prop

const MyOtherComponent = styled.div`
  color: ${({theme}) => theme.palette.common.primary100};
`;
```
