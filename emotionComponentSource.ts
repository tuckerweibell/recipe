/* eslint-disable import/no-extraneous-dependencies */
import {injectGlobal, caches, flush} from 'emotion';
import {MarkdownSource} from 'sosia-markdown';

const markdownSource = new MarkdownSource();

const collectGlobalStyles = () => {
  const {inserted, registered, key: cssKey} = caches;

  let globalStyles = '';

  Object.keys(inserted).forEach(id => {
    const style = inserted[id];
    const key = `${cssKey}-${id}`;
    if (registered[key] === undefined) globalStyles += style;
  });

  return globalStyles;
};

// when turning markdown into visual regression test examples
// we need to ensure emotion does not leak styles between tests
export default {
  execute: options => {
    const examples = markdownSource.execute(options);
    return examples.map(({name, component}) => ({
      name,
      component: () => {
        const res = component();

        // while we want to reset emotion's injected styles, we need to
        // retain the globally inserted styles
        const globalStyles = collectGlobalStyles();

        // remove styles inserted into the document between test runs
        flush();

        // restore globally inserted styles
        injectGlobal(globalStyles);

        return res;
      },
    }));
  },
};
