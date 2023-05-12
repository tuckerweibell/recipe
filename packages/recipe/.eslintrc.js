module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/jest.setup.tsx',
          '**/playroom.config.js',
          '**/playroom/**.js',
          '**/playroom/**.tsx',
          '**/src/**/*.stories.tsx',
          '**/src/**/*.test.ts',
          '**/src/**/*.test.tsx',
          '**/src/components/EzField/Open.tsx',
          '**/src/components/theme.config.ts',
          '**/stories/**/*.mdx',
          '**/stories/**/*.tsx',
          '**/test-utils.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        'babel.config.js',
        'jest.config.js',
        'jest.fileTransformer.js',
        'jest.setup.tsx',
        'playroom.config.js',
        'plopfile.js',
      ],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-commonjs': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['src/**/__tests__/*.ts', 'src/**/__tests__/*.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.regression.tsx', '**/*.snapshot.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
    {
      files: ['test-utils.d.ts'],
      rules: {
        'filenames/match-regex': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
