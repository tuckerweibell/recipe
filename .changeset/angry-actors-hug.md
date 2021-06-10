---
'@ezcater/recipe': minor
---

feat: Add slots API support for EzModal

- refactors EzModal to use EzCard internally; Modals are effectively floating cards.
- relaxed type definition for EzModal around required props so EzModal content can be composed via `children`.
