// eslint-disable-next-line import/no-commonjs
module.exports = {
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  components: './src/components/index.tsx',
  outputPath: './doc-site/public/playroom',
  title: 'ezCater Recipe',
  themes: './src/themes/index.ts',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  exampleCode: `
    <EzPage>
      <EzCard>Hello World!</EzCard>
    </EzPage>
  `,
  baseUrl: '/recipe/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
                require.resolve('@babel/preset-typescript'),
              ],
              plugins: [require.resolve('@babel/plugin-proposal-class-properties')],
            },
          },
        },
        {
          test: /\.js$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
              ],
              plugins: [require.resolve('@babel/plugin-proposal-class-properties')],
            },
          },
        },
        {
          test: /\.tsx?$/,
          include: /components/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules\/(?!(typeface-exo-2)\/).*/,
          use: [require.resolve('style-loader'), require.resolve('css-loader')],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
