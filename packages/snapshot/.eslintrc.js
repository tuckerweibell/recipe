module.exports = {
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'no-console': 'off',
  },
};
