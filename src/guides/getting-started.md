---
path: '/guides/getting-started'
title: 'Getting Started'
order: 10
---

## Installation

```term
npm install @ezcater/recipe
```

After installing recipe in your new application you may need to install some additional peer dependencies, check the warnings in your terminal for what those are as well as the `package.json` file. There is a section specifically for `peerDependencies` which need to be installed by the parent application.

Aside from React and React DOM, Recipe requires the following `peerDependencies` to be provided by your project:

```term
npm install emotion@9.x react-emotion@9.x emotion-theming@9.x
```

### Importing components in downstream projects

Import the Recipe package, just as you would any other package dependency:

```js
import {EzButton} from '@ezcater/recipe';

export const MyComponent = () => (
  <div>
    <EzButton use="primary" onClick={() => alert('You clicked me!')}>
      Click Me!
    </EzButton>
  </div>
);
```

### Including Recipe's default font

To ensure Recipe's default font is available in a webpage, copy this code into the <head> of your HTML document.

```html
<link
  href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
  rel="stylesheet"
/>
```

### Using Recipe theme with emotion

Recipe components are pre-styled out-of-the-box with our standard theme, however, if you wish to create your own components that build upon Recipe's standard theme, you can do so by setting up [theming](https://emotion.sh/docs/theming).

```term
npm install -S emotion-theming
```

Add ThemeProvider component to the top level of your app and access the theme with `props.theme` in a styled component. For more information on theming, see the [emotion-theming docs](https://emotion.sh/docs/emotion-theming).

---

## Contributing

If you're interested in contributing, check out our [contributing guidelines](/guides/contributing) to get started.
