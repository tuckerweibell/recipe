# Installation

```
yarn add @ezcater-recipe
```

# Contributing / Creating Components

This project uses [plop](https://www.npmjs.com/package/plop) to generate new React components. The functionality is exposed as the `create-component` npm script from package.json. This will:

* copy the component template files from `templates/component` to `src/components/YOUR_COMPONENT_NAME`,
* rename all files to match your component's name
* replace all occurrences of `Component` inside the component's files with your component's name.

To create a new component, run `yarn create-component` inside the project. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified. You'll need to add an export for your component to `src/index.js`. For example:

```js
// inside src/index.js
export {default as EzButton} from './components/EzButton';
```
