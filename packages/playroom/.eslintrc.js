module.exports = {
  overrides: [
    {
      files: ['playroom.config.js'],
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
