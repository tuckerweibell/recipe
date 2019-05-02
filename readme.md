# Installation

```
npm install @ezcater/recipe --save
```

# importing components in downstream projects

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

# Contributing / Creating Components

This project uses [plop](https://www.npmjs.com/package/plop) to generate new React components. The functionality is exposed as the `create-component` npm script from package.json. This will:

- copy the component template files from `templates/component` to `src/components/YOUR_COMPONENT_NAME`,
- rename all files to match your component's name
- replace all occurrences of `Component` inside the component's files with your component's name.

To create a new component, run `npm run create-component` inside the project. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified. You'll need to add an export for your component to `src/index.tsx`. For example:

```tsx
// inside src/index.tsx
export {default as EzButton} from './components/EzButton';
```

## Developing

Use the `npm start` command when making edits to `recipe` to accomplish the following:

- Run `npm run build:watch`; this will recompile any changes made to `recipe` components
- Automatically link the local recipe directory to the documentation site
- Run `gatsby develop`; this will start up the documentation website and recompile when there are changes to either the `recipe` or documentation codebase

## Publishing

After contributing updates to recipe, you'll need to publish the recipe package for changes to take effect in downstream projects (like ezmanage). To publish, you need to:

- make sure your source is up-to-date and have run `npm install` from `packages/recipe`
- bump the package version number in `packages/recipe/package.json` (and lock file) by running `npm version patch`
- run `npm run build` to locally build with the latest version that you wish to publish.
- run `npm publish` to publish the new version of recipe to npm
- run `npm install @ezcater/recipe --save` from the downstream project (e.g. to install the latest version of recipe in ezmanage)
- run `npm run deploy` from `/doc-site` to ensure the documentation site reflects your changes
- create a PR for the downsteam project
