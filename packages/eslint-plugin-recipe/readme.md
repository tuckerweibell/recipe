# Recipe Analytics: eslint-plugin-recipe

The Recipe Analytics babel plugin is a tool for statically analyzing a code base to determine its usage of Recipe components. You can run it on any codebase that imports Recipe.

### Installation

Install `@ezcater/eslint-plugin-recipe` from npm:

```term
npm install @ezcater/eslint-plugin-recipe
```

### Usage

The plugin can be configured to be run as part of your production build, allowing statistics from static analysis to be submitted with every release.

with eslintrc:

> Add the plugin to your eslint configuration.
>
> ```js
> // eslintrc.js
> module.exports = {
>   plugins: ['@ezcater/eslint-plugin-recipe'],
> };
> ```
>
> Then as part of your production build, run eslint with the rule `@ezcater/recipe/track-imports`.
>
> ```term
> eslint . --rule 'recipe/track-imports: warn'
> ```
