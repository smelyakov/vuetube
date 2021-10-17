module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/App.vue',
    '!src/main.js',
    '!src/router.js',
    '!src/api/**/*.*',
    '!src/utils/**/*.*'
  ],
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '.*\\.(js|ts)$': 'ts-jest'
  },
  transformIgnorePatterns: [`/node_modules/*`],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ]
}
