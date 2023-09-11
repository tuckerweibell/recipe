---
'@ezcater/recipe': patch
---

fix: EzLineChart: Pass through the `idPrefix` prop to the line chart clip component to enable apps that use SSR to generate unique IDs for the clip path and avoid a hydration mismatch.
