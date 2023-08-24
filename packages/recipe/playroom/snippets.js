const req = require.context('../src/components', true, /\.snippets\.tsx?$/);

const snippets = req
  .keys()
  .map(filename => {
    const matches = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/);
    if (!matches) return [];

    const rawSnippets = req(filename).snippets;

    const snippetsForPlayroom = rawSnippets.map(snippet => {
      return {
        ...snippet,
        group: snippet.group || matches[1],
        code: snippet.code,
      };
    });

    return snippetsForPlayroom;
  })
  .flat();

export default snippets;
