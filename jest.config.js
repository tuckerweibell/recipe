module.exports = {
  rootDir: '.',
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverageFrom: [
    'src/@(components|util|styles)/**/*.{ts,tsx}',
    '!src/@(components|util|styles)/**/index.{ts,tsx}',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    '^.+\\.svg$': '<rootDir>/jest.fileTransformer.js',
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$",
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.tsx',
  globals: {
    'ts-jest': {
      babelConfig: "<rootDir>/.babelrc"
    }
  }
};
