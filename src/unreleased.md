---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

#### New components

- New internal-only EzListBox component to encapsulate behavior for selecting from a list of options.

#### Enhancements

#### Design updates

#### Bug fixes

- Fix: EzField[type=select] options no longer need to be pre-sorted into groups in order for keyboard-based navigation of list items to be ordered correctly.
- Fix: EzField[type=select|time] focuses (and scrolls where needed) to the currently selected value when the opened. Closes [issue #401](https://github.com/ezcater/recipe/issues/401).
- Fix: Opening EzField[type=select] with arrow key up/down no longer causes the currently focused item to change.
- Fix: Missing focus outline on EzField[type=select|time] in Safari.
- Fix: Avoid prematurely closing EzField[type=select|time|date] popup when nested within a programmatically focusable container.

#### Documentation

#### Dependency upgrades

#### Development workflow
