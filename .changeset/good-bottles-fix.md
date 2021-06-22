---
'@ezcater/recipe': patch
---

refactor: reuse a single stitches theme for Recipe components

- Recipe previously created a theme per component in order to provide the capability to skin individual components. Stitches internally expects a single theme to be reused across the entire app and relies on this behavior for client-side hydration of styles.
