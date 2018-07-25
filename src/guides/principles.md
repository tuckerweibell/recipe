---
path: "/guides/principles"
title: "Principles"
category: 'Overview'
---

## Core Philosophy

### Speed Wins

The design system provides scalability and speed. It is our goal to never block squads from shipping product increments; this is reflected in our advice for [contributing](/guides/contributing#choosing-the-right-component).

### Credibility

People trust interfaces that are easy to use and understand and have a polished and refined visual design. We want our users to trust that our product is high-quality, especially if we’re asking them to trust us with their personal information or give us money.

An interface with confusing or inconsistent elements or one that looks generic or unfinished reduces trust and credibility.

### Brand Recognition

People should be able to immediately recognize that an interface belongs to the ezcater brand or a specific product in ezcater's product suite.

## Component Principles

### Freedom through limitation

Existing component libraries (like Semantic or Bootstrap, etc.) provide a huge variety of options for designers and developers to use. By contrast, Recipe restrict the number of options available allow more polished interfaces to be designed and provide designers and developers the freedom to focus on creating a cohesive experience, instead of spending time making a decision about which component to use.

### Containers are responsible for layout

We consider properties such as `margin` and `position` to be aspects of layout. Individual components should not have opinions about layout. Instead layout is applied by containers to their children.
