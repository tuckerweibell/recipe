module.exports = {
  typeScriptFiles: [
    '!**/__tests__/*',
    '!**/*.snippets.tsx',
    '!**/node_modules',
    './src/components/**/*.tsx',
  ],
  scope: './playroom/useScope.js',
  components: './src/components/index.ts',
  outputPath: './public/playroom',
  title: 'ezCater Recipe',
  themes: './playroom/themes.js',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.tsx',
  widths: [280, 320, 768, 1024], // 280px is for testing galaxy fold, not an official recipe breakpoint
  port: 9000,
  openBrowser: false,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          loader: 'esbuild-loader',
          include: [__dirname],
          exclude: /node_modules/,
          options: {
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
