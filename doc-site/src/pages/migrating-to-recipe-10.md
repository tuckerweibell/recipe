---
path: '/advanced/migrating-to-recipe-10'
title: 'Migrating to Recipe 10'
---

To facilitate the usage of emotion 10 alongside Recipe, a new release of Recipe was published. This release is a **major version release** and as such, **will require migration steps** for applications that currently use Recipe version 8.x or below.

- [Breaking changes](#breaking-changes)
- [Migration steps](#migration-steps)
  - [Updating Emotion to v10](#updating-emotion-to-v10)
    - [Install emotion v10 packages](#install-emotion-v10-packages)
    - [Configure emotion codemods](#configure-emotion-codemods)
    - [Running emotion codemods](#running-emotion-codemods)
    - [Upgrading emotion server](#upgrading-emotion-server)
    - [Remove css helper usage of className](#remove-css-helper-usage-of-classname)
    - [Replacing `injectGlobal` with Global component](#replacing--injectglobal--with-global-component)
    - [Replacing innerRef with native ref prop](#replacing-innerref-with-native-ref-prop)
    - [Configure the emotion cache](#configure-the-emotion-cache)
    - [Disabling emotion speedy](#disabling-emotion-speedy)
  - [Upgrade react-router](#upgrade-react-router)
  - [Upgrade Recipe's analytics bookmarklet tool](#upgrade-recipe-s-analytics-bookmarklet-tool)
- [FAQ](#faq)
  - [Why am I'm seeing type errors accessing theme values?](#why-am-i-m-seeing-type-errors-accessing-theme-values-)
  - [Why am I getting the warning: The pseudo class "\${unsafePseudoClass}" is potentially unsafe when doing server-side rendering?](#why-am-i-getting-the-warning--the-pseudo-class-----unsafepseudoclass---is-potentially-unsafe-when-doing-server-side-rendering-)
  - [Why am I getting the warning: Using kebab-case for css properties in objects is not supported?](#why-am-i-getting-the-warning--using-kebab-case-for-css-properties-in-objects-is-not-supported-)

---

## Breaking changes

The breaking changes are detailed in the Recipe [release notes for version 10.0.0](/changelog/#1000---2020-01-23), but can be summarized as follows:

1. Recipe's peer dependency on Emotion has been updated from v9 to v10.
2. EzLink and EzField now support React.ForwardRef instead of `innerRef`. You will need to upgrade React Router to at least v5.1 if your application passes refs to EzLink and uses EzLink's `as` prop.
3. Recipe's analytics bookmarklet tool has been updated to support emotion 10. If you wish to be able to run analytics against emotion 9 based applications, you should retain your current bookmarklet link and install the new analytics tool as a separate bookmark.

## Migration steps

While the emotion team have provided a [summary of the major changes](https://medium.com/emotion-js/announcing-emotion-10-f1a4b17b8ccd) in emotion 10 and a [migration guide](https://emotion.sh/docs/migrating-to-emotion-10) for upgrading emotion, to minimize the effort for teams to upgrade, a more detailed step-by-step is provided below.

The Recipe team recommends committing to git between each migration step, to make the code-review process easier to follow.

### Updating Emotion to v10

In order to install Recipe v10 in downstream applications, applications must also update their installation of Emotion to v10.

Conversely, applications that use Recipe version 8 or lower today that wish to update from Emotion v9 to v10 must also update Recipe to v10.

Applications may require significant changes as part of the Emotion upgrade. Some of these steps can be automated with tooling provided by the emotion team, other steps require some manual intervention.

#### Install emotion v10 packages

```term
npm install @emotion/core @emotion/styled emotion-theming@latest eslint-plugin-emotion jest-emotion
```

If your application is NOT using create-react-app, you may need to update your installation of `babel-plugin-emotion`.

```term
npm install babel-plugin-emotion@latest --save-dev
```

If your application uses server rendering, you should install `create-emotion-server`, which will need to be configured in order to support Recipe. Instructions on how to configure `create-emotion-server` will follow further below.

```term
npm install create-emotion-server
```

#### Configure emotion codemods

The emotion team have provided some basic tooling to update emotion v9 imports to use the newer emotion v10 packages. This tooling is packaged up as a [plugin for eslint](https://emotion.sh/docs/eslint-plugin-emotion) and should have been installed during the previous installation step.

In order to run the eslint-plugin, we first need to configure it.

If your application does not already include an `.eslintrc` file, or an `eslintConfig` entry in your application's `package.json` file, [you'll need to create one](http://rahulgaba.com/front-end/2019/02/17/Use-custom-eslint-config-in-create-react-app-using-three-simple-steps-No-external-dependencies.html).

Now add the `emotion` plugin to the plugins section. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["emotion"]
}
```

You should then configure the specific [codemod rules](https://emotion.sh/docs/eslint-plugin-emotion#emotion-10-codemods) you wish to include by adding to the rules section of the eslint configuration.

The Recipe team recommends starting with just `emotion/import-from-emotion` and `emotion/styled-import`:

```json
{
  "rules": {
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error"
  }
}
```

#### Running emotion codemods

To run the configured codemods, run eslint with the flag `--fix`.

```term
eslint . --ext .jsx,.js,.tsx,.ts --fix
```

NOTE: the flag `--ext .jsx,.js,.tsx,.ts` is to tell eslint to include JSX files and TypeScript files when linting.

You should now see local changes replacing emotion v9 imports to using the newer emotion v10 packages.

Output from running `emotion/import-from-emotion`:

```diff
- import {css} from 'emotion';
+ import {css} from '@emotion/core';
```

Output from running `emotion/styled-import`:

```diff
- import styled from 'react-emotion';
+ import styled from '@emotion/styled';
```

If your application is currently making use of [emotion's babel-macros](https://emotion.sh/docs/babel-macros) (likely if your application uses create-react-app), you may need to take additional steps at this point as the eslint-plugin does not yet support the babel-macro import syntax. Use a global find/replace for the following:

- `'react-emotion/macro'` should be replaced with `'@emotion/styled/macro'`
- `'emotion/macro'` should be replaced with `'@emotion/css/macro'`

#### Upgrading emotion server

If your application does not use server rendering, you can skip this step.

In order to support the full set of CSS selectors with emotion, the Recipe team recommends using the [advanced approach](https://emotion.sh/docs/ssr#advanced-approach) for server rendering documented in the emotion documentation.

First, replace the import of `extractCritical` from `emotion-server`.

```diff
- import {extractCritical} from 'emotion-server';
+ import {CacheProvider} from '@emotion/core';
+ import createEmotionServer from 'create-emotion-server';
+ import createCache from '@emotion/cache';
```

Then wrap the existing application element in a CacheProvider:

```diff
- const root = <App />;
- const markup = renderToString(root);
+ const cache = createCache();
+ const {extractCritical} = createEmotionServer(cache);
+
+ const root = (
+   <CacheProvider value={cache}>
+     <App />;
+   </CacheProvider>
+ );
+
+ const markup = renderToString(root);
```

#### Remove css helper usage of className

This is the most significant change in emotion v10, and typically requires the most intervention; Emotion 10 doesn't let you easily access the underlying class name for any of its generated styles.

For example, in Emotion 9, you might have had two classes from `css` and composed them together with a styled component, manually joined their string values, or passed the classNames to a third-party component:

```tsx
// emotion 9
import {css} from 'emotion';
import styled from 'react-emotion';

const color = css`
  color: red;
`;

const border = css`
  border: solid 1px black;
`;

// composed into a styled component
const Component = styled.div`
  ${color};
  ${border};
`;

// composed using string concatenation
const SomeOtherComponent = ({children}) => (
  <div className={`${color} ${border}`}>
    {children}
  </div>
);

// className provided to some external library
const SomeOtherComponent = ({children}) => (
  <div>
    <NavigationLink activeClassName={color}>
  </div>
);
```

However, in emotion 10, the `css` helper from `@emotion/core` no longer returns a `className` string. Instead, the `css` helper returns a style object that can only be used by either emotion's `styled` helper, emotion's `css` helper or emotion's `Global` component.

The emotion 9 example above could be updated to emotion 10 as follows:

```tsx
// emotion 10
/** @jsx jsx */
import {jsx, css, ClassNames} from '@emotion/core';
import styled from '@emotion/styled';

const color = css`
  color: red;
`;

const border = css`
  border: solid 1px black;
`;

// composed into a styled component (this works as-is)
const Component = styled.div`
  ${color};
  ${border};
`;

// composed using string concatenation no longer works,
// but instead we can compose styles using emotion's CSS prop.
// NOTE: This requires the JSX pragma (above the modules imports)
// and for {jsx} to be imported from '@emotion/core'
// See: https://emotion.sh/docs/composition and https://emotion.sh/docs/css-prop for more information
const SomeOtherComponent = ({children}) => (
  <div css={css`
    ${color};
    ${border};
  `}>
    {children}
  </div>
);

// className provided to some external library no longer works as-is
// but we can use emotion's ClassNames component to turn our style object
// into a className
const SomeOtherComponent = ({children}) => (
  <div>
    <ClassNames>
      {/*
      note that this css variable is shadowing the outer scopes css variable.
      The css helper prop here behaves like the css helper from previous versions of emotion, by returning a className.
      */}
      {({css}) => (
        <NavigationLink activeClassName={css`${color}`}>
      )}
  </div>
);
```

It is recommended that you do a global find for all usages of `` css`​ `` and inspect the usage for the patterns above, replacing any usage that relies on className string values.

#### Replacing `injectGlobal` with Global component

A new `Global` component is included as part of `@emotion/core` which supports making global styles based on state and props and allows global styles to be removed when no longer needed.

In order to remove an applications dependency on the v9 `emotion` package, usages of `injectGlobal` will need to be replaced with usage of the Global component.

First, find instance of `injectGlobal` in your app, and start by removing the import and replacing it with an import of the `Global` component. In addition to `Global`, you may also need the `css` helper from `'@emotion/core'`:

```diff
- import {injectGlobal} from 'emotion';
+ import {Global, css} from '@emotion/core';
```

Now find the usage of `injectGlobal` and in the related component, add the new Global component to the render method:

```diff
- import {injectGlobal} from 'emotion';
- import myGlobalStyles from './normalize';
-
- export default ({children}) => (
-   <EzAppLayout>
-     {children}
-   </EzAppLayout>
- );
-
- injectGlobal`
-   ${myGlobalStyles};
- `;
-
+ import {Global, css} from 'emotion'
+ import myGlobalStyles from './normalize';
+
+ export default ({children}) => (
+   <EzAppLayout>
+     <Global styles={css`
+       ${myGlobalStyles};
+     `}>
+     {children}
+   </EzAppLayout>
+ );
+
```

#### Replacing innerRef with native ref prop

Styled components created by emotion now support native [ref forwarding](https://reactjs.org/docs/forwarding-refs.html), allowing parent components to access a reference to the styled dom element of the child component.

While emotion 10 continues to support the `innerRef` prop, which previously was used to provide this behavior, emotion now triggers a warning that the `innerRef` prop is deprecated.

To avoid these warnings, do a global find/replace for `innerRef` replacing the usage value with `ref`.

Please note: take care when performing this find/replace step to ensure the `innerRef` prop was being passed to a styled component, and not to another component library, such as react-router. It is recommended that you upgrade react-router to at least version 5.1 (which supports ref forwarding), so that you can consistently use `ref` instead of `innerRef` everywhere.

Now we're server rendering using the emotion cache (which on the server is configured to support the full set of CSS selectors, such as nth child).

#### Configure the emotion cache

Emotion 10 needs to be configured to allow usage of the full set of CSS selectors, such as `nth-child`, when running in a browser. In order to do this, we need to tell emotion's styles cache to run in compatibility mode. If you do not implement this step, you [may see console errors](/advanced/migrating-to-recipe-10#why-am-i-getting-the-warning-the-pseudo-class-unsafepseudoclass-is-potentially-unsafe-when-doing-server-side-rendering) when running the application.

In the entry point for your client application (likely `src/index` for apps created with create-react-app, or `src/client` in server rendered apps), import the `CacheProvider` component from `@emotion/core`, then wrap the application with the CacheProvider:

```diff
- hydrate(<App />, document.getElementById('root'));
+ const cache = createCache();
+
+ // enable compatibility mode
+ cache.compat = true;
+
+ hydrate(
+   <CacheProvider value={cache}>
+     <App />
+   </CacheProvider>,
+   document.getElementById('root')
+ );
```

#### Disabling emotion speedy

If your application does not need to support IE11, you can skip this step.

As part of the [Recipe 8.x upgrade process](/advanced/migrating-to-recipe-8), applications that need to support IE11 were instructed to install `css-vars-ponyfill` and disable emotion's speedy feature.

Disabling speedy in emotion 10 is now achieved via a new API on emotion's cache.

In the entry point for your client application (likely `src/index` for apps created with create-react-app, or `src/client` in server rendered apps), provide the option `{speedy: false}` to the `createCache` call:

```diff
- const cache = createCache();
+ const cache = createCache({speedy: false});
```

Optionally, you can conditionally disable speedy only for IE11 only as follows:

```js
const isIE11 = typeof window !== `undefined` && !!window.MSInputMethodContext &
const cache = createCache({speedy: !isIE11});
```

Now remove the usage of the prior API for disabling speedy:

```diff
- import {sheet} from 'emotion';
-
- sheet.speedy(false);
```

### Upgrade react-router

EzLink and EzField now support React.ForwardRef instead of `innerRef`.

If your application uses EzLink with react-router's Link component **AND** uses EzLink's `ref` prop, you will need to upgrade React Router to at least v5.1 for the ref to continue to behave correctly.

Example:

```tsx
<EzLink to="/accounts" as={Link} ref={linkRef}>
  View Accounts
</EzLink>
```

To upgrade react-router, run:

```term
npm install react-router@latest

```

### Upgrade Recipe's analytics bookmarklet tool

If you're not using [Recipe's analytics bookmarklet](https://github.com/ezcater/recipe/tree/master/packages/analytics-bookmarklet), you can skip this step.

If you wish to be able to run analytics against emotion 9 based applications, you should retain your current bookmarklet link and install the new analytics tool as a separate bookmark.

In order to install the analytics bookmark tool as a separate bookmark, follow the [installation instructions](https://github.com/ezcater/recipe/tree/master/packages/analytics-bookmarklet#installation)

## FAQ

### Why am I'm seeing type errors accessing theme values?

The Emotion has been iterating on their support for TypeScript and have been improving their type definitions.

If you start to see type errors when accessing theme values, you may wish to provide explicit type information for your props to provide type support, or explicitly cast the props as the `any` type to avoid type errors.

```diff
- const MyComponent = styled.div`
+ const MyComponent = styled.div<MyProps>`
  color: ${({theme}) => theme.colors.interactive.base}
`;
```

OR

```diff
const MyComponent = styled.div`
- color: ${({theme}) => theme.colors.interactive.base}
+ color: ${({theme}:any) => theme.colors.interactive.base}
`;
```

### Why am I getting the warning: The pseudo class "\${unsafePseudoClass}" is potentially unsafe when doing server-side rendering?

Emotion 10 supports a new zero-config server-side rendering mode, however, this mode also causes a subset of pseudo class selectors to [behave unreliably](https://github.com/emotion-js/emotion/issues/1178).

In an effort to identify CSS selectors that are not supported in the mode, emotion logs a warning message when a subset of those selectors are used. This message can be misleading, since it can occur in environments that are not utilizing server-rendering.

If you see this messsage, please double check that you have set [emotion's cache to compatibility mode](#Configure-the-emotion-cache). Compatibility mode should suppress this warning message.

### Why am I getting the warning: Using kebab-case for css properties in objects is not supported?

Emotion supports both [object-styles](https://emotion.sh/docs/object-styles) and standard css syntax. Object-styles uses `camelCase` syntax where as standard css is `kebab-case`.

As of emotion 10, emotion will warn if it detects `kebab-case` properties when using object-styles:

```diff
const styles = css({
-   'background-color': 'red',
+   backgroundColor: 'red'
});
```
