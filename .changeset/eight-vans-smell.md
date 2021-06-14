---
'@ezcater/recipe': patch
---

test: fixed flakey spec caused by scroll-snapping

- removed scroll snapping from visual regression test runs to avoid an issue where the browser would _sometimes_ trigger a scroll-snap during the initial paint of the carousel, causing the carousel to jump to the last page instead of showing the first page.
