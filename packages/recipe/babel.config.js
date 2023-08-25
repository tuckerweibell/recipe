// const isStorybookCommand = () =>
//   process.env.npm_lifecycle_event === 'storybook' ||
//   process.env.npm_lifecycle_event === 'build-storybook';

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-transform-runtime',
      'babel-plugin-dev-expression',
      // TODO: uncoment when stitches has been removed from recipe
      // !isStorybookCommand() && [
      //   '@emotion',
      //   {
      //     importMap: {
      //       '@mui/system': {
      //         styled: {
      //           canonicalImport: ['@emotion/styled', 'default'],
      //           styledBaseImport: ['@mui/system', 'styled'],
      //         },
      //       },
      //       '@mui/material/styles': {
      //         styled: {
      //           canonicalImport: ['@emotion/styled', 'default'],
      //           styledBaseImport: ['@mui/material/styles', 'styled'],
      //         },
      //       },
      //     },
      //   },
      // ],
    ].filter(Boolean),
    env: {
      esm: {
        presets: [
          ['@babel/preset-env', {modules: false}],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
    ignore: ['**/__tests__', '*.snippets.ts*'],
    comments: false,
  };
};
