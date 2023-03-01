const path = require('path')

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  globals: {
    __IS_DEV__: true,
  },

  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],

  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '.',
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png)$': path.resolve(__dirname, 'config', 'jest', 'jestEmptyImage.ts'),
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],

}
