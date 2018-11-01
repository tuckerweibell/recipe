module.exports = {
  pathPrefix: '/recipe',
  siteMetadata: {
    title: 'Recipe',
    description: "Documentation for Recipe, ezCater's design system library",
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../src`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
  ],
};
