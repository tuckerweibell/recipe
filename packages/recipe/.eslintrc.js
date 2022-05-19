module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/MinifiedBrowserTarget.ts',
          '**/jest.setup.tsx',
          '**/stories/**/*.tsx',
          '**/src/**/*.test.ts',
          '**/src/**/*.test.tsx',
          '**/src/components/EzField/Open.tsx',
          '**/src/components/theme.config.ts',
          '**/test-utils.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['jest.config.js', 'jest.fileTransformer.js', 'jest.setup.tsx', 'plopfile.js'],
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
  ],
};
