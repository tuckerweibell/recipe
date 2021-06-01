# @ezcater/recipe

## 12.0.3
### Patch Changes

- refactor: Updated EzLayout to use flexbox gap for layout (where available), or [margin/negative](https://twitter.com/devongovett/status/1244679626162450432?lang=en) on older browsers. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- refactor: Added feature detection as part of `EzGlobalStyles` to facilitate css-based fallbacks for browser features. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- deps: Updated @ezcater/snitches to 0.0.11. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: card size should not be inherited by nested cards [[sha]](https://github.com/ezcater/recipe/commit/54571896)
- fix: Quiet cards should respect size prop if provided. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: EzLayout `columns` styles should only apply to `tile` layouts. Closes [#616](https://github.com/ezcater/recipe/issues/616). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: Updated visual regression environment for Chrome to use v91 (upgraded from v79). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: added changesets to automate semver tracking and releases. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: search input overflows bounds of the EzLayout container. Closes [#618](https://github.com/ezcater/recipe/issues/618). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- docs: switch doc-site examples to use playroom
  
  - Added playroom links to examples in docs.
  - Added a toggle to examples for toggling between example code and preview.
  - Removed `:with-playroom` instructions, since it's now part of `npm run start` command.
  - Moved doc-site svgs to sprites for carousel and timeline examples to reduce the size of the example code.
  - Refactored carousel example to map over data to reduce the size of the example code.
  - Converted svg examples using `xlink:href` to `xlinkHref`.
  - Removed docz playground.
  - Removed unused dependencies from doc-site.
  - Moved `playroom start` command to `npm start`. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: Server rendering of checkboxes and labels will no longer render `<style>` tags within label elements. Closes [#628](https://github.com/ezcater/recipe/issues/628). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- fix: apply range media queries to `EzCard[imagePosition]` (instead of max-width queries), to avoid SSR order-of-insertion issues. [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- workflow: Added custom format for changeset generated changelog [[sha]](https://github.com/ezcater/recipe/commit/bb9a382a)
- fix: Issue causing `EzLayout[layout="stack"]` to horizontally collapse instead of filling the width of the parent element. Closes [#619](https://github.com/ezcater/recipe/issues/619). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
- deps: Removes transitive dependency on `sort-css-media-queries` (which isn't built with es5 compatible syntax). [[sha]](https://github.com/ezcater/recipe/commit/7256a139)
