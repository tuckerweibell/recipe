---
path: '/guides/principles'
title: 'Principles'
order: 20
---

## Principles for using Recipe

### Freedom through limitation

Existing component libraries (like Semantic or Bootstrap, etc.) provide a huge variety of options for designers and developers to use. By contrast, Recipe restricts the number of options available to allow more polished interfaces to be designed and provide designers and developers the freedom to focus on solving user problems, instead of spending time making a decision about which component to use.

### Containers are responsible for layout

We consider properties such as `margin` and `position` to be aspects of layout. Individual components should not have opinions about layout outside of their own border. Instead layout is contextually applied by containers to their children.

### Progressive enhancement

Design layouts with a mobile first approach. Use responsive design to enhance layouts to make better use of the space available on larger devices.

---

## Principles for contributing to Recipe

### Consistency over flexibility

- We're used to favoring flexibility. If a component is flexible, there will be more ways others can use it in the future, right? But flexibility works in opposition to consistency. Flexibility is an opportunity for downstream applications to do something unexpected, putting a cognitive burden on the end user.
- Flexibility is a one way door. If you ship an overly flexible component, it's hard to roll back once adopted by downstream applications.
- We prefer to start with a simple opinionated component and extend it later when a proven need arises.
- Be opinionated. Is that button always going to say "Close"? In that case don't take a prop for it, let the Recipe component own the text.
- Is your component going to come in multiple colors? Don't accept arbitrary values, instead limit it to an opinionated set using semantic property values. For example, a `use` property that accepts values like `info`, `warning`, `error` is preferrable to a `color` property that accepts hex color codes.

### Documentation first

- We always start by writing the documentation page for the living style guide. Having detailed usage guidelines and a complete API promotes clear systems thinking and is a huge timesaver for preventing churn in the PR.
- APIs are hard to take back. Getting to a good API is the most important function of the governance process.
- Try to reuse property names across components where appropriate and structure similar properties similarly. For instance, we have a number of components that accept links in a consistent way that supports both URLs and React router.
- Good names facilitate communication. Ideally engineers, designers, and end users would all use the same name for your component. When naming a new component it's worth thinking about: common names for that widget in the industry, how different team members refer to it, anything you know about how users refer to it.
- Pave the cowpaths. You will have an uphill battle if you pick a name that is different than one teams are already using.

### Keep evolving

- Recipe is a living system. The existing components and even the governing principles can change over time.
- Think about advocating for change at a system level. Don't think just about making one Table better, think about how you can make all Tables better.
- We embrace change, but...

### Be patient

- If you're unsure about whether a pattern will be needed, it's better to wait and monitor whether there is a more widespread need for it.
- Think about one way doors vs. two way doors. Once downstream applications start using the API, it can be hard to change. However, internal implemenation decisions within Recipe are usually easier to take back and evolve without disrupting client applications. Here are some examples to consider:
  - Adding a new, optional prop can be done with affecting existing client applications.
  - A prop that accepts multiple values makes it easy to extend with additional values in the future. However, you should weigh the likelihood of needing to extend. In some cases a simple boolean flag prop makes for a cleaner API. Take a look at the API for [Button](/components/ez-button) for an example of how a mix of flags and extensible props was carefully chosen.
  - Some animations, like rollover states, are easy to add later. However, if you are trying to animate a state change, such as closing a modal, it may require coordinate with the parent application to prevent the component being unmounted before the animation runs. If you think such animations will be important for your component, it was worth considering the API implications during the original design phase.
- It's a system
  - Decisions you make about one component can have impacts on the overall cohesion of the system. For example, using color in a new way for your component might make sense in isolation, but you also need to consider whether this creates confusion around the function of existing controls that may use color differently. It may be that your new approach is better overall, in which case you should advocate for evolving the whole family of impacted components.
  - Systems thinking is hard. If you're passionate about a new concept, keep thinking about how to make it more broadly applicable and integrated into Recipe.
- Don't worry about localization (yet)
  - Preparing for localization is explicitly not a 2019 focus for ezCater.
  - It is totally fine and in fact desirable to have English strings within your components. We do encourage however, that these translated strings are isolated from component rendering logic. Recipe internally uses a `useTranslation` hook to assist with the process of interpolating dynamic values into static messages.
  - Eventually we will develop a strategy for initializing Recipe with a locale so that any strings owned by Recipe can be appropriately localized.
  - Remember that localization is a presentational problem too, so it is definitely within the concern scope for a design system. Think about languages with longer average word length, or even with a different reading order (right to left languages).
