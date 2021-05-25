---
'@ezcater/recipe': patch
---

docs: switch doc-site examples to use playroom

- Added playroom links to examples in docs.
- Added a toggle to examples for toggling between example code and preview.
- Removed `:with-playroom` instructions, since it's now part of `npm run start` command.
- Moved doc-site svgs to sprites for carousel and timeline examples to reduce the size of the example code.
- Refactored carousel example to map over data to reduce the size of the example code.
- Converted svg examples using `xlink:href` to `xlinkHref`.
- Removed docz playground.
- Removed unused dependencies from doc-site.
- Moved `playroom start` command to `npm start`.
