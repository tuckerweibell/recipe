const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            htmlAst
            id
            fileAbsolutePath
            frontmatter {
              category
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const files = result.data.allMarkdownRemark.edges.map(e => e.node);
    const components = files.filter(f => f.frontmatter.path);

    components.forEach(({frontmatter}) =>
      createPage({
        path: frontmatter.path,
        component: path.resolve('src/components/Markdown.js'),
        context: {},
      })
    );

    createPage({
      path: '/changelog',
      component: path.resolve('src/components/Markdown.js'),
      context: {},
    });
  });
};

exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: require.resolve('@ezcater/babel-plugin-recipe'),
  });
};
