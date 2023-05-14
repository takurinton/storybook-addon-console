module.exports = {
  clearMocks: true,
  rootDir: '../',
  roots: ['<rootDir>/.jest-dist'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: false,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
};
