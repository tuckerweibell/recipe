---
'@ezcater/recipe': patch
---

fix: apply range media queries to `EzCard[imagePosition]` (instead of max-width queries), to avoid SSR order-of-insertion issues.
