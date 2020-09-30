---
path: '/guides/getting-started'
title: 'Getting Started'
order: 10
---

- [Why Recipe](#why-recipe)
- [Components overview](#components-overview)
- [When to consider building something new](#when-to-consider-building-something-new)
- [Design setup](#design-setup)
- [Development setup](#development-setup)
  - [Importing components in downstream projects](#importing-components-in-downstream-projects)
  - [Including Recipe's default font](#including-recipes-default-font)
  - [Using Recipe theme with emotion](#using-recipe-theme-with-emotion)
- [Browser support](#browser-support)
- [Contributing](#contributing)

---

## Why Recipe?

- Recipe is ezCater's homegrown design system. It provides shared React components accompanied by documentation and design resources.
- A design system makes it easier to create a consistent and high-quality experience for our users. People trust interfaces that are easy to use and understand and have a polished and refined visual design. An interface with confusing or inconsistent elements or one that looks generic or unfinished reduces trust and credibility.
- A design system helps teams go faster by promoting reuse and minimizing the need for custom styling.
- A design system helps with brand recognition. People should be able to immediately recognize that an interface belongs to the ezCater brand or to a specific product in ezCater's product suite.
- If you want to learn more about the rationale for building a design system, here's a link to the [original proposal deck](https://docs.google.com/presentation/d/1F2g0puThyfdYNwKYHGFNFiBNN3Lh7RHWxSfECG9MrUg/edit?usp=sharing).

> "Now that I’ve worked with Recipe, I don’t want to go back to working without Recipe." -Jesse Belanger

---

## Components overview

- A good place to start is by reading the overview of how to do [high level screen layout](/components/ez-app-layout) with Recipe
- Most Recipe components are opinionated about how to layout their child content. However in some cases you may need to use [Layout](/components/ez-layout) to control the horizontal layout of individual components across multiple breakpoints.
- If you want to see what's available in Recipe, you can [browse all componets](/components/).
- We have a [Styles](/styles) page that documents available values for color, spacing, and typography. However, you shouldn't need to refer to these unless you are authoring new components. When Recipe components can be configured with multiple appearances, we typically design them to take semantic property names that reflect the usage. For example, the `use` property on [Alert](/components/ez-alert) takes values like `info` and `error`, which happen to render as blue and red respectively.
- Recipe components use consistent patterns for properties; you'll find various components use similarly named properties like `title` or `value` when the usage is equivalent across the components. Certain properties will also have a consistent shape wherever they are found. For example, the `breadcrumb` and `tabs` properties on [Page Header](/components/ez-page-header) and the `home` and `links` properties on [Navigation](/components/ez-navigation) accept a common "link" shaped object that accepts a url as an `href` or a [Router compatible Link](https://reacttraining.com/react-router/web/api/Link).
- [Principles for using recipe](/guides/principles#principles-for-using-recipe)

---

## When to consider building something new

Squads should challenge themselves to use the design system as much as possible. Designers should seek feedback on consistency and emerging patterns as a core aspect of design reviews. Engineers and PMs should ask questions if they see a proposed design that is not using Recipe.

However, Recipe is still a young design system and has plenty of room to evolve. We welcome ideas for new components and extensions of existing ones. We want to evolve the system in a thoughtful way so that we can main consistency.

Here are some things to consider when proposing a change to Recipe:

- Is this pattern general enough to apply to applications other than the one you are currently working on?
- Have you identified three or more situations where your proposed component could be used? These don't have to be all new cases, they could include situations where Recipe already has a solution but you think your proposed one is better for the user.
- Have you thought about the "distance" between this pattern and related patterns that are already in Recipe?
  - Can you provide clear guidance to designers and developers about when to choose this variation vs. the ones that are already available?
  - Will it be predictable to the user when they will see this variation vs. the ones that are already available?

---

## Design setup

The matching Sketch symbol library for Recipe is available through a tool called [Abstract](https://www.abstract.com/). Contact [the Recipe design team](/meet-the-team#recipe-design-team) if you have any questions about accessing it.

---

## Development setup

```term
npm install @ezcater/recipe
```

After installing recipe in your new application you may need to install some additional peer dependencies. When installing recipe, you may see warnings in your terminal prompting you to install these dependencies. There is a `peerDependencies` section in Recipe's `package.json` file which lists the dependencies that need to be installed by the parent application.

Aside from React and React DOM, Recipe requires the following `peerDependencies` to be provided by your project:

```term
npm install @emotion/core @emotion/styled
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
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet" />
```

### Using Recipe theme with emotion

Recipe components are pre-styled out-of-the-box with our standard theme, however, if you wish to create your own components that build upon Recipe's standard theme, you can do so by setting up [theming](https://emotion.sh/docs/theming).

```term
npm install -S emotion-theming
```

Add ThemeProvider component to the top level of your app and access the theme with `props.theme` in a styled component. For more information on theming, see the [emotion-theming docs](https://emotion.sh/docs/emotion-theming).

### Updating to new releases

To install or update to the [latest version of Recipe](/changelog) in your application, you can run the following npm command:

```term
npm install @ezcater/recipe@latest
```

---

## Browser support

We strive for Recipe to have feature parity across all modern browsers as well as IE11.

For applications that wish to run Recipe in IE11, Recipe requires polyfills for the following browser features:

- [`Element.prototype.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [`CSS custom properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

We recommend using [Polyfill.io](https://polyfill.io/) in your application to apply necessary polyfills only when they are needed for the requesting browser. For IE11 support for CSS custom properties, we recommend also using the [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill).

---

## Contributing

If you're interested in contributing, check out our [contributing guidelines](/guides/contributing) to get started.
