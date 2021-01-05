# next-recipe-css

This package enables the usage of @ezcater/recipe (which uses CSS imports) within Next.js applications.

## Installation

```
npm install next-recipe-css
```

or

```
yarn add next-recipe-css
```

## Usage

The next-recipe-css package enables @ezcater/recipe to import css files by leveraging a [custom webpack config](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) in Next.js.

next-recipe-css follows the idiomatic structure of the community contributed [next-plugins](https://github.com/vercel/next-plugins), so can be dropped into your `next.config.js` like so:

```js
// next.config.js
const withRecipe = require('next-recipe-css');

module.exports = withRecipe();
```

or combined with other plugins using `next-compose-plugins`:

```js
const withPlugins = require('next-compose-plugins');

const withRecipe = require('next-recipe-css');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([withRecipe, withTypescript], {
  // ...
});
```

---

This package is part of [@ezcater/recipe](https://github.com/ezcater/recipe). See the repo for more details.
