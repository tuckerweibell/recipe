const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      // we can enable some of these options as and when we implement CSF format for our stories
      options: {
        backgrounds: false,
        docs: false,
        controls: false,
        actions: false,
      },
    },
  ],
  // override storybook's css loader which was creating
  // `.css.json` files for every css import within Recipe 🤷‍♂️
  webpackFinal: async config => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, '../'),
        },
        ...config.module.rules.filter(rule => !(rule.sideEffects && rule.test.test('.css'))),
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
    },
  }),
};
