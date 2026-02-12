const nextJest = require ('next/jest')

// Create Jest config with Next.js
const createJestConfig = nextJest({
  dir: './',  // Path to Next.js app
})


// Custom Jest configuration
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}
module.exports = createJestConfig(customJestConfig)