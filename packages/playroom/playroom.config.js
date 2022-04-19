const path = require('path');

module.exports = {
  typeScriptFiles: [
    '../recipe/src/components/**/*.tsx',
    '!**/node_modules',
    '!**/__tests__/*',
    '!**/*.snippets.tsx',
    '!**/src/components/index.tsx',
  ],
  scope: './playroom/useScope.js',
  components: '../recipe/src/components/index.tsx',
  outputPath: '../../docs/public/playroom',
  title: 'ezCater Recipe',
  themes: './playroom/themes.js',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  baseUrl: '/recipe/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: 'esbuild-loader',
          include: [
            __dirname,
            path.join(__dirname, '..', 'recipe'),
            path.join(__dirname, '..', '..', 'docs'),
          ],
          exclude: /node_modules/,
          options: {
            loader: 'tsx',
            target: 'es2016',
          },
        },
        {
          test: /\.(js|jsx)?$/,
          loader: 'esbuild-loader',
          include: [
            __dirname,
            path.join(__dirname, '..', 'recipe'),
            path.join(__dirname, '..', '..', 'docs'),
          ],
          exclude: /node_modules/,
          options: {
            loader: 'jsx',
            target: 'es2016',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
