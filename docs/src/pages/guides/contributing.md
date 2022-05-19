---
path: '/guides/contributing'
title: 'Contributing'
order: 50
---

Welcome and thank you for contributing! The Recipe team is committed to maintaining consistent, quality components and guidelines. We welcome all feedback, designs, or ideas to produce the best possible experience for our users. Below are the contribution guidelines for contributing.

- [Bug fixes](#bug-fixes)
  - [Filing bugs](#filing-bugs)
  - [Fixing bugs](#fixing-bugs)
  - [Following semantic versioning](#following-semantic-versioning)
- [Proposing new components](#proposing-new-components-to-the-design-system)
- [Development](#development)
  - [Files and Folders](#files-and-folders)
  - [Creating Components](#creating-components)
  - [Documentation and live examples](#documentation-and-live-examples)
- [Start Contributing](#start-contributing)
  - [Setup](#setup)
  - [Working on a component using the doc site](#working-on-a-component-using-the-doc-site)
  - [Working on a component in a downstream application](##working-on-a-component-in-a-downstream-application)
  - [Testing](#testing)
  - [Publishing a new release](#publishing-a-new-release)

---

## Bug fixes

Never be shy about reporting a bug or challenge with Recipe. The system can only get better if we understand how its being used in the real world by downstream applications.

The process for fixing bugs is simpler than for evolving the system, and we really encourage squads to help fix bugs instead of working around them or waiting for the Recipe team to fix. Workarounds are brittle and only help your team in the short term. Contributing a fix makes Recipe better for everyone.

### Filing bugs

Please start by [filing a GitHub issue against the Recipe project](https://github.com/ezcater/recipe/issues). After filing we hope that you'll consider contributing a fix.

### Fixing bugs

1. **Clearly identify the situation(s) where you are encountering an issue.**
1. **Review your issue and proposed solution (if you have one) with [the Recipe team](/meet-the-team).**
1. **Implement your fix.**
   - Provide test coverage for the changes made; this will help catch future regressions. Recipe's default template for testing includes a visual snapshot for each example from the component's API documentation, automatically providing regression test coverage ensuring that your component _looks as it should_ when initially rendered. Beyond this, you should provide additional tests to demonstrate the component _behaves as it should_ upon user interaction.
   - Update `src/unreleased.md` with a summary of the changes made, following our [versioning guidance](/guides/versioning-and-changelog#versioning-scheme) to categorize changes into appropriate headings.
1. **Code review.**
   - A code review from the Recipe team is not required for code to land in Recipe; any engineer with Senior+ frontend skills can review your code.
   - If the Recipe team did not review the PR, they may propose follow-up changes at a later time.
1. **Publish the new changes.**
   - In order for changes to take effect in downstream applications, the changes must be published to npm with a new version number. A canary branch will be published on your behalf when your PR is merged into the main Recipe branch. Additionally, a "Release" PR will be created containing your changes (and updated automatically upon subsequent changes to the main branch), allowing Recipe maintainers to aggregate changes into a SemVer release at a later time.
   - Downstream applications should be updated to use the new version.

### Following semantic versioning

Recipe follows a [changesets](https://github.com/atlassian/changesets) workflow allowing contributors to declare how their changes should be released alongside their code commits, such that updating package versions, changelogs and publishing can all be automated.

When a contributor is preparing a branch to submit as a pull request, we need to capture the "semver bump type" (i.e. Major, Minor, Patch) with a summary of the changes made. In order to capture this information, the contributor should run:

```term
yarn changeset
```

and answer the provided questions. The changeset command will be write a Markdown file that contains the summary and metadata to store data about the package(s) that will be released and the semver bump types for them. This file should then be committed to git. Committing the changeset file within the same commit the summarized change was applied is ideal, as it will associate the changeset with the commit sha of the actual change. We recommend following following our [versioning guidance](/guides/versioning-and-changelog) for the format of the changeset message in order to help communicate what impact the changeset contents have on the next version.

When [a release is cut](#publishing-a-new-release), we use this changeset metadata to version bump Recipe to an appropriate number, combining multiple changesets into a single coordinated release.

---

## Proposing new components to the design system

1. **Design the component.**
   - Create mockups: Put together mockups for the new component, creating the highest-fidelity version you can. Don't forget to look at other components in the system with a similar function to audit existing usage. This will allow you to identify emergent patterns and leverage existing patterns, content guidelines and styles. Example: If you’re introducing a new component that has a selected state, see how other selected states are implemented elsewhere in Recipe to make sure a user can understand when your component has a selected state.
   - Enumerate the variations: Show all the possible variations that would be necessary for this component. If there are variations that you think you could need someday, or aren’t sure if you’re going to need now, it’s worth designing with those in mind to future-proof the component. Pare back the design to just include the most necessary variations for the first version. Discuss with your squad whether these future variations would be easy to add later without breaking the initial API.
1. **Write usage documentation.** Document the design decisions you’ve made and explain how this new component should be used. Some good questions to answer are:
   - When should this component be used?
   - When shouldn’t it be used? For those cases, is there an alternative component you’d recommend (and why do you recommend it)?
   - When should each variation of the component be used?
   - What are guidelines for the content that could go into this component?
   - Are there limitations/restrictions on what it can handle?
   - Is anything not going into this first version? What did you exclude and what was the reasoning behind that?
1. **Review the design with [the Recipe design team](/meet-the-team#recipe-design-team).**
   - Reviews are an important step for helping maintain the [principles](/guides/principles) behind Recipe.
1. **Write API documentation.**
   - Use the usage documentation from the prior step to help define the component API
   - Provide API examples for each of the variations of the component, pairing each of the examples with the corresponding usage documentation describing the use cases for which the variation should be used
1. **Review the API with [the Recipe development team](/meet-the-team#recipe-development-team).**
   - We have found that any time spent coming to consensus on the component API is a huge time saver for avoiding PR churn.
1. **Implement the component.**
   - [Create the component](#creating-components)
   - Consider how your component will be [accessible to all users](https://www.essentialaccessibility.com/blog/web-content-accessibility-guidelines). Recipe's default component template includes basic tests for common accessibility issues to help get you started.
   - Provide test coverage for the component. Recipe's default template for testing includes a visual snapshot for each example from the component's API documentation, automatically providing regression test coverage ensuring that your component _looks as it should_ when initially rendered. Beyond this, you should provide additional tests to demonstrate the component _behaves as it should_ upon user interaction.
   - Create a changeset [following semantic versioning](#following-semantic-versioning) to categorize your changes into appropriate headings for our changelog.
1. **Code review**
   - A code review from the Recipe team is required.
1. **Publish the new changes**
   - In order for changes to take effect in downstream applications, the changes must be published to npm with a new version number. A canary branch will be published on your behalf when your PR is merged into the main Recipe branch. Additionally, a "Release" PR will be created containing your changes (and updated automatically upon subsequent changes to the main branch), allowing Recipe maintainers to aggregate changes into a SemVer release at a later time.
   - Downstream applications should be updated to use the new version.

---

## Development

### Files and Folders

All components belong in `src/components` within their own folder.

Component names should be in the singular form and should be prefixed with `Ez`.

Example:

```text
📦 recipe
 ┗ 📂 src
   ┗ 📂 components
     ┗ 📂 EzExample
       ┣ 📂 __tests__
       ┃ ┗ 📜 EzExample.test.tsx
       ┣ 📂 Implementations
       ┃ ┣ 📜 EzExampleImplementation.tsx
       ┃ ┗ 📜 index.ts
       ┣ 📜 EzExample.tsx
       ┣ 📜 EzExample.md
       ┣ 📜 EzExample.preview.md
       ┣ 📜 EzExample.types.ts
       ┗ 📜 index.ts
```

Index files should NOT contain any logic and should only be used to provide exports of named components.

In order to create a consistent directory structure, Recipe provides [tooling](#creating-components) to help you get started creating components.

### Creating components

Recipe uses [plop](https://www.npmjs.com/package/plop) to quickly generate boiler plate code for a new React component that follows our [folder structure and naming scheme](#files-and-folders).

To generate a new component, run `yarn create-component` inside `packages/recipe` or use the workspace command via `yarn workspace @ezcater/recipe create-component`. You'll see a CLI that guides you through the process. Alternatively, you can simply run `yarn create-component EzExample`, where EzExample is the name of your new component.

If your component needs a preview image for the doc site, you will also need to run `yarn create-preview ../recipe/src/components/EzExample/EzExample.preview.md` from `packages/snapshot`. A test visual snapshot will also be created the first time you run your newly generated test.

New component requirements:

- Must be [proposed](#proposing-new-components-to-the-design-system) to the Recipe team for consideration and guidance.
- Must have comprehensive documentation describing all supported variations.
- Must have comprehensive tests demonstrating what a component looks like in each supported variation and interaction.
- Must follow Recipe's code and [theming](/guides/theming) conventions.
- Designs and code must be reviewed and approved by the Recipe team.

### Documentation and live examples

Recipe's documentation is generated from its source code. To supplement this autogenerated documentation, you'll need to create and modify a markdown file associated with your component. By default, the markdown file is created for you when you [create your component](#creating-components) and provides the structure you need to document your component and provided live examples.

Inside the markdown file, any [fenced code block](https://help.github.com/articles/creating-and-highlighting-code-blocks/#fenced-code-blocks) decorated with the `jsx` language identifier will be enhanced with a live editor on the doc site. You should use fenced code blocks to provide examples of your components in various supported states in order to document the component's features.

Example:

````markdown
### Secondary Button

Secondary buttons are used for action on a page that are important, but aren't the primary action.

```jsx
<EzButton use="secondary">Edit</EzButton>
```
````

---

## Start contributing

### Setup

Clone the repository and install dependencies:

```term
yarn install
```

### Working on a component using the doc site in recipe

The doc site provides live examples to demonstrate the various states of your components, and explain how each state is used.

We strongly encourage using documentation to drive your component design. Having detailed usage guidelines and a complete API promotes clear systems thinking and is a huge timesaver for preventing churn in the PR.

The doc site is a great environment to start developing your component as the environment has hot reloading and components can be added on the fly through various doc files. Any file in the `src/components` folder with an `.md` extension and corresponding [front matter](https://jekyllrb.com/docs/front-matter/) (including `name`, `title` and `path`) will run in the doc site automatically. Any JSX examples will turned into a live playground for your component.

You can run the doc site as follows:

```term
yarn develop
```

This command will start a server and open your browser to http://localhost:8000/ to see the doc site. The server will watch your local file system and will hot reload the doc site as you make changes.

### Working on a component in a downstream application

If you want to test your local component code from within your application, you'll need to setup a link.

First setup the link from the recipe package you wish to use (such as `packages/recipe`):

```term
yarn link
```

Then setup the link in the root of your application:

```term
cd my-application-directory
yarn link @ezcater/recipe
```

You may need to rebuild recipe to see your changes.

```term
yarn develop # or `yarn workspace @ezcater/recipe develop` to just run the recipe build script
```

NOTE: When using `yarn link`, a common issue is having multiple instances of React, which results in the error `hooks can only be called inside the body of a function component`. This isn't a Recipe specific issue, but rather specific to React hooks and yarn link. See the following link for [help with this issue](https://github.com/facebook/react/issues/13991#issuecomment-435587809).

Alternatively, you can open a draft PR with your changes, then add the `deploy` label to your PR on github. A github action will build a canary release of your branch and add a comment to the PR with the version info. Update your application to use this version and you can test your changes. If you push more changes to your recipe branch and need a new canary build, just remove and add the `deploy` label to get a new release.

### Testing

Testing in recipe is extremely important to ensure the quality of our downstream products. We therefore expect components to have 100% code coverage.

To run tests, run:

```term
yarn test   
```

This command will run the full test suite and output code-coverage statistics using istanbul. To view a breakdown of the coverage (statements, branches, functions and lines covered), you can view the coverage report (found in `/recipe/coverage/lcov-report/index.html`) in your browser.

To continuously watch and run tests, run:

```term
yarn test:watch
```

### Publishing a new release

After contributing updates to recipe, you'll need to publish the recipe package for changes to take effect in downstream projects.

Recipe uses the [Changesets Release github action](https://github.com/changesets/action) to automate the process of creating a pull request for an up-versioned Recipe release. This process uses the [semantic versioning metadata](#following-semantic-versioning) captured as part of our development process. When an automated versioning PR is merged, a new Recipe release will be published to npm on your behalf.
