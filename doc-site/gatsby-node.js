const path = require('path');

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    resolve: {
      alias: {
        '@ezcater/recipe': path.resolve(__dirname, '../recipe/src'),
      },
    },
  });
};

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
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
    result.data.allMarkdownRemark.edges.forEach(({node}) =>
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/components/Markdown.js'),
        context: {},
      })
    );
  });
};
