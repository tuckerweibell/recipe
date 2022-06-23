/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'src/@(components|util|styles)/**/*.{ts,tsx}',
    '!src/@(components|util|styles)/**/index.{ts,tsx}',
    '!src/@(components|util|styles)/**/*types.{ts,tsx}',
    '!src/@(components|util|styles)/**/en.{ts,tsx}',
    '!**/node_modules/**',
    '!src/components/**/*snippets.{ts,tsx}',
    '!src/components/**/*theme.config.{ts,tsx}',
  ],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest.fileTransformer.js',
    '^.+\\.md?$': 'jest-raw-loader',
  },
  transformIgnorePatterns: ['node_modules/(?!(@react-hook)/)'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(spec|test).(js|ts)?(x)'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
};
