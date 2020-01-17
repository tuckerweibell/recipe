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

exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: require.resolve('@ezcater/recipe/packages/plugin'),
  });
};

exports.onCreateWebpackConfig = ({actions, plugins, stage, loaders}) => {
  actions.setWebpackConfig({
    module:
      stage === 'develop'
        ? {
            rules: [
              {
                test: /react-hot-loader/,
                use: [loaders.js()],
              },
            ],
          }
        : undefined,
    resolve: {
      alias: {
        react: path.resolve(path.join(__dirname, './node_modules/react')),
        '@emotion/styled': path.resolve(path.join(__dirname, './node_modules/@emotion/styled')),
        '@emotion/core': path.resolve(path.join(__dirname, './node_modules/@emotion/core')),
      },
    },
    plugins: [
      plugins.define({
        SC_DISABLE_SPEEDY: true,
      }),
    ],
  });
};
