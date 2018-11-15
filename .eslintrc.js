module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    create: true,
    shallow: true,
    mount: true,
    render: true,
    renderToHtml: true,
    axe: true,
    spyOn: true,
  },
  extends: ['ezcater-react'],
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'componentDidMount',
          'componentDidUpdate',
          'getSnapshotBeforeUpdate',
          'shouldComponentUpdate',
          'componentWillUnmount',
        ],
      },
    ],
  },
};
