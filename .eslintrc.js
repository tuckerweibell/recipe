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
  },
};
