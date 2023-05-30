## What did we change?

## Why are we doing this?

This is part of an effort to switch our doc site from Gatbsy to Storybook Docs.

_Note: This is an internal documentation change that doesn't affect the recipe core library and therefore has no changeset._

## Screenshot(s) / Gif(s):

## Checklist

- [ ] Create new file: `src/components/EzComponent/Documentation/EzComponent.mdx` and populate from Gastby `.md` file.
- [ ] Create new file for default story: `src/components/EzComponent/Documentation/Stories/Default.stories.tsx`
- [ ] Create any remaining stories grouped as needed: `src/components/EzComponent/Documentation/Stories/Example1Stories.stories.tsx`
- [ ] Create snapshot: `src/components/EzComponent/Documentation/EzComponent.snapshot.tsx`
- [ ] Add any regression tests as a story: `src/components/EzComponent/Documentation/Stories/Regression.stories.tsx`
- [ ] Move (or create) `EzComponent.snippets.tsx` into Documentation folder and make sure snippet matches default story
- [ ] Delete old Gatsby files:
  - `src/components/EzComponent/EzComponent.md`
  - `src/components/EzComponent/EzComponent.preview.md`
  - `src/components/EzComponent/__tests__/EzComponent.test.md`
- [ ] Test all the things:
  - [ ] All control props work as expected
  - [ ] All "Show Code" displays correctly
  - [ ] Playroom works for docs and all stories
  - [ ] All action and interaction tests pass for all stories
  - [ ] Regression stories only show up in development mode: `STORYBOOK_INCLUDE_REGRESSION_STORIES=1 yarn storybook`
  - [ ] Component library preview and link works
  - [ ] Related component links work (if already in Storybook Docs)
  - [ ] Add any changesets (only if there are recipe library changes)
  - [ ] Git commits are organized
  - [ ] `yarn lint` passes
  - [ ] `yarn type-check` passes
  - [ ] `yarn test` passes
  - [ ] All chromatic tests pass/approved

  [Templates](https://github.com/ezcater/recipe/discussions/940)