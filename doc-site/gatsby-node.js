const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
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
    result.data.allMarkdownRemark.edges.forEach(
      ({node}) =>
        node.frontmatter.path &&
        createPage({
          path: node.frontmatter.path,
          component: path.resolve('src/components/Markdown.js'),
          context: {},
        })
    );
  });
};

exports.onCreateWebpackConfig = ({actions, plugins}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.resolve(path.join(__dirname, './node_modules/react')),
      },
    },
    plugins: [
      plugins.define({
        SC_DISABLE_SPEEDY: true,
      }),
    ],
  });
};
