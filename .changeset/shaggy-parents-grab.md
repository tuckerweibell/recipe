---
'@ezcater/recipe': patch
---

fix: ensure EzProvider wraps children with snitches provider

- Allows apps that use EzProvider to reduce the amount of inline CSS during SSR.
