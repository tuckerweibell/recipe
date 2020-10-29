---
name: EzProvider
title: Provider
path: '/components/ez-provider'
---

Provider is the container for customizing Recipe applications. It defines the application theme that is applied to descendant content.

---

## Example

```tsx
import {EzProvider, EzButton} from '@ezcater/recipe';
import {marketplaceTheme} from '@recipe/theme-marketplace';

function App() {
  return (
    <EzProvider theme={marketplaceTheme}>
      <EzButton use="primary">Click me</EzButton>
    </EzProvider>
  );
}
```

## Application Provider

A Provider should be the root component of your application. All other Recipe components rely on the Provider to define the theme necessary to render with the appropriate styles for your application.

### Themes

In order to provide the styling attributes that components need to render, you must pass a theme as a prop to the root provider in your application. Themes are specified by passing a `Theme` object to the `Provider` component. This object includes several [css modules](https://github.com/css-modules/css-modules) which define the values for the variables controlling the color scheme and platform scale. Each CSS module defines a CSS class which includes the variables it defines, and `Provider` applies these classes to ensure that the contained content is styled according to the provided theme.
