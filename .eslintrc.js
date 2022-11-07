module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [require.resolve('@ezcater/ez-scripts/eslint'), 'plugin:prettier/recommended'],
  rules: {
    'no-nested-ternary': 'off',
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/no-unresolved': ['error', {ignore: ['@react-types/provider']}],
    'no-unused-expressions': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/tsup.config.ts']}],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  overrides: [
    {
      files: ['bin/**', '**/.eslintrc.js', '**/.prettierrc.js'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'filenames/match-regex': 'off',
        'import/no-commonjs': 'off',
        'no-console': 'off',
      },
    },
  ],
};
