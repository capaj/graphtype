module.exports = {
  testRegex: '.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src$1'
  },
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/'
}
