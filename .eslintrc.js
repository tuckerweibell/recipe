module.exports = {
  extends: [require.resolve('@ezcater/ez-scripts/eslint')],
  rules: {
    'no-nested-ternary': 'off',
    'prefer-destructuring': 'off',
    'import/no-namespace': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {devDependencies: true, optionalDependencies: true, peerDependencies: true},
    ],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'react/no-multi-comp': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/no-unresolved': ['error', {ignore: ['@react-types/provider']}],
    'no-unused-expressions': 'off',
    // getting a handful of false positives on this with optional chaining (possibly as ez-scripts has out-of-date dependencies)
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
  },
  settings: {
    parser: '@typescript-eslint/parser',
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
