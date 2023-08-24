<br>

<p align="center">
  <a href="https://recipe.ezcater.com/">
    <img src="https://user-images.githubusercontent.com/109814/82938935-8e390600-9f60-11ea-8526-c5c8471d642e.png" alt="Recipe logo" />
  </a>
</p>

<p align="center">
  Delicious UI components, from <a href="https://www.ezcater.com/">ezcater</a>.
  <br>
  <a href="https://recipe.ezcater.com/"><strong>Explore website »</strong></a>
</p>

<br>

<p align="center">
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM version" src="https://img.shields.io/npm/v/@ezcater/recipe.svg" /></a>
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM version" src="https://img.shields.io/bundlephobia/minzip/@ezcater/recipe" /></a>
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM downloads" src="https://img.shields.io/npm/dm/@ezcater/recipe.svg"></a>
</p>

# Installation

Recipe is available as an [npm package](https://www.npmjs.com/package/@ezcater/recipe) and is used with [emotion](https://www.npmjs.com/package/@emotion/react).

```
yarn add @ezcater/recipe @emotion/react @emotion/styled
```

## Importing components in downstream projects

Import the Recipe package, just as you would any other package dependency:

```js
import {EzButton} from '@ezcater/recipe';

export const MyComponent = () => (
  <div>
    <EzButton onClick={() => alert('You clicked me!')}>Click Me!</EzButton>
  </div>
);
```

## Contributing / Creating Components

This project uses [plop](https://www.npmjs.com/package/plop) to generate new React components. The functionality is exposed as the `create-component` npm script from `package.json`. This will:

- copy the component template files from `templates/component` to `src/components/YOUR_COMPONENT_NAME`,
- rename all files to match your component's name
- replace all occurrences of `Component` inside the component's files with your component's name.

To create a new component, run `yarn create-component` inside `packages/recipe`. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified. You'll need to add an export for your component to `src/index.tsx`. For example:

```tsx
// inside src/index.tsx
export {default as EzButton} from './components/EzButton';
```

## Developing

The [recipe contributions docs](https://recipe.ezcater.com/?path=/docs/guides-contributing--docs) have a more thorough breakdown of the contribution guidelines.

To begin developing locally, use the following commands:

- Run `yarn install` in the root dir
- Run `yarn develop` in the root dir
  - This will also open up the recipe-playroom: `http://localhost:9000`
  - This will also allow you to view the recipe-doc-site in the browser at `http://localhost:6006/`
    - Changes made to the component markdown as well as the components used in the markdown should be visible here.

Recipe uses [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) internally to manage packages. The above commands can be executed individually using the `yarn workspaces` command, passing in the name of the package and the command to execute.

To run the `develop` script in only recipe's source, you can use:

```term
yarn workspace @ezcater/recipe develop
```

## Publishing

After contributing updates to recipe, you'll need to publish the recipe package for changes to take effect in downstream projects.

Recipe uses the [Changesets Release github action](https://github.com/changesets/action) to automate the process of creating a pull request for an up-versioned Recipe release. This process uses the [semantic versioning metadata](#following-semantic-versioning) captured as part of our development process. When an automated versioning PR is merged, a new Recipe release will be published to npm on your behalf.

## License

Recipe is licensed under the MIT license.
