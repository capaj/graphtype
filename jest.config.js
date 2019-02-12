module.exports = {
  testRegex: '.*\\.spec\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/fixtures/'],
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
