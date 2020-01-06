# Recipe Analytics: babel-plugin-recipe

The Recipe Analytics babel plugin is a tool for statically analyzing a code base to determine its usage of Recipe components. You can run it on any codebase that imports Recipe.

### Installation

If you're running Recipe < v8.0.0, you'll need to install `@ezcater/babel-plugin-recipe` from npm:

```term
npm install @ezcater/babel-plugin-recipe
```

If you are on a recent version of Recipe, the plugin is already available at `@ezcater/recipe/packages/plugin`.

### Configure

The Recipe Analytics babel plugin can be configured to be run as part of your production build, allowing statistics from static analysis to be submitted with every release.

with babel:

> Add the plugin to your babel configuration, using the `env` option to ensure the plugin is only run when compiling your code for production.
>
> NOTE: The correct plugin name to use in this step will either be "@ezcater/babel-plugin-recipe" or "@ezcater/recipe/packages/plugin" depending on your [installation](#installation)):
>
> ```
> {
>   "env": {
>     "production": {
>       "plugins": ["@ezcater/recipe/packages/plugin"]
>     }
>   }
> }
> ```

with create-react-app:

> Coming soon...

### Usage

Coming soon...
