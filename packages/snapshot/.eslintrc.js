module.exports = {
  extends: '../../.eslintrc.js',
  env: {
    node: true,
  },
  rules: {
    'import/no-commonjs': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'filenames/match-regex': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-await': 'off',
    curly: 'off',
  },
};
