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
