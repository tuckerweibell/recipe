import {storiesOf} from '@storybook/react';
import {MarkdownSource} from 'sosia-markdown';
import scope from './scope';

const getComponentName = (filename: string) => {
  const matches = filename.match(/([a-zA-Z]+)\.md?$/);
  if (!matches) throw new Error(`Expected file name ending in .md or .test.md, got ${filename}`);

  return matches[1];
};

const markdownSource = new MarkdownSource();
const allStories: Record<string, any> = {};

const storiesFromMarkdown = require.context(
  '../components',
  true,
  // match files like `EzComponent.md` but not `EzComponent.test.md` or `EzComponent.preview.md`
  /([a-zA-Z]+)(?<!\.[a-zA-Z]+)\.md?$/
);

storiesFromMarkdown.keys().forEach(filename => {
  const componentName = getComponentName(filename);

  const story = storiesFromMarkdown(filename);
  const examples = markdownSource.execute({markdown: story.default, scope});

  allStories[componentName] = {
    screenshotWidths: [1024],
    examples,
    story,
  };
});

Object.keys(allStories)
  .sort((a, b) => a.localeCompare(b))
  .forEach(componentName => {
    const stories = storiesOf(componentName, module);
    const docs = allStories[componentName];

    docs.examples.forEach(example => stories.add(example.name, () => example.component()), {
      chromatic: {viewports: docs.screenshotWidths},
    });
  });
