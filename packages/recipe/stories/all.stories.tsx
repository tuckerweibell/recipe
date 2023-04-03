import {storiesOf} from '@storybook/react';
import {MarkdownSource} from 'sosia-markdown';
import {ezTheme} from '../src/themes';
import scope from './scope';

const getComponentName = (filename: string) => {
  const matches = filename.match(/([a-z_]+)(\.test)?\.md$/i);
  if (!matches) throw new Error(`Expected file name ending in .md or .test.md, got ${filename}`);

  return matches[1];
};

const markdownSource = new MarkdownSource();
const allStories: Record<string, any> = {};

const storiesFromMarkdown = require.context(
  '../src/components',
  true,
  // match files like `EzComponent.md` and `EzComponent.test.md` but not `EzComponent.preview.md`
  /\/([a-z_]+)(\.test)?\.md$/i
);

// list filenames here that should not have stories
const filenameIgnore = [
  './EzPortal/EzPortal.md',
  './EzProvider/EzProvider.md',
  './EzThemeProvider/EzThemeProvider.md',
];

// list story names here that should be ignored
const storiesIgnore = ['Global styles', 'Props'];

// @see https://www.chromatic.com/docs/threshold
const getThreshold = storyName => {
  switch (storyName) {
    case 'EzDateInput overlay (Regression)':
      return 0.92;
    default:
      return 0.2;
  }
};

const getTheme = storyName => {
  switch (storyName) {
    // these stories don't render correctly with side-by-side themes (ex. modals)
    case 'EzField date input within modal (Regression)':
    case 'EzModal vertically spaces content (Regression)':
    case 'Informational modal (Regression)':
    case 'Confirmation modals (Regression)':
    case 'Required action modals (Regression)':
    case 'Modal with header content and footer (Regression)':
    case 'Modal with only content (Regression)':
    case 'Modal with only content and header (Regression)':
    case 'Modal with only content and footer (Regression)':
    case 'Modal with preview (Regression)':
    case 'Modal appears above sticky content with z-index (Regression)':
    case 'Date picker selection appears above the modal (Regression)':
    case 'Time picker selection appears above the modal (Regression)':
    case 'Tooltip appears above the modal (Regression)':
    case 'Select appears above the modal (Regression)':
    case 'Autosuggest appears above the modal (Regression)':
      return 'fulfillment';
    default:
      return null;
  }
};

storiesFromMarkdown.keys().forEach(filename => {
  if (filenameIgnore.includes(filename)) return;
  const componentName = getComponentName(filename);
  const isRegressionTest = /\.test\.md$/i.test(filename);
  const story = storiesFromMarkdown(filename);

  let examples = markdownSource.execute({markdown: story.default, scope});
  if (isRegressionTest)
    examples = examples.map(example => ({...example, name: `${example.name} (Regression)`}));

  if (!allStories[componentName])
    allStories[componentName] = {
      screenshotWidths: [ezTheme.breakpoints.values.xs || 320].concat(
        Object.values(ezTheme.breakpoints.values).slice(1)
      ),
      examples: [],
    };

  allStories[componentName].examples.push(...examples);
});

Object.keys(allStories)
  .sort((a, b) => a.localeCompare(b))
  .forEach(componentName => {
    const stories = storiesOf(componentName, module);
    const docs = allStories[componentName];

    docs.examples.forEach(
      example =>
        example.name &&
        !storiesIgnore.includes(example.name) &&
        stories.add(example.name, () => example.component(), {
          parameters: {
            chromatic: {
              diffThreshold: getThreshold(example.name),
              viewports: docs.screenshotWidths,
            },
            theme: getTheme(example.name),
          },
        })
    );
  });
