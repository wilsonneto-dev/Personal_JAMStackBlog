module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/ui/**/**.ts(x)?',
    'src/ui/pages/**/**.ts(x)?',
    'src/hooks/**/**.ts(x)?',

    '!src/pages/index.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/**/stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
};
