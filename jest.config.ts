import nextJest from 'next/jest.js';
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@/services/(.*)$': '<rootDir>/app/services/$1',
    '^@/context/(.*)$': '<rootDir>/app/context/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
