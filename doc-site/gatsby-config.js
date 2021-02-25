const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = {
  pathPrefix: '/recipe',
  siteMetadata: {
    title: 'Recipe',
    description: "Documentation for Recipe, ezCater's design system library",
  },
  developMiddleware: app => {
    app.use(
      '/playroom/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {'/playroom/': ''},
      })
    );
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {sourceMap: false, autoLabel: false},
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../src`,
        name: 'components',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../changelog.md`,
        name: 'changelog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'public/static/images',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: ['default', 'NodeList.prototype.forEach'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TJRFGNR',
        includeInDevelopment: false,
        defaultDataLayer: {platform: 'gatsby'},
      },
    },
  ],
};
