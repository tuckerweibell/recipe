module.exports = {
  pathPrefix: '/recipe',
  siteMetadata: {
    title: 'Recipe',
    description: "Documentation for Recipe, ezCater's design system library",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: { sourceMap: false, autoLabel: false },
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
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: ['default', 'NodeList.prototype.forEach'],
      },
    },
  ],
};
