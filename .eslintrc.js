module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [require.resolve('@ezcater/ez-scripts/eslint'), 'plugin:prettier/recommended'],
  rules: {
    'no-nested-ternary': 'off',
    'import/no-namespace': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'MinifiedBrowserTarget.ts',
          'jest.setup.tsx',
          'playroom/**/*.js',
          'src/stories/**/*.tsx',
          'src/**/*.test.ts',
          'src/**/*.test.tsx',
          'src/components/EzField/Open.tsx',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/no-unresolved': ['error', {ignore: ['@react-types/provider']}],
    'no-unused-expressions': 'off',
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
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
  ],
};
